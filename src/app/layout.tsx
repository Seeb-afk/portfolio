import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastián Padrón — Programador Web Full-Stack",
  description:
    "Portafolio de Sebastián Israel Padrón Chávez, programador web full-stack. Proyectos de desarrollo web con HTML, CSS, JavaScript y Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        {/*
          Tailwind CSS por CDN (decisión del ejercicio). `beforeInteractive`
          inyecta el script en el <head> del HTML inicial para que cargue lo
          antes posible y minimizar el parpadeo (FOUC).
        */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
