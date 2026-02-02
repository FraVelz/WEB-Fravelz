import type { Project } from '../project-types';

export const projectWebSorteo: Project = {
  slug: 'web-sorteo',
  title: {
    es: 'Sistema de Sorteo',
    en: 'Lottery System',
    ru: 'Система розыгрыша',
    zh: '抽奖系统'
  },
  shortDescription: {
    es: 'Plataforma template de sorteo online con venta de boletas, múltiples métodos de pago y sorteo automático. Preparado para Firebase.',
    en: 'Online lottery platform template with ticket sales, multiple payment methods and automatic draw. Ready for Firebase integration.',
    ru: 'Шаблон платформы онлайн-розыгрыша с продажей билетов, несколькими способами оплаты и автоматической лотереей. Готов к интеграции Firebase.',
    zh: '在线抽奖平台模板，含门票销售、多种支付方式和自动抽奖。准备集成 Firebase。'
  },
  featuredImage: 'images/portfolio/web-sorteo.png',
  technologies: ['Astro', 'Tailwind CSS'],
  category: 'frontend',
  demoUrl: 'https://fravelz.github.io/WEB-Sorteo',
  githubUrl: 'https://github.com/FraVelz/WEB-Sorteo',
  featured: false,
  year: 2024,
  inDevelopment: true,
  fullDescription: {
    es: 'Plataforma template de sorteo online para futura realización completa. Incluye landing de anuncio, sistema de compra de boletas con formulario, múltiples métodos de pago (tarjeta, transferencia, PayPal UI), sorteo automático con temporizador, estadísticas en tiempo real. Estructura preparada para Firebase o Supabase.',
    en: 'Online lottery platform template for future full implementation. Includes landing page, ticket purchase system with form, multiple payment methods (card, transfer, PayPal UI), automatic draw with timer, real-time statistics. Structure ready for Firebase or Supabase.',
    ru: 'Шаблон платформы онлайн-розыгрыша для будущей полной реализации. Включает лендинг, систему покупки билетов, несколько способов оплаты, автоматическую лотерею с таймером, статистику в реальном времени. Структура готова для Firebase или Supabase.',
    zh: '用于未来完整实现的在线抽奖平台模板。包含着陆页、门票购买系统、多种支付方式、带计时器的自动抽奖、实时统计。结构已为 Firebase 或 Supabase 做好准备。'
  }
};
