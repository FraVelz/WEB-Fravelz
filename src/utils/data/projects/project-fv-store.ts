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
      "Tienda de camisetas (edición Colombia Italia 90): catálogo, ficha, carrito local y " +
      "checkout demo — extraída del stack de Starcrypt.",
    en:
      "Jersey shop (Colombia Italia 90 edition): catalog, product page, local cart, and " +
      "demo checkout — extracted from the Starcrypt stack.",
    ru:
      "Магазин футболок (Colombia Italia 90): каталог, карточка, локальная корзина и " +
      "демо-оформление — выделено из стека Starcrypt.",
    zh: "球衣商店（哥伦比亚 Italia 90 款）：目录、商品页、本地购物车与演示结账——从 Starcrypt 技术栈拆出。",
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
      "Vitrina de e-commerce centrada en un producto real (camiseta retro Colombia Italia 90): " +
      "inicio, catálogo con búsqueda/filtros, ficha, carrito en localStorage y checkout sin cobro. " +
      "Reutiliza el stack de Starcrypt (Next.js 16, Tailwind 4, Radix/CVA) con tema oscuro y " +
      "Analytics. El catálogo demo está en src/data/products.ts; Firebase queda listo para cuando " +
      "el inventario deje de ser estático.",
    en:
      "An e-commerce storefront built around a real product (Colombia Italia 90 retro jersey): " +
      "home, searchable/filterable catalog, product page, localStorage cart, and checkout without " +
      "charging. Reuses the Starcrypt stack (Next.js 16, Tailwind 4, Radix/CVA) with a dark theme " +
      "and Analytics. Demo catalog lives in src/data/products.ts; Firebase is ready when inventory " +
      "stops being static.",
    ru:
      "Витрина вокруг реального товара (ретро-футболка Colombia Italia 90): главная, каталог с " +
      "поиском/фильтрами, карточка, корзина в localStorage и оформление без оплаты. Тот же стек, " +
      "что у Starcrypt (Next.js 16, Tailwind 4, Radix/CVA), тёмная тема и Analytics. Демо-каталог " +
      "в src/data/products.ts; Firebase — когда инвентарь перестанет быть статическим.",
    zh:
      "围绕真实商品（哥伦比亚 Italia 90 复古球衣）的电商橱窗：首页、可搜索筛选目录、商品页、" +
      "localStorage 购物车与无扣款结账。复用 Starcrypt 技术栈（Next.js 16、Tailwind 4、Radix/CVA），" +
      "深色主题与 Analytics。演示目录在 src/data/products.ts；库存不再静态时可接 Firebase。",
  },
  whatILearned: {
    es: [
      "Separar una tienda simple del marketplace Starcrypt sin copiar el dominio de pagos",
      "Carrito solo en cliente (localStorage) mientras el catálogo sigue siendo estático",
      "Armar ficha y catálogo con Radix + CVA sin inventar otro design system",
    ],
    en: [
      "Split a simple storefront from the Starcrypt marketplace without copying the payments domain",
      "Keep the cart client-only (localStorage) while the catalog stays static",
      "Build catalog and product pages with Radix + CVA instead of a second design system",
    ],
    ru: [
      "Отделить простую витрину от маркетплейса Starcrypt без домена платежей",
      "Корзина только на клиенте (localStorage), пока каталог статический",
      "Каталог и карточка на Radix + CVA без второго design system",
    ],
    zh: [
      "从 Starcrypt 市场拆出简单橱窗，不复制支付域",
      "目录仍静态时，购物车只放在客户端（localStorage）",
      "用 Radix + CVA 做目录与商品页，不另起一套设计系统",
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
