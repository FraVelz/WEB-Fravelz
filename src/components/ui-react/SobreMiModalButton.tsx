import { useState } from 'react';
import { getTranslations, type Language } from '../../utils/i18n';
import ModalInfo from './ModalInfo';
import Parrafo from './Parrafo';

interface SobreMiModalButtonProps {
  lang?: Language;
}

export default function SobreMiModalButton({ lang = 'es' }: SobreMiModalButtonProps) {
  const t = getTranslations(lang);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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
        <Parrafo className="text-gray-700 dark:text-gray-300">
          {t.about_modal_paragraph1}
        </Parrafo>

        <Parrafo className="text-gray-700 dark:text-gray-300">
          {t.about_modal_paragraph2}
        </Parrafo>

        <Parrafo className="text-gray-700 dark:text-gray-300">
          {t.about_modal_paragraph3}
        </Parrafo>

        <Parrafo className="text-gray-700 dark:text-gray-300">
          {t.about_modal_paragraph4}
        </Parrafo>
      </ModalInfo>
    </>
  );
}
