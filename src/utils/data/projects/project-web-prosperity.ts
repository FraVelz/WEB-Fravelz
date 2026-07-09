import type { Project } from "../project-types";
import prosperityImg from "@/assets/images-projects/prosperity/index.webp";
import image1 from "@/assets/images-projects/prosperity/image1.webp";

export const projectWebProsperity: Project = {
  slug: "web-prosperity",
  title: {
    es: "WEB Prosperity",
    en: "WEB Prosperity",
    ru: "WEB Prosperity",
    zh: "WEB Prosperity",
  },
  shortDescription: {
    es:
      "Sitio estático sobre prosperidad en sentido amplio: política, filosofía, economía y geopolítica. " +
      "25 apartados temáticos, mapas MapLibre, búsqueda y export estático con Next.js 15.",
    en:
      "Static site on prosperity in a broad sense: politics, philosophy, economics, and geopolitics. " +
      "25 thematic sections, MapLibre maps, search, and static export with Next.js 15.",
    ru:
      "Статический сайт о процветании в широком смысле: политика, философия, экономика и геополитика. " +
      "25 тематических разделов, карты MapLibre, поиск и статический экспорт на Next.js 15.",
    zh:
      "关于广义「繁荣」的静态站点：政治、哲学、经济与地缘政治。" +
      "25 个主题版块、MapLibre 地图、站内搜索，以及 Next.js 15 静态导出。",
  },
  featuredImage: prosperityImg,
  screenshots: [image1],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MapLibre GL",
    "react-markdown",
    "Zustand",
    "Three.js",
  ],
  category: "frontend",
  demoUrl: "https://prosperity-six.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Prosperity",
  featured: false,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Web Prosperity explora la prosperidad en sentido amplio — política, filosofía, economía, geopolítica y datos. " +
      "Incluye 25 apartados agrupados en siete bloques con estados Con contenido, En preparación y Próximamente. " +
      "Arquitectura por features: cada tema tiene hub TSX, sidebar propio y notas en Markdown. Rutas dinámicas " +
      "/[tema] resuelven entre páginas TSX y notas .md. Tema claro/oscuro persistente, búsqueda por tema, " +
      "mapa interactivo en Estadísticas mundiales (MapLibre GL) y export estático listo para Vercel o GitHub Pages.",
    en:
      "Web Prosperity explores prosperity in a broad sense — politics, philosophy, economics, geopolitics, and data. " +
      "It includes 25 sections grouped in seven blocks with Published, In progress, and Coming soon states. " +
      "Feature-based architecture: each topic has its own hub TSX, sidebar, and Markdown notes. Dynamic /[topic] routes " +
      "resolve between TSX pages and .md notes. Persistent light/dark theme, per-topic search, " +
      "an interactive map on World statistics (MapLibre GL), and static export ready for Vercel or GitHub Pages.",
    ru:
      "Web Prosperity исследует процветание в широком смысле — политику, философию, экономику, геополитику и данные. " +
      "25 разделов в семи блоках со статусами «С контентом», «В подготовке» и «Скоро». " +
      "Архитектура по фичам: у каждой темы свой hub TSX, sidebar и заметки Markdown. Динамические маршруты /[topic] " +
      "выбирают между TSX и .md. Постоянная светлая/тёмная тема, поиск по теме, " +
      "интерактивная карта в «Мировой статистике» (MapLibre GL) и статический экспорт для Vercel или GitHub Pages.",
    zh:
      "Web Prosperity 从广义上探讨繁荣——政治、哲学、经济、地缘政治与数据。" +
      "包含 25 个主题，分属七个区块，状态为「已有内容」「准备中」「即将推出」。" +
      "按功能模块化：每个主题有独立 hub TSX、侧栏与 Markdown 笔记。动态 /[topic] 路由在 TSX 与 .md 间解析。" +
      "持久明暗主题、分主题搜索、世界统计中的 MapLibre 交互地图，以及面向 Vercel/GitHub Pages 的静态导出。",
  },
  whatILearned: {
    es: [
      "Organizar contenido editorial extenso con arquitectura por features y rutas dinámicas TSX + Markdown",
      "Export estático con Next.js (output: export) desplegable en Vercel sin servidor Node",
      "Mapas interactivos con MapLibre GL integrados en un sitio de documentación",
      "Tokens CSS y paletas por apartado para mantener coherencia visual en 25 temas",
    ],
    en: [
      "Structuring extensive editorial content with feature folders and dynamic TSX + Markdown routes",
      "Static export with Next.js (output: export) deployable on Vercel without a Node server",
      "Interactive MapLibre GL maps inside a documentation-style site",
      "Per-topic CSS tokens and palettes to keep visual coherence across 25 sections",
    ],
    ru: [
      "Организация большого редакционного контента: фичи и динамические маршруты TSX + Markdown",
      "Статический экспорт Next.js (output: export) для Vercel без Node-сервера",
      "Интерактивные карты MapLibre GL внутри сайта-документации",
      "CSS-токены и палитры по разделам для единообразия 25 тем",
    ],
    zh: [
      "用功能目录与 TSX + Markdown 动态路由组织大量专题内容",
      "Next.js 静态导出（output: export）可无 Node 服务器部署到 Vercel",
      "在文档型站点中集成 MapLibre GL 交互地图",
      "按主题 CSS 令牌与色板保持 25 个版块视觉一致",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "gray-matter, react-markdown, remark-gfm",
      "MapLibre GL, d3-geo; Three.js / R3F en hubs 3D",
      "Export estático (carpeta out/)",
    ],
    en: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "gray-matter, react-markdown, remark-gfm",
      "MapLibre GL, d3-geo; Three.js / R3F on 3D hubs",
      "Static export (out/ folder)",
    ],
    ru: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "gray-matter, react-markdown, remark-gfm",
      "MapLibre GL, d3-geo; Three.js / R3F в 3D-хабах",
      "Статический экспорт (папка out/)",
    ],
    zh: [
      "Next.js 15（App Router）、React 19、TypeScript",
      "Tailwind CSS 4、next-themes、Lucide",
      "gray-matter、react-markdown、remark-gfm",
      "MapLibre GL、d3-geo；3D hub 使用 Three.js / R3F",
      "静态导出（out/ 目录）",
    ],
  },
};
