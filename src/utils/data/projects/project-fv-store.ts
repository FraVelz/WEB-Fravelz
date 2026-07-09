import type { Project } from "../project-types";
import fvStoreImg from "@/assets/images-projects/fv-store/index.webp";
import image2 from "@/assets/images-projects/fv-store/image2.webp";
import image3 from "@/assets/images-projects/fv-store/image3.webp";
import image4 from "@/assets/images-projects/fv-store/image4.webp";
import image5 from "@/assets/images-projects/fv-store/image5.webp";
import image6 from "@/assets/images-projects/fv-store/image6.webp";
import image7 from "@/assets/images-projects/fv-store/image7.webp";
import image8 from "@/assets/images-projects/fv-store/image8.webp";

export const projectFvStore: Project = {
  slug: "fv-store",
  title: {
    es: "Tienda FV",
    en: "FV Store",
    ru: "Магазин FV",
    zh: "FV 商店",
  },
  shortDescription: {
    es:
      "Plantilla de tienda online con Next.js 16: catálogo, carrito en localStorage, checkout demo " +
      "y UI estilo shadcn/ui. Base para conectar Firebase o catálogo real.",
    en:
      "Online store template with Next.js 16: catalog, localStorage cart, demo checkout, " +
      "and shadcn/ui-style components. Ready to wire Firebase or a real catalog.",
    ru:
      "Шаблон интернет-магазина на Next.js 16: каталог, корзина в localStorage, демо-оформление " +
      "и UI в стиле shadcn/ui. Готов к подключению Firebase или реального каталога.",
    zh:
      "Next.js 16 在线商店模板：目录、localStorage 购物车、演示结账、" +
      "shadcn/ui 风格组件。可接入 Firebase 或真实商品数据。",
  },
  featuredImage: fvStoreImg,
  screenshots: [image2, image3, image4, image5, image6, image7, image8],
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Firebase"],
  category: "fullstack",
  demoUrl: "https://fv-store.vercel.app/",
  githubUrl: "https://github.com/FraVelz/fv-store",
  privateRepo: true,
  featured: false,
  year: 2026,
  inDevelopment: true,
  fullDescription: {
    es:
      "Tienda FV es una plantilla de e-commerce basada en el stack de Starcrypt: Next.js 16, TypeScript, " +
      "Tailwind CSS v4 y componentes estilo shadcn/ui (Radix Slot, CVA). Incluye inicio con categorías y destacados, " +
      "catálogo con búsqueda y filtros, ficha de producto, carrito persistente en localStorage y checkout de demostración " +
      "sin pago real. Los productos demo viven en src/data/products.ts. Tema oscuro por defecto con next-themes y " +
      "Vercel Analytics. Pensado como punto de partida para sustituir datos estáticos o conectar Firebase y Vercel Blob.",
    en:
      "FV Store is an e-commerce template based on the Starcrypt stack: Next.js 16, TypeScript, " +
      "Tailwind CSS v4, and shadcn/ui-style components (Radix Slot, CVA). It includes a home with categories and highlights, " +
      "a searchable catalog with filters, product detail pages, a localStorage cart, and a demo checkout " +
      "without real payments. Demo products live in src/data/products.ts. Dark-first theme with next-themes and " +
      "Vercel Analytics. Intended as a starting point to replace static data or connect Firebase and Vercel Blob.",
    ru:
      "FV Store — шаблон e-commerce на стеке Starcrypt: Next.js 16, TypeScript, Tailwind CSS v4, " +
      "компоненты в стиле shadcn/ui (Radix Slot, CVA). Главная с категориями, каталог с поиском и фильтрами, " +
      "карточка товара, корзина в localStorage, демо-оформление без реальной оплаты. Демо-товары в src/data/products.ts. " +
      "Тёмная тема по умолчанию (next-themes), Vercel Analytics. Стартовая точка для Firebase и Vercel Blob.",
    zh:
      "FV Store 是基于 Starcrypt 技术栈的电商模板：Next.js 16、TypeScript、Tailwind CSS v4、" +
      "shadcn/ui 风格组件（Radix Slot、CVA）。含首页分类与精选、可搜索筛选的目录、商品详情、" +
      "localStorage 购物车与无真实支付的演示结账。演示商品在 src/data/products.ts。" +
      "默认深色主题（next-themes）与 Vercel Analytics。便于后续接入 Firebase 与 Vercel Blob。",
  },
  whatILearned: {
    es: [
      "Extraer un template de tienda reutilizable desde un marketplace más complejo (Starcrypt)",
      "Carrito cliente con localStorage y rutas de catálogo/ficha sin backend inicial",
      "Componentes accesibles con Radix y CVA para un catálogo escalable",
    ],
    en: [
      "Extracting a reusable store template from a more complex marketplace (Starcrypt)",
      "Client-side cart with localStorage and catalog/product routes without an initial backend",
      "Accessible Radix + CVA components for a scalable catalog UI",
    ],
    ru: [
      "Выделение переиспользуемого шаблона магазина из более сложного маркетплейса (Starcrypt)",
      "Клиентская корзина в localStorage и маршруты каталога без бэкенда на старте",
      "Доступные компоненты Radix + CVA для масштабируемого каталога",
    ],
    zh: [
      "从更复杂的 marketplace（Starcrypt）提炼可复用商店模板",
      "无初始后端的 localStorage 购物车与目录/商品路由",
      "用 Radix + CVA 构建可扩展的无障碍目录 UI",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "Radix UI (Slot), class-variance-authority",
      "Carrito en localStorage; datos demo en src/data/products.ts",
      "Vercel Analytics",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "Radix UI (Slot), class-variance-authority",
      "localStorage cart; demo data in src/data/products.ts",
      "Vercel Analytics",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Tailwind CSS 4, next-themes, Lucide",
      "Radix UI (Slot), class-variance-authority",
      "Корзина в localStorage; демо-данные в src/data/products.ts",
      "Vercel Analytics",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、TypeScript",
      "Tailwind CSS 4、next-themes、Lucide",
      "Radix UI（Slot）、class-variance-authority",
      "localStorage 购物车；演示数据在 src/data/products.ts",
      "Vercel Analytics",
    ],
  },
};
