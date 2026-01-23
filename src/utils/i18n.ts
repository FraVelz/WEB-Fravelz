// Sistema de i18n para Astro

import esCommon from '../locales/es/common.json';
import esHero from '../locales/es/hero.json';
import esMusic from '../locales/es/music.json';
import esCertifications from '../locales/es/certifications.json';
import esInfo from '../locales/es/info.json';
import esTechnologies from '../locales/es/technologies.json';
import esProjects from '../locales/es/projects.json';
import esAbout from '../locales/es/about.json';
import esHobbies from '../locales/es/hobbies.json';
import esFooter from '../locales/es/footer.json';

import enCommon from '../locales/en/common.json';
import enHero from '../locales/en/hero.json';
import enMusic from '../locales/en/music.json';
import enCertifications from '../locales/en/certifications.json';
import enInfo from '../locales/en/info.json';
import enTechnologies from '../locales/en/technologies.json';
import enProjects from '../locales/en/projects.json';
import enAbout from '../locales/en/about.json';
import enHobbies from '../locales/en/hobbies.json';
import enFooter from '../locales/en/footer.json';

import ruCommon from '../locales/ru/common.json';
import ruHero from '../locales/ru/hero.json';
import ruMusic from '../locales/ru/music.json';
import ruCertifications from '../locales/ru/certifications.json';
import ruInfo from '../locales/ru/info.json';
import ruTechnologies from '../locales/ru/technologies.json';
import ruProjects from '../locales/ru/projects.json';
import ruAbout from '../locales/ru/about.json';
import ruHobbies from '../locales/ru/hobbies.json';
import ruFooter from '../locales/ru/footer.json';

import zhCommon from '../locales/zh/common.json';
import zhHero from '../locales/zh/hero.json';
import zhMusic from '../locales/zh/music.json';
import zhCertifications from '../locales/zh/certifications.json';
import zhInfo from '../locales/zh/info.json';
import zhTechnologies from '../locales/zh/technologies.json';
import zhProjects from '../locales/zh/projects.json';
import zhAbout from '../locales/zh/about.json';
import zhHobbies from '../locales/zh/hobbies.json';
import zhFooter from '../locales/zh/footer.json';

type Language = 'es' | 'en' | 'ru' | 'zh';

const translations = {
  es: {
    ...esCommon,
    ...esHero,
    ...esMusic,
    ...esCertifications,
    ...esInfo,
    ...esTechnologies,
    ...esProjects,
    ...esAbout,
    ...esHobbies,
    ...esFooter,
  },
  en: {
    ...enCommon,
    ...enHero,
    ...enMusic,
    ...enCertifications,
    ...enInfo,
    ...enTechnologies,
    ...enProjects,
    ...enAbout,
    ...enHobbies,
    ...enFooter,
  },
  ru: {
    ...ruCommon,
    ...ruHero,
    ...ruMusic,
    ...ruCertifications,
    ...ruInfo,
    ...ruTechnologies,
    ...ruProjects,
    ...ruAbout,
    ...ruHobbies,
    ...ruFooter,
  },
  zh: {
    ...zhCommon,
    ...zhHero,
    ...zhMusic,
    ...zhCertifications,
    ...zhInfo,
    ...zhTechnologies,
    ...zhProjects,
    ...zhAbout,
    ...zhHobbies,
    ...zhFooter,
  },
};

export function getTranslations(lang: Language = 'es') {
  return translations[lang] || translations.es;
}

export function t(key: string, lang: Language = 'es'): string {
  const t = getTranslations(lang);
  return (t as Record<string, string>)[key] || key;
}

export const languages: Language[] = ['es', 'en', 'ru', 'zh'];

export type { Language };
