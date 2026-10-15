import { conocimientos } from "@/lib/data";

export default function Conocimientos() {
  return (
    <section
      id="conocimientos"
      className="scroll-mt-24 border-y border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          02 — Conocimientos técnicos
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Tecnologías con las que trabajo
        </h2>
        <p className="mt-3 max-w-prose text-slate-600">
          Lenguajes y herramientas que uso para construir mis proyectos.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {conocimientos.map((tecnologia) => (
            <li
              key={tecnologia}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-indigo-200 hover:text-slate-900"
            >
              <span
                className="h-2 w-2 rounded-full bg-indigo-500"
                aria-hidden="true"
              />
              {tecnologia}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
