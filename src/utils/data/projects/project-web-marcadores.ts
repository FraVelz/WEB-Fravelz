import type { Project } from "../project-types";
import marcadoresImg from "@/assets/images-projects/marcadores/index.webp";
import image2 from "@/assets/images-projects/marcadores/image2.webp";
import image3 from "@/assets/images-projects/marcadores/image3.webp";
import image4 from "@/assets/images-projects/marcadores/image4.webp";
import image5 from "@/assets/images-projects/marcadores/image5.webp";
import image6 from "@/assets/images-projects/marcadores/image6.webp";
import image7 from "@/assets/images-projects/marcadores/image7.webp";
import image8 from "@/assets/images-projects/marcadores/image8.webp";
import image9 from "@/assets/images-projects/marcadores/image9.webp";
import image10 from "@/assets/images-projects/marcadores/image10.webp";
import image11 from "@/assets/images-projects/marcadores/image11.webp";
import image12 from "@/assets/images-projects/marcadores/image12.webp";

export const projectWebMarcadores: Project = {
  slug: "web-marcadores",
  title: {
    es: "WEB Marcadores",
    en: "WEB Marcadores",
    ru: "WEB Marcadores",
    zh: "WEB 书签",
  },
  shortDescription: {
    es:
      "Organiza enlaces en carpetas anidadas con UI tipo explorador, atajos de teclado y " +
      "modo demo en /demo sin configurar backend.",
    en:
      "Organize links in nested folders with a file-explorer UI, keyboard shortcuts, and " +
      "a /demo mode that needs no backend setup.",
    ru:
      "Ссылки во вложенных папках с UI как у проводника, горячими клавишами и " +
      "демо на /demo без настройки бэкенда.",
    zh: "用文件管理器风格界面整理嵌套文件夹中的链接，含键盘快捷键与无需后端的 /demo 模式。",
  },
  featuredImage: marcadoresImg,
  screenshots: [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Motion", "Recharts"],
  category: "fullstack",
  demoUrl: "https://web-marcadores.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Marcadores",
  featured: true,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Aplicación web para organizar enlaces favoritos en carpetas anidadas, con cuadrícula de marcadores, " +
      "panel de detalle con metadatos y etiquetas, y una interfaz oscura tipo explorador de archivos. " +
      "Autenticación con Supabase y sesión SSR mediante @supabase/ssr. Incluye modo demo sin .env.local " +
      "(datos en memoria, acceso por botón en login o ruta /demo), atajos de teclado con hotkeys-js, " +
      "vistas de Atajos y Perfil, y gráficos de uso con Recharts. Animaciones con Motion y estilos con Tailwind CSS v4.",
    en:
      "Web app to organize favorite links in nested folders, with a bookmark grid, detail panel with metadata " +
      "and tags, and a dark file-explorer-style UI. Supabase auth with SSR sessions via @supabase/ssr. " +
      "Includes a demo mode without .env.local (in-memory data, login button or /demo route), keyboard shortcuts " +
      "with hotkeys-js, Shortcuts and Profile views, and usage charts with Recharts. Motion animations and Tailwind CSS v4.",
    ru:
      "Веб-приложение для организации избранных ссылок во вложенных папках: сетка закладок, панель деталей " +
      "с метаданными и тегами, тёмный интерфейс в стиле проводника. Аутентификация Supabase и SSR-сессии через @supabase/ssr. " +
      "Демо-режим без .env.local (данные в памяти, кнопка входа или маршрут /demo), горячие клавиши hotkeys-js, " +
      "разделы «Горячие клавиши» и «Профиль», графики Recharts. Анимации Motion и Tailwind CSS v4.",
    zh:
      "用于在嵌套文件夹中整理收藏链接的 Web 应用：书签网格、带元数据与标签的详情面板，以及深色文件管理器风格界面。" +
      "通过 @supabase/ssr 实现 Supabase 认证与 SSR 会话。支持无 .env.local 的演示模式（内存数据、登录按钮或 /demo 路由）、" +
      "hotkeys-js 快捷键、「快捷键」与「个人资料」视图，以及 Recharts 图表。Motion 动效与 Tailwind CSS v4。",
  },
  whatILearned: {
    es: [
      "Sesión SSR con Supabase en App Router sin filtrar cookies a client components",
      "Montar /demo con datos en memoria para enseñar la UI sin .env",
      "Reordenar carpetas y marcadores con pragmatic-drag-and-drop",
      "Atajos globales (hotkeys-js) que no roban el foco de inputs",
    ],
    en: [
      "SSR sessions with Supabase on App Router without leaking cookies into client components",
      "Ship /demo with in-memory data so the UI works without a .env",
      "Reorder folders and bookmarks with pragmatic-drag-and-drop",
      "Global shortcuts (hotkeys-js) that do not steal focus from inputs",
    ],
    ru: [
      "SSR-сессии Supabase в App Router без утечки cookie в client components",
      "Маршрут /demo с данными в памяти, чтобы UI работал без .env",
      "Перестановка папок и закладок через pragmatic-drag-and-drop",
      "Глобальные хоткеи (hotkeys-js), которые не крадут фокус у инпутов",
    ],
    zh: [
      "在 App Router 用 Supabase 做 SSR 会话，不把 cookie 泄漏到 client components",
      "用内存数据做 /demo，没有 .env 也能演示 UI",
      "用 pragmatic-drag-and-drop 重排文件夹与书签",
      "全局快捷键（hotkeys-js）不抢走输入框焦点",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Supabase (@supabase/supabase-js, @supabase/ssr)",
      "Tailwind CSS v4, Motion, Recharts",
      "hotkeys-js para atajos; pragmatic-drag-and-drop para arrastre",
      "Vercel Analytics",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Supabase (@supabase/supabase-js, @supabase/ssr)",
      "Tailwind CSS v4, Motion, Recharts",
      "hotkeys-js for shortcuts; pragmatic-drag-and-drop for drag",
      "Vercel Analytics",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Supabase (@supabase/supabase-js, @supabase/ssr)",
      "Tailwind CSS v4, Motion, Recharts",
      "hotkeys-js; pragmatic-drag-and-drop",
      "Vercel Analytics",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、TypeScript",
      "Supabase（@supabase/supabase-js、@supabase/ssr）",
      "Tailwind CSS v4、Motion、Recharts",
      "hotkeys-js 快捷键；pragmatic-drag-and-drop 拖拽",
      "Vercel Analytics",
    ],
  },
};
