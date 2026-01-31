import type { Project } from '../project-types';

export const projectNotasHacking: Project = {
  slug: 'notas-hacking',
  title: {
    es: 'Notas de Hacking',
    en: 'Hacking Notes',
    ru: 'Заметки о взломе',
    zh: '黑客笔记'
  },
  shortDescription: {
    es: 'Plataforma web educativa con notas y guías sobre ciberseguridad y hacking ético.',
    en: 'Educational web platform with notes and guides on cybersecurity and ethical hacking.',
    ru: 'Образовательная веб-платформа с заметками и руководствами по кибербезопасности и этичному взлому.',
    zh: '关于网络安全和道德黑客的笔记和指南的教育网络平台。'
  },
  featuredImage: 'images/portfolio/web-notas-hacking.png',
  technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Markdown'],
  category: 'frontend',
  demoUrl: 'https://fravelz.github.io/WEB-Notas-de-Hacking',
  githubUrl: 'https://github.com/FraVelz/WEB-Notas-de-Hacking',
  featured: true,
  year: 2025,
  inDevelopment: true,
  fullDescription: {
    es: 'Plataforma web completa desarrollada con Astro que contiene notas educativas sobre ciberseguridad, hacking ético y tecnologías relacionadas. Incluye sistema de búsqueda, navegación por categorías y renderizado de contenido Markdown.',
    en: 'Complete web platform developed with Astro containing educational notes on cybersecurity, ethical hacking and related technologies. Includes search system, category navigation and Markdown content rendering.',
    ru: 'Полная веб-платформа, разработанная с использованием Astro, содержащая образовательные заметки по кибербезопасности, этичному взлому и связанным технологиям. Включает систему поиска, навигацию по категориям и рендеринг контента Markdown.',
    zh: '使用 Astro 开发的完整网络平台，包含有关网络安全、道德黑客和相关技术的教育笔记。包括搜索系统、类别导航和 Markdown 内容渲染。'
  },
  whatILearned: {
    es: [
      'Migración completa de React a Astro',
      'Uso de Content Collections para gestión de contenido',
      'Optimización de rendimiento con Astro',
      'Sistema de routing dinámico con Astro'
    ],
    en: [
      'Complete migration from React to Astro',
      'Using Content Collections for content management',
      'Performance optimization with Astro',
      'Dynamic routing system with Astro'
    ],
    ru: [
      'Полная миграция с React на Astro',
      'Использование Content Collections для управления контентом',
      'Оптимизация производительности с Astro',
      'Система динамической маршрутизации с Astro'
    ],
    zh: [
      '从 React 完全迁移到 Astro',
      '使用 Content Collections 进行内容管理',
      '使用 Astro 进行性能优化',
      '使用 Astro 的动态路由系统'
    ]
  },
  technicalDetails: {
    es: [
      'Astro para generación de sitios estáticos',
      'React para componentes interactivos',
      'Tailwind CSS para estilos',
      'Markdown para contenido',
      'TypeScript para type safety'
    ],
    en: [
      'Astro for static site generation',
      'React for interactive components',
      'Tailwind CSS for styling',
      'Markdown for content',
      'TypeScript for type safety'
    ],
    ru: [
      'Astro для генерации статических сайтов',
      'React для интерактивных компонентов',
      'Tailwind CSS для стилизации',
      'Markdown для контента',
      'TypeScript для безопасности типов'
    ],
    zh: [
      'Astro 用于静态站点生成',
      'React 用于交互组件',
      'Tailwind CSS 用于样式',
      'Markdown 用于内容',
      'TypeScript 用于类型安全'
    ]
  }
};
