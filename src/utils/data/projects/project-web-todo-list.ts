import type { Project } from "../project-types";
import webTodoListImg from "@/assets/images-projects/todo-list/index.webp";
import image2 from "@/assets/images-projects/todo-list/image2.webp";
import image3 from "@/assets/images-projects/todo-list/image3.webp";
import image4 from "@/assets/images-projects/todo-list/image4.webp";
import image5 from "@/assets/images-projects/todo-list/image5.webp";
import image6 from "@/assets/images-projects/todo-list/image6.webp";
import image7 from "@/assets/images-projects/todo-list/image7.webp";
import image8 from "@/assets/images-projects/todo-list/image8.webp";

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
      "Tareas con vistas Inbox, Hoy y Próximo, etiquetas y búsqueda — persistidas en PostgreSQL " +
      "y usables en modo claro u oscuro.",
    en:
      "Tasks with Inbox, Today, and Next views, tags, and search — stored in PostgreSQL " +
      "and usable in light or dark mode.",
    ru:
      "Задачи с видами «Входящие», «Сегодня» и «Далее», метками и поиском — в PostgreSQL, " +
      "со светлой и тёмной темой.",
    zh: "待办含收件箱、今天与下一步视图、标签与搜索——数据存 PostgreSQL，支持明暗主题。",
  },
  featuredImage: webTodoListImg,
  screenshots: [image2, image3, image4, image5, image6, image7, image8],
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
      "Gestor de tareas orientado a flujo diario: bandeja, Hoy, Próximo y completadas, con filtros, " +
      "etiquetas, buscador y barra lateral. Los datos viven en Prisma + PostgreSQL; el estado de UI " +
      "en Zustand; modales y controles sobre Radix. Tema claro/oscuro con tokens de Tailwind 4. " +
      "Hay modo demo sin credenciales y tests con Vitest + Testing Library sobre componentes y vistas.",
    en:
      "A daily-flow task app: inbox, Today, Next, and completed, with filters, tags, search, and a " +
      "sidebar. Data lives in Prisma + PostgreSQL; UI state in Zustand; modals and controls on Radix. " +
      "Light/dark themes use Tailwind 4 tokens. Includes a no-credentials demo mode and Vitest + " +
      "Testing Library coverage for components and views.",
    ru:
      "Список задач под дневной поток: входящие, «Сегодня», «Далее» и выполненные; фильтры, метки, " +
      "поиск и боковая панель. Данные — Prisma + PostgreSQL; UI-состояние — Zustand; модалки на Radix. " +
      "Светлая/тёмная тема на токенах Tailwind 4. Есть демо без логина и тесты Vitest + Testing Library.",
    zh:
      "面向日常流程的待办：收件箱、今天、下一步与已完成，含筛选、标签、搜索与侧边栏。" +
      "数据用 Prisma + PostgreSQL；UI 状态用 Zustand；弹层基于 Radix。明暗主题用 Tailwind 4 令牌。" +
      "含免登录演示模式，以及 Vitest + Testing Library 的组件与页面测试。",
  },
  whatILearned: {
    es: [
      "Montar migraciones, seed y scripts de Prisma dentro de un App Router real",
      "Dejar el estado de listas y filtros en Zustand y no arrastrar un store global pesado",
      "Modales accesibles (foco, Escape, overlay) con primitivas Radix",
      "Cubrir rutas y componentes con Vitest + Testing Library en jsdom",
      "Unificar tokens de color para que claro/oscuro no se sienta como dos apps distintas",
    ],
    en: [
      "Wire Prisma migrations, seed, and scripts inside a real App Router app",
      "Keep list and filter state in Zustand instead of a heavy global store",
      "Accessible modals (focus, Escape, overlay) on Radix primitives",
      "Cover routes and components with Vitest + Testing Library in jsdom",
      "Unify color tokens so light/dark do not feel like two different apps",
    ],
    ru: [
      "Миграции, seed и скрипты Prisma внутри реального App Router",
      "Состояние списков и фильтров в Zustand, без тяжёлого глобального store",
      "Доступные модалки (фокус, Escape, overlay) на примитивах Radix",
      "Тесты маршрутов и компонентов: Vitest + Testing Library в jsdom",
      "Единые цветовые токены, чтобы светлая и тёмная тема не расходились",
    ],
    zh: [
      "在真实 App Router 应用中接入 Prisma 迁移、种子与脚本",
      "用 Zustand 管列表与筛选状态，避免沉重的全局 store",
      "基于 Radix 原语做可访问弹层（焦点、Escape、遮罩）",
      "用 Vitest + Testing Library（jsdom）覆盖路由与组件",
      "统一颜色令牌，让明暗主题不像两套产品",
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
