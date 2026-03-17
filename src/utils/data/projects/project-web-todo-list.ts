import type { Project } from '../project-types';
import webTodoListImg from '@/assets/images-projects/web-todo-list.png';

export const projectWebTodoList: Project = {
  slug: 'web-todo-list',
  title: {
    es: 'To-do List',
    en: 'To-do List',
    ru: 'Список дел',
    zh: '待办事项'
  },
  shortDescription: {
    es: 'Gestor de tareas con Next.js y React. Inbox, Hoy, Próximos, Completadas, búsqueda y filtros.',
    en: 'Task manager with Next.js and React. Inbox, Today, Upcoming, Completed, search and filters.',
    ru: 'Менеджер задач с Next.js и React. Входящие, Сегодня, Предстоящие, Выполненные, поиск и фильтры.',
    zh: '使用 Next.js 和 React 的任务管理器。收件箱、今天、即将到来、已完成、搜索和筛选。'
  },
  featuredImage: webTodoListImg,
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  category: 'frontend',
  demoUrl: 'https://web-to-do-list-pi.vercel.app/ ',
  githubUrl: 'https://github.com/FraVelz/WEB-To-do-List',
  featured: false,
  year: 2025,
  inDevelopment: true,
  fullDescription: {
    es: 'Gestor de tareas desarrollado con Next.js 16 y React 19. Incluye vistas Inbox, Hoy, Próximos, Completadas, búsqueda y filtros. Organiza tu día a día con una interfaz intuitiva y diseño responsive.',
    en: 'Task manager built with Next.js 16 and React 19. Includes Inbox, Today, Upcoming, Completed views, search and filters. Organize your day with an intuitive interface and responsive design.',
    ru: 'Менеджер задач на Next.js 16 и React 19. Включает представления Входящие, Сегодня, Предстоящие, Выполненные, поиск и фильтры.',
    zh: '使用 Next.js 16 和 React 19 构建的任务管理器。包含收件箱、今天、即将到来、已完成视图、搜索和筛选。'
  }
};
