import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Parrafo from '../Shared/Parrafo';
import ModalInfo from '../Shared/ModalInfo';

export default function SobreMiSection() {
    const { t } = useTranslation();
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('info_about_title')}</h2>
            <Parrafo className="text-gray-300 mb-4">
                {t('about_intro_text')}
            </Parrafo>

            <h3 className="text-xl font-semibold mb-3 text-gray-100">{t('info_about_subtitle')}</h3>

            <Parrafo className="text-gray-300 mb-4">
                {t('about_history_text')}
            </Parrafo>

            <button
                onClick={() => setShowMoreInfo(true)}
                className="
                cursor-pointer
                group relative inline-flex items-center justify-center gap-2
                px-2 py-1
                bg-linear-to-r from-cyan-500 via-cyan-400 to-purple-500 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 mb-6 overflow-hidden
                "
            >
                <span className="relative z-10">{t('info_more_info')}</span>
                <span className="relative z-10 text-lg">→</span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"></div>
            </button>

            <ModalInfo
                isOpen={showMoreInfo}
                onClose={() => setShowMoreInfo(false)}
                title={t('about_modal_title')}
            >
                <Parrafo className="text-gray-300">
                    {t('about_modal_paragraph1')}
                </Parrafo>

                <Parrafo className="text-gray-300">
                    {t('about_modal_paragraph2')}
                </Parrafo>

                <Parrafo className="text-gray-300">
                    {t('about_modal_paragraph3')}
                </Parrafo>

                <Parrafo className="text-gray-300">
                    {t('about_modal_paragraph4')}
                </Parrafo>

                <Parrafo className="text-gray-300">
                    {t('about_modal_paragraph5')}
                </Parrafo>
            </ModalInfo>

            <h3 className="text-xl font-semibold mb-3 text-gray-100">{t('info_currently_subtitle')}</h3>
            <Parrafo className="text-gray-300">
                {t('about_current_text')}
            </Parrafo>
        </div>
    );
}
