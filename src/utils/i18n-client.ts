// Sistema de i18n del lado del cliente para cambio dinámico de idioma

export type Language = 'es' | 'en' | 'ru' | 'zh';

export const languages: Language[] = ['es', 'en', 'ru', 'zh'];

// Cargar todas las traducciones
async function loadTranslations(lang: Language) {
  const [common, hero, music, certifications, info, technologies, projects, about, hobbies, footer] = await Promise.all([
    import(`@/locales/${lang}/common.json`),
    import(`@/locales/${lang}/hero.json`),
    import(`@/locales/${lang}/music.json`),
    import(`@/locales/${lang}/certifications.json`),
    import(`@/locales/${lang}/info.json`),
    import(`@/locales/${lang}/technologies.json`),
    import(`@/locales/${lang}/projects.json`),
    import(`@/locales/${lang}/about.json`),
    import(`@/locales/${lang}/hobbies.json`),
    import(`@/locales/${lang}/footer.json`),
  ]);

  return {
    ...common.default,
    ...hero.default,
    ...music.default,
    ...certifications.default,
    ...info.default,
    ...technologies.default,
    ...projects.default,
    ...about.default,
    ...hobbies.default,
    ...footer.default,
  };
}

// Cache de traducciones
const translationsCache: Record<Language, any> = {} as any;

// Obtener traducciones (con cache)
export async function getTranslations(lang: Language = 'es') {
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }
  
  const translations = await loadTranslations(lang);
  translationsCache[lang] = translations;
  return translations;
}

// Obtener idioma guardado o detectar del navegador
export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  // Intentar obtener de localStorage
  const stored = localStorage.getItem('preferred-language');
  if (stored && languages.includes(stored as Language)) {
    return stored as Language;
  }
  
  // Detectar del navegador
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  if (languages.includes(langCode as Language)) {
    return langCode as Language;
  }
  
  return 'es';
}

// Guardar idioma preferido
export function setStoredLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
}

// Función de traducción
export function t(key: string, lang: Language = 'es'): string {
  const translations = translationsCache[lang];
  if (!translations) {
    console.warn(`Translations for ${lang} not loaded yet`);
    return key;
  }
  return translations[key] || key;
}
