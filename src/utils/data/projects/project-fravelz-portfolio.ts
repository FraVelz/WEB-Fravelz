import type { Project } from "../project-types";

import portfolioImg from "@/assets/images-projects/portfolio/index.webp";
import image1 from "@/assets/images-projects/portfolio/image1.webp";
import image2 from "@/assets/images-projects/portfolio/image2.webp";
import image3 from "@/assets/images-projects/portfolio/image3.webp";
import image4 from "@/assets/images-projects/portfolio/image4.webp";
import image5 from "@/assets/images-projects/portfolio/image5.webp";
import image6 from "@/assets/images-projects/portfolio/image6.webp";

export const projectFravelzPortfolio: Project = {
  slug: "fravelz-portfolio",
  title: {
    es: "Portafolio Fravelz (Next.js)",
    en: "Fravelz Portfolio (Next.js)",
    ru: "Портфолио Fravelz (Next.js)",
    zh: "Fravelz 作品集（Next.js）",
  },
  shortDescription: {
    es:
      "Sitio personal en es/en/ru/zh con scroll horizontal en home, proyectos filtrables, " +
      "certificados en PDF y búsqueda global.",
    en:
      "Personal site in es/en/ru/zh with a horizontal-scroll home, filterable projects, " +
      "PDF certificates, and global search.",
    ru:
      "Личный сайт на es/en/ru/zh: горизонтальный скролл на главной, фильтруемые проекты, " +
      "PDF-сертификаты и глобальный поиск.",
    zh: "个人站点（es/en/ru/zh）：首页横向滚动、可筛选项目、PDF 证书与全站搜索。",
  },
  featuredImage: portfolioImg,
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  category: "frontend",
  demoUrl: "https://fravelz.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Fravelz",
  featured: true,
  year: 2026,
  inDevelopment: false,
  honesty: ["terminado"],
  screenshots: [image1, image2, image3, image4, image5, image6],
  fullDescription: {
    es:
      "Portafolio donde presento proyectos, stack, trayectoria y certificados. Rutas por idioma, " +
      "home con scroll horizontal, detalle de proyecto con carrusel, PDFs en modal, tema " +
      "claro/oscuro/auto (cookie + localStorage) y buscador que enlaza proyectos y páginas. " +
      "Empezó en Astro (rama archive/astro) y hoy corre en Next.js 16 + React 19.",
    en:
      "Portfolio where I show projects, stack, timeline, and certificates. Locale routes, a " +
      "horizontal-scroll home, project detail with a carousel, PDFs in a modal, light/dark/auto " +
      "theme (cookie + localStorage), and search that links projects and pages. Started in Astro " +
      "(archive/astro branch) and now runs on Next.js 16 + React 19.",
    ru:
      "Портфолио: проекты, стек, опыт и сертификаты. Маршруты по языку, главная с горизонтальным " +
      "скроллом, деталь проекта с каруселью, PDF в модалке, тема светлая/тёмная/авто (cookie + " +
      "localStorage) и поиск по проектам и страницам. Начиналось на Astro (ветка archive/astro), " +
      "сейчас Next.js 16 + React 19.",
    zh:
      "作品集：项目、技术栈、经历与证书。按语言路由、首页横向滚动、项目详情轮播、PDF 弹层、" +
      "亮/暗/跟随系统主题（cookie + localStorage），以及连接项目与页面的搜索。" +
      "最初用 Astro（archive/astro 分支），现为 Next.js 16 + React 19。",
  },
  whatILearned: {
    es: [
      "App Router con `[lang]` y metadata distinta por página e idioma",
      "Datos de proyectos en módulos + `getProjectBySlug` sin un CMS",
      "Tema antes del primer paint: script inline alineado con `ToggleTheme`",
      "Modal de PDF y buscador usables con teclado (foco, Escape, roles)",
      "Navegación por Tab en home horizontal, grids y modales",
    ],
    en: [
      "App Router with `[lang]` and per-page, per-locale metadata",
      "Project data in modules + `getProjectBySlug` without a CMS",
      "Theme before first paint: inline script aligned with `ToggleTheme`",
      "Keyboard-usable PDF modal and search (focus, Escape, roles)",
      "Tab navigation across the horizontal home, grids, and modals",
    ],
    ru: [
      "App Router с `[lang]` и метаданными по странице и языку",
      "Данные проектов в модулях + `getProjectBySlug` без CMS",
      "Тема до первого кадра: inline-скрипт в синхроне с `ToggleTheme`",
      "PDF-модалка и поиск с клавиатуры (фокус, Escape, роли)",
      "Tab-навигация по горизонтальной главной, сеткам и модалкам",
    ],
    zh: [
      "带 `[lang]` 的 App Router，以及按页、按语言的 metadata",
      "项目数据分模块 + `getProjectBySlug`，不用 CMS",
      "首帧前主题：内联脚本与 `ToggleTheme` 对齐",
      "可用键盘的 PDF 弹层与搜索（焦点、Escape、语义角色）",
      "横向首页、网格与弹层上的 Tab 导航",
    ],
  },
  extraInfo: {
    es: [
      "La versión Astro inicial está en la rama `archive/astro`.",
      "Documentación densa con Markdownlint, Markdown All in One y Code Spell Checker.",
      "Límites de estilo: ~120 caracteres por línea, ~200 líneas por archivo, Prettier + ESLint.",
      "Estructura del código agrupada por features (home, projects, about-me, …).",
    ],
    en: [
      "The initial Astro version lives on the `archive/astro` branch.",
      "Dense docs with Markdownlint, Markdown All in One, and Code Spell Checker.",
      "Style limits: ~120 chars per line, ~200 lines per file, Prettier + ESLint.",
      "Code grouped by features (home, projects, about-me, …).",
    ],
    ru: [
      "Первая версия на Astro — в ветке `archive/astro`.",
      "Плотная документация: Markdownlint, Markdown All in One, Code Spell Checker.",
      "Лимиты стиля: ~120 символов в строке, ~200 строк в файле, Prettier + ESLint.",
      "Код сгруппирован по фичам (home, projects, about-me, …).",
    ],
    zh: [
      "最初的 Astro 版本在 `archive/astro` 分支。",
      "文档较密：Markdownlint、Markdown All in One、Code Spell Checker。",
      "风格限制：约 120 字符/行、约 200 行/文件，Prettier + ESLint。",
      "代码按功能分组（home、projects、about-me 等）。",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4 — tokens `rgb(var(--color-*))` en `globals.css`",
      "GSAP para animaciones puntuales (p. ej. en la página 404)",
      "i18n: JSON en `public/locals/` + rutas `/[lang]/` con `getTranslations` en servidor",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4 — `rgb(var(--color-*))` tokens in `globals.css`",
      "GSAP for targeted animations (e.g. 404)",
      "i18n: JSON under `public/locals/` and server `getTranslations` on `/[lang]/` routes",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4 — токены `globals.css` через `rgb(var(--color-*))`",
      "GSAP для отдельных анимаций (напр. страница 404)",
      "i18n: JSON в `public/locals/` и SSR `getTranslations` на маршрутах `/[lang]/`",
    ],
    zh: [
      "Next.js 16（应用路由）、React 19、TypeScript",
      "Tailwind CSS 4 — `globals.css` 中 `rgb(var(--color-*))` 设计令牌",
      "GSAP 用于少量动画（如 404）",
      "i18n：`public/locals/` JSON + 服务端 `/[lang]/` 路由与 `getTranslations`",
    ],
  },
};
