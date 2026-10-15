import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { perfil } from "@/lib/data";
import { sitio, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: sitio.titulo,
  description: sitio.descripcion,
  applicationName: sitio.nombre,
  keywords: [
    "Sebastián Padrón",
    "programador web",
    "full-stack",
    "portafolio",
    "desarrollo web",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
  ],
  authors: [{ name: perfil.nombre, url: perfil.github }],
  creator: perfil.nombre,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: sitio.nombre,
    title: sitio.titulo,
    description: sitio.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: sitio.titulo,
    description: sitio.descripcion,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const datosEstructurados = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: perfil.nombre,
    alternateName: perfil.nombreCorto,
    jobTitle: perfil.rol,
    description: sitio.descripcion,
    url: siteUrl,
    image: `${siteUrl}/self-image.png`,
    email: `mailto:${perfil.correo}`,
    sameAs: [perfil.github, perfil.linkedin],
    knowsAbout: ["HTML", "CSS", "JavaScript", "Node.js", "Git", "GitHub"],
  };

  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(datosEstructurados),
          }}
        />
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
