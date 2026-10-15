/**
 * URL pública del sitio y textos SEO compartidos.
 *
 * Prioridad:
 * 1. NEXT_PUBLIC_SITE_URL  → para dominio propio (configurar en Vercel).
 * 2. VERCEL_PROJECT_PRODUCTION_URL → la define Vercel automáticamente.
 * 3. localhost → desarrollo local.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const sitio = {
  nombre: "Portafolio de Sebastián Padrón",
  titulo: "Sebastián Padrón — Programador Web Full-Stack",
  descripcion:
    "Portafolio de Sebastián Israel Padrón Chávez, programador web full-stack. Proyectos de desarrollo web con HTML, CSS, JavaScript y Node.js.",
};
