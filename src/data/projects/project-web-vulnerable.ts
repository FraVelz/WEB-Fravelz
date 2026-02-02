import type { Project } from '../project-types';

export const projectWebVulnerable: Project = {
  slug: 'web-vulnerable',
  title: {
    es: 'Vulnerable Web',
    en: 'Vulnerable Web',
    ru: 'Vulnerable Web',
    zh: 'Vulnerable Web'
  },
  shortDescription: {
    es: 'Laboratorio educativo de seguridad web para aprender vulnerabilidades en un entorno controlado. CTF con banderas y progreso guardado.',
    en: 'Educational web security lab to learn vulnerabilities in a controlled environment. CTF with flags and saved progress.',
    ru: 'Образовательная лаборатория веб-безопасности для изучения уязвимостей в контролируемой среде. CTF с флагами и сохранением прогресса.',
    zh: '在受控环境中学习漏洞的 Web 安全教育实验室。带旗帜和进度保存的 CTF。'
  },
  featuredImage: 'images/portfolio/web-vulnerable.png',
  technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
  category: 'frontend',
  demoUrl: 'https://fravelz.github.io/WEB-Vulnerable',
  githubUrl: 'https://github.com/FraVelz/WEB-Vulnerable',
  featured: false,
  year: 2025,
  inDevelopment: true,
  fullDescription: {
    es: 'Laboratorio educativo de seguridad web para aprender vulnerabilidades (XSS, CSRF, SQL Injection, Path Traversal, etc.) en un entorno controlado. Incluye panel de conceptos de hacking, desafíos CTF con banderas por dificultad, sistema de verificación de flags y progreso guardado en localStorage. Solo para formación en ciberseguridad.',
    en: 'Educational web security lab to learn vulnerabilities (XSS, CSRF, SQL Injection, Path Traversal, etc.) in a controlled environment. Includes hacking concepts panel, CTF challenges with flags by difficulty, flag verification system and progress saved in localStorage. For cybersecurity training only.',
    ru: 'Образовательная лаборатория веб-безопасности для изучения уязвимостей (XSS, CSRF, SQL Injection, Path Traversal и др.) в контролируемой среде. Включает панель концепций, CTF-задачи с флагами по сложности, систему проверки флагов и сохранение прогресса в localStorage.',
    zh: '在受控环境中学习漏洞（XSS、CSRF、SQL 注入、路径遍历等）的 Web 安全教育实验室。包含黑客概念面板、按难度划分的 CTF 挑战、旗帜验证系统和 localStorage 进度保存。'
  }
};
