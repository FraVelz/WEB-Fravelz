import type { Project } from "../project-types";
import marcadoresImg from "@/assets/images-projects/marcadores/index.webp";
import image1 from "@/assets/images-projects/marcadores/image1.webp";
import image2 from "@/assets/images-projects/marcadores/image2.webp";
import image3 from "@/assets/images-projects/marcadores/image3.webp";
import image4 from "@/assets/images-projects/marcadores/image4.webp";

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
      "Gestor de marcadores y favoritos con Next.js 16 y Supabase. Carpetas anidadas, atajos de teclado, " +
      "vistas de perfil y estadísticas, y modo demo sin configurar backend.",
    en:
      "Bookmark and favorites manager with Next.js 16 and Supabase. Nested folders, keyboard shortcuts, " +
      "profile and stats views, plus a demo mode with no backend setup.",
    ru:
      "Менеджер закладок на Next.js 16 и Supabase. Вложенные папки, горячие клавиши, " +
      "профиль и статистика, а также демо-режим без настройки бэкенда.",
    zh:
      "基于 Next.js 16 与 Supabase 的书签与收藏管理器。支持嵌套文件夹、键盘快捷键、" +
      "个人资料与统计视图，以及无需后端的演示模式。",
  },
  featuredImage: marcadoresImg,
  screenshots: [image1, image2, image3, image4],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Motion",
    "Recharts",
  ],
  category: "fullstack",
  demoUrl: "https://web-marcadores.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Marcadores",
  featured: false,
  year: 2026,
  inDevelopment: false,
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
      "Autenticación y sesión SSR con Supabase en Next.js 16 (App Router)",
      "Modo demo desacoplado del backend para probar la UI sin credenciales",
      "Drag and drop con @atlaskit/pragmatic-drag-and-drop para reorganizar marcadores",
      "Atajos de teclado globales sin romper la accesibilidad del foco",
    ],
    en: [
      "Supabase auth and SSR sessions in Next.js 16 (App Router)",
      "Demo mode decoupled from the backend to try the UI without credentials",
      "Drag and drop with @atlaskit/pragmatic-drag-and-drop to reorder bookmarks",
      "Global keyboard shortcuts without breaking focus accessibility",
    ],
    ru: [
      "Аутентификация Supabase и SSR-сессии в Next.js 16 (App Router)",
      "Демо-режим, независимый от бэкенда, для проверки UI без учётных данных",
      "Drag and drop через @atlaskit/pragmatic-drag-and-drop для перестановки закладок",
      "Глобальные горячие клавиши без ухудшения доступности фокуса",
    ],
    zh: [
      "在 Next.js 16（App Router）中实现 Supabase 认证与 SSR 会话",
      "与后端解耦的演示模式，无需凭据即可体验界面",
      "使用 @atlaskit/pragmatic-drag-and-drop 拖拽重排书签",
      "全局快捷键且不破坏焦点可访问性",
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
