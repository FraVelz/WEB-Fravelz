/**
 * Estructura de datos para proyectos del portafolio
 * 
 * Cada proyecto debe tener:
 * - slug: identificador único para la URL (ej: "notas-hacking")
 * - Información básica (título, descripción, imagen)
 * - Tecnologías utilizadas
 * - Links (demo, GitHub)
 * - Contenido detallado para la vista individual
 */

export interface Project {
  // Identificación
  slug: string;
  
  // Información básica
  title: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };
  shortDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };
  featuredImage: string; // Ruta a la imagen principal
  
  // Tecnologías y tags
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'tool' | 'other';
  
  // Links
  demoUrl?: string;
  githubUrl?: string;
  isComingSoon?: boolean;
  
  // Contenido detallado (para vista individual)
  fullDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };
  screenshots?: string[]; // Array de rutas a capturas
  whatILearned?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };
  technicalDetails?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };
  
  // Metadata
  featured?: boolean; // Para destacar proyectos principales
  year?: number; // Año del proyecto
}

export const projects: Project[] = [
  {
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
    featuredImage: 'images/portfolio/Portfolio.png',
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Markdown'],
    category: 'frontend',
    demoUrl: 'https://fravelz.github.io/WEB-Notas-de-Hacking',
    githubUrl: 'https://github.com/FraVelz/WEB-Notas-de-Hacking',
    featured: true,
    year: 2025,
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
  },
  {
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
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    demoUrl: 'https://fravelz.github.io/WEB-Fravelz',
    githubUrl: 'https://github.com/FraVelz/WEB-Fravelz',
    featured: true,
    year: 2025,
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
  },
  {
    slug: 'web-hyprdots',
    title: {
      es: 'Web Hyprdots',
      en: 'Web Hyprdots',
      ru: 'Web Hyprdots',
      zh: 'Web Hyprdots'
    },
    shortDescription: {
      es: 'Portafolio web personal con configuración de Hyprland. Diseño moderno, responsivo y totalmente personalizado.',
      en: 'Personal web portfolio with Hyprland configuration. Modern, responsive and fully customized design.',
      ru: 'Личное веб-портфолио с конфигурацией Hyprland. Современный, адаптивный и полностью настраиваемый дизайн.',
      zh: '带有 Hyprland 配置的个人网络作品集。现代、响应式且完全自定义的设计。'
    },
    featuredImage: 'images/others/logo-fravelz.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    demoUrl: 'https://fravelz.github.io/WEB-Hyprdots',
    githubUrl: 'https://github.com/FraVelz/WEB-Hyprdots',
    featured: false,
    year: 2024,
    fullDescription: {
      es: 'Portafolio web inspirado en la configuración de Hyprland, con diseño minimalista y moderno.',
      en: 'Web portfolio inspired by Hyprland configuration, with minimalist and modern design.',
      ru: 'Веб-портфолио, вдохновленное конфигурацией Hyprland, с минималистичным и современным дизайном.',
      zh: '受 Hyprland 配置启发的网络作品集，具有简约现代的设计。'
    }
  }
];

/**
 * Obtener todos los proyectos
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Obtener proyecto por slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

/**
 * Obtener proyectos destacados
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

/**
 * Obtener proyectos por categoría
 */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category);
}

/**
 * Obtener todas las tecnologías únicas
 */
export function getAllTechnologies(): string[] {
  const allTechs = projects.flatMap(p => p.technologies);
  return [...new Set(allTechs)].sort();
}
