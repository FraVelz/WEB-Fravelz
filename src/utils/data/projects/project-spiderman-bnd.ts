import type { Project } from "../project-types";
import spidermanBndImg from "@/assets/images-projects/spiderman-bnd/index.webp";
import image2 from "@/assets/images-projects/spiderman-bnd/image2.webp";
import image3 from "@/assets/images-projects/spiderman-bnd/image3.webp";
import image4 from "@/assets/images-projects/spiderman-bnd/image4.webp";
import image5 from "@/assets/images-projects/spiderman-bnd/image5.webp";
import image6 from "@/assets/images-projects/spiderman-bnd/image6.webp";

export const projectSpidermanBnd: Project = {
  slug: "spiderman-bnd",
  title: {
    es: "SPIDER-MAN: Brand New Day",
    en: "SPIDER-MAN: Brand New Day",
    ru: "SPIDER-MAN: Brand New Day",
    zh: "SPIDER-MAN: Brand New Day",
  },
  shortDescription: {
    es:
      "Landing fan-made de estreno con scroll cinematográfico: secuencia de fotogramas en " +
      "canvas sincronizada con GSAP, countdown, galería y CTA. Estática y ligera.",
    en:
      "Fan-made release landing with cinematic scroll: a canvas frame sequence scrubbed with " +
      "GSAP, countdown, gallery, and CTA. Static and lightweight.",
    ru:
      "Фан-made лендинг премьеры с кинематографическим скроллом: последовательность кадров " +
      "на canvas через GSAP, countdown, галерея и CTA. Статический и лёгкий.",
    zh: "粉丝自制上映落地页，电影感滚动：GSAP 驱动的 canvas 帧序列、倒计时、画廊与 CTA。" + "纯静态、轻量。",
  },
  featuredImage: spidermanBndImg,
  screenshots: [image2, image3, image4, image5, image6],
  technologies: ["Astro", "TypeScript", "GSAP", "Tailwind CSS", "React", "Canvas"],
  category: "frontend",
  demoUrl: "https://spiderman-bnd-landing-eight.vercel.app",
  githubUrl: "https://github.com/FraVelz/spiderman-bnd-landing",
  privateRepo: true,
  featured: true,
  year: 2026,
  inDevelopment: false,
  honesty: ["demo", "privado"],
  fullDescription: {
    es:
      "Demo de portfolio (no oficial) para una oferta que pedía navegación fluida y aguantar " +
      "picos de tráfico: el efecto wow es Spider-Man columpiándose al ritmo del scroll, " +
      "resuelto con GSAP ScrollTrigger y una secuencia WebP en canvas, sin SSR. Incluye hero, " +
      "holds de countdown/galería/CTA, islas React mínimas (timer y modal del tráiler) y " +
      "contenido centralizado en movie.ts. Respeta prefers-reduced-motion.",
    en:
      "Portfolio demo (unofficial) for a job brief that asked for fluid navigation and traffic " +
      "spikes: the wow is Spider-Man swinging in sync with scroll, done with GSAP ScrollTrigger " +
      "and a WebP sequence on canvas, no SSR. Includes hero, countdown/gallery/CTA holds, " +
      "minimal React islands (timer and trailer modal), and copy in movie.ts. Honors " +
      "prefers-reduced-motion.",
    ru:
      "Демо портфолио (неофициальное) под бриф с плавной навигацией и пиками трафика: wow — " +
      "Spider-Man на качелях в такт скроллу через GSAP ScrollTrigger и WebP-последовательность " +
      "на canvas, без SSR. Есть hero, holds countdown/галерея/CTA, минимальные React-острова " +
      "(таймер и модалка трейлера) и контент в movie.ts. Учитывает prefers-reduced-motion.",
    zh:
      "作品集演示（非官方），对应「流畅导航 + 扛流量高峰」的岗位简报：亮点是 Spider-Man 随滚动 " +
      "摆荡，用 GSAP ScrollTrigger 与 canvas 上的 WebP 帧序列实现，无 SSR。含 hero、倒计时/" +
      "画廊/CTA holds、最小 React 岛屿（计时器与预告片弹窗），文案集中在 movie.ts。" +
      "尊重 prefers-reduced-motion。",
  },
  whatILearned: {
    es: [
      "Mapear el scroll a un índice de fotogramas con GSAP ScrollTrigger sin cargar todo a la vez",
      "Mantener Astro estático y aislar interactividad en islas React mínimas",
      "Curar y versionar fotogramas WebP (desktop/mobile) coherentes con FRAME_COUNT",
      "Centralizar copy y beats en una sola fuente (movie.ts) para no duplicar en los .astro",
    ],
    en: [
      "Map scroll progress to a frame index with GSAP ScrollTrigger without loading every frame upfront",
      "Keep Astro static and isolate interactivity in minimal React islands",
      "Curate and version WebP frames (desktop/mobile) aligned with FRAME_COUNT",
      "Centralize copy and beats in one source (movie.ts) so .astro files stay free of hardcoded text",
    ],
    ru: [
      "Связать прогресс скролла с индексом кадра через GSAP ScrollTrigger без загрузки всех кадров сразу",
      "Оставить Astro статическим и вынести интерактив в минимальные React-острова",
      "Отобрать и заверсионировать WebP-кадры (desktop/mobile) согласованно с FRAME_COUNT",
      "Держать тексты и beats в одном источнике (movie.ts), без хардкода в .astro",
    ],
    zh: [
      "用 GSAP ScrollTrigger 把滚动进度映射到帧索引，避免一次性加载全部帧",
      "保持 Astro 纯静态，交互收敛到最小 React 岛屿",
      "策展并版本化 WebP 帧（desktop/mobile），与 FRAME_COUNT 一致",
      "把文案与 beats 集中到 movie.ts，避免在 .astro 里硬编码",
    ],
  },
  extraInfo: {
    es: [
      "Proyecto fan-made / no oficial; sin vínculo con Sony ni Marvel.",
      "Los fotogramas se extraen de un vídeo fuente con ffmpeg y se curan a mano en public/frames.",
      "Desplegado en Vercel como sitio estático (output: static).",
    ],
    en: [
      "Fan-made / unofficial project; not affiliated with Sony or Marvel.",
      "Frames are extracted from a source video with ffmpeg and curated by hand in public/frames.",
      "Deployed on Vercel as a static site (output: static).",
    ],
    ru: [
      "Фан-made / неофициальный проект; без связи с Sony или Marvel.",
      "Кадры извлекаются из исходного видео через ffmpeg и вручную курируются в public/frames.",
      "Задеплоено на Vercel как статический сайт (output: static).",
    ],
    zh: [
      "粉丝自制 / 非官方项目；与 Sony、Marvel 无关。",
      "帧从源视频用 ffmpeg 抽取，并在 public/frames 中手工策展。",
      "以静态站点部署到 Vercel（output: static）。",
    ],
  },
  technicalDetails: {
    es: [
      "Astro 7 (output static) + TypeScript strict",
      "GSAP + ScrollTrigger; canvas con ventana deslizante de fotogramas",
      "Tailwind CSS 4; islas React (countdown, modal tráiler)",
      "ffmpeg para extracción de frames; Prettier + CI de formato",
    ],
    en: [
      "Astro 7 (static output) + strict TypeScript",
      "GSAP + ScrollTrigger; canvas with a sliding frame window",
      "Tailwind CSS 4; React islands (countdown, trailer modal)",
      "ffmpeg for frame extraction; Prettier + format CI",
    ],
    ru: [
      "Astro 7 (static output) + строгий TypeScript",
      "GSAP + ScrollTrigger; canvas со скользящим окном кадров",
      "Tailwind CSS 4; React-острова (countdown, модалка трейлера)",
      "ffmpeg для извлечения кадров; Prettier + CI форматирования",
    ],
    zh: [
      "Astro 7（静态输出）+ 严格 TypeScript",
      "GSAP + ScrollTrigger；canvas 滑动帧窗口",
      "Tailwind CSS 4；React 岛屿（倒计时、预告片弹窗）",
      "ffmpeg 抽帧；Prettier + 格式化 CI",
    ],
  },
};
