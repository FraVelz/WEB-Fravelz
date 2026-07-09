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
      "Sitio personal multilenguaje con Next.js App Router: proyectos, certificaciones, " +
      "tema persistente y búsqueda global.",
    en:
      "Multilingual personal site with Next.js App Router: projects, certifications, persisted theme " +
      "and global search.",
    ru:
      "Мультиязычный личный сайт на Next.js App Router: проекты, сертификаты, сохранение темы и " + "глобальный поиск.",
    zh: "基于 Next.js 应用路由的个人多语言站点：项目、认证、持久化主题与全站搜索。",
  },
  featuredImage: portfolioImg,
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
  category: "frontend",
  demoUrl: "https://fravelz.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Fravelz",
  featured: true,
  year: 2026,
  inDevelopment: true,
  screenshots: [image1, image2, image3, image4, image5, image6],
  fullDescription: {
    es:
      "Portafolio público desarrollado con Next.js 16 y React 19 para presentar proyectos, " +
      "tecnologías, trayectoria y certificados. Rutas por idioma (es/en/ru/zh), componentes servidor " +
      "por defecto, PDFs de certificación en modal, tema claro/oscuro/auto sincronizado con cookie y " +
      "localStorage, y modal de búsqueda enlazando proyectos y páginas estáticas.",
    en:
      "Public portfolio built with Next.js 16 and React 19 to showcase projects, technologies, timeline " +
      "and certifications. Locale-prefixed routes (es/en/ru/zh), server components by default, " +
      "certificate PDFs in a modal viewer, light/dark/auto theme via cookie plus localStorage, and a " +
      "global search modal for projects and static pages.",
    ru:
      "Публичное портфолио на Next.js 16 и React 19: проекты, технологии, опыт и сертификаты. Маршруты " +
      "с префиксом языка (es/en/ru/zh), по умолчанию Server Components, просмотр PDF сертификатов в " +
      "модальном окне, тема светлая/тёмная/авто через cookie и localStorage, глобальный поиск по " +
      "проектам и статическим страницам.",
    zh:
      "使用 Next.js 16 与 React 19 构建的公开作品集，展示项目、技术栈、经历与认证。语言前缀路由 es/en/ru/zh；" +
      "默认服务端组件，证书 PDF 弹层预览，亮色/深色/跟随系统主题（cookie + localStorage），" +
      "以及覆盖项目与静态页的全站搜索浮层。",
  },
  whatILearned: {
    es: [
      "App Router con `[lang]` e implementación para manejo de diferentes idiomas",
      "Separar datos de proyectos en módulos reutilizables y utilidades (`getProjectBySlug`)",
      "Tema antes del primer paint: script inline + cookies alineadas con `ToggleTheme`",
      "Visualizador de PDF y buscador accesibles (roles, Escape, foco)",
      "Navegación por teclado en todos los apartados (Tab/Shift+Tab, Escape para modales, etc.)",
    ],
    en: [
      "App Router with `[lang]` and per-page metadata",
      "Splitting project data into modules and helpers (`getProjectBySlug`)",
      "Theme before first paint: inline script plus cookies synced with `ToggleTheme`",
      "Accessible PDF modal and search (roles, Escape, focus basics)",
      "Keyboard navigation across all sections (Tab/Shift+Tab, Escape for modals, etc.)",
    ],
    ru: [
      "App Router с `[lang]` и метаданными на страницу",
      "Данные проектов — отдельные модули и `getProjectBySlug`",
      "Тема до первого кадра: inline-скрипт и cookie синхронно с переключателем темы",
      "Доступность модального PDF и поиска (роли, Escape, фокус)",
      "Клавиатурная навигация по всем разделам (Tab/Shift+Tab, Escape для модалок и т.д.)",
    ],
    zh: [
      "使用 `[lang]` 的应用路由与各页 metadata",
      "将项目数据拆成模块与 `getProjectBySlug` 等工具函数",
      "首帧前主题：内联脚本与 ToggleTheme、cookie 一致",
      "PDF 弹层与搜索的无障碍要点（语义、Escape、焦点）",
      "全站键盘导航（Tab/Shift+Tab、Escape 关闭弹层等）",
    ],
  },
  extraInfo: {
    es: [
      "El portafolio fue creado inicialmente en Astro esa version esta guardada en una rama de github como `archive/astro`.",
      "Es el portafolio con mayor documentación extensa he implementado actualmente (implementando con ayuda de diversas herramientas como Markdownlint, Markdown All in One, Code Spell Checker, y herramientas de ia).",
      "maximo 120 caracteres por linea de codigo, maximo 200 lineas de codigo por archivo, ademas utilizando prettier+eslint",
      "Estructura del codigo inspirada en feature-based architecture",
    ],
    en: [
      "This portfolio is where I try UX, i18n, and performance tweaks before writing them up.",
      "Screenshots are refreshed when the layout or core flows change.",
    ],
    ru: [
      "Это портфолио — площадка для экспериментов с UX, i18n и производительностью.",
      "Скриншоты обновляются, когда меняется каркас или ключевые сценарии.",
    ],
    zh: ["这个作品集也是我在正式记录之前尝试 UX、国际化与性能的试验场。", "当布局或核心流程有变时，会更新截图。"],
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
