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
      "Marketplace entre personas en LATAM: paga en fiat con Mercado Pago o en cripto con " +
      "wallet + escrow, con paneles de comprador, vendedor y admin.",
    en:
      "Peer-to-peer marketplace for LATAM: pay in fiat with Mercado Pago or in crypto with " +
      "wallet + escrow, with buyer, seller, and admin panels.",
    ru:
      "P2P-маркетплейс для LATAM: оплата fiat через Mercado Pago или крипто с wallet + escrow, " +
      "с панелями покупателя, продавца и админа.",
    zh: "面向拉美的个人对个人市场：可用 Mercado Pago 法币或钱包 + 托管加密支付，含买家、卖家与管理面板。",
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
  fullDescription: {
    es:
      "Compra y venta entre usuarios con dos caminos de pago: fiat LATAM (Mercado Pago) y cripto " +
      "(wagmi/viem + escrow). Catálogo en servidor con caché por tags, sitemap dinámico, Auth y " +
      "Firestore (reglas en firestore.rules), media en Vercel Blob. Rutas claras: /panel (vendedor), " +
      "/cuenta (comprador), /admin. Categorías en Firestore con semilla local si Firebase no está " +
      "configurado; tema oscuro tipo exchange y aviso cuando faltan credenciales.",
    en:
      "Buy and sell between users with two payment paths: LATAM fiat (Mercado Pago) and crypto " +
      "(wagmi/viem + escrow). Server catalog with tag cache, dynamic sitemap, Auth and Firestore " +
      "(rules in firestore.rules), media on Vercel Blob. Clear routes: /panel (seller), /cuenta " +
      "(buyer), /admin. Categories in Firestore with a local seed when Firebase is missing; " +
      "exchange-style dark theme and a banner when credentials are not set.",
    ru:
      "Покупка и продажа между пользователями: fiat LATAM (Mercado Pago) и крипто (wagmi/viem + escrow). " +
      "Серверный каталог с кэшем по тегам, динамический sitemap, Auth и Firestore (firestore.rules), " +
      "медиа в Vercel Blob. Маршруты: /panel (продавец), /cuenta (покупатель), /admin. Категории в " +
      "Firestore с локальной заготовкой без Firebase; тёмная тема в стиле биржи и баннер без credentials.",
    zh:
      "用户间买卖，两条支付路径：拉美法币（Mercado Pago）与加密（wagmi/viem + 托管）。" +
      "服务端目录与标签缓存、动态 sitemap、Auth 与 Firestore（firestore.rules）、Vercel Blob 媒体。" +
      "路由清晰：/panel（卖家）、/cuenta（买家）、/admin。Firestore 分类，无 Firebase 时用本地种子；" +
      "交易所风格深色主题，缺凭证时显示提示条。",
  },
  whatILearned: {
    es: [
      "Unir Mercado Pago y wagmi/viem en un solo checkout sin mezclar estados de pago",
      "Listados C2C en Firestore con Blob para fotos y reglas de seguridad explícitas",
      "Invalidar caché del catálogo por tags y regenerar el sitemap cuando cambian productos",
      "Separar /panel, /cuenta y /admin sin duplicar el layout base de la tienda",
    ],
    en: [
      "Combine Mercado Pago and wagmi/viem in one checkout without mixing payment states",
      "C2C listings in Firestore with Blob for photos and explicit security rules",
      "Invalidate catalog cache by tags and regenerate the sitemap when products change",
      "Split /panel, /cuenta, and /admin without duplicating the store shell",
    ],
    ru: [
      "Совместить Mercado Pago и wagmi/viem в одном checkout без смешения состояний оплаты",
      "C2C-листинги в Firestore, Blob для фото и явные правила безопасности",
      "Инвалидировать кэш каталога по тегам и обновлять sitemap при смене товаров",
      "Разделить /panel, /cuenta и /admin без дублирования оболочки магазина",
    ],
    zh: [
      "在同一结账中合并 Mercado Pago 与 wagmi/viem，不混用支付状态",
      "Firestore 上的 C2C listing，Blob 存图，安全规则写清楚",
      "按标签失效目录缓存，商品变更时重建 sitemap",
      "拆分 /panel、/cuenta、/admin，不复制整套商店壳层",
    ],
  },
  technicalDetails: {
    es: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK; wagmi/viem, @wagmi/connectors",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    en: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK; wagmi/viem, @wagmi/connectors",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    ru: [
      "Next.js 16 (App Router), React 19, TypeScript",
      "Firebase client + Admin SDK; firestore.rules",
      "Mercado Pago SDK; wagmi/viem, @wagmi/connectors",
      "Vercel Blob; @tanstack/react-query",
      "Radix UI, Tailwind CSS 4, next-themes, Vitest",
    ],
    zh: [
      "Next.js 16（App Router）、React 19、TypeScript",
      "Firebase 客户端 + Admin SDK；firestore.rules",
      "Mercado Pago SDK；wagmi/viem、@wagmi/connectors",
      "Vercel Blob；@tanstack/react-query",
      "Radix UI、Tailwind CSS 4、next-themes、Vitest",
    ],
  },
};
