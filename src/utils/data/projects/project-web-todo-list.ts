import type { Project } from "../project-types";
import webTodoListImg from "@/assets/images-projects/todo-list/index.webp";
import image2 from "@/assets/images-projects/todo-list/image2.webp";
import image3 from "@/assets/images-projects/todo-list/image3.webp";
import image4 from "@/assets/images-projects/todo-list/image4.webp";
import image5 from "@/assets/images-projects/todo-list/image5.webp";

export const projectWebTodoList: Project = {
  slug: "web-todo-list",
  title: {
    es: "WEB To-Do List",
    en: "WEB To-Do List",
    ru: "WEB To-Do List",
    zh: "WEB 待办清单",
  },
  shortDescription: {
    es:
      "Gestor de tareas con Next.js 16 y React 19. Prisma y PostgreSQL, Zustand, Radix UI, " +
      "Tailwind CSS 4, modo oscuro y tests con Vitest.",
    en:
      "Task app with Next.js 16 and React 19. Prisma and PostgreSQL, Zustand, Radix UI, " +
      "Tailwind CSS 4, dark mode, and Vitest tests.",
    ru:
      "Список задач на Next.js 16 и React 19. Prisma и PostgreSQL, Zustand, Radix UI, " +
      "Tailwind CSS 4, тёмная тема и тесты на Vitest.",
    zh:
      "基于 Next.js 16 与 React 19 的待办应用。Prisma 与 PostgreSQL、Zustand、Radix UI、" +
      "Tailwind CSS 4、深色模式，以及 Vitest 测试。",
  },
  featuredImage: webTodoListImg,
  screenshots: [image2, image3, image4, image5],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Zustand",
    "Radix UI",
    "Vitest",
  ],
  category: "fullstack",
  demoUrl: "https://web-to-do-list-pi.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-To-do-List",
  featured: false,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Aplicación de gestión de tareas con Next.js 16, React 19 y TypeScript. " +
      "Persistencia con Prisma y PostgreSQL; estado global con Zustand; componentes accesibles con Radix UI; " +
      "estilos con Tailwind CSS 4 (tema claro y oscuro). " +
      "Incluye bandeja de entrada, vistas Hoy y Próximo, completadas, buscador, filtros y etiquetas, " +
      "modales para crear y editar, y barra lateral. Calidad asegurada con Vitest y Testing Library. " +
      "Proyecto de uso educativo.",
    en:
      "Task management app built with Next.js 16, React 19, and TypeScript. " +
      "Persistence via Prisma and PostgreSQL; Zustand for state; Radix UI for accessible components; " +
      "Tailwind CSS 4 with light and dark themes. " +
      "Features inbox, Today and Next views, completed tasks, search, filters and tags, " +
      "create/edit modals, and a sidebar. Quality checks with Vitest and Testing Library. " +
      "Educational project.",
    ru:
      "Приложение для задач на Next.js 16, React 19 и TypeScript. " +
      "Данные через Prisma и PostgreSQL; состояние — Zustand; доступные компоненты — Radix UI; " +
      "стили Tailwind CSS 4 со светлой и тёмной темой. " +
      "Входящие, «Сегодня» и «Далее», выполненные задачи, поиск, фильтры и метки, модальные окна, боковая панель. " +
      "Тесты на Vitest и Testing Library. Образовательный проект.",
    zh:
      "使用 Next.js 16、React 19 与 TypeScript 开发的任务管理应用。" +
      "通过 Prisma 与 PostgreSQL 持久化；Zustand 管理状态；Radix UI 提供可访问组件；Tailwind CSS 4 支持明暗主题。" +
      "包含收件箱、今天、下一步、已完成、搜索、筛选与标签、创建/编辑弹窗与侧边栏。" +
      "使用 Vitest 与 Testing Library 保障质量。教育用途项目。",
  },
  whatILearned: {
    es: [
      "Persistencia real con Prisma y PostgreSQL dentro del ecosistema Next.js (migraciones, seed, scripts npm)",
      "Cuándo preferir Zustand frente a Redux para estado de UI y datos cacheados en cliente",
      "Construir modales, diálogos y controles accesibles sobre primitivas de Radix UI",
      "Flujo de tests con Vitest, Testing Library y jsdom para componentes y rutas",
      "Temas claro/oscuro y tokens de Tailwind 4 coherentes en toda la app",
    ],
    en: [
      "End-to-end persistence with Prisma and PostgreSQL in Next.js (migrations, seed, npm scripts)",
      "When Zustand beats Redux for UI state and lightly cached client data",
      "Accessible modals, dialogs, and controls built on Radix primitives",
      "Vitest + Testing Library + jsdom workflows for components and views",
      "Light/dark theming with consistent Tailwind 4 tokens across the UI",
    ],
    ru: [
      "Сквозная персистентность: Prisma + PostgreSQL в Next.js (миграции, seed, npm-скрипты)",
      "Zustand vs Redux: лёгкое клиентское состояние и кэш UI",
      "Доступные модалки и контролы на примитивах Radix UI",
      "Vitest, Testing Library и jsdom для компонентов и экранов",
      "Светлая/тёмная тема и согласованные токены Tailwind 4",
    ],
    zh: [
      "在 Next.js 中用 Prisma + PostgreSQL 打通持久化（迁移、种子、npm 脚本）",
      "相较 Redux，更宜用 Zustand 管理轻量 UI 状态与客户端缓存的场景",
      "基于 Radix 原语实现可访问的弹层与控件",
      "Vitest + Testing Library + jsdom 的组件与页面测试流程",
      "Tailwind 4 设计令牌贯穿明暗主题，保证视觉一致",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Prisma 7, @prisma/adapter-pg y controlador pg hacia PostgreSQL",
      "Zustand para estado del cliente",
      "Radix UI (paquete umbrella radix-ui) y sonner para notificaciones",
      "Tailwind CSS 4, cva (class-variance-authority), tailwind-merge y clsx",
      "Vitest 4, @vitest/coverage-v8, Testing Library, jsdom",
      "Scripts: db:push, db:migrate, db:seed (Prisma)",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Prisma 7 with @prisma/adapter-pg and the pg driver for PostgreSQL",
      "Zustand for client state",
      "Radix UI (umbrella `radix-ui` package) plus sonner toasts",
      "Tailwind CSS 4, class-variance-authority, tailwind-merge, clsx",
      "Vitest 4, @vitest/coverage-v8, Testing Library, jsdom",
      "npm scripts: db:push, db:migrate, db:seed",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Prisma 7, @prisma/adapter-pg и драйвер pg → PostgreSQL",
      "Zustand",
      "Radix UI и sonner для тостов",
      "Tailwind CSS 4, class-variance-authority, tailwind-merge, clsx",
      "Vitest 4, @vitest/coverage-v8, Testing Library, jsdom",
      "Скрипты Prisma: db:push, db:migrate, db:seed",
    ],
    zh: [
      "Next.js 16（应用路由）、React 19、TypeScript",
      "Prisma 7、@prisma/adapter-pg 与 pg 连接 PostgreSQL",
      "Zustand 客户端状态",
      "Radix UI（radix-ui 合集包）与 sonner 提示",
      "Tailwind CSS 4、class-variance-authority、tailwind-merge、clsx",
      "Vitest 4、@vitest/coverage-v8、Testing Library、jsdom",
      "npm 脚本：db:push、db:migrate、db:seed",
    ],
  },
};
