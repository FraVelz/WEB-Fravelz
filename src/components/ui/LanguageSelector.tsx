import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { type Language } from "../../utils/i18n";

interface LanguageSelectorProps {
  lang?: Language;
}

export default function LanguageSelector({ lang: initialLang = "es" }: LanguageSelectorProps) {
  const [language, setLanguage] = useState<Language>(initialLang);

  useEffect(() => {
    // Obtener idioma de la URL o usar el prop
    const urlLang = window.location.pathname.split('/').filter(Boolean)[0];
    const validLangs: Language[] = ['es', 'en', 'ru', 'zh'];
    const lang = validLangs.includes(urlLang as Language) ? (urlLang as Language) : initialLang;
    setLanguage(lang);
  }, [initialLang]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Redirigir a la ruta con el idioma
    const baseUrl = import.meta.env.BASE_URL;
    const currentPath = window.location.pathname.replace(baseUrl, '');
    const pathWithoutLang = currentPath.split('/').slice(1).join('/');
    const newPath = lang === 'es' 
      ? `${baseUrl}${pathWithoutLang}`
      : `${baseUrl}${lang}/${pathWithoutLang}`;
    
    window.location.href = newPath || `${baseUrl}${lang === 'es' ? '' : lang}`;
  };

  return (
    <div className="place-self-center flex items-center gap-2 lg:mt-2">
      <label
        htmlFor="select-language"
        className="sr-only"
      >
        Seleccionar idioma
      </label>

      <FontAwesomeIcon icon={faLanguage} className="text-cyan-200" />

      <select
        id="select-language"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="
          bg-gray-800 text-cyan-200
          border border-cyan-500/30
          hover:border-cyan-400/60
          rounded px-2 py-1
          text-sm
          transition-all
          cursor-pointer
        "
        aria-label="Seleccionar idioma de la página"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}
