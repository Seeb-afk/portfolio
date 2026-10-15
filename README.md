# Portafolio — Sebastián Padrón

Portafolio personal de **Sebastián Israel Padrón Chávez**, programador web
full-stack. Ejercicio práctico del curso: Next.js + IA + GitHub Pages + pnpm.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **React 19**
- **Tailwind CSS vía CDN** (`@tailwindcss/browser@4`)
- Fuente **Inter** optimizada con `next/font`
- Gestor de paquetes: **pnpm** (este proyecto no usa npm ni npx)

> **Nota sobre Tailwind por CDN:** el ejercicio pidió cargarlo por CDN. Eso
> implica que el CSS se genera en el navegador (no en el build), por lo que
> puede verse un parpadeo breve al cargar la página. Tailwind recomienda la
> integración con PostCSS para producción; aquí se mantiene el CDN por
> indicación del ejercicio. Hay CSS crítico en `src/app/globals.css` para
> amortiguar ese parpadeo.

## Requisitos

- Node.js 20+
- pnpm 10+

## Comandos

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo (http://localhost:3000)
pnpm build     # build de producción
pnpm start     # servir el build de producción
pnpm lint      # linter
```

## Estructura

```
src/
  app/
    layout.tsx      # layout raíz: fuente, metadata, script de Tailwind CDN
    page.tsx        # ensambla las secciones
    globals.css     # CSS crítico (sin directivas de Tailwind)
    icon.svg        # favicon
  components/
    Header.tsx      # header fijo con navegación por anclas
    SobreMi.tsx     # 01 — intro + foto
    Conocimientos.tsx # 02 — tecnologías
    Proyectos.tsx   # 03 — tarjetas de proyectos
    Contacto.tsx    # 04 — contacto (footer)
  lib/
    data.ts         # todos los datos editables del portafolio
public/
  self-image.png    # foto personal
  proyectos/*.png   # capturas de los proyectos
```

Para actualizar textos, proyectos, enlaces o tecnologías, edita únicamente
`src/lib/data.ts`.

## Secciones (orden obligatorio del ejercicio)

1. **Header** — nombre, profesión y navegación
2. **Sobre mí** — presentación personal
3. **Conocimientos técnicos** — HTML, CSS, JavaScript, Node.js, Git, GitHub
4. **Proyectos** — 6 proyectos con captura, descripción y enlaces
   (demo en GitHub Pages + repositorio)
5. **Contacto** — correo, GitHub y LinkedIn

## Deploy en Vercel

1. Crea un repositorio en GitHub y súbelo:

   ```bash
   git add .
   git commit -m "Portafolio listo"
   git remote add origin <url-de-tu-repo>
   git push -u origin main
   ```

   > `.env` está en `.gitignore`: tu clave nunca se sube al repositorio.

2. Importa el repositorio en [vercel.com](https://vercel.com). Vercel detecta
   Next.js y pnpm automáticamente.
