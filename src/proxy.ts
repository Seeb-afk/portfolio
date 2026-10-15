import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Límite de peticiones por IP: 60 por minuto (ventana deslizante).
 *
 * Nota: el contador vive en memoria del servidor, por lo que aplica por
 * instancia. En Vercel funciona como disuasor de bots y abuso simple; la
 * plataforma ya aporta protección DDoS a nivel de red.
 */
const LIMITE = 60;
const VENTANA_MS = 60_000;
const MAX_ENTRADAS = 10_000;

const peticiones = new Map<string, number[]>();

function ipDe(request: NextRequest): string {
  const reenviada = request.headers.get("x-forwarded-for");
  return (
    reenviada?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "desconocida"
  );
}

function limpiarVencidas(ahora: number) {
  for (const [ip, tiempos] of peticiones) {
    const vigentes = tiempos.filter((t) => ahora - t < VENTANA_MS);
    if (vigentes.length === 0) peticiones.delete(ip);
    else peticiones.set(ip, vigentes);
  }
}

export function proxy(request: NextRequest) {
  const ahora = Date.now();
  const ip = ipDe(request);
  const recientes = (peticiones.get(ip) ?? []).filter(
    (t) => ahora - t < VENTANA_MS,
  );

  if (recientes.length >= LIMITE) {
    return new NextResponse(
      "Demasiadas peticiones. Vuelve a intentarlo en un minuto.",
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(VENTANA_MS / 1000)),
          "Cache-Control": "no-store",
        },
      },
    );
  }

  recientes.push(ahora);
  peticiones.set(ip, recientes);

  // Evita que la memoria crezca sin control si llegan muchas IPs distintas.
  if (peticiones.size > MAX_ENTRADAS) limpiarVencidas(ahora);

  return NextResponse.next();
}

export const config = {
  /**
   * Solo se cuentan las páginas: quedan fuera los archivos estáticos
   * (imágenes, iconos, css, robots.txt, sitemap.xml, etc.).
   */
  matcher: [
    "/((?!_next|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|txt|xml|json|css|js|map)$).*)",
  ],
};
