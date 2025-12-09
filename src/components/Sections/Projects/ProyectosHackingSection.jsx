import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Componente reutilizable para tarjetas de proyecto
function HackingProjectCard({ img, titleKey, descKey, tags, link, isComingSoon, t }) {
    return (
        <div className="bg-linear-to-br from-gray-800/90 to-gray-900 backdrop-blur p-6 rounded-xl border border-cyan-500/40 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all overflow-hidden">
            <img src={img} alt={t(titleKey)} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="flex items-center gap-3 mb-3">
                <h4 className="text-lg font-bold text-cyan-300">{t(titleKey)}</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                {t(descKey)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-linear-to-r from-cyan-500/25 to-blue-500/15 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-500/40 hover:border-cyan-400/70 transition-all">
                        {tag}
                    </span>
                ))}
            </div>
            {isComingSoon ? (
                <button className="inline-block text-cyan-400 hover:text-cyan-200 text-sm font-semibold border-b border-cyan-500/50 hover:border-cyan-400 transition-all cursor-pointer">
                    {t('hacking_ctf_coming')}
                </button>
            ) : (
                <a href={link} target="_blank" rel="noreferrer noopener" className="inline-block text-cyan-400 hover:text-cyan-200 text-sm font-semibold border-b border-cyan-500/50 hover:border-cyan-400 transition-all">
                    {t('hacking_notes_link')}
                </a>
            )}
        </div>
    );
}

// Datos de proyectos hacking
const hackingProjectsData = [
    {
        id: 1,
        img: './logo-fravelz.jpg',
        titleKey: 'hacking_notes_title',
        descKey: 'hacking_notes_desc',
        link: '#',
        tags: ['Hacking', 'Educación', 'Notas'],
        isComingSoon: false
    },
    {
        id: 2,
        img: './logo-fravelz.jpg',
        titleKey: 'hacking_ctf_title',
        descKey: 'hacking_ctf_desc',
        link: '#',
        tags: ['CTF', 'Desafíos', 'Seguridad'],
        isComingSoon: true
    },
    {
        id: 3,
        img: './logo-fravelz.jpg',
        titleKey: 'hacking_tool_title',
        descKey: 'hacking_tool_desc',
        link: '#',
        tags: ['Herramientas', 'Hacking', 'Ciberseguridad'],
        isComingSoon: false
    },
    {
        id: 4,
        img: './logo-fravelz.jpg',
        titleKey: 'hacking_analysis_title',
        descKey: 'hacking_analysis_desc',
        link: '#',
        tags: ['Análisis', 'Investigación', 'Seguridad'],
        isComingSoon: false
    }
];

export default function ProyectosHackingSection() {
    const { t } = useTranslation();
    const [selectedTag, setSelectedTag] = useState(null);

    // Obtener todos los tags únicos
    const allTags = [...new Set(hackingProjectsData.flatMap(p => p.tags))];

    // Filtrar proyectos según el tag seleccionado
    const filteredProjects = selectedTag
        ? hackingProjectsData.filter(p => p.tags.includes(selectedTag))
        : hackingProjectsData;

    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-1 bg-linear-to-r from-cyan-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-cyan-300 px-4 whitespace-nowrap">
                    {t('hacking_projects_title')}
                </h3>
                <div className="h-1 bg-linear-to-l from-cyan-500 to-transparent flex-1"></div>
            </div>

            {/* Filtro de tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setSelectedTag(null)}
                    onFocus={(e) => e.target.blur()}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedTag === null
                            ? 'bg-linear-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400/70'
                    }`}
                >
                    Todos
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        onFocus={(e) => e.target.blur()}
                        className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                            selectedTag === tag
                                ? 'bg-linear-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400/70'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <HackingProjectCard
                            key={project.id}
                            img={project.img}
                            titleKey={project.titleKey}
                            descKey={project.descKey}
                            tags={project.tags}
                            link={project.link}
                            isComingSoon={project.isComingSoon}
                            t={t}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-400 col-span-full py-8">
                        No hay proyectos con ese tag.
                    </p>
                )}
            </div>
        </div>
    );
}
