export type Proyecto = {
  slug: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  /** URL del proyecto publicado en GitHub Pages (no todos tienen demo). */
  demo?: string;
  repo: string;
  imagen: string;
};

export const perfil = {
  nombre: "Sebastián Israel Padrón Chávez",
  nombreCorto: "Sebastián Padrón",
  rol: "Programador Web Full-Stack",
  bio: "Apasionado por la tecnología y la creación de software. Mi mayor motivación es construir el motor invisible que impulse las aplicaciones: diseñar arquitecturas de backend robustas, APIs escalables y sistemas eficientes.",
  foto: "/self-image.png",
  correo: "sebastianpadron1@gmail.com",
  github: "https://github.com/Seeb-afk",
  githubUsuario: "Seeb-afk",
  linkedin:
    "https://www.linkedin.com/in/sebastian-israel-padron-chavez-6b3671233",
};

export const conocimientos = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "GitHub",
];

export const navegacion = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#conocimientos", label: "Conocimientos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export const proyectos: Proyecto[] = [
  {
    slug: "proyecto-api-rick-morty",
    nombre: "API Rick & Morty",
    descripcion:
      "Aplicación web que consume la API pública de Rick & Morty para explorar y conocer a los personajes de la serie.",
    tecnologias: ["HTML", "JavaScript"],
    demo: "https://seeb-afk.github.io/proyecto-api-rick-morty/",
    repo: "https://github.com/Seeb-afk/proyecto-api-rick-morty",
    imagen: "/proyectos/rick-morty.png",
  },
  {
    slug: "copia-spotify-sebastian",
    nombre: "Copia de Spotify",
    descripcion:
      "Réplica de la interfaz de Spotify con barra lateral, listas, tarjetas de canciones y reproductor en la parte inferior.",
    tecnologias: ["HTML", "JavaScript"],
    demo: "https://seeb-afk.github.io/copia-spotify-sebastian/",
    repo: "https://github.com/Seeb-afk/copia-spotify-sebastian",
    imagen: "/proyectos/spotify.png",
  },
  {
    slug: "formulario-sebastian",
    nombre: "Formulario de registro",
    descripcion:
      "Formulario de registro con validación y campos agrupados en datos personales e información de contacto.",
    tecnologias: ["HTML", "JavaScript"],
    demo: "https://seeb-afk.github.io/formulario-sebastian/",
    repo: "https://github.com/Seeb-afk/formulario-sebastian",
    imagen: "/proyectos/formulario.png",
  },
  {
    slug: "proyecto-juego-rol",
    nombre: "Juego de rol",
    descripcion:
      "Juego de rol por consola: el jugador toma decisiones y el programa resuelve los combates y sus resultados.",
    tecnologias: ["JavaScript"],
    repo: "https://github.com/Seeb-afk/proyecto-juego-rol",
    imagen: "/proyectos/juego-rol.png",
  },
  {
    slug: "ejercicio-piedra-papel-tijeras",
    nombre: "Piedra, papel o tijeras",
    descripcion:
      "El clásico juego: dos jugadores eligen su jugada y el programa determina al ganador.",
    tecnologias: ["HTML", "JavaScript"],
    demo: "https://seeb-afk.github.io/ejercicio-piedra-papel-tijeras/",
    repo: "https://github.com/Seeb-afk/ejercicio-piedra-papel-tijeras",
    imagen: "/proyectos/piedra-papel-tijeras.png",
  },
  {
    slug: "copia-youtube-sebastian-padron",
    nombre: "Copia de YouTube",
    descripcion:
      "Réplica de la interfaz de YouTube con barra superior, chips de categorías y cuadrícula de videos.",
    tecnologias: ["HTML", "JavaScript"],
    demo: "https://seeb-afk.github.io/copia-youtube-sebastian-padron/",
    repo: "https://github.com/Seeb-afk/copia-youtube-sebastian-padron",
    imagen: "/proyectos/youtube.png",
  },
];
