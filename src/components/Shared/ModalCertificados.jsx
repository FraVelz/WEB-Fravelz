import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function ModalCertificados({ isOpen, onClose, certificados, selectedCert, onSelectCert }) {
    const { t } = useTranslation();
    const [filtroActivo, setFiltroActivo] = useState(null);

    if (!isOpen) return null;

    // Obtener tags únicos
    const tagsUnicos = [...new Set(certificados.map(c => c.academia))].sort();
    
    // Filtrar certificados según el tag activo
    const certificadosFiltrados = filtroActivo 
        ? certificados.filter(c => c.academia === filtroActivo)
        : certificados;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose}>
            <div 
                className="relative z-10 bg-linear-to-br from-gray-850 via-gray-900 to-gray-950 border border-purple-500/40 rounded-2xl shadow-2xl shadow-purple-500/40 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-linear-to-r from-purple-900/40 via-gray-900/40 to-cyan-900/40 border-b border-purple-500/40 px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent flex-1">
                        {t('cert_completed_title')}
                    </h3>
                    <button
                        onClick={onClose}
                        className="shrink-0 text-gray-400 hover:text-purple-300 active:text-purple-400 transition-all duration-200 text-2xl sm:text-3xl font-bold hover:bg-purple-500/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 active:scale-95"
                        aria-label="Cerrar"
                    >
                        ✕
                    </button>
                </div>

                {/* Filtros - Tags */}
                {!selectedCert && (
                    <div className="sticky top-20 bg-linear-to-r from-gray-900/60 to-gray-900/60 border-b border-purple-500/20 px-6 sm:px-8 py-4 backdrop-blur-sm">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setFiltroActivo(null)}
                                className={`px-4 py-2 rounded-full font-semibold transition-all text-sm ${
                                    filtroActivo === null
                                        ? 'bg-linear-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                                }`}
                            >
                                {t('cert_view_all')} ({certificados.length})
                            </button>
                            {tagsUnicos.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setFiltroActivo(tag)}
                                    className={`px-4 py-2 rounded-full font-semibold transition-all text-sm ${
                                        filtroActivo === tag
                                            ? 'bg-linear-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                                    }`}
                                >
                                    {tag} ({certificados.filter(c => c.academia === tag).length})
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Content Grid */}
                <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 sm:py-8">
                    {selectedCert ? (
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => onSelectCert(null)}
                                className="text-purple-400 hover:text-purple-300 text-sm font-semibold mb-4 flex items-center gap-2"
                            >
                                ← Volver a lista
                            </button>
                            <iframe
                                src={`./certificados/${selectedCert.file}`}
                                className="w-full h-screen border border-purple-500/30 rounded-lg"
                                title={selectedCert.nombre}
                            />
                        </div>
                    ) : certificadosFiltrados.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certificadosFiltrados.map((cert, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSelectCert(cert)}
                                    className="group bg-linear-to-br from-gray-800 to-gray-900 border border-purple-500/30 hover:border-purple-400/60 rounded-lg p-4 text-left transition-all hover:shadow-lg hover:shadow-purple-500/20"
                                >
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📄</div>
                                    <h4 className="font-semibold text-purple-300 mb-2 line-clamp-2 group-hover:text-purple-200">{cert.nombre}</h4>
                                    <p className="text-xs text-gray-400">{cert.academia}</p>
                                    <p className="text-xs text-gray-500 mt-2">{t('cert_click_to_view')}</p>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                            <p className="text-gray-400 text-lg">{t('cert_no_certificates')}</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="h-1 bg-linear-to-r from-purple-500/50 via-cyan-500/30 to-purple-500/50 shrink-0"></div>
            </div>
        </div>
    );
}
