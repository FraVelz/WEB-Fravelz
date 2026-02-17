import type { Project } from '../project-types';

export const projectIcfesMaster: Project = {
  slug: 'icfes-master',
  title: {
    es: 'ICFES Master',
    en: 'ICFES Master',
    ru: 'ICFES Master',
    zh: 'ICFES Master'
  },
  shortDescription: {
    es: 'Plataforma educativa para preparación de pruebas ICFES con React, Firebase y Astro. Incluye app móvil con Capacitor.',
    en: 'Educational platform for ICFES exam preparation with React, Firebase and Astro. Includes mobile app with Capacitor.',
    ru: 'Образовательная платформа для подготовки к экзаменам ICFES с React, Firebase и Astro. Включает мобильное приложение с Capacitor.',
    zh: '使用 React、Firebase 和 Astro 的 ICFES 考试备考教育平台。包含 Capacitor 移动应用。'
  },
  featuredImage: 'images/projects/web-icfes-master.png',
  technologies: ['Astro', 'React', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Capacitor'],
  category: 'fullstack',
  demoUrl: undefined,
  githubUrl: 'https://github.com/FraVelz/WEB-ICFES-Master',
  featured: true,
  year: 2024,
  inDevelopment: true,
  fullDescription: {
    es: 'Plataforma educativa completa para preparar las pruebas ICFES (examen de estado colombiano). Desarrollada con Astro, React y Firebase. Incluye versión móvil para Android con Capacitor. Contenido educativo, quizzes y seguimiento de progreso.',
    en: 'Complete educational platform to prepare for ICFES exams (Colombian state exam). Built with Astro, React and Firebase. Includes mobile version for Android with Capacitor. Educational content, quizzes and progress tracking.',
    ru: 'Полная образовательная платформа для подготовки к экзаменам ICFES (государственный экзамен Колумбии). Создана с Astro, React и Firebase. Включает мобильную версию для Android с Capacitor.',
    zh: '完整的 ICFES 考试（哥伦比亚国家考试）备考教育平台。使用 Astro、React 和 Firebase 构建。包含使用 Capacitor 的 Android 移动版本。'
  }
};
