import { perfil } from "@/lib/data";

const enlaces = [
  {
    etiqueta: "Correo electrónico",
    valor: perfil.correo,
    href: `mailto:${perfil.correo}`,
    externo: false,
  },
  {
    etiqueta: "GitHub",
    valor: `@${perfil.githubUsuario}`,
    href: perfil.github,
    externo: true,
  },
  {
    etiqueta: "LinkedIn",
    valor: "Sebastián Padrón",
    href: perfil.linkedin,
    externo: true,
  },
];

export default function Contacto() {
  return (
    <footer
      id="contacto"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          04 — Contacto
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mt-3 max-w-prose text-slate-600">
          Estos son mis medios de contacto. Estoy abierto a oportunidades,
          colaboraciones y nuevos proyectos.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {enlaces.map((enlace) => (
            <li key={enlace.etiqueta}>
              <a
                href={enlace.href}
                {...(enlace.externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-full flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-colors hover:border-indigo-300 hover:bg-white"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {enlace.etiqueta}
                </span>
                <span className="break-all font-medium text-slate-900">
                  {enlace.valor}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {perfil.nombreCorto}. Todos los derechos reservados.</p>
          <p>Construido con Next.js y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
