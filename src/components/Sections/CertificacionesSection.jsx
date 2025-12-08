import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Parrafo from '../Shared/Parrafo';
import ModalInfo from '../Shared/ModalInfo';
import ModalCertificados from '../Shared/ModalCertificados';

export default function CertificacionesSection() {
    const { t } = useTranslation();
    const [showCertificates, setShowCertificates] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificados = [
        { nombre: 'Ciberseguridad y Privacidad 101', file: 'Fravelz-Ciberseguridad-y-Privacidad-101-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Ciberseguridad y Privacidad 202', file: 'Fravelz-Ciberseguridad-y-Privacidad-202-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Ciberseguridad y Privacidad 303', file: 'Fravelz-Ciberseguridad-y-Privacidad-303-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Detección y Protección Contra Malware', file: 'Fravelz-Deteccion-y-Proteccion-Contra-Malware-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Linux para Hacking Ético', file: 'Fravelz-Linux-para-Hacking-Etico-HXC-1133-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Windows para Hacking Ético', file: 'Fravelz-Windows-para-Hacking-Etico-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'OSINT para Hackers Éticos', file: 'Fravelz-OSINT-para-Hackers-Eticos-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Privacidad para Hackers Éticos', file: 'Fravelz-Privacidad-para-Hackers-Eticos-HXC-3388-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Redes para Hacking Ético', file: 'Fravelz-Redes-para-Hacking-Etico-HXC-1133-Hixec.pdf', academia: 'Hixec' },
        { nombre: 'Introducción a Linux', file: 'certificado-hack4u-introduccion-a-linux.pdf', academia: 'Hack4u' },
        { nombre: 'Personalización', file: 'certificado-hack4u-personalizacion.pdf', academia: 'Hack4u' },
        { nombre: 'Python Ofensivo', file: 'certificado-hack4u-python-ofensivo.pdf', academia: 'Hack4u' },
    ];

    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('info_certifications_title')}</h2>
            <Parrafo className="text-gray-300 mb-3">
                {t('cert_intro_paragraph1')}
            </Parrafo>

            <Parrafo className="text-gray-300 mb-3">
                {t('cert_intro_paragraph2')}
            </Parrafo>

            <h3 className="text-2xl font-bold mb-6 text-cyan-300">{t('cert_section_title')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* EJPT Card */}
                <div className="group relative bg-linear-to-br from-cyan-900/30 via-gray-900/50 to-gray-950 border-2 border-cyan-500/40 hover:border-cyan-400/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300"></div>

                    <div className="relative z-10">
                        {/* Icono y estado */}
                        <div className="flex items-center justify-between mb-4">
                            <div></div>
                            <span className="px-3 py-1 bg-cyan-500/30 border border-cyan-400/60 text-cyan-300 text-xs font-bold rounded-full">{t('cert_status_inprogress')}</span>
                        </div>

                        {/* Nombre */}
                        <h4 className="text-2xl font-bold mb-2 bg-linear-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">{t('cert_ejpt_short')}</h4>
                        
                        {/* Nombre completo */}
                        <p className="text-sm text-gray-400 mb-4">{t('cert_ejpt_full')}</p>

                        {/* Organización */}
                        <p className="text-xs text-cyan-400/80 mb-4 font-semibold">{t('cert_ejpt_org')}</p>

                        {/* Descripción */}
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            {t('cert_ejpt_desc')}
                        </p>

                        {/* Costo */}
                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 mb-4">
                            <p className="text-xs text-gray-400">{t('cert_cost_label')}</p>
                            <p className="text-lg font-bold text-cyan-300">{t('cert_ejpt_cost_usd')}</p>
                            <p className="text-xs text-gray-500">{t('cert_ejpt_cost_cop')}</p>
                        </div>

                        {/* Meta */}
                        <p className="text-xs text-gray-400 flex items-center gap-2">
                            {t('cert_goal_label')} {t('cert_ejpt_meta')}
                        </p>
                    </div>
                </div>

                {/* OSCP Card */}
                <div className="group relative bg-linear-to-br from-purple-900/30 via-gray-900/50 to-gray-950 border-2 border-purple-500/40 hover:border-purple-400/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>

                    <div className="relative z-10">
                        {/* Icono y estado */}
                        <div className="flex items-center justify-between mb-4">
                            <div></div>
                            <span className="px-3 py-1 bg-purple-500/30 border border-purple-400/60 text-purple-300 text-xs font-bold rounded-full">{t('cert_status_future')}</span>
                        </div>

                        {/* Nombre */}
                        <h4 className="text-2xl font-bold mb-2 bg-linear-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">{t('cert_oscp_short')}</h4>
                        
                        {/* Nombre completo */}
                        <p className="text-sm text-gray-400 mb-4">{t('cert_oscp_full')}</p>

                        {/* Organización */}
                        <p className="text-xs text-purple-400/80 mb-4 font-semibold">{t('cert_oscp_org')}</p>

                        {/* Descripción */}
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            {t('cert_oscp_desc')}
                        </p>

                        {/* Costo */}
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                            <p className="text-xs text-gray-400">{t('cert_cost_label')}</p>
                            <p className="text-lg font-bold text-purple-300">{t('cert_oscp_cost_usd')}</p>
                            <p className="text-xs text-gray-500">{t('cert_oscp_cost_cop')}</p>
                        </div>

                        {/* Meta */}
                        <p className="text-xs text-gray-400 flex items-center gap-2">
                            {t('cert_goal_label')} {t('cert_oscp_meta')}
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setShowCertificates(true)}
                className="
                group cursor-pointer
                relative inline-flex items-center justify-center gap-2
                px-6 py-3 
                bg-linear-to-r from-purple-500 via-purple-400 to-cyan-500 hover:from-purple-400 hover:via-cyan-400
                hover:to-purple-400 text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 overflow-hidden"
            >
                <span className="relative z-10">{t('cert_view_completed')}</span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"></div>
            </button>

            <ModalCertificados
                isOpen={showCertificates}
                onClose={() => {
                    setShowCertificates(false);
                    setSelectedCertificate(null);
                }}
                certificados={certificados}
                selectedCert={selectedCertificate}
                onSelectCert={setSelectedCertificate}
            />
        </div>
    );
}
