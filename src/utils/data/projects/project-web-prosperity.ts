import type { Project } from "../project-types";
import prosperityImg from "@/assets/images-projects/prosperity/index.webp";
import image1 from "@/assets/images-projects/prosperity/image1.webp";
import image2 from "@/assets/images-projects/prosperity/image2.webp";
import image3 from "@/assets/images-projects/prosperity/image3.webp";
import image4 from "@/assets/images-projects/prosperity/image4.webp";
import image5 from "@/assets/images-projects/prosperity/image5.webp";

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
      "Archivo editorial para explorar temas de una nación: política, economía, geopolítica y datos, " +
      "con mapa MapLibre y comparador de países.",
    en:
      "An editorial archive to explore how a nation works — politics, economics, geopolitics, and data — " +
      "with a MapLibre map and a country comparator.",
    ru:
      "Редакционный архив о том, как устроена нация: политика, экономика, геополитика и данные — " +
      "с картой MapLibre и сравнением стран.",
    zh: "探索国家如何运转的专题档案：政治、经济、地缘政治与数据，含 MapLibre 地图与国家比较器。",
  },
  featuredImage: prosperityImg,
  screenshots: [image1, image2, image3, image4, image5],
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
      "Sitio de lectura e interacción con 25 apartados en siete bloques (publicado / en preparación / " +
      "próximamente). Cada tema tiene hub TSX, sidebar y notas Markdown; las rutas /[tema] eligen entre " +
      "página TSX y .md. Incluye búsqueda por tema, mapa en Estadísticas mundiales (MapLibre GL), " +
      "tema claro/oscuro persistente y export estático para Vercel o GitHub Pages.",
    en:
      "A reading-and-tools site with 25 sections in seven blocks (published / in progress / coming soon). " +
      "Each topic has a TSX hub, its own sidebar, and Markdown notes; /[topic] routes resolve TSX vs .md. " +
      "Includes per-topic search, a World statistics MapLibre map, persistent light/dark theme, and " +
      "static export for Vercel or GitHub Pages.",
    ru:
      "Сайт для чтения и инструментов: 25 разделов в семи блоках (опубликовано / в работе / скоро). " +
      "У каждой темы hub TSX, свой sidebar и заметки Markdown; маршруты /[topic] выбирают TSX или .md. " +
      "Поиск по теме, карта в «Мировой статистике» (MapLibre GL), постоянная светлая/тёмная тема и " +
      "статический экспорт для Vercel или GitHub Pages.",
    zh:
      "阅读与工具站点：25 个主题分属七个区块（已发布 / 进行中 / 即将推出）。" +
      "每主题有 TSX hub、独立侧栏与 Markdown 笔记；/[topic] 在 TSX 与 .md 间解析。" +
      "含分主题搜索、世界统计 MapLibre 地图、持久明暗主题，以及面向 Vercel/GitHub Pages 的静态导出。",
  },
  whatILearned: {
    es: [
      "Montar un archivo largo con hubs TSX + notas Markdown en la misma ruta dinámica",
      "Publicar con output: export sin depender de un servidor Node en producción",
      "Meter MapLibre en un sitio de documentación sin romper el layout editorial",
      "Dar a cada apartado su propia paleta CSS sin que los 25 temas se vean iguales",
    ],
    en: [
      "Ship a long archive with TSX hubs + Markdown notes on the same dynamic route",
      "Deploy with output: export without needing a Node server in production",
      "Embed MapLibre in a documentation-style layout without breaking the editorial grid",
      "Give each section its own CSS palette so 25 topics do not look identical",
    ],
    ru: [
      "Длинный архив: hub TSX + заметки Markdown на одном динамическом маршруте",
      "Деплой с output: export без Node-сервера в проде",
      "Встроить MapLibre в документальный layout без поломки сетки",
      "Своя CSS-палитра у каждого раздела, чтобы 25 тем не сливались",
    ],
    zh: [
      "用同一动态路由承载 TSX hub 与 Markdown 笔记的长档案",
      "用 output: export 部署，生产环境不依赖 Node 服务器",
      "在文档型布局中嵌入 MapLibre 而不破坏编辑网格",
      "为每个版块单独配色，避免 25 个主题长得一样",
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
