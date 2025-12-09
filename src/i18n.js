import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

// Spanish translations
import esCommon from './locales/es/common.json'
import esHero from './locales/es/hero.json'
import esMusic from './locales/es/music.json'
import esCertifications from './locales/es/certifications.json'
import esInfo from './locales/es/info.json'
import esTechnologies from './locales/es/technologies.json'
import esProjects from './locales/es/projects.json'
import esAbout from './locales/es/about.json'
import esHobbies from './locales/es/hobbies.json'

// English translations
import enCommon from './locales/en/common.json'
import enHero from './locales/en/hero.json'
import enMusic from './locales/en/music.json'
import enCertifications from './locales/en/certifications.json'
import enInfo from './locales/en/info.json'
import enTechnologies from './locales/en/technologies.json'
import enProjects from './locales/en/projects.json'
import enAbout from './locales/en/about.json'
import enHobbies from './locales/en/hobbies.json'

// Russian translations
import ruCommon from './locales/ru/common.json'
import ruHero from './locales/ru/hero.json'
import ruMusic from './locales/ru/music.json'
import ruCertifications from './locales/ru/certifications.json'
import ruInfo from './locales/ru/info.json'
import ruTechnologies from './locales/ru/technologies.json'
import ruProjects from './locales/ru/projects.json'
import ruAbout from './locales/ru/about.json'
import ruHobbies from './locales/ru/hobbies.json'

// Chinese translations
import zhCommon from './locales/zh/common.json'
import zhHero from './locales/zh/hero.json'
import zhMusic from './locales/zh/music.json'
import zhCertifications from './locales/zh/certifications.json'
import zhInfo from './locales/zh/info.json'
import zhTechnologies from './locales/zh/technologies.json'
import zhProjects from './locales/zh/projects.json'
import zhAbout from './locales/zh/about.json'
import zhHobbies from './locales/zh/hobbies.json'

// Merge translations by language
const esTranslation = {
  ...esCommon,
  ...esHero,
  ...esMusic,
  ...esCertifications,
  ...esInfo,
  ...esTechnologies,
  ...esProjects,
  ...esAbout,
  ...esHobbies
}

const enTranslation = {
  ...enCommon,
  ...enHero,
  ...enMusic,
  ...enCertifications,
  ...enInfo,
  ...enTechnologies,
  ...enProjects,
  ...enAbout,
  ...enHobbies
}

const ruTranslation = {
  ...ruCommon,
  ...ruHero,
  ...ruMusic,
  ...ruCertifications,
  ...ruInfo,
  ...ruTechnologies,
  ...ruProjects,
  ...ruAbout,
  ...ruHobbies
}

const zhTranslation = {
  ...zhCommon,
  ...zhHero,
  ...zhMusic,
  ...zhCertifications,
  ...zhInfo,
  ...zhTechnologies,
  ...zhProjects,
  ...zhAbout,
  ...zhHobbies
}

const resources = {
  es: { translation: esTranslation },
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  zh: { translation: zhTranslation }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
