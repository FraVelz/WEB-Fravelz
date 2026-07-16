import type { Project } from "../project-types";

import frontendMentorNextImg from "@/assets/images-projects/frontend-mentor/index.webp";
import image1 from "@/assets/images-projects/frontend-mentor/image1.webp";
import image2 from "@/assets/images-projects/frontend-mentor/image2.webp";
import image3 from "@/assets/images-projects/frontend-mentor/image3.webp";
import image4 from "@/assets/images-projects/frontend-mentor/image4.webp";

export const projectFrontendMentorNextjs: Project = {
  slug: "frontend-mentor-nextjs",
  title: {
    es: "Frontend Mentor (Next.js)",
    en: "Frontend Mentor (Next.js)",
    ru: "Frontend Mentor (Next.js)",
    zh: "Frontend Mentor（Next.js）",
  },
  shortDescription: {
    es:
      "Hub de retos Frontend Mentor: cada challenge en su ruta, con preview, badges " + "de dificultad/estado y tests.",
    en:
      "Frontend Mentor challenge hub: each challenge on its own route, with preview, " +
      "difficulty/status badges, and tests.",
    ru:
      "Хаб челленджей Frontend Mentor: каждый на своём маршруте, с превью, " + "бейджами сложности/статуса и тестами.",
    zh: "Frontend Mentor 挑战中心：每个挑战独立路由，含预览、难度/状态徽章与测试。",
  },
  featuredImage: frontendMentorNextImg,
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
  category: "frontend",
  githubUrl: "https://github.com/FraVelz/Frontend-Mentor-Nextjs",
  demoUrl: "https://frontend-mentor-nextjs-one.vercel.app/",
  featured: false,
  year: 2026,
  inDevelopment: true,
  honesty: ["lab"],
  screenshots: [image1, image2, image3, image4],
  fullDescription: {
    es:
      "Colección de retos Frontend Mentor en Next.js: cada challenge vive en su carpeta " +
      "(assets, rutas y estilos propios), el índice muestra dificultad y estado, y /start " +
      "explica las dos webs vinculadas. Incluye enlace a preview, solución en FM y repo.",
    en:
      "A Frontend Mentor challenge collection in Next.js: each challenge lives in its own " +
      "folder (assets, routes, styles), the index shows difficulty and status, and /start " +
      "explains the two related sites. Links to preview, FM solution, and repo.",
    ru:
      "Сборник челленджей Frontend Mentor на Next.js: каждый в своей папке (ассеты, маршруты, " +
      "стили), индекс показывает сложность и статус, /start объясняет два связанных сайта. " +
      "Ссылки на превью, решение FM и репозиторий.",
    zh:
      "Next.js 上的 Frontend Mentor 挑战合集：每个挑战独立文件夹（资源、路由、样式），" +
      "索引显示难度与状态，/start 说明两个关联站点。含预览、FM 方案与仓库链接。",
  },
  whatILearned: {
    es: [
      "Layouts anidados por grupo de rutas para no mezclar shells entre retos",
      "Aislar CSS y assets por challenge para que un reto no rompa otro",
      "Tipar el índice con unions y constantes compartidas",
    ],
    en: [
      "Nested layouts per route group so challenge shells do not mix",
      "Isolate CSS and assets per challenge so one does not break another",
      "Type the index with unions and shared constants",
    ],
    ru: [
      "Вложенные layout по группам маршрутов, чтобы оболочки челленджей не смешивались",
      "Изолировать CSS и ассеты по челленджу, чтобы один не ломал другой",
      "Типизировать индекс через unions и общие константы",
    ],
    zh: [
      "按路由组嵌套 layout，避免挑战壳层互相污染",
      "按挑战隔离 CSS 与资源，避免一个弄坏另一个",
      "用联合类型与共享常量给索引做类型",
    ],
  },
  extraInfo: {
    es: [
      "Cada reto incluye vista previa, solución en Frontend Mentor y código en GitHub.",
      "Cada reto tiene badge de dificultad y de estado; incluye descripción y etiquetas.",
      "En cada reto hay un elemento visible solo con teclado (Tab/Mayús+Tab) para volver al inicio.",
      "En /start se muestran las dos webs vinculadas a Frontend Mentor y qué diferencia a cada una.",
    ],
    en: [
      "Each challenge includes a preview, Frontend Mentor submission, and GitHub code.",
      "Each challenge has difficulty and status badges, plus description and tags.",
      "Inside each challenge, an element reached with Tab or Shift+Tab returns you to the start.",
      "/start summarizes the two Frontend Mentor–related sites and how they differ.",
    ],
    ru: [
      "У каждого челленджа есть превью, решение на Frontend Mentor и код на GitHub.",
      "У каждого челленджа есть бейджи сложности и статуса, а также описание и теги.",
      "Внутри челленджа есть элемент, видимый только с клавиатуры (Tab/Shift+Tab), чтобы вернуться к началу.",
      "На /start показаны два связанных с Frontend Mentor сайта и чем они отличаются.",
    ],
    zh: [
      "每个挑战包含预览、Frontend Mentor 上的提交方案与 GitHub 代码链接。",
      "每个挑战有难度与状态徽章，并附描述与标签。",
      "每个挑战内有无障碍键盘入口（Tab/Shift+Tab）可返回起始位置。",
      "/start 介绍两个与 Frontend Mentor 相关的站点及各是什么、有何不同。",
    ],
  },
  technicalDetails: {
    es: ["Next.js 16 (App Router), React 19, TypeScript 5", "Tailwind CSS 4", "ESLint, Prettier, Vitest"],
    en: ["Next.js 16 (App Router), React 19, TypeScript 5", "Tailwind CSS 4", "ESLint, Prettier, Vitest"],
    ru: ["Next.js 16 (App Router), React 19, TypeScript 5", "Tailwind CSS 4", "ESLint, Prettier, Vitest"],
    zh: ["Next.js 16（应用路由）、React 19、TypeScript 5", "Tailwind CSS 4", "ESLint、Prettier、Vitest"],
  },
};
