import type { Project } from "../project-types";
import ayudandoAndoImg from "@/assets/images-projects/ayudando-ando/index.webp";
import image1 from "@/assets/images-projects/ayudando-ando/image1.webp";

export const projectAyudandoAndo: Project = {
  slug: "ayudando-ando",
  title: {
    es: "Ayudando-Ando",
    en: "Ayudando-Ando",
    ru: "Ayudando-Ando",
    zh: "Ayudando-Ando",
  },
  shortDescription: {
    es:
      "Sitio web de proyecto social con landing, transparencia de recaudo y gastos, " +
      "canales de donación y panel admin. Next.js 16, Firebase y Vitest.",
    en:
      "Social project website with landing, fundraising and expense transparency, " +
      "donation channels, and admin panel. Next.js 16, Firebase, and Vitest.",
    ru:
      "Сайт социального проекта: лендинг, прозрачность сбора и расходов, " +
      "каналы пожертвований и админ-панель. Next.js 16, Firebase и Vitest.",
    zh:
      "社会项目网站：落地页、筹款与支出透明、捐赠渠道与管理面板。" +
      "Next.js 16、Firebase 与 Vitest。",
  },
  featuredImage: ayudandoAndoImg,
  screenshots: [image1],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Vitest",
  ],
  category: "fullstack",
  demoUrl: "https://ayudando-ando.vercel.app/",
  githubUrl: "https://github.com/FraVelz/ayudando-ando",
  featured: false,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Ayudando-Ando es el sitio web de un proyecto social orientado a la transparencia: landing pública, " +
      "visualización de recaudo y gastos, y enlaces a canales de donación. Los datos viven en Firestore " +
      "(site/publicConfig) cuando Firebase está configurado; sin backend, usa variables de entorno y un JSON local " +
      "como fallback. Incluye panel de administración en /admin con autenticación Firebase (email/contraseña) " +
      "para actualizar contenido público. Stack alineado con proyectos hermanos (fv-store, starcrypt): Next.js 16, " +
      "React 19, Tailwind CSS 4, Vitest y Vercel Analytics.",
    en:
      "Ayudando-Ando is the website for a social project focused on transparency: public landing, " +
      "fundraising and expense visibility, and donation channel links. Data lives in Firestore " +
      "(site/publicConfig) when Firebase is configured; without a backend, it falls back to env vars and a local JSON file. " +
      "An admin panel at /admin with Firebase email/password auth updates public content. " +
      "Stack aligned with sibling projects (fv-store, starcrypt): Next.js 16, React 19, Tailwind CSS 4, Vitest, and Vercel Analytics.",
    ru:
      "Ayudando-Ando — сайт социального проекта с упором на прозрачность: публичный лендинг, " +
      "отображение сбора и расходов, ссылки на пожертвования. Данные в Firestore (site/publicConfig) при настроенном Firebase; " +
      "без бэкенда — переменные окружения и локальный JSON. Админ-панель /admin с входом Firebase (email/пароль). " +
      "Стек как у fv-store и starcrypt: Next.js 16, React 19, Tailwind CSS 4, Vitest, Vercel Analytics.",
    zh:
      "Ayudando-Ando 是注重透明度的社会项目网站：公开落地页、筹款与支出展示、捐赠渠道链接。" +
      "配置 Firebase 时数据存于 Firestore（site/publicConfig）；无后端时使用环境变量与本地 JSON。" +
      " /admin 管理面板通过 Firebase 邮箱密码认证更新公开内容。" +
      "技术栈与 fv-store、starcrypt 一致：Next.js 16、React 19、Tailwind CSS 4、Vitest、Vercel Analytics。",
  },
  whatILearned: {
    es: [
      "Modelar transparencia de datos públicos con Firestore y fallback estático para desarrollo",
      "Panel admin protegido con Firebase Auth en Next.js App Router",
      "Reutilizar patrones de sitio (tema, analytics, i18n de marca) entre proyectos del mismo ecosistema",
    ],
    en: [
      "Modeling public data transparency with Firestore and a static fallback for development",
      "Admin panel secured with Firebase Auth on Next.js App Router",
      "Reusing site patterns (theme, analytics, brand) across sibling projects",
    ],
    ru: [
      "Прозрачность публичных данных: Firestore и статический fallback для разработки",
      "Защищённая админ-панель с Firebase Auth в Next.js App Router",
      "Повторное использование паттернов (тема, аналитика, бренд) между родственными проектами",
    ],
    zh: [
      "用 Firestore 与静态 fallback 建模公开数据透明",
      "在 Next.js App Router 中用 Firebase Auth 保护管理面板",
      "在兄弟项目间复用站点模式（主题、分析、品牌）",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + firebase-admin",
      "Tailwind CSS 4, next-themes, Lucide",
      "Vitest, ESLint, Prettier, react-doctor",
      "Vercel Analytics",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + firebase-admin",
      "Tailwind CSS 4, next-themes, Lucide",
      "Vitest, ESLint, Prettier, react-doctor",
      "Vercel Analytics",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + firebase-admin",
      "Tailwind CSS 4, next-themes, Lucide",
      "Vitest, ESLint, Prettier, react-doctor",
      "Vercel Analytics",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、TypeScript",
      "Firebase 客户端 + firebase-admin",
      "Tailwind CSS 4、next-themes、Lucide",
      "Vitest、ESLint、Prettier、react-doctor",
      "Vercel Analytics",
    ],
  },
};
