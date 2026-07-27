import type { Project } from "../project-types";
import videoStudioImg from "@/assets/images-projects/video-studio/index.webp";
import image2 from "@/assets/images-projects/video-studio/image2.webp";
import image3 from "@/assets/images-projects/video-studio/image3.webp";
import image4 from "@/assets/images-projects/video-studio/image4.webp";
import image5 from "@/assets/images-projects/video-studio/image5.webp";

export const projectVideoStudio: Project = {
  slug: "video-studio",
  title: {
    es: "Video Studio",
    en: "Video Studio",
    ru: "Video Studio",
    zh: "Video Studio",
  },
  shortDescription: {
    es:
      "Editor de video híbrido estilo CapCut: automation-first (talking head y clips largos) " +
      "con timeline progresiva, worker FFmpeg local y biblioteca de recursos en Cloudflare R2.",
    en:
      "Hybrid CapCut-style video editor: automation-first (talking-head and long-form clips) " +
      "with a progressive timeline, local FFmpeg worker, and a Cloudflare R2 media library.",
    ru:
      "Гибридный видеоредактор в стиле CapCut: сначала автоматизация (talking head и длинные клипы), " +
      "прогрессивный timeline, локальный FFmpeg-worker и медиатека в Cloudflare R2.",
    zh:
      "混合式 CapCut 风格视频编辑器：自动化优先（口播短视频与长视频切片），渐进时间线、" +
      "本地 FFmpeg worker，以及 Cloudflare R2 素材库。",
  },
  featuredImage: videoStudioImg,
  screenshots: [image2, image3, image4, image5],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "FFmpeg",
    "Cloudflare R2",
    "SQLite",
    "pnpm monorepo",
  ],
  category: "fullstack",
  demoUrl: "https://video-studio-nu.vercel.app",
  githubUrl: "https://github.com/FraVelz/video-studio",
  privateRepo: true,
  featured: true,
  year: 2026,
  inDevelopment: true,
  honesty: ["demo", "privado"],
  fullDescription: {
    es:
      "Monorepo privado de un estudio de video web: UI Next.js en Vercel y jobs pesados " +
      "(FFmpeg, ASR opcional, recorte vertical) en un worker local. El foco de producto es " +
      "Automate — talking head → short y long/podcast → clips — antes que un NLE completo. " +
      "La biblioteca Recursos lee solo R2 en el editor; la carpeta local es origen de sync. " +
      "Las APIs exigen Bearer token; la demo en Vercel es el shell de UI (el worker no corre en cloud).",
    en:
      "Private monorepo for a web video studio: Next.js UI on Vercel and heavy jobs " +
      "(FFmpeg, optional ASR, vertical crop) on a local worker. Product focus is Automate — " +
      "talking head → short and long/podcast → clips — before a full NLE. The Recursos library " +
      "is R2-only in the editor; a local folder is the sync source. APIs require a Bearer token; " +
      "the Vercel demo is the UI shell (the worker does not run in the cloud).",
    ru:
      "Приватный monorepo веб-видеостудии: UI Next.js на Vercel и тяжёлые jobs " +
      "(FFmpeg, опциональный ASR, вертикальный кроп) на локальном worker. Фокус продукта — " +
      "Automate: talking head → short и long/podcast → clips, а не полный NLE. Библиотека " +
      "Recursos в редакторе только из R2; локальная папка — источник sync. API требуют Bearer; " +
      "демо на Vercel — оболочка UI (worker не в облаке).",
    zh:
      "私有 monorepo 网页视频工作室：Vercel 上的 Next.js UI，以及本地 worker 上的重任务" +
      "（FFmpeg、可选 ASR、竖版裁剪）。产品重心是 Automate——口播转短视频与长视频/播客切片——" +
      "而非完整 NLE。编辑器内 Recursos 库仅读 R2；本地文件夹是同步源。API 需要 Bearer；" +
      "Vercel demo 是 UI 外壳（worker 不在云端运行）。",
  },
  whatILearned: {
    es: [
      "Separar UI serverless del worker FFmpeg local sin fingir que Vercel hace el render",
      "Priorizar Automate (packs A/C) y congelar el resto del editor hasta que el path esté verde",
      "Exponer una biblioteca de medios solo-R2 en el editor con sync desde disco local",
      "Acotar confianza: Bearer en /api/*, bind local y uploads con allowlist MIME",
    ],
    en: [
      "Split serverless UI from a local FFmpeg worker without pretending Vercel does the render",
      "Invest in Automate packs (A/C) and freeze other editor scope until that path is green",
      "Ship an R2-only media library in the editor with sync from a local folder",
      "Tighten trust: Bearer on /api/*, local bind, MIME-allowlisted uploads",
    ],
    ru: [
      "Отделить serverless UI от локального FFmpeg-worker без имитации рендера на Vercel",
      "Вкладываться в Automate (A/C) и заморозить остальной editor, пока путь зелёный",
      "Медиатека только R2 в редакторе + sync с локальной папки",
      "Граница доверия: Bearer на /api/*, локальный bind, MIME-allowlist для uploads",
    ],
    zh: [
      "把 serverless UI 与本地 FFmpeg worker 分开，不假装 Vercel 负责渲染",
      "优先 Automate（A/C），其余编辑器能力先冻结直到主路径稳定",
      "编辑器内只读 R2 素材库，并从本地目录同步",
      "收紧信任边界：/api/* 的 Bearer、本地绑定、MIME 白名单上传",
    ],
  },
  technicalDetails: {
    es: [
      "pnpm monorepo: apps/web (Next.js), apps/worker (FFmpeg/ASR), packages/db (SQLite)",
      "Cloudflare R2 para biblioteca Recursos (LIBRARY_SOURCE=r2)",
      "Automate A (talking head) y C (long → clips) con smokes herméticos",
      "APIs con Authorization Bearer; STUDIO_API_TOKEN",
      "Demo UI: https://video-studio-nu.vercel.app — worker solo en host local",
    ],
    en: [
      "pnpm monorepo: apps/web (Next.js), apps/worker (FFmpeg/ASR), packages/db (SQLite)",
      "Cloudflare R2 for the Recursos library (LIBRARY_SOURCE=r2)",
      "Automate A (talking head) and C (long → clips) with hermetic smokes",
      "APIs with Authorization Bearer; STUDIO_API_TOKEN",
      "UI demo: https://video-studio-nu.vercel.app — worker only on the local host",
    ],
    ru: [
      "pnpm monorepo: apps/web (Next.js), apps/worker (FFmpeg/ASR), packages/db (SQLite)",
      "Cloudflare R2 для библиотеки Recursos (LIBRARY_SOURCE=r2)",
      "Automate A (talking head) и C (long → clips) с hermetic smoke",
      "API с Authorization Bearer; STUDIO_API_TOKEN",
      "UI-демо: https://video-studio-nu.vercel.app — worker только на локальном хосте",
    ],
    zh: [
      "pnpm monorepo：apps/web（Next.js）、apps/worker（FFmpeg/ASR）、packages/db（SQLite）",
      "Cloudflare R2 素材库 Recursos（LIBRARY_SOURCE=r2）",
      "Automate A（口播）与 C（长视频切片）及 hermetic smoke",
      "API 使用 Authorization Bearer；STUDIO_API_TOKEN",
      "UI demo：https://video-studio-nu.vercel.app — worker 仅在本地主机",
    ],
  },
};
