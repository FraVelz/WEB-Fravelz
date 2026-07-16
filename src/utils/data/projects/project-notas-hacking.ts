import type { Project } from "../project-types";

import NotasHackingImg from "@/assets/images-projects/notas-de-hacking/index.webp";
import image2 from "@/assets/images-projects/notas-de-hacking/image2.webp";
import image3 from "@/assets/images-projects/notas-de-hacking/image3.webp";
import image4 from "@/assets/images-projects/notas-de-hacking/image4.webp";
import image5 from "@/assets/images-projects/notas-de-hacking/image5.webp";
import image6 from "@/assets/images-projects/notas-de-hacking/image6.webp";

export const projectNotasHacking: Project = {
  slug: "notas-hacking",
  title: {
    es: "Notas de Hacking",
    en: "Hacking Notes",
    ru: "Заметки о взломе",
    zh: "黑客笔记",
  },
  shortDescription: {
    es:
      "Mis notas de ciberseguridad en Markdown/MDX (Linux, redes, pentesting, OSINT…) " +
      "publicadas con Astro Starlight y búsqueda integrada.",
    en:
      "My cybersecurity notes in Markdown/MDX (Linux, networking, pentesting, OSINT…) " +
      "published with Astro Starlight and built-in search.",
    ru:
      "Мои заметки по кибербезу в Markdown/MDX (Linux, сети, пентест, OSINT…) " +
      "на Astro Starlight со встроенным поиском.",
    zh: "我的网络安全笔记（Markdown/MDX：Linux、网络、渗透、OSINT…），用 Astro Starlight 发布并带站内搜索。",
  },
  featuredImage: NotasHackingImg,
  technologies: ["Astro", "Starlight", "MDX", "Markdown"],
  category: "frontend",
  demoUrl: "https://fravelz.github.io/WEB-Notas-de-Hacking/",
  githubUrl: "https://github.com/FraVelz/WEB-Notas-de-Hacking",
  year: 2025,
  inDevelopment: false,
  honesty: ["lab", "terminado"],
  screenshots: [image2, image3, image4, image5, image6],
  fullDescription: {
    es:
      "Sitio estático generado con Astro 5 y el tema Starlight: las notas viven en la colección `docs` " +
      "(`src/content/docs`) con Content Collections, Markdown y MDX donde hace falta. La barra lateral " +
      "y el orden de los temas se definen en `starlight-sidebar.mjs`; el aspecto se personaliza con CSS " +
      "(`theme.css`, `markdown-layout.css`) como `customCss` de Starlight. Incluye búsqueda sobre títulos y cuerpo, " +
      "tabla de contenidos cuando aplica, tema claro/oscuro y despliegue en GitHub Pages con `base` configurado.",
    en:
      "Static site built with Astro 5 and the Starlight theme: notes live in the `docs` collection " +
      "(`src/content/docs`) via Content Collections, using Markdown and MDX where needed. The sidebar and topic order " +
      "are defined in `starlight-sidebar.mjs`; look and feel use custom CSS (`theme.css`, `markdown-layout.css`) " +
      "through Starlight's `customCss`. Includes search over titles and body, table of contents when relevant, " +
      "light/dark theme, and GitHub Pages deployment with a configured `base` path.",
    ru:
      "Статический сайт на Astro 5 и теме Starlight: заметки в коллекции `docs` (`src/content/docs`) " +
      "через Content Collections, Markdown и MDX по необходимости. Боковое меню и порядок тем задаются " +
      "в `starlight-sidebar.mjs`; оформление — пользовательским CSS (`theme.css`, `markdown-layout.css`) " +
      "через `customCss` Starlight. Есть поиск по заголовкам и тексту, оглавление где уместно, светлая/тёмная тема " +
      "и публикация на GitHub Pages с настроенным `base`.",
    zh:
      "使用 Astro 5 与 Starlight 主题生成的静态站点：笔记存放在 `docs` 集合（`src/content/docs`），" +
      "通过 Content Collections 管理，必要时使用 Markdown 与 MDX。侧栏与主题顺序由 `starlight-sidebar.mjs` 定义；" +
      "样式通过 Starlight 的 `customCss` 加载 `theme.css` 与 `markdown-layout.css`。包含标题与正文搜索、" +
      "适当时的目录、明暗主题，并以配置的 `base` 路径部署到 GitHub Pages。",
  },
  whatILearned: {
    es: [
      "Montar documentación con Astro 5 y Starlight (salida estática y SEO)",
      "Organizar contenido con Content Collections y `docsLoader` de Starlight",
      "Controlar el menú lateral explícitamente con `starlight-sidebar.mjs`",
      "Personalizar tema Starlight con CSS propio y MDX para páginas más ricas",
    ],
    en: [
      "Building documentation with Astro 5 and Starlight (static output and SEO)",
      "Organizing content with Content Collections and Starlight's `docsLoader`",
      "Controlling the sidebar explicitly via `starlight-sidebar.mjs`",
      "Customizing Starlight with project CSS and MDX for richer pages",
    ],
    ru: [
      "Сборка документации на Astro 5 и Starlight (статический вывод и SEO)",
      "Организация контента через Content Collections и `docsLoader` Starlight",
      "Явное управление боковым меню через `starlight-sidebar.mjs`",
      "Настройка темы Starlight своим CSS и MDX для более насыщенных страниц",
    ],
    zh: [
      "使用 Astro 5 与 Starlight 搭建文档站点（静态输出与 SEO）",
      "通过 Content Collections 与 Starlight 的 `docsLoader` 组织内容",
      "用 `starlight-sidebar.mjs` 显式控制侧栏结构",
      "用自定义 CSS 与 MDX 定制 Starlight 并丰富页面",
    ],
  },
  extraInfo: {
    es: [
      "El proyecto se creó inicialmente con React; esa versión está guardada en la rama `archive/react` de GitHub.",
      "Incluye una página 404 personalizada alineada con el tema de interfaz seleccionado por el usuario (por defecto, oscuro).",
    ],
    en: [
      "The project was initially built with React; that version is preserved on the GitHub branch `archive/react`.",
      "It includes a custom 404 page that follows the interface theme selected by the user (dark by default).",
    ],
    ru: [
      "Проект изначально создавался на React; та версия сохранена в ветке GitHub `archive/react`.",
      "Есть пользовательская страница 404, согласованная с выбранной пользователем темой интерфейса (по умолчанию — тёмная).",
    ],
    zh: [
      "项目最初以 React 构建；该版本保留在 GitHub 分支 `archive/react`。",
      "包含与用户在界面所选主题一致（默认为深色）的自定义 404 页面。",
    ],
  },
  technicalDetails: {
    es: [
      "Astro 5 (`output: 'static'`) con integraciones Starlight y `@astrojs/mdx`",
      "Colección `docs` en `src/content.config.ts` con `docsSchema` de Starlight",
      "Barra lateral importada desde `starlight-sidebar.mjs`",
      "`customCss`: `theme.css` y `markdown-layout.css`",
      "GitHub Pages: `site` + `base: '/WEB-Notas-de-Hacking'`",
      "404 personalizado en `src/pages/404.astro` (`disable404Route` en Starlight)",
    ],
    en: [
      "Astro 5 (`output: 'static'`) with Starlight and `@astrojs/mdx` integrations",
      "`docs` collection in `src/content.config.ts` using Starlight's `docsSchema`",
      "Sidebar driven by `starlight-sidebar.mjs`",
      "`customCss`: `theme.css` and `markdown-layout.css`",
      "GitHub Pages: `site` + `base: '/WEB-Notas-de-Hacking'`",
      "Custom 404 at `src/pages/404.astro` (Starlight `disable404Route`)",
    ],
    ru: [
      "Astro 5 (`output: 'static'`) с интеграциями Starlight и `@astrojs/mdx`",
      "Коллекция `docs` в `src/content.config.ts` со схемой `docsSchema` Starlight",
      "Боковое меню из `starlight-sidebar.mjs`",
      "`customCss`: `theme.css` и `markdown-layout.css`",
      "GitHub Pages: `site` + `base: '/WEB-Notas-de-Hacking'`",
      "Свой 404 в `src/pages/404.astro` (`disable404Route` в Starlight)",
    ],
    zh: [
      "Astro 5（`output: 'static'`）集成 Starlight 与 `@astrojs/mdx`",
      "在 `src/content.config.ts` 中用 Starlight 的 `docsSchema` 定义 `docs` 集合",
      "侧栏由 `starlight-sidebar.mjs` 驱动",
      "`customCss`：`theme.css` 与 `markdown-layout.css`",
      "GitHub Pages：`site` + `base: '/WEB-Notas-de-Hacking'`",
      "在 `src/pages/404.astro` 自定义 404（Starlight `disable404Route`）",
    ],
  },
};
