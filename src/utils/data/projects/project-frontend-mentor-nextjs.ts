import type { Project } from "../project-types";
import frontendMentorNextImg from "@/assets/images-projects/web-frontend-mentor-nextjs.png";

export const projectFrontendMentorNextjs: Project = {
  slug: "frontend-mentor-nextjs",
  title: {
    es: "Frontend Mentor (Next.js)",
    en: "Frontend Mentor (Next.js)",
    ru: "Frontend Mentor (Next.js)",
    zh: "Frontend Mentor（Next.js）",
  },
  shortDescription: {
    es: "Monorepo de retos de Frontend Mentor con App Router. Hub de challenges aislados por ruta, datos tipados y tests.",
    en: "Frontend Mentor challenges monorepo with App Router. Isolated challenge hub, typed data, and tests.",
    ru: "Монорепо заданий Frontend Mentor с App Router. Хаб изолированных челленджей, типизированные данные, тесты.",
    zh: "基于 App Router 的 Frontend Mentor 挑战单仓库。独立挑战中心、类型化数据与测试。",
  },
  featuredImage: frontendMentorNextImg,
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
  category: "frontend",
  githubUrl: "https://github.com/FraVelz/Frontend-Mentor-Nextjs",
  demoUrl: "https://frontend-mentor-nextjs-one.vercel.app/",
  featured: true,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es: "Aplicación Next.js 16 con React 19 para practicar retos de Frontend Mentor: estructura por challenge (assets, rutas y estilos aislados), índice de dificultades y estados, y convenciones documentadas en el repositorio. Incluye pruebas con Vitest y reglas de lint/formato.",
    en: "Next.js 16 app with React 19 to practice Frontend Mentor challenges: per-challenge structure (isolated assets, routes, and styles), difficulty and status index, and repo-documented conventions. Includes Vitest tests and lint/format rules.",
    ru: "Приложение Next.js 16 с React 19 для заданий Frontend Mentor: структура по челленджу (изолированные ассеты, маршруты, стили), индекс сложностей и статусов, соглашения в репозитории. Тесты Vitest, lint и форматирование.",
    zh: "用于 Frontend Mentor 练习的 Next.js 16 与 React 19 应用：按挑战划分的结构（独立资源、路由与样式）、难度与状态索引，以及仓库内约定。包含 Vitest 测试与代码规范。",
  },
  whatILearned: {
    es: [
      "App Router y layouts anidados por grupo de rutas",
      "Aislar retos en carpetas para no mezclar estilos ni recursos",
      "Datos de índice tipados (Uniones y constantes compartidas)",
    ],
    en: [
      "App Router and nested layouts per route group",
      "Isolating challenges in folders to avoid style/resource collisions",
      "Typed index data (unions and shared constants)",
    ],
    ru: [
      "App Router и вложенные layout по группам маршрутов",
      "Изоляция челленджей в папках, чтобы не смешивать стили и ресурсы",
      "Типизированные данные индекса (объединения и общие константы)",
    ],
    zh: [
      "应用路由与按路由组嵌套的布局",
      "在文件夹中隔离挑战，避免样式与资源混淆",
      "类型化索引数据（联合类型与共享常量）",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript 5",
      "Tailwind CSS 4, ESLint, Prettier, Vitest",
      "Estructura `public/challenges/{slug}/` y features por reto bajo `src/`",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript 5",
      "Tailwind CSS 4, ESLint, Prettier, Vitest",
      "`public/challenges/{slug}/` and per-challenge features under `src/`",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript 5",
      "Tailwind CSS 4, ESLint, Prettier, Vitest",
      "Структура `public/challenges/{slug}/` и features по челленджу в `src/`",
    ],
    zh: [
      "Next.js 16（应用路由）、React 19、TypeScript 5",
      "Tailwind CSS 4、ESLint、Prettier、Vitest",
      "结构 `public/challenges/{slug}/` 与 `src/` 下按挑战的功能代码",
    ],
  },
};
