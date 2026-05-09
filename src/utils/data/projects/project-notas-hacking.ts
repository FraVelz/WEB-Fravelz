import type { Project } from "../project-types";

import NotasHackingImg from "@/assets/images-projects/notas-de-hacking/index.webp";
import image1 from "@/assets/images-projects/notas-de-hacking/image1.webp";
import image2 from "@/assets/images-projects/notas-de-hacking/image2.webp";
import image3 from "@/assets/images-projects/notas-de-hacking/image3.webp";
import image4 from "@/assets/images-projects/notas-de-hacking/image4.webp";
import image5 from "@/assets/images-projects/notas-de-hacking/image5.webp";

export const projectNotasHacking: Project = {
  slug: "notas-hacking",
  title: {
    es: "Notas de Hacking",
    en: "Hacking Notes",
    ru: "Заметки о взломе",
    zh: "黑客笔记",
  },
  shortDescription: {
    es: "Plataforma web educativa con notas y guías sobre ciberseguridad y hacking ético.",
    en: "Educational web platform with notes and guides on cybersecurity and ethical hacking.",
    ru: "Образовательная веб-платформа с заметками и руководствами по кибербезопасности и этичному взлому.",
    zh: "关于网络安全和道德黑客的笔记和指南的教育网络平台。",
  },
  featuredImage: NotasHackingImg,
  technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Markdown"],
  category: "frontend",
  demoUrl: "https://fravelz.github.io/WEB-Notas-de-Hacking",
  githubUrl: "https://github.com/FraVelz/WEB-Notas-de-Hacking",
  year: 2026,
  inDevelopment: true,
  screenshots: [image1, image2, image3, image4, image5],
  fullDescription: {
    es:
      "Plataforma web completa desarrollada con Astro que contiene notas educativas " +
      "sobre ciberseguridad, hacking ético y tecnologías relacionadas. Incluye " +
      "sistema de búsqueda, navegación por categorías y renderizado de contenido Markdown.",
    en:
      "Complete web platform developed with Astro containing educational notes " +
      "on cybersecurity, ethical hacking and related technologies. Includes search " +
      "system, category navigation and Markdown content rendering.",
    ru:
      "Полная веб-платформа, разработанная с использованием Astro, содержащая " +
      "образовательные заметки по кибербезопасности, этичному взлому и связанным " +
      "технологиям. Включает систему поиска, навигацию по категориям и рендеринг " +
      "контента Markdown.",
    zh:
      "使用 Astro 开发的完整网络平台，包含有关网络安全、道德黑客和相关技术的教育笔记。" +
      "包括搜索系统、类别导航和 Markdown 内容渲染。",
  },
  whatILearned: {
    es: [
      "crear documentación con Starlight en Astro",
      "usar Content Collections para gestionar el contenido",
      "estilizar y componentizar el código en Starlight",
    ],
    en: [
      "Building documentation sites with Starlight on Astro",
      "Using Content Collections to manage content",
      "Styling and turning UI into components in Starlight",
    ],
    ru: [
      "Создание документации с Starlight на Astro",
      "Использование Content Collections для управления контентом",
      "Стилизация и выделение переиспользуемых компонентов в Starlight",
    ],
    zh: [
      "在 Astro 上使用 Starlight 搭建文档站点",
      "使用 Content Collections 管理内容",
      "在 Starlight 中进行样式设计与组件拆分",
    ],
  },
  technicalDetails: {
    es: [
      "Astro para generación de sitios estáticos",
      "React para componentes interactivos",
      "Tailwind CSS para estilos",
      "Markdown para contenido",
      "TypeScript para tipado estático",
    ],
    en: [
      "Astro for static site generation",
      "React for interactive components",
      "Tailwind CSS for styling",
      "Markdown for content",
      "TypeScript for type safety",
    ],
    ru: [
      "Astro для генерации статических сайтов",
      "React для интерактивных компонентов",
      "Tailwind CSS для стилизации",
      "Markdown для контента",
      "TypeScript для безопасности типов",
    ],
    zh: [
      "Astro 用于静态站点生成",
      "React 用于交互组件",
      "Tailwind CSS 用于样式",
      "Markdown 用于内容",
      "TypeScript 用于类型安全",
    ],
  },
};
