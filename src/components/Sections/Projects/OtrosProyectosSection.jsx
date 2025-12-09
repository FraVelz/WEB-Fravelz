import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Componente reutilizable para tarjetas de proyecto
function ProjectCard({ img, titleKey, descKey, tags, link, t }) {
    return (
        <div className="bg-linear-to-br from-gray-800/90 to-gray-900 backdrop-blur p-6 rounded-xl border border-purple-500/40 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/30 transition-all overflow-hidden">
            <img src={img} alt={t(titleKey)} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="flex items-center gap-3 mb-3">
                <h4 className="text-lg font-bold text-purple-300">{t(titleKey)}</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                {t(descKey)}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-linear-to-r from-purple-500/25 to-pink-500/15 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/40 hover:border-purple-400/70 transition-all">
                        {tag}
                    </span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer noopener" className="inline-block text-purple-400 hover:text-purple-200 text-sm font-semibold border-b border-purple-500/50 hover:border-purple-400 transition-all">
                {t('other_webhyprdots_link')}
            </a>
        </div>
    );
}

// Datos de proyectos
const projectsData = [
    {
        id: 1,
        img: './web-hyprdots.png',
        titleKey: 'other_webhyprdots_title',
        descKey: 'other_webhyprdots_desc',
        link: 'https://fravelz.github.io/WEB-Hyprdots/',
        tags: ['React', 'Tailwind', 'Portfolio']
    },
    {
        id: 2,
        img: './logo-fravelz.jpg',
        titleKey: 'other_arch_title',
        descKey: 'other_arch_desc',
        link: '#',
        tags: ['Linux', 'Bash', 'Configuración']
    },
    {
        id: 3,
        img: './logo-fravelz.jpg',
        titleKey: 'other_notes_title',
        descKey: 'other_notes_desc',
        link: '#',
        tags: ['Aplicación', 'Productividad', 'Personal']
    },
    {
        id: 4,
        img: './logo-fravelz.jpg',
        titleKey: 'other_politics_title',
        descKey: 'other_politics_desc',
        link: '#',
        tags: ['Análisis', 'Opinión', 'Blog']
    }
];

export default function OtrosProyectosSection() {
    const { t } = useTranslation();
    const [selectedTag, setSelectedTag] = useState(null);

    // Obtener todos los tags únicos
    const allTags = [...new Set(projectsData.flatMap(p => p.tags))];

    // Filtrar proyectos según el tag seleccionado
    const filteredProjects = selectedTag
        ? projectsData.filter(p => p.tags.includes(selectedTag))
        : projectsData;

    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-1 bg-linear-to-r from-purple-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-purple-300 px-4 whitespace-nowrap">
                    {t('other_projects_title')}
                </h3>
                <div className="h-1 bg-linear-to-l from-purple-500 to-transparent flex-1"></div>
            </div>

            {/* Filtro de tags */}
            <div className="flex flex-wrap gap-2 mb-8 p-4 bg-gray-900/50 rounded-xl border border-purple-500/30">
                <button
                    onClick={() => setSelectedTag(null)}
                    onFocus={(e) => e.target.blur()}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedTag === null
                            ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40'
                            : 'bg-gray-800/80 text-gray-400 border border-purple-500/30 hover:border-purple-400/70 hover:text-purple-300'
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
                                ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40'
                                : 'bg-gray-800/80 text-gray-400 border border-purple-500/30 hover:border-purple-400/70 hover:text-purple-300'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        img={project.img}
                        titleKey={project.titleKey}
                        descKey={project.descKey}
                        tags={project.tags}
                        link={project.link}
                        t={t}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">
                        No hay proyectos con el tag "{selectedTag}"
                    </p>
                </div>
            )}
        </div>
    );
}
