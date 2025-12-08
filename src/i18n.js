import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import zh from './locales/zh.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

const resources = {
  es: { translation: es },
  zh: { translation: zh },
  ru: { translation: ru },
  en: { translation: en }
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
