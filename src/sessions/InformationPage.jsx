import { useTranslation } from 'react-i18next'
import TecnologiasSection from '../components/Sections/TecnologiasSection';
import CertificacionesSection from '../components/Sections/CertificacionesSection';
import SobreMiSection from '../components/Sections/SobreMiSection';
import PasatiemposSection from '../components/Sections/PasatiemposSection';
import ProyectosHackingSection from '../components/Sections/Projects/ProyectosHackingSection';
import OtrosProyectosSection from '../components/Sections/Projects/OtrosProyectosSection';
import Line from '../components/Shared/Line';

export default function FrontPage() {
    const { t } = useTranslation();

    return (
        <div className="
        h-fit w-screen 
        min-h-screen
        flex justify-center
        py-3
        ">
            <div className="
            w-screen sm:w-xl sm:max-w-7xl
            lg:w-3/4
            
            h-fit
            
            p-4 sm:p-8
            sm:rounded-2xl

            border-gray-700
            border-t-2 sm:border-2

            bg-gray-950 text-gray-50
            hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20
            transition-all duration-300

            overflow-auto wrap-break-word whitespace-pre-wrap
            ">
                {/* Título Principal */}
                <h1 className="text-center text-3xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('info_title')}</h1>

                {/* Sección: Tecnologías */}
                <TecnologiasSection />

                <Line />

                {/* Sección: Certificaciones */}
                <CertificacionesSection />

                <Line />

                {/* Sección: Sobre Mí */}
                <SobreMiSection />

                <Line />

                {/* Sección: Pasatiempos */}
                <PasatiemposSection />

                <Line />

                {/* Título de Proyectos */}
                <h2 className="text-center text-3xl font-bold mb-8 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('proyectos_personales')}</h2>

                {/* Sección: Proyectos Principales de Hacking */}
                <ProyectosHackingSection />

                <Line />

                {/* Sección: Otros Proyectos */}
                <OtrosProyectosSection />
            </div>
        </div>
    );
}
