import type { Project } from "../project-types";
import icfesMasterImg from "@/assets/images-projects/icfes-master/index.webp";

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
      "Plataforma interactiva para el ICFES (Saber 11): práctica por áreas, simulacros, " +
      "gamificación y progreso. Next.js 15, React 19, Supabase y arquitectura por features.",
    en:
      "Interactive ICFES (Saber 11) prep: practice by area, mock exams, gamification, " +
      "and progress. Next.js 15, React 19, Supabase, feature-based architecture.",
    ru:
      "Интерактивная подготовка к ICFES (Saber 11): практика по предметам, пробные экзамены, " +
      "геймификация и прогресс. Next.js 15, React 19, Supabase, feature-based архитектура.",
    zh:
      "ICFES（Saber 11）互动备考：分科练习、模拟考、游戏化与进度跟踪。" +
      "Next.js 15、React 19、Supabase、功能模块化架构。",
  },
  featuredImage: icfesMasterImg,
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
      "Plataforma interactiva para practicar preguntas y estudiar temas del examen de estado " +
      "ICFES (Saber 11) en Colombia. Arquitectura Feature-Based y Atomic Design con Next.js 15, " +
      "React 19, Tailwind CSS y Supabase. Tres niveles de aprendizaje (bases, exámenes por materia, " +
      "simulacro global de 200 preguntas en 3 horas), práctica por áreas (Matemáticas, Lenguaje, " +
      "Ciencias Naturales, Ciencias Sociales, Inglés), material de estudio, temporizador configurable, " +
      "seguimiento de estadísticas, desafíos diarios y clasificación, autenticación con email y Google, " +
      "gamificación con más de 40 logros, planes de suscripción (Gratis, Pro, Premium, Anual), " +
      "retroalimentación con explicaciones, contenido multimedia (imágenes, tablas, fórmulas con KaTeX) " +
      "e integración con la API de OpenAI. Parte del contenido y la lógica de logros siguen en evolución.",
    en:
      "Interactive platform to practice questions and learn topics for Colombia’s ICFES state exam " +
      "(Saber 11). Feature-Based and Atomic Design architecture with Next.js 15, React 19, " +
      "Tailwind CSS, and Supabase. Three learning levels (foundations, per-subject exams, full 200-question " +
      "3-hour mock), practice by area (Math, Language, Natural Sciences, Social Sciences, English), " +
      "study materials, configurable timer, statistics, daily challenges and leaderboard, " +
      "email and Google auth, 40+ achievement gamification, subscription tiers (Free, Pro, Premium, Annual), " +
      "feedback with explanations, multimedia (images, tables, KaTeX formulas), and OpenAI API integration. " +
      "Some content and achievement logic are still evolving.",
    ru:
      "Интерактивная платформа для подготовки к государственному экзамену ICFES (Saber 11) в Колумбии. " +
      "Архитектура Feature-Based и Atomic Design на Next.js 15, React 19, Tailwind CSS и Supabase. " +
      "Три уровня обучения, практика по предметам, полный пробный экзамен на 200 вопросов за 3 часа, " +
      "учебные материалы, таймер, статистика, ежедневные задания и таблица лидеров, вход по email и Google, " +
      "геймификация с 40+ достижениями, тарифы подписки, обратная связь с пояснениями, " +
      "мультимедиа (KaTeX) и интеграция OpenAI API. Часть контента и логики достижений ещё дорабатывается.",
    zh:
      "面向哥伦比亚 ICFES 国家考试（Saber 11）的互动刷题与学习平台。" +
      "采用 Feature-Based 与 Atomic Design，技术栈为 Next.js 15、React 19、Tailwind CSS 与 Supabase。" +
      "包含三个学习层级、分科练习、三小时 200 题全真模拟、学习资料、可配置计时、进度统计、每日挑战与排行榜、" +
      "邮箱与 Google 登录、40+ 成就体系、订阅方案（免费/Pro/Premium/年付）、详尽解析反馈、" +
      "多媒体与 KaTeX 公式，以及 OpenAI API 集成。部分内容与成就逻辑仍在完善中。",
  },
  whatILearned: {
    es: [
      "Organizar un producto grande con arquitectura por features y Atomic Design para escalar UI y dominio",
      "Autenticación y datos con Supabase (Auth email/Google y capa de servicios sobre la base)",
      "Estado global con Redux Toolkit en una app Next.js sin perder límites claros por módulo",
      "Contenido educativo rico: Markdown, fórmulas con KaTeX y assets multimedia en el mismo flujo",
      "Animaciones de interfaz con GSAP y acoplamiento controlado con React",
      "Integrar la API de OpenAI manteniendo límites de alcance (producto educativo vs. “para todo el mundo”)",
    ],
    en: [
      "Structuring a large product with feature-based folders plus Atomic Design to scale UI and domain",
      "Supabase for auth (email/password, Google) and a service layer on top of the database",
      "Redux Toolkit for global state in Next.js while keeping boundaries per feature",
      "Rich learning content: Markdown, KaTeX math, and multimedia in one rendering pipeline",
      "UI motion with GSAP and controlled coupling with React",
      "OpenAI API integration while scoping the product (ICFES vs. a generic “every country” exam tool)",
    ],
    ru: [
      "Крупный продукт: feature-based структура и Atomic Design для масштабирования UI и домена",
      "Supabase: аутентификация (email и Google) и слой сервисов над БД",
      "Redux Toolkit для глобального состояния в Next.js с чёткими границами фич",
      "Образовательный контент: Markdown, математика KaTeX и медиа в одном конвейере рендера",
      "Анимации интерфейса через GSAP и сдерживаемая связка с React",
      "Интеграция OpenAI API с осознанным ограничением scope (ICFES, не «все страны сразу»)",
    ],
    zh: [
      "用功能模块化目录 + Atomic Design 扩展大型教育产品与界面",
      "使用 Supabase 做邮箱/Google 认证并在数据库之上抽象服务层",
      "在 Next.js 中用 Redux Toolkit 管理全局状态，同时保持按功能划界",
      "富文本学习流：Markdown、KaTeX 公式与多媒体统一渲染",
      "用 GSAP 做动效并与 React 保持可控耦合",
      "接入 OpenAI API 时明确产品边界（聚焦 ICFES，而非泛化的多国考试工具）",
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
