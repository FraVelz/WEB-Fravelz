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
      "Plataforma ambiental de Bogotá: mapa de puntos ecológicos, reportes con foto y reciclaje. " +
      "Monorepo con web Next.js, API NestJS y app Flutter.",
    en:
      "Bogotá environmental platform: eco point map, photo reports, and recycling. " +
      "Monorepo with Next.js web, NestJS API, and Flutter app.",
    ru:
      "Экологическая платформа Боготы: карта эко-точек, отчёты с фото и переработка. " +
      "Монорепозиторий: веб Next.js, API NestJS и приложение Flutter.",
    zh: "波哥大环保平台：生态点位地图、带图举报与回收。" + "单体仓库：Next.js  Web、NestJS API 与 Flutter 应用。",
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
  fullDescription: {
    es:
      "EcoBogotá conecta ciudadanos con puntos de reciclaje verificados en Bogotá. El workspace meta (eco-bogota-meta) " +
      "orquesta tres repos: web (Next.js 16 con mapa Leaflet, reportes y panel), API (NestJS 11, Prisma, PostgreSQL, " +
      "JWT, Redis, S3) y app móvil (Flutter). Incluye scripts de arranque, documentación de piloto y despliegue en " +
      "Vercel (web) y Railway (API). El producto está orientado a un piloto cerrado con mapa de puntos, reportes con " +
      "foto y talleres de separación en la fuente.",
    en:
      "EcoBogotá connects citizens with verified recycling points in Bogotá. The meta workspace (eco-bogota-meta) " +
      "orchestrates three repos: web (Next.js 16 with Leaflet map, reports, and panel), API (NestJS 11, Prisma, PostgreSQL, " +
      "JWT, Redis, S3), and mobile app (Flutter). It includes startup scripts, pilot documentation, and deployment on " +
      "Vercel (web) and Railway (API). The product targets a closed pilot with a point map, photo reports, " +
      "and source-separation workshops.",
    ru:
      "EcoBogotá связывает жителей с проверенными точками переработки в Боготе. Мета-репозиторий (eco-bogota-meta) " +
      "объединяет три репозитория: web (Next.js 16, карта Leaflet, отчёты, панель), API (NestJS 11, Prisma, PostgreSQL, " +
      "JWT, Redis, S3) и мобильное приложение (Flutter). Скрипты запуска, документация пилота, деплой на " +
      "Vercel (web) и Railway (API). Продукт для закрытого пилота: карта точек, отчёты с фото, мастер-классы по сортировке.",
    zh:
      "EcoBogotá 连接波哥大市民与经核实的回收点。元仓库（eco-bogota-meta）协调三个仓库：" +
      "Web（Next.js 16、Leaflet 地图、举报与面板）、API（NestJS 11、Prisma、PostgreSQL、JWT、Redis、S3）与 Flutter 应用。" +
      "含启动脚本、试点文档，部署于 Vercel（Web）与 Railway（API）。" +
      "产品面向封闭试点：点位地图、带图举报与源头分类工作坊。",
  },
  whatILearned: {
    es: [
      "Orquestar un producto multi-plataforma con repos independientes y workspace meta",
      "API REST con NestJS, Prisma y despliegue en Railway junto a web en Vercel",
      "Mapas con Leaflet en Next.js para puntos georreferenciados",
      "Coordinar piloto real: infraestructura, datos y documentación operativa",
    ],
    en: [
      "Orchestrating a multi-platform product with independent repos and a meta workspace",
      "REST API with NestJS, Prisma, and Railway deployment alongside Vercel web",
      "Leaflet maps in Next.js for georeferenced points",
      "Coordinating a real pilot: infrastructure, data, and operational docs",
    ],
    ru: [
      "Оркестрация мультиплатформенного продукта: отдельные репозитории и meta-workspace",
      "REST API на NestJS и Prisma, деплой на Railway вместе с вебом на Vercel",
      "Карты Leaflet в Next.js для геоточек",
      "Координация реального пилота: инфраструктура, данные, операционная документация",
    ],
    zh: [
      "用独立仓库与元工作区协调多平台产品",
      "NestJS + Prisma REST API，Web 在 Vercel、API 在 Railway",
      "Next.js 中用 Leaflet 展示地理点位",
      "协调真实试点：基础设施、数据与运维文档",
    ],
  },
  technicalDetails: {
    es: [
      "Meta: eco-bogota-meta; subrepos: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "App: Flutter (Dart 3.12+)",
      "Despliegue: Vercel (web), Railway (API + Postgres)",
    ],
    en: [
      "Meta: eco-bogota-meta; subrepos: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "App: Flutter (Dart 3.12+)",
      "Deploy: Vercel (web), Railway (API + Postgres)",
    ],
    ru: [
      "Meta: eco-bogota-meta; подрепозитории: eco-bogota-web, eco-bogota-api, eco-bogota-app",
      "Web: Next.js 16, Leaflet, Playwright, Vitest",
      "API: NestJS 11, Prisma, PostgreSQL, JWT, Redis, AWS S3",
      "App: Flutter (Dart 3.12+)",
      "Деплой: Vercel (web), Railway (API + Postgres)",
    ],
    zh: [
      "元仓库：eco-bogota-meta；子仓库：eco-bogota-web、eco-bogota-api、eco-bogota-app",
      "Web：Next.js 16、Leaflet、Playwright、Vitest",
      "API：NestJS 11、Prisma、PostgreSQL、JWT、Redis、AWS S3",
      "App：Flutter（Dart 3.12+）",
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
