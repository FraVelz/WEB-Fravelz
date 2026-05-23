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
      "Monorepo de retos de Frontend Mentor con App Router. Hub de challenges " +
      "aislados por ruta, datos tipados y tests.",
    en: "Frontend Mentor challenges monorepo with App Router. Isolated challenge hub, typed data, and tests.",
    ru: "Монорепо заданий Frontend Mentor с App Router. Хаб изолированных челленджей, типизированные данные, тесты.",
    zh: "基于 App Router 的 Frontend Mentor 挑战单仓库。独立挑战中心、类型化数据与测试。",
  },
  featuredImage: frontendMentorNextImg,
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
  category: "frontend",
  githubUrl: "https://github.com/FraVelz/Frontend-Mentor-Nextjs",
  demoUrl: "https://frontend-mentor-nextjs-one.vercel.app/",
  featured: false,
  year: 2026,
  inDevelopment: true,
  screenshots: [image1, image2, image3, image4],
  fullDescription: {
    es:
      "Aplicación Next.js 16 con React 19 para retos de Frontend Mentor: " +
      "estructura por challenge (assets, rutas y estilos aislados), índice de dificultades " +
      "y estados, y convenciones documentadas en el repositorio. Reglas de lint/formato.",
    en:
      "Next.js 16 app with React 19 for Frontend Mentor challenges: per-challenge structure " +
      "(isolated assets, routes, and styles), difficulty and status index, and " +
      "repo-documented conventions. Lint/format rules.",
    ru:
      "Приложение Next.js 16 с React 19 для заданий Frontend Mentor: структура по челленджу " +
      "(изолированные ассеты, маршруты и стили), индекс сложностей и статусов, соглашения " +
      "в репозитории. Правила линта и форматирования.",
    zh:
      "基于 Next.js 16 与 React 19 的 Frontend Mentor 挑战应用：按挑战划分结构（独立资源、" +
      "路由与样式）、难度与状态索引，以及仓库内约定；含 lint / 格式化规则。",
  },
  whatILearned: {
    es: [
      "App Router y layouts anidados por grupo de rutas",
      "Aislar retos en carpetas para no mezclar estilos ni recursos",
      "Datos del índice tipados (tipos union y constantes compartidas)",
    ],
    en: [
      "App Router and nested layouts per route group",
      "Isolating challenges in folders to avoid style/resource collisions",
      "Typed index data (union types and shared constants)",
    ],
    ru: [
      "App Router и вложенные layout по группам маршрутов",
      "Изоляция челленджей в папках, чтобы не смешивать стили и ресурсы",
      "Типизированные данные индекса (объединения типов и общие константы)",
    ],
    zh: [
      "应用路由与按路由组嵌套的布局",
      "在文件夹中隔离挑战，避免样式与资源混淆",
      "类型化索引数据（联合类型与共享常量）",
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
