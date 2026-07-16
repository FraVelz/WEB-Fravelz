import type { Project } from "../project-types";
import ecoBogotaImg from "@/assets/images-projects/eco-bogota/index.webp";
import image2 from "@/assets/images-projects/eco-bogota/image2.webp";
import image3 from "@/assets/images-projects/eco-bogota/image3.webp";
import image4 from "@/assets/images-projects/eco-bogota/image4.webp";
import image5 from "@/assets/images-projects/eco-bogota/image5.webp";
import image6 from "@/assets/images-projects/eco-bogota/image6.webp";
import image7 from "@/assets/images-projects/eco-bogota/image7.webp";
import image8 from "@/assets/images-projects/eco-bogota/image8.webp";
import image9 from "@/assets/images-projects/eco-bogota/image9.webp";
import image10 from "@/assets/images-projects/eco-bogota/image10.webp";

export const projectEcoBogota: Project = {
  slug: "eco-bogota",
  title: {
    es: "EcoBogotá",
    en: "EcoBogotá",
    ru: "EcoBogotá",
    zh: "EcoBogotá",
  },
  shortDescription: {
    es:
      "Piloto cerrado web+API: mapa de puntos de reciclaje en Bogotá y reportes con foto. " +
      "Flutter queda fuera del path crítico 2026.",
    en:
      "Closed web+API pilot: recycling-point map for Bogotá and photo reports. " +
      "Flutter is outside the 2026 critical path.",
    ru:
      "Закрытый пилот web+API: карта пунктов переработки в Боготе и отчёты с фото. " +
      "Flutter вне критического пути 2026.",
    zh: "封闭的 Web+API 试点：波哥大回收点地图与带图举报。Flutter 不在 2026 关键路径。",
  },
  featuredImage: ecoBogotaImg,
  screenshots: [image2, image3, image4, image5, image6, image7, image8, image9, image10],
  technologies: ["Next.js", "NestJS", "Flutter", "TypeScript", "Prisma", "PostgreSQL", "Leaflet"],
  category: "fullstack",
  demoUrl: "https://ecobogota.vercel.app/",
  githubUrl: "https://github.com/FraVelz/eco-bogota-meta",
  privateRepo: true,
  featured: false,
  year: 2026,
  inDevelopment: true,
  honesty: ["piloto", "privado"],
  fullDescription: {
    es:
      "EcoBogotá conecta ciudadanos con puntos de reciclaje verificados en Bogotá. El path crítico " +
      "2026 es web (Next.js + Leaflet, reportes y panel) + API (NestJS, Prisma, PostgreSQL, JWT). " +
      "La app Flutter existe en el monorepo pero está congelada fuera del piloto. Redis/S3 son " +
      "adapters opcionales, no parte del pitch. Despliegue: Vercel (web) y Railway (API). Orientado " +
      "a piloto cerrado con mapa de puntos, reportes con foto y talleres de separación en la fuente.",
    en:
      "EcoBogotá connects citizens with verified recycling points in Bogotá. The 2026 critical path " +
      "is web (Next.js + Leaflet, reports, and panel) + API (NestJS, Prisma, PostgreSQL, JWT). The " +
      "Flutter app remains in the monorepo but is frozen outside the pilot. Redis/S3 are optional " +
      "adapters, not part of the pitch. Deploy: Vercel (web) and Railway (API). Targets a closed " +
      "pilot with a point map, photo reports, and source-separation workshops.",
    ru:
      "EcoBogotá связывает жителей с проверенными точками переработки в Боготе. Критический путь " +
      "2026 — web (Next.js + Leaflet, отчёты, панель) + API (NestJS, Prisma, PostgreSQL, JWT). " +
      "Flutter в монорепо заморожен вне пилота. Redis/S3 — опциональные адаптеры, не часть pitch. " +
      "Деплой: Vercel (web) и Railway (API). Закрытый пилот: карта точек, отчёты с фото, мастер-классы.",
    zh:
      "EcoBogotá 连接波哥大市民与经核实的回收点。2026 关键路径是 Web（Next.js + Leaflet、举报与面板）" +
      "+ API（NestJS、Prisma、PostgreSQL、JWT）。Flutter 仍在单体仓中但已冻结，不在试点内。" +
      "Redis/S3 为可选适配器，不纳入 pitch。部署：Vercel（Web）与 Railway（API）。" +
      "面向封闭试点：点位地图、带图举报与源头分类工作坊。",
  },
  whatILearned: {
    es: [
      "Centrar el piloto en web + API; dejar Flutter congelado fuera del path crítico",
      "Desplegar NestJS + Prisma + Postgres en Railway y la web en Vercel",
      "Pintar puntos de reciclaje con Leaflet sin ahogar el panel de reportes",
      "Documentar el piloto (datos, arranque, roles) para que otros puedan operar",
    ],
    en: [
      "Keep the pilot on web + API; leave Flutter frozen outside the critical path",
      "Deploy NestJS + Prisma + Postgres on Railway and the web on Vercel",
      "Plot recycling points with Leaflet without drowning the reports panel",
      "Document the pilot (data, startup, roles) so others can operate it",
    ],
    ru: [
      "Держать пилот на web + API; Flutter заморозить вне критического пути",
      "Деплой NestJS + Prisma + Postgres на Railway и веб на Vercel",
      "Точки переработки на Leaflet без перегруза панели отчётов",
      "Документировать пилот (данные, запуск, роли), чтобы им могли пользоваться другие",
    ],
    zh: [
      "试点聚焦 Web + API；Flutter 冻结在关键路径之外",
      "NestJS + Prisma + Postgres 部署到 Railway，Web 到 Vercel",
      "用 Leaflet 画回收点，不挤占举报面板",
      "写清试点文档（数据、启动、角色），方便别人运维",
    ],
  },
  technicalDetails: {
    es: [
      "Meta: eco-bogota-meta; subrepos: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "App Flutter: congelada / fuera del piloto 2026",
      "Despliegue: Vercel (web), Railway (API + Postgres)",
    ],
    en: [
      "Meta: eco-bogota-meta; subrepos: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "Flutter app: frozen / outside 2026 pilot",
      "Deploy: Vercel (web), Railway (API + Postgres)",
    ],
    ru: [
      "Meta: eco-bogota-meta; подрепозитории: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "Flutter: заморожен / вне пилота 2026",
      "Деплой: Vercel (web), Railway (API + Postgres)",
    ],
    zh: [
      "元仓库：eco-bogota-meta；子仓库：eco-bogota-web、eco-bogota-api、eco-bogota-app",
      "Web：Next.js 16、Leaflet、Playwright、Vitest",
      "API：NestJS 11、Prisma、PostgreSQL、JWT、Redis、AWS S3",
      "Flutter：已冻结 / 不在 2026 试点内",
      "部署：Vercel（Web）、Railway（API + Postgres）",
    ],
  },
  extraInfo: {
    es: [
      "Repos de código: github.com/FraVelz/eco-bogota-web, eco-bogota-api y eco-bogota-app.",
      "El meta-repo incluye run.sh para levantar app, web o api desde un solo workspace.",
    ],
    en: [
      "Code repos: github.com/FraVelz/eco-bogota-web, eco-bogota-api, and eco-bogota-app.",
      "The meta repo includes run.sh to start app, web, or api from one workspace.",
    ],
    ru: [
      "Репозитории кода: github.com/FraVelz/eco-bogota-web, eco-bogota-api, eco-bogota-app.",
      "В meta-репозитории run.sh для запуска app, web или api из одного workspace.",
    ],
    zh: [
      "代码仓库：github.com/FraVelz/eco-bogota-web、eco-bogota-api、eco-bogota-app。",
      "元仓库含 run.sh，可从同一工作区启动 app、web 或 api。",
    ],
  },
};
