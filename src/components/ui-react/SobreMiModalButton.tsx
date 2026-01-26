import { useState, useEffect } from 'react';
import ModalInfo from './ModalInfo';
import Parrafo from './Parrafo';

interface SobreMiModalButtonProps {
}

export default function SobreMiModalButton({}: SobreMiModalButtonProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations || {});
    };

    window.addEventListener('language-changed', handleLanguageChange as EventListener);
    
    // Obtener traducción inicial
    if (typeof window !== 'undefined' && (window as any).i18n) {
      const currentLang = (window as any).i18n.getCurrentLanguage();
      const t = (window as any).i18n.getTranslations(currentLang);
      setTranslations(t || {});
    }

    return () => {
      window.removeEventListener('language-changed', handleLanguageChange as EventListener);
    };
  }, []);

  const t = translations;

  return (
    <>
      <button
        onClick={() => setShowMoreInfo(true)}
        className="
          cursor-pointer
          group relative inline-flex items-center justify-center gap-2
          px-2 py-1
          bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-500 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 mb-6 overflow-hidden
        "
      >
        <span className="relative z-10">{t.info_more_info}</span>
        <span className="relative z-10 text-lg">→</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"></div>
      </button>

      <ModalInfo
        isOpen={showMoreInfo}
        onClose={() => setShowMoreInfo(false)}
        title={t.about_modal_title}
      >
        <Parrafo className="text-slate-800 dark:text-gray-300">
          {t.about_modal_paragraph1}
        </Parrafo>

        <Parrafo className="text-slate-800 dark:text-gray-300">
          {t.about_modal_paragraph2}
        </Parrafo>

        <Parrafo className="text-slate-800 dark:text-gray-300">
          {t.about_modal_paragraph3}
        </Parrafo>

        <Parrafo className="text-slate-800 dark:text-gray-300">
          {t.about_modal_paragraph4}
        </Parrafo>
      </ModalInfo>
    </>
  );
}
