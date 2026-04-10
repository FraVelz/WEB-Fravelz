// Sistema de i18n del lado del cliente
// Este archivo se carga en el navegador y maneja el cambio dinámico de idioma

(function () {
  "use strict";

  const languages = ["es", "en", "ru", "zh"];
  const defaultLang = "es";
  const base =
    typeof window !== "undefined" && window.__BASE_URL__
      ? window.__BASE_URL__
      : "";

  // Cache de traducciones
  let translationsCache = {};
  let currentLang = defaultLang;

  // Extraer idioma del pathname (compatible con /es/, /en/projects/, /WEB-Fravelz/es/)
  function getLangFromUrl() {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const langSegment = segments.find(function (s) {
      return languages.includes(s);
    });
    return langSegment || null;
  }

  // Leer cookie lang
  function getCookieLang() {
    try {
      const match = document.cookie.match(/lang=([^;]+)/);
      return match && languages.includes(match[1]) ? match[1] : null;
    } catch (e) {
      return null;
    }
  }

  // Obtener idioma con prioridad URL-first (sincronizado con SSR)
  function getStoredLanguage() {
    // 1. URL - la página ya fue renderizada con este idioma
    const langFromUrl = getLangFromUrl();
    if (langFromUrl) {
      return langFromUrl;
    }

    // 2. localStorage
    try {
      const stored = localStorage.getItem("preferred-language");
      if (stored && languages.includes(stored)) {
        return stored;
      }
    } catch (e) {
      console.warn("localStorage not available", e);
    }

    // 3. Cookie (alineado con el header que usa cookie para redirect)
    const cookieLang = getCookieLang();
    if (cookieLang) {
      return cookieLang;
    }

    // 4. Navegador
    const browserLang = navigator.language || navigator.userLanguage || "";
    const langCode = browserLang.toLowerCase().split("-")[0];
    if (languages.includes(langCode)) {
      return langCode;
    }

    // 5. Por defecto
    return defaultLang;
  }

  // Guardar idioma preferido
  function setStoredLanguage(lang) {
    try {
      localStorage.setItem("preferred-language", lang);
    } catch (e) {
      console.warn("localStorage not available", e);
    }
  }

  // Cargar traducciones desde el servidor
  async function loadTranslations(lang) {
    if (translationsCache[lang]) {
      return translationsCache[lang];
    }

    try {
      const [
        common,
        hero,
        music,
        certifications,
        info,
        technologies,
        about,
        hobbies,
        footer,
      ] = await Promise.all([
        fetch(`${base}locals/${lang}/common.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/hero.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/music.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/certifications.json`).then((r) =>
          r.json(),
        ),
        fetch(`${base}locals/${lang}/info.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/technologies.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/about.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/hobbies.json`).then((r) => r.json()),
        fetch(`${base}locals/${lang}/footer.json`).then((r) => r.json()),
      ]);

      const translations = {
        ...common,
        ...hero,
        ...music,
        ...certifications,
        ...info,
        ...technologies,
        ...about,
        ...hobbies,
        ...footer,
      };

      translationsCache[lang] = translations;
      return translations;
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      return {};
    }
  }

  // Actualizar todos los elementos con data-i18n
  function updateTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    const translations = translationsCache[lang];

    if (!translations) {
      console.warn(`Translations for ${lang} not loaded yet`);
      return;
    }

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && translations[key]) {
        const value = translations[key];

        // Si es un input/textarea, actualizar placeholder o value según corresponda
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          if (element.hasAttribute("data-i18n-placeholder")) {
            element.placeholder = value;
          } else {
            element.value = value;
          }
        } else if (element.hasAttribute("data-i18n-html")) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // Actualizar atributos específicos
    const attrElements = document.querySelectorAll("[data-i18n-attr]");
    attrElements.forEach((element) => {
      const attrData = element.getAttribute("data-i18n-attr");
      if (attrData) {
        const [attr, key] = attrData.split(":");
        if (key && translations[key]) {
          element.setAttribute(attr, translations[key]);
        }
      }
    });

    // Disparar evento personalizado para componentes React
    window.dispatchEvent(
      new CustomEvent("language-changed", {
        detail: { lang, translations },
      }),
    );

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
  }

  // Cambiar idioma
  async function changeLanguage(lang) {
    if (!languages.includes(lang)) {
      console.warn(`Invalid language: ${lang}`);
      return;
    }

    currentLang = lang;
    setStoredLanguage(lang);

    // Cargar traducciones si no están en cache
    await loadTranslations(lang);

    // Actualizar la página
    updateTranslations(lang);
  }

  // Inicializar
  async function init() {
    currentLang = getStoredLanguage();
    const langFromUrl = getLangFromUrl();

    // Sincronizar localStorage cuando el idioma viene de la URL
    if (langFromUrl) {
      setStoredLanguage(langFromUrl);
    }

    // Cargar traducciones (necesarias para i18n.t() y changeLanguage)
    await loadTranslations(currentLang);

    // No sobrescribir el DOM si la URL ya tiene idioma: el SSR ya renderizó correctamente
    if (!langFromUrl) {
      updateTranslations(currentLang);
    }

    // Inicializar selectores de idioma
    const selects = document.querySelectorAll(".language-selector");
    selects.forEach((select) => {
      select.value = currentLang;
      select.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
      });
    });

    // Reinicializar cuando se abre el drawer (para móvil)
    window.addEventListener("drawer-opened", () => {
      setTimeout(() => {
        const selects = document.querySelectorAll(".language-selector");
        selects.forEach((select) => {
          select.value = currentLang;
          if (!select.dataset.initialized) {
            select.dataset.initialized = "true";
            select.addEventListener("change", (e) => {
              changeLanguage(e.target.value);
            });
          }
        });
      }, 150);
    });
  }

  // Exponer funciones globales
  window.i18n = {
    changeLanguage,
    getCurrentLanguage: () => currentLang,
    getTranslations: (lang) => translationsCache[lang] || {},
    t: (key, lang = currentLang) => {
      const translations =
        translationsCache[lang] || translationsCache[currentLang] || {};
      return translations[key] || key;
    },
  };

  // Inicializar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
