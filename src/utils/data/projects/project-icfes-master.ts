import type { Project } from "../project-types";
import icfesMasterImg from "@/assets/images-projects/icfes-master/index.webp";
import image1 from "@/assets/images-projects/icfes-master/image1.webp";
import image2 from "@/assets/images-projects/icfes-master/image2.webp";
import image3 from "@/assets/images-projects/icfes-master/image3.webp";
import image4 from "@/assets/images-projects/icfes-master/image4.webp";
import image5 from "@/assets/images-projects/icfes-master/image5.webp";
import image6 from "@/assets/images-projects/icfes-master/image6.webp";
import image7 from "@/assets/images-projects/icfes-master/image7.webp";

export const projectIcfesMaster: Project = {
  slug: "icfes-master",
  title: {
    es: "ICFES Master",
    en: "ICFES Master",
    ru: "ICFES Master",
    zh: "ICFES Master",
  },
  shortDescription: {
    es:
      "Prepárate para Saber 11° con práctica por áreas, simulacros cronometrados y seguimiento " +
      "de progreso pensado para estudiantes en Colombia.",
    en:
      "Saber 11° prep with practice by subject, timed mock exams, and progress tracking " +
      "built for students in Colombia.",
    ru:
      "Подготовка к Saber 11°: практика по предметам, пробные экзамены на время и отслеживание " +
      "прогресса для школьников в Колумбии.",
    zh: "面向哥伦比亚 Saber 11° 的备考：分科练习、限时模拟考与进度跟踪，专为学生设计。",
  },
  featuredImage: icfesMasterImg,
  screenshots: [image1, image2, image3, image4, image5, image6, image7],
  technologies: [
    "Next.js",
    "React",
    "Supabase",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "GSAP",
    "KaTeX",
    "OpenAI API",
  ],
  category: "fullstack",
  demoUrl: "https://icfes-master.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-ICFES-Master",
  featured: true,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "App para practicar el ICFES (Saber 11) con tres capas: bases por competencia, exámenes por " +
      "materia y un simulacro global de 200 preguntas en 3 horas. Cubre Matemáticas, Lectura Crítica, " +
      "Ciencias Naturales, Sociales e Inglés, con temporizador, estadísticas, desafíos diarios y " +
      "clasificación. Login con email o Google (Supabase), más de 40 logros, planes Gratis/Pro/Premium, " +
      "explicaciones por pregunta, fórmulas con KaTeX y apoyo puntual con OpenAI. Parte del banco de " +
      "preguntas y de los logros sigue creciendo.",
    en:
      "An ICFES (Saber 11) practice app with three layers: foundations by competency, per-subject " +
      "exams, and a full 200-question mock in 3 hours. Covers Math, Critical Reading, Natural Sciences, " +
      "Social Studies, and English, with a timer, stats, daily challenges, and a leaderboard. Email or " +
      "Google login via Supabase, 40+ achievements, Free/Pro/Premium plans, per-question explanations, " +
      "KaTeX formulas, and scoped OpenAI help. The question bank and achievements are still growing.",
    ru:
      "Приложение для подготовки к ICFES (Saber 11) с тремя уровнями: основы по компетенциям, " +
      "экзамены по предметам и полный пробный на 200 вопросов за 3 часа. Математика, критическое " +
      "чтение, естественные и социальные науки, английский; таймер, статистика, ежедневные задания " +
      "и рейтинг. Вход по email или Google (Supabase), 40+ достижений, тарифы Free/Pro/Premium, " +
      "пояснения к ответам, формулы KaTeX и точечная помощь OpenAI. Банк вопросов и достижения ещё растут.",
    zh:
      "ICFES（Saber 11）练习应用，分三层：按能力打基础、分科测验，以及三小时 200 题全真模拟。" +
      "覆盖数学、批判性阅读、自然科学、社会科学与英语；含计时、统计、每日挑战与排行榜。" +
      "邮箱或 Google 登录（Supabase）、40+ 成就、免费/Pro/Premium 方案、逐题解析、KaTeX 公式，" +
      "以及有边界的 OpenAI 辅助。题库与成就仍在扩充。",
  },
  whatILearned: {
    es: [
      "Partir el producto por áreas de estudio (no por páginas sueltas) para que cada materia escale sola",
      "Auth y datos con Supabase sin mezclar reglas de negocio en el cliente",
      "Redux Toolkit solo donde el progreso y la sesión cruzan varias pantallas",
      "Renderizar Markdown + KaTeX + imágenes en el mismo flujo de pregunta",
      "GSAP para feedback de aciertos/fallos sin saturar la UI de estudio",
      "Limitar OpenAI al ICFES colombiano en vez de un “examen genérico mundial”",
    ],
    en: [
      "Split the product by study areas (not loose pages) so each subject can grow on its own",
      "Supabase auth and data without burying business rules in the client",
      "Redux Toolkit only where progress and session cross multiple screens",
      "Render Markdown + KaTeX + images in one question pipeline",
      "GSAP for correct/incorrect feedback without cluttering the study UI",
      "Scope OpenAI to Colombian ICFES instead of a generic “every country” exam tool",
    ],
    ru: [
      "Делить продукт по учебным областям, а не по разрозненным страницам",
      "Auth и данные в Supabase без бизнес-логики в клиенте",
      "Redux Toolkit только там, где прогресс и сессия пересекают экраны",
      "Один пайплайн вопроса: Markdown + KaTeX + изображения",
      "GSAP для обратной связи без перегруза учебного UI",
      "Ограничить OpenAI колумбийским ICFES, а не «экзаменом для всех стран»",
    ],
    zh: [
      "按学科域拆分产品（而非零散页面），让每科可独立扩展",
      "用 Supabase 做认证与数据，避免把业务规则堆在客户端",
      "仅在进度与会话跨多屏时使用 Redux Toolkit",
      "在同一题目流水线中渲染 Markdown、KaTeX 与图片",
      "用 GSAP 做对错反馈，避免学习界面过载",
      "把 OpenAI 限定在哥伦比亚 ICFES，而不是泛化的多国考试工具",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, clsx y tailwind-merge para clases condicionales",
      "Supabase JS: autenticación y cliente para datos",
      "@reduxjs/toolkit y react-redux",
      "GSAP y @gsap/react para animaciones",
      "react-markdown; KaTeX y react-katex para fórmulas",
      "SDK openai para integraciones basadas en IA",
    ],
    en: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, clsx, tailwind-merge for conditional classes",
      "Supabase JS client for auth and data access",
      "@reduxjs/toolkit and react-redux",
      "GSAP and @gsap/react for animations",
      "react-markdown; KaTeX and react-katex for math",
      "openai SDK for AI-backed features",
    ],
    ru: [
      "Next.js 15 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, clsx, tailwind-merge",
      "Supabase JS: аутентификация и данные",
      "@reduxjs/toolkit и react-redux",
      "GSAP и @gsap/react",
      "react-markdown; KaTeX и react-katex",
      "Пакет openai для функций на базе ИИ",
    ],
    zh: [
      "Next.js 15（应用路由）、React 19、TypeScript",
      "Tailwind CSS 4、clsx、tailwind-merge",
      "Supabase JS：认证与数据访问",
      "@reduxjs/toolkit 与 react-redux",
      "GSAP 与 @gsap/react",
      "react-markdown；KaTeX 与 react-katex",
      "openai SDK 支撑 AI 相关能力",
    ],
  },
};
