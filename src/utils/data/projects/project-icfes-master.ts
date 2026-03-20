import type { Project } from "../project-types";
import icfesMasterImg from "@/assets/images-projects/web-icfes-master.png";

export const projectIcfesMaster: Project = {
  slug: "icfes-master",
  title: {
    es: "ICFES Master",
    en: "ICFES Master",
    ru: "ICFES Master",
    zh: "ICFES Master",
  },
  shortDescription: {
    es: "Plataforma educativa para preparación de pruebas ICFES con Next.js, React y Firebase. Incluye app móvil con Capacitor.",
    en: "Educational platform for ICFES exam preparation with Next.js, React and Firebase. Includes mobile app with Capacitor.",
    ru: "Образовательная платформа для подготовки к экзаменам ICFES с Next.js, React и Firebase. Включает мобильное приложение с Capacitor.",
    zh: "使用 Next.js、React 和 Firebase 的 ICFES 考试备考教育平台。包含 Capacitor 移动应用。",
  },
  featuredImage: icfesMasterImg,
  technologies: [
    "Next.js",
    "React",
    "Firebase",
    "TypeScript",
    "Tailwind CSS",
    "Capacitor",
  ],
  category: "fullstack",
  demoUrl: "https://icfes-master.vercel.app/",
  githubUrl: "https://github.com/FraVelz/WEB-ICFES-Master",
  featured: true,
  year: 2024,
  inDevelopment: true,
  fullDescription: {
    es: "Plataforma educativa completa para preparar las pruebas ICFES (examen de estado colombiano). Desarrollada con Next.js, React y Firebase. Incluye versión móvil para Android con Capacitor. Contenido educativo por áreas (Matemáticas, Lenguaje, Ciencias, Sociales, Inglés), quizzes, simulacros, gamificación con 40+ logros y seguimiento de progreso.",
    en: "Complete educational platform to prepare for ICFES exams (Colombian state exam). Built with Next.js, React and Firebase. Includes mobile version for Android with Capacitor. Educational content by subject, quizzes, mock exams, gamification with 40+ achievements and progress tracking.",
    ru: "Полная образовательная платформа для подготовки к экзаменам ICFES (государственный экзамен Колумбии). Создана с Next.js, React и Firebase. Включает мобильную версию для Android с Capacitor. Образовательный контент по предметам, викторины, пробные экзамены, геймификация с 40+ достижениями.",
    zh: "完整的 ICFES 考试（哥伦比亚国家考试）备考教育平台。使用 Next.js、React 和 Firebase 构建。包含使用 Capacitor 的 Android 移动版本。按科目划分的教育内容、测验、模拟考试、40+ 成就的游戏化。",
  },
};
