import type { Project } from '../project-types';
import WebMarcadoresImg from '@/assets/images-projects/web-marcadores.png';

export const projectWebMarcadores: Project = {
  slug: 'web-marcadores',
  title: {
    es: 'Marcadores',
    en: 'Bookmarks',
    ru: 'Закладки',
    zh: '书签'
  },
  shortDescription: {
    es: 'Gestor de marcadores con Supabase. Dashboard con carpetas, etiquetas, búsqueda y referencia de atajos.',
    en: 'Bookmark manager with Supabase. Dashboard with folders, tags, search and shortcut reference.',
    ru: 'Менеджер закладок с Supabase. Панель с папками, тегами, поиском и справочником горячих клавиш.',
    zh: '使用 Supabase 的书签管理器。支持文件夹、标签、搜索和快捷键参考的仪表板。'
  },
  featuredImage: WebMarcadoresImg,
  technologies: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'TypeScript'],
  category: 'fullstack',
  demoUrl: undefined,
  githubUrl: 'https://github.com/FraVelz/WEB-Marcadores',
  featured: false,
  year: 2025,
  inDevelopment: true,
  fullDescription: {
    es: 'Gestor de marcadores con autenticación y base de datos en Supabase. Dashboard con carpetas, etiquetas, búsqueda y panel de atajos de teclado. Incluye modo demo para probar sin cuenta.',
    en: 'Bookmark manager with Supabase authentication and database. Dashboard with folders, tags, search and keyboard shortcuts panel. Includes demo mode to try without an account.',
    ru: 'Менеджер закладок с аутентификацией и базой данных Supabase. Панель с папками, тегами, поиском и справочником горячих клавиш. Включает демо-режим.',
    zh: '使用 Supabase 认证和数据库的书签管理器。支持文件夹、标签、搜索和快捷键面板的仪表板。包含无需账户即可试用的演示模式。'
  }
};
