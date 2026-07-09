import type { Project } from "../project-types";
import starcryptImg from "@/assets/images-projects/starcrypt/index.webp";

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
      "Marketplace C2C con pagos fiat LATAM (Mercado Pago) y cripto (wagmi/viem + escrow). " +
      "Firebase, Vercel Blob, panel vendedor y admin. Next.js 16.",
    en:
      "C2C marketplace with LATAM fiat (Mercado Pago) and crypto (wagmi/viem + escrow) payments. " +
      "Firebase, Vercel Blob, seller panel and admin. Next.js 16.",
    ru:
      "C2C-маркетплейс с оплатой fiat LATAM (Mercado Pago) и крипто (wagmi/viem + escrow). " +
      "Firebase, Vercel Blob, панель продавца и админ. Next.js 16.",
    zh:
      "C2C 市场：拉美法币（Mercado Pago）与加密货币（wagmi/viem + 托管）支付。" +
      "Firebase、Vercel Blob、卖家面板与管理端。Next.js 16。",
  },
  featuredImage: starcryptImg,
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
      "Starcrypt es un marketplace de compra y venta entre usuarios con dos vías de pago: fiat en LATAM " +
      "vía Mercado Pago y criptomonedas con wallet connect y escrow. Catálogo server-side con caché por tags, " +
      "sitemap dinámico, Firebase Auth y Firestore (reglas en firestore.rules), imágenes en Vercel Blob, " +
      "panel de vendedor (/panel), cuenta comprador (/cuenta) y administración (/admin). Categorías en Firestore " +
      "con semilla local visible sin Firebase. Tema estilo exchange (oscuro por defecto), TanStack Query y aviso " +
      "si Firebase no está configurado.",
    en:
      "Starcrypt is a peer-to-peer marketplace with two payment paths: LATAM fiat via Mercado Pago " +
      "and crypto with wallet connect and escrow. Server-side catalog with tag-based cache, " +
      "dynamic sitemap, Firebase Auth and Firestore (rules in firestore.rules), images on Vercel Blob, " +
      "seller panel (/panel), buyer account (/cuenta), and admin (/admin). Categories in Firestore " +
      "with a local seed when Firebase is unavailable. Exchange-style theme (dark default), TanStack Query, and a banner " +
      "when Firebase is not configured.",
    ru:
      "Starcrypt — P2P-маркетплейс с двумя способами оплаты: fiat LATAM через Mercado Pago " +
      "и крипто через wallet connect и escrow. Серверный каталог с кэшем по тегам, " +
      "динамический sitemap, Firebase Auth и Firestore (правила в firestore.rules), изображения в Vercel Blob, " +
      "панель продавца (/panel), кабинет покупателя (/cuenta), админ (/admin). Категории в Firestore " +
      "с локальной заготовкой без Firebase. Тема в стиле биржи (тёмная по умолчанию), TanStack Query.",
    zh:
      "Starcrypt 是用户对用户的交易市场，支持拉美法币（Mercado Pago）与加密货币（钱包连接 + 托管）。" +
      "服务端目录、按标签缓存、动态 sitemap、Firebase Auth/Firestore（firestore.rules）、" +
      "Vercel Blob 图片、卖家面板（/panel）、买家账户（/cuenta）与管理（/admin）。" +
      "Firestore 分类与无 Firebase 时的本地种子数据。交易所风格深色主题与 TanStack Query。",
  },
  whatILearned: {
    es: [
      "Integrar Mercado Pago y flujos crypto (wagmi/viem) en una misma experiencia de checkout",
      "Modelar listados C2C con Firestore, Blob para media y reglas de seguridad explícitas",
      "Catálogo server-side en Next.js 16 con invalidación por tags y sitemap dinámico",
      "Paneles role-based (comprador, vendedor, admin) sobre un mismo design system",
    ],
    en: [
      "Integrating Mercado Pago and crypto flows (wagmi/viem) in one checkout experience",
      "Modeling C2C listings with Firestore, Blob for media, and explicit security rules",
      "Server-side catalog in Next.js 16 with tag invalidation and dynamic sitemap",
      "Role-based panels (buyer, seller, admin) on a shared design system",
    ],
    ru: [
      "Интеграция Mercado Pago и крипто (wagmi/viem) в одном checkout",
      "C2C-листинги: Firestore, Blob для медиа, явные правила безопасности",
      "Серверный каталог Next.js 16 с инвалидацией по тегам и динамическим sitemap",
      "Панели по ролям (покупатель, продавец, админ) на общем design system",
    ],
    zh: [
      "在同一结账流程中集成 Mercado Pago 与加密（wagmi/viem）",
      "用 Firestore、Blob 与显式安全规则建模 C2C  listing",
      "Next.js 16 服务端目录、标签失效与动态 sitemap",
      "基于同一设计系统的买家/卖家/管理员角色面板",
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
