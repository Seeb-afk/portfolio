import Image from "next/image";
import { proyectos } from "@/lib/data";

function IconoEnlaceExterno() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          03 — Proyectos
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Proyectos del curso
        </h2>
        <p className="mt-3 max-w-prose text-slate-600">
          Una selección de los proyectos que he construido. Cada tarjeta enlaza
          a su versión publicada en GitHub Pages y a su repositorio.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto) => (
            <article
              key={proyecto.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden border-b border-slate-100 bg-slate-100">
                <Image
                  src={proyecto.imagen}
                  alt={`Captura del proyecto ${proyecto.nombre}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {!proyecto.demo && (
                  <span className="absolute left-3 top-3 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
                    Solo código
                  </span>
                )}
              </div>

              <div className="flex grow flex-col gap-3 p-5">
                <h3 className="font-semibold tracking-tight text-slate-900">
                  {proyecto.nombre}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {proyecto.descripcion}
                </p>

                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label="Tecnologías usadas"
                >
                  {proyecto.tecnologias.map((tecnologia) => (
                    <li
                      key={tecnologia}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-500"
                    >
                      {tecnologia}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-4 pt-2">
                  {proyecto.demo && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                    >
                      Ver demo
                      <IconoEnlaceExterno />
                    </a>
                  )}
                  <a
                    href={proyecto.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    Código
                    <IconoEnlaceExterno />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Los enlaces de demostración abren cada proyecto publicado en GitHub
          Pages.
        </p>
      </div>
    </section>
  );
}
