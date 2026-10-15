import { navegacion, perfil } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <a href="#sobre-mi" className="group">
          <span className="block text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            {perfil.nombreCorto}
          </span>
          <span className="block text-xs text-slate-500 transition-colors group-hover:text-indigo-600">
            {perfil.rol}
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="flex w-full items-center gap-0.5 overflow-x-auto sm:w-auto sm:gap-1"
        >
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-2 py-1.5 text-xs text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
