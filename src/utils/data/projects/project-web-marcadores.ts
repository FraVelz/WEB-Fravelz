import type { Project } from "../project-types";
import WebMarcadoresImg from "@/assets/images-projects/marcadores/index.webp";

export const projectWebMarcadores: Project = {
  slug: "web-marcadores",
  title: {
    es: "Marcadores",
    en: "Bookmarks",
    ru: "Закладки",
    zh: "书签",
  },
  shortDescription: {
    es:
      "Gestor de favoritos con Next.js y Supabase: vista tipo explorador oscuro, carpetas, etiquetas, " +
      "búsqueda y página de atajos; modo demo sin cuenta (memoria en sesión o ruta `/demo`).",
    en:
      "Bookmark manager with Next.js and Supabase: dark explorer-style view, folders, tags, search " +
      "and shortcuts page; demo mode without an account (in-session memory or `/demo` route).",
    ru:
      "Менеджер закладок на Next.js и Supabase: тёмный интерфейс в стиле проводника, папки, теги, " +
      "поиск и страница горячих клавиш; демо без входа (данные в памяти сессии или маршрут `/demo`).",
    zh:
      "基于 Next.js 与 Supabase 的书签管理：深色资源管理器式界面、文件夹、标签、搜索与快捷键页；" +
      "支持免登录演示（会话内存或 `/demo` 路由）。",
  },
  featuredImage: WebMarcadoresImg,
  technologies: ["Next.js", "React", "Supabase", "Tailwind CSS", "TypeScript"],
  category: "fullstack",
  demoUrl: "https://web-marcadores.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-Marcadores",
  featured: false,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Aplicación full stack con App Router (`src/app`): login, `/marcadores`, `/atajos`, `/perfil` y `/demo`. " +
      "Autenticación y datos con Supabase usando `@supabase/ssr`; el middleware protege el dashboard, " +
      "permite modo demo con cookie `demo_session` o si faltan credenciales, y redirige `/demo` a la vista principal. " +
      "La demo usa datos de ejemplo en memoria (`demo-data`). Interfaz tipo explorador (árbol + rejilla), " +
      "modal de marcadores, autocompletado de etiquetas y scripts auxiliares (exportar marcadores, SQL de tabla, " +
      "generación de descripciones con OpenAI cuando hay API key). Estilos con Tailwind CSS v4; React Compiler activado en `next.config`.",
    en:
      "Full-stack app using the App Router (`src/app`): login, `/marcadores`, `/atajos`, `/perfil`, and `/demo`. " +
      "Supabase auth and persistence via `@supabase/ssr`; middleware guards the dashboard, enables demo mode " +
      "via `demo_session` cookie or missing credentials, and sends `/demo` into the main view. " +
      "Demo uses in-memory sample data (`demo-data`). Explorer-like UI (tree + grid), bookmark modal, tag autocomplete, " +
      "and helper scripts (export bookmarks, table SQL, OpenAI-backed descriptions when configured). " +
      "Tailwind CSS v4 styling; React Compiler enabled in `next.config`.",
    ru:
      "Full stack-приложение на App Router (`src/app`): вход, `/marcadores`, `/atajos`, `/perfil`, `/demo`. " +
      "Аутентификация и данные в Supabase через `@supabase/ssr`; middleware закрывает дашборд, включает демо " +
      "по cookie `demo_session` или без учётных данных и перенаправляет `/demo` в основной интерфейс. " +
      "Демо держит примерные данные в памяти (`demo-data`). Интерфейс как проводник (дерево + сетка), модалка закладок, " +
      "автодополнение тегов и вспомогательные скрипты (экспорт закладок, SQL таблицы, описания через OpenAI при наличии ключа). " +
      "Стили Tailwind CSS v4; в `next.config` включён React Compiler.",
    zh:
      "基于 App Router（`src/app`）的全栈应用：登录、`/marcadores`、`/atajos`、`/perfil`、`/demo`。" +
      "通过 `@supabase/ssr` 使用 Supabase 认证与数据；中间件保护控制台，支持 `demo_session` Cookie 或缺少凭据时的演示模式，" +
      "并将 `/demo` 重定向到主界面。演示数据在内存中（`demo-data`）。资源管理器式界面（树 + 网格）、书签弹窗、标签自动补全，" +
      "以及辅助脚本（导出书签、建表 SQL、配置 OpenAI 时可生成描述）。使用 Tailwind CSS v4；`next.config` 启用 React Compiler。",
  },
  whatILearned: {
    es: [
      "proteger rutas y modo demo con middleware de Next y cookies (`@supabase/ssr`)",
      "modelar UI tipo explorador con estado compartido (contexto del dashboard)",
      "combinar Tailwind v4 con flujos de modal, breadcrumb y teclado en el grid de marcadores",
    ],
    en: [
      "Guarding routes and demo mode with Next middleware and cookies (`@supabase/ssr`)",
      "Modeling an explorer-style UI with shared dashboard context",
      "Pairing Tailwind v4 with modal, breadcrumb, and keyboard flows on the bookmark grid",
    ],
    ru: [
      "Защита маршрутов и демо через middleware Next и cookies (`@supabase/ssr`)",
      "Интерфейс в стиле проводника с общим контекстом дашборда",
      "Tailwind v4 вместе с модалками, breadcrumb и клавиатурой в сетке закладок",
    ],
    zh: [
      "使用 Next 中间件与 Cookie（`@supabase/ssr`）保护路由并支持演示模式",
      "用共享仪表盘上下文实现资源管理器式界面",
      "在书签网格中结合 Tailwind v4、弹窗面包屑与键盘操作",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, `reactCompiler: true`",
      "Supabase: `@supabase/supabase-js` + `@supabase/ssr` en cliente y middleware",
      "Demo: sin `.env.local` o `NEXT_PUBLIC_DEMO_MODE=true`; datos en `src/lib/demo-data.ts`",
      "Tailwind CSS v4 (`@tailwindcss/postcss`) y utilidades `clsx` / `tailwind-merge`",
      "Scripts: `fetch:bookmarks`, `db:create-table`, `db:sql`, `descriptions:generate` (dotenv + tsx)",
    ],
    en: [
      "Next.js 16 (App Router), React 19, `reactCompiler: true`",
      "Supabase: `@supabase/supabase-js` + `@supabase/ssr` in client and middleware",
      "Demo: missing `.env.local` or `NEXT_PUBLIC_DEMO_MODE=true`; sample data in `src/lib/demo-data.ts`",
      "Tailwind CSS v4 (`@tailwindcss/postcss`) with `clsx` / `tailwind-merge`",
      "Scripts: `fetch:bookmarks`, `db:create-table`, `db:sql`, `descriptions:generate` (dotenv + tsx)",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, `reactCompiler: true`",
      "Supabase: `@supabase/supabase-js` + `@supabase/ssr` в клиенте и middleware",
      "Демо: нет `.env.local` или `NEXT_PUBLIC_DEMO_MODE=true`; данные в `src/lib/demo-data.ts`",
      "Tailwind CSS v4 (`@tailwindcss/postcss`), `clsx` / `tailwind-merge`",
      "Скрипты: `fetch:bookmarks`, `db:create-table`, `db:sql`, `descriptions:generate` (dotenv + tsx)",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、`reactCompiler: true`",
      "Supabase：`@supabase/supabase-js` + `@supabase/ssr`（客户端与中间件）",
      "演示：无 `.env.local` 或 `NEXT_PUBLIC_DEMO_MODE=true`；示例数据见 `src/lib/demo-data.ts`",
      "Tailwind CSS v4（`@tailwindcss/postcss`）及 `clsx` / `tailwind-merge`",
      "脚本：`fetch:bookmarks`、`db:create-table`、`db:sql`、`descriptions:generate`（dotenv + tsx）",
    ],
  },
};
