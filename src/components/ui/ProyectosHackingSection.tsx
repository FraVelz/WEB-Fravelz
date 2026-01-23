import { useState } from 'react';
import { getTranslations, type Language } from '../../utils/i18n';

interface ProyectosHackingSectionProps {
  lang?: Language;
}

interface Project {
  id: number;
  img: string;
  titleKey: string;
  descKey: string;
  link: string;
  tags: string[];
  isComingSoon: boolean;
}

function HackingProjectCard({ img, titleKey, descKey, tags, link, isComingSoon, t }: {
  img: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  link: string;
  isComingSoon: boolean;
  t: ReturnType<typeof getTranslations>;
}) {
  const projectTitle = (t as any)[titleKey];
  const projectDesc = (t as any)[descKey];
  const altText = projectDesc && projectDesc !== "..." 
    ? `Captura de pantalla del proyecto ${projectTitle} - ${projectDesc.substring(0, 50)}`
    : `Captura de pantalla del proyecto ${projectTitle}`;
  
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/90 dark:to-gray-900 backdrop-blur p-4 sm:p-6 rounded-xl border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30 transition-all overflow-hidden">
      <img src={img} alt={altText} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4" />
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <h4 className="text-base sm:text-lg font-bold text-cyan-600 dark:text-cyan-300">{(t as any)[titleKey]}</h4>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-3">
        {(t as any)[descKey]}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="text-xs bg-gradient-to-r from-cyan-500/25 to-blue-500/15 dark:from-cyan-500/25 dark:to-blue-500/15 text-cyan-600 dark:text-cyan-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70 transition-all">
            {tag}
          </span>
        ))}
      </div>
      {isComingSoon ? (
        <button className="inline-block text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-200 text-sm font-semibold border-b border-cyan-500/50 dark:border-cyan-500/50 hover:border-cyan-600 dark:hover:border-cyan-400 transition-all cursor-pointer">
          {(t as any).hacking_ctf_coming}
        </button>
      ) : (
        <a href={link} target="_blank" rel="noreferrer noopener" className="inline-block text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-200 text-sm font-semibold border-b border-cyan-500/50 dark:border-cyan-500/50 hover:border-cyan-600 dark:hover:border-cyan-400 transition-all">
          {(t as any).hacking_notes_link}
        </a>
      )}
    </div>
  );
}

const baseUrl = import.meta.env.BASE_URL || '';
const hackingProjectsData: Project[] = [
  {
    id: 1,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_notes_title',
    descKey: 'hacking_notes_desc',
    link: '#',
    tags: ['React', 'Frontend', 'Portfolio'],
    isComingSoon: false
  },
  {
    id: 2,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_ctf_title',
    descKey: 'hacking_ctf_desc',
    link: '#',
    tags: ['Full-Stack', 'API', 'Backend'],
    isComingSoon: true
  },
  {
    id: 3,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_tool_title',
    descKey: 'hacking_tool_desc',
    link: '#',
    tags: ['Herramientas', 'Web App', 'JavaScript'],
    isComingSoon: false
  },
  {
    id: 4,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_analysis_title',
    descKey: 'hacking_analysis_desc',
    link: '#',
    tags: ['UI/UX', 'Diseño', 'Responsive'],
    isComingSoon: false
  }
];

export default function ProyectosHackingSection({ lang = 'es' }: ProyectosHackingSectionProps) {
  const t = getTranslations(lang);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = [...new Set(hackingProjectsData.flatMap(p => p.tags))];
  const filteredProjects = selectedTag
    ? hackingProjectsData.filter(p => p.tags.includes(selectedTag))
    : hackingProjectsData;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-transparent flex-1"></div>
        <h3 className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-300 px-2 sm:px-4 whitespace-nowrap">
          {(t as any).hacking_projects_title}
        </h3>
        <div className="h-1 bg-gradient-to-l from-cyan-500 to-transparent flex-1"></div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          onFocus={(e) => e.target.blur()}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedTag === null
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 text-white'
                : 'bg-cyan-500/20 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70'
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
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 text-white'
                : 'bg-cyan-500/20 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
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
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full py-8">
            No hay proyectos con ese tag.
          </p>
        )}
      </div>
    </section>
  );
}
