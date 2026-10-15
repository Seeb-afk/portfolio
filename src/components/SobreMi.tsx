import Image from "next/image";
import { perfil } from "@/lib/data";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 md:grid-cols-[minmax(0,340px)_1fr] md:gap-14">
        <div className="mx-auto w-full max-w-sm">
          <Image
            src={perfil.foto}
            alt={`Foto de ${perfil.nombre}`}
            width={900}
            height={672}
            priority
            sizes="(min-width: 768px) 340px, 100vw"
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-sm"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            01 — Sobre mí
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {perfil.nombre}
          </h1>
          <p className="mt-2 font-medium text-indigo-600">{perfil.rol}</p>
          <p className="mt-5 max-w-prose leading-relaxed text-slate-600">
            {perfil.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
