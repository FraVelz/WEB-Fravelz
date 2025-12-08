import { useTranslation } from 'react-i18next';

export default function TecnologiasSection() {
    const { t } = useTranslation();
    
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('tech_title')}</h2>

            <div className="
            grid grid-cols-1 md:grid-cols-2
            gap-4 text-gray-300
            ">
                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                    <h3 className="font-semibold text-cyan-300 mb-2">{t('tech_basic_title')}</h3>
                    <p className="text-gray-400">{t('tech_basic_desc')}</p>
                </div>

                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                    <h3 className="font-semibold text-purple-300 mb-2">{t('tech_automation_title')}</h3>
                    <p className="text-gray-400">{t('tech_automation_desc')}</p>
                </div>

                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                    <h3 className="font-semibold text-cyan-300 mb-2">{t('tech_network_title')}</h3>
                    <p className="text-gray-400">{t('tech_network_desc')}</p>
                </div>

                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                    <h3 className="font-semibold text-purple-300 mb-2">{t('tech_web_title')}</h3>
                    <p className="text-gray-400">{t('tech_web_desc')}</p>
                </div>
            </div>
        </div>
    );
}
