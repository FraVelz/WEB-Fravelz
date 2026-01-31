import type { Project } from '../project-types';

export const projectPortafolioWeb: Project = {
  slug: 'portafolio-web',
  title: {
    es: 'Portafolio Web Personal',
    en: 'Personal Web Portfolio',
    ru: 'Личное веб-портфолио',
    zh: '个人网络作品集'
  },
  shortDescription: {
    es: 'Portafolio web personal moderno y responsivo con diseño limpio y profesional.',
    en: 'Modern and responsive personal web portfolio with clean and professional design.',
    ru: 'Современное и адаптивное личное веб-портфолио с чистым и профессиональным дизайном.',
    zh: '具有简洁专业设计的现代响应式个人网络作品集。'
  },
  featuredImage: 'images/portfolio/Portfolio.png',
  technologies: ['Astro', 'Rkact', 'TypeScript', 'Tailwind CSS'],
  category: 'frontend',
  demoUrl: 'https://fravelz.github.io/WEB-Fravelz',
  githubUrl: 'https://github.com/FraVelz/WEB-Fravelz',
  featured: true,
  year: 2025,
  inDevelopment: true,
  fullDescription: {
    es: 'Portafolio web personal desarrollado con Astro que muestra mis proyectos, habilidades y experiencia como desarrollador frontend. Incluye sistema de internacionalización (i18n) y diseño responsive.',
    en: 'Personal web portfolio developed with Astro showcasing my projects, skills and experience as a frontend developer. Includes internationalization (i18n) system and responsive design.',
    ru: 'Личное веб-портфолио, разработанное с использованием Astro, демонстрирующее мои проекты, навыки и опыт как фронтенд-разработчика. Включает систему интернационализации (i18n) и адаптивный дизайн.',
    zh: '使用 Astro 开发的个人网络作品集，展示我作为前端开发人员的项目、技能和经验。包括国际化 (i18n) 系统和响应式设计。'
  },
  whatILearned: {
    es: [
      'Arquitectura de componentes con Astro',
      'Sistema de i18n personalizado',
      'Optimización de imágenes y assets',
      'SEO y meta tags'
    ],
    en: [
      'Component architecture with Astro',
      'Custom i18n system',
      'Image and asset optimization',
      'SEO and meta tags'
    ],
    ru: [
      'Архитектура компонентов с Astro',
      'Пользовательская система i18n',
      'Оптимизация изображений и ресурсов',
      'SEO и мета-теги'
    ],
    zh: [
      '使用 Astro 的组件架构',
      '自定义 i18n 系统',
      '图像和资源优化',
      'SEO 和元标签'
    ]
  },
  technicalDetails: {
    es: [
      'Astro para mejor rendimiento',
      'React para interactividad',
      'Tailwind CSS para diseño',
      'Sistema de temas (dark/light mode)'
    ],
    en: [
      'Astro for better performance',
      'React for interactivity',
      'Tailwind CSS for design',
      'Theme system (dark/light mode)'
    ],
    ru: [
      'Astro для лучшей производительности',
      'React для интерактивности',
      'Tailwind CSS для дизайна',
      'Система тем (темный/светлый режим)'
    ],
    zh: [
      'Astro 以获得更好的性能',
      'React 用于交互性',
      'Tailwind CSS 用于设计',
      '主题系统（深色/浅色模式）'
    ]
  }
};
