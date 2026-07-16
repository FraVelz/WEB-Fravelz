import type { Project } from "../project-types";
import starcryptImg from "@/assets/images-projects/starcrypt/index.webp";
import image2 from "@/assets/images-projects/starcrypt/image2.webp";
import image3 from "@/assets/images-projects/starcrypt/image3.webp";
import image4 from "@/assets/images-projects/starcrypt/image4.webp";
import image5 from "@/assets/images-projects/starcrypt/image5.webp";

export const projectStarcrypt: Project = {
  slug: "starcrypt",
  title: {
    es: "Starcrypt",
    en: "Starcrypt",
    ru: "Starcrypt",
    zh: "Starcrypt",
  },
  shortDescription: {
    es:
      "Marketplace C2C en LATAM con Mercado Pago (fiat). Cripto, wallet y escrow quedan " +
      "aplazados fuera del path 2026; paneles de comprador, vendedor y admin.",
    en:
      "C2C marketplace for LATAM with Mercado Pago (fiat). Crypto, wallet, and escrow are " +
      "deferred outside the 2026 path; buyer, seller, and admin panels.",
    ru:
      "C2C-маркетплейс для LATAM с Mercado Pago (fiat). Крипто, wallet и escrow отложены " +
      "вне пути 2026; панели покупателя, продавца и админа.",
    zh: "面向拉美的 C2C 市场，用法币 Mercado Pago。加密、钱包与托管暂缓，不在 2026 关键路径；含买家、卖家与管理面板。",
  },
  featuredImage: starcryptImg,
  screenshots: [image2, image3, image4, image5],
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Mercado Pago", "wagmi", "Vercel Blob"],
  category: "fullstack",
  demoUrl: "https://starcrypt-uvz1.vercel.app/",
  githubUrl: "https://github.com/FraVelz/starcrypt",
  privateRepo: true,
  featured: true,
  year: 2026,
  inDevelopment: true,
  honesty: ["piloto", "privado"],
  fullDescription: {
    es:
      "Compra y venta C2C con checkout en fiat LATAM (Mercado Pago). Cripto, wallet y escrow " +
      "existen en el código como experimento, pero no son el path de pagos 2026. Catálogo en " +
      "servidor con caché por tags, sitemap dinámico, Auth y Firestore (reglas en firestore.rules), " +
      "media en Vercel Blob. Rutas: /panel (vendedor), /cuenta (comprador), /admin. Categorías en " +
      "Firestore con semilla local si falta Firebase; tema oscuro y aviso cuando faltan credenciales.",
    en:
      "C2C buy/sell with LATAM fiat checkout (Mercado Pago). Crypto, wallet, and escrow remain " +
      "in the codebase as an experiment, not the 2026 payment path. Server catalog with tag cache, " +
      "dynamic sitemap, Auth and Firestore (rules in firestore.rules), media on Vercel Blob. Routes: " +
      "/panel (seller), /cuenta (buyer), /admin. Categories in Firestore with a local seed when " +
      "Firebase is missing; dark theme and a banner when credentials are not set.",
    ru:
      "C2C-покупка/продажа с checkout fiat LATAM (Mercado Pago). Крипто, wallet и escrow остаются " +
      "в коде как эксперимент, не путь оплаты 2026. Серверный каталог с кэшем по тегам, динамический " +
      "sitemap, Auth и Firestore (firestore.rules), медиа в Vercel Blob. Маршруты: /panel, /cuenta, " +
      "/admin. Категории в Firestore с локальной заготовкой без Firebase; тёмная тема и баннер без credentials.",
    zh:
      "C2C 买卖，拉美法币结账（Mercado Pago）。加密、钱包与托管仍在代码中作实验，不是 2026 支付路径。" +
      "服务端目录与标签缓存、动态 sitemap、Auth 与 Firestore（firestore.rules）、Vercel Blob 媒体。" +
      "路由：/panel（卖家）、/cuenta（买家）、/admin。Firestore 分类，无 Firebase 时用本地种子；" +
      "深色主题，缺凭证时显示提示条。",
  },
  whatILearned: {
    es: [
      "Priorizar Mercado Pago fiat como único checkout runtime y aparcar cripto/escrow",
      "Listados C2C en Firestore con Blob para fotos y reglas de seguridad explícitas",
      "Invalidar caché del catálogo por tags y regenerar el sitemap cuando cambian productos",
      "Separar /panel, /cuenta y /admin sin duplicar el layout base de la tienda",
    ],
    en: [
      "Prioritize Mercado Pago fiat as the only runtime checkout and park crypto/escrow",
      "C2C listings in Firestore with Blob for photos and explicit security rules",
      "Invalidate catalog cache by tags and regenerate the sitemap when products change",
      "Split /panel, /cuenta, and /admin without duplicating the store shell",
    ],
    ru: [
      "Приоритизировать Mercado Pago fiat как единственный runtime checkout и отложить крипто/escrow",
      "C2C-листинги в Firestore, Blob для фото и явные правила безопасности",
      "Инвалидировать кэш каталога по тегам и обновлять sitemap при смене товаров",
      "Разделить /panel, /cuenta и /admin без дублирования оболочки магазина",
    ],
    zh: [
      "把 Mercado Pago 法币作为唯一运行时结账，加密/托管先搁置",
      "Firestore 上的 C2C listing，Blob 存图，安全规则写清楚",
      "按标签失效目录缓存，商品变更时重建 sitemap",
      "拆分 /panel、/cuenta、/admin，不复制整套商店壳层",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK (checkout runtime); wagmi/viem presente pero aplazado",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK (runtime checkout); wagmi/viem present but deferred",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK (runtime checkout); wagmi/viem есть, но отложен",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、TypeScript",
      "Firebase 客户端 + Admin SDK；firestore.rules",
      "Mercado Pago SDK（运行时结账）；wagmi/viem 仍在但已搁置",
      "Vercel Blob；@tanstack/react-query",
      "Radix UI、Tailwind CSS 4、next-themes、Vitest",
    ],
  },
};
