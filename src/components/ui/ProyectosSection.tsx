import { useState, useEffect } from 'react';
import { getTranslations, type Language } from '../../utils/i18n';

interface ProyectosSectionProps {
  lang?: Language;
}

interface Project {
  id: number;
  img: string;
  titleKey: string;
  descKey: string;
  detailedDescKey?: string;
  screenshots?: string[];
  features?: string[];
  webLink?: string;
  gitLink?: string;
  tags: string[];
  isComingSoon: boolean;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  t: ReturnType<typeof getTranslations>;
}

function ProjectModal({ isOpen, onClose, project, t }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const projectTitle = (t as any)[project.titleKey] || project.titleKey;
  const projectDesc = (t as any)[project.descKey] || project.descKey;
  const detailedDesc = project.detailedDescKey ? ((t as any)[project.detailedDescKey] || '') : '';
  const screenshots = project.screenshots || [];
  const features = project.features || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative z-10
                   bg-gradient-to-br from-white via-gray-50 to-gray-100
                   dark:from-gray-900 dark:via-gray-900 dark:to-gray-950
                   border border-cyan-400/50 dark:border-cyan-500/40
                   rounded-2xl
                   shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-500/40
                   w-full max-w-4xl max-h-[90vh]
                   overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0
                        bg-gradient-to-r from-cyan-50/80 via-gray-50/80 to-purple-50/80
                        dark:from-cyan-900/40 dark:via-gray-900/40 dark:to-purple-900/40
                        border-b border-cyan-400/50 dark:border-cyan-500/40
                        px-6 sm:px-8 py-5 sm:py-6
                        flex items-center justify-between gap-4
                        backdrop-blur-sm z-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold
                        bg-gradient-to-r from-cyan-600 to-purple-600
                        dark:from-cyan-300 dark:to-purple-300
                        bg-clip-text text-transparent flex-1">
            {projectTitle}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer shrink-0
                      text-gray-600 dark:text-gray-400
                      hover:text-cyan-600 dark:hover:text-cyan-300
                      active:text-cyan-700 dark:active:text-cyan-400
                      transition-all duration-200
                      text-2xl sm:text-3xl font-bold
                      hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20
                      rounded-full w-10 h-10 sm:w-12 sm:h-12
                      flex items-center justify-center
                      hover:scale-110 active:scale-95"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-8 py-6 sm:py-8
                       text-gray-700 dark:text-gray-200
                       space-y-6
                       scrollbar-thin scrollbar-thumb-cyan-500/40 dark:scrollbar-thumb-cyan-500/40 scrollbar-track-gray-200/50 dark:scrollbar-track-gray-900/50">
          
          {/* Imagen principal */}
          <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden border border-cyan-400/30 dark:border-cyan-500/30">
            <img
              src={project.img}
              alt={projectTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Descripción corta */}
          <div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectDesc}
            </p>
          </div>

          {/* Descripción detallada */}
          {detailedDesc && (
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                Acerca del proyecto
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {detailedDesc}
              </p>
            </div>
          )}

          {/* Características */}
          {features.length > 0 && (
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                Características
              </h4>
              <ul className="space-y-2">
                {features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1 shrink-0">◆</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Capturas de pantalla */}
          {screenshots.length > 0 && (
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                Capturas de pantalla
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((screenshot: string, idx: number) => (
                  <div key={idx} className="relative rounded-lg overflow-hidden border border-cyan-400/30 dark:border-cyan-500/30 group">
                    <img
                      src={screenshot}
                      alt={`${projectTitle} - Captura ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      onClick={() => window.open(screenshot, '_blank')}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                Tecnologías
              </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-sm font-medium
                             bg-gradient-to-r from-cyan-500/25 to-blue-500/15
                             dark:from-cyan-500/25 dark:to-blue-500/15
                             text-cyan-600 dark:text-cyan-300
                             border border-cyan-400/50 dark:border-cyan-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Enlaces de acción */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-cyan-400/30 dark:border-cyan-500/30">
            {project.webLink && !project.isComingSoon && (
              <a
                href={project.webLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-cyan-500/20 dark:bg-cyan-500/20
                           text-cyan-600 dark:text-cyan-400
                           hover:bg-cyan-500/30 dark:hover:bg-cyan-500/30
                           border border-cyan-400/50 dark:border-cyan-500/40
                           hover:border-cyan-500 dark:hover:border-cyan-400/70
                           transition-all text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                Visitar sitio web
              </a>
            )}

            {project.gitLink && !project.isComingSoon && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                           bg-gray-500/20 dark:bg-gray-500/20
                           text-gray-700 dark:text-gray-300
                           hover:bg-gray-500/30 dark:hover:bg-gray-500/30
                           border border-gray-400/50 dark:border-gray-500/40
                           hover:border-gray-500 dark:hover:border-gray-400/70
                           transition-all text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver en GitHub
              </a>
            )}
          </div>
        </div>

        {/* Footer gradient */}
        <div className="h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/30 to-cyan-500/50 shrink-0"></div>
      </div>
    </div>
  );
}

function ProjectCard({ img, titleKey, descKey, tags, webLink, gitLink, onInfoClick, isComingSoon, t }: {
  img: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  webLink?: string;
  gitLink?: string;
  onInfoClick: () => void;
  isComingSoon: boolean;
  t: ReturnType<typeof getTranslations>;
}) {
  const projectTitle = (t as any)[titleKey] || titleKey || '';
  const projectDesc = (t as any)[descKey] || descKey || '';
  const altText = projectDesc && projectDesc !== "..." && typeof projectDesc === 'string'
    ? `Captura de pantalla del proyecto ${projectTitle} - ${projectDesc.substring(0, 50)}`
    : `Captura de pantalla del proyecto ${projectTitle || 'proyecto'}`;

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/90 dark:to-gray-900 backdrop-blur p-4 sm:p-6 rounded-xl border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30 transition-all overflow-hidden group">
      {/* Imagen del proyecto */}
      <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
        <img
          src={img}
          alt={altText}
          className="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        {isComingSoon && (
          <div className="absolute top-2 right-2 bg-yellow-500/90 dark:bg-yellow-600/90 text-white text-xs font-bold px-2 py-1 rounded">
            {(t as any).project_coming_soon || "Próximamente"}
          </div>
        )}
      </div>

      {/* Título */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <h4 className="text-base sm:text-lg font-bold text-cyan-600 dark:text-cyan-300">
          {(t as any)[titleKey]}
        </h4>
      </div>

      {/* Descripción */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
        {(t as any)[descKey]}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-gradient-to-r from-cyan-500/25 to-blue-500/15 dark:from-cyan-500/25 dark:to-blue-500/15 text-cyan-600 dark:text-cyan-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-cyan-400/50 dark:border-cyan-500/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Enlaces de acción */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {webLink && !isComingSoon && (
          <a
            href={webLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/30 dark:hover:bg-cyan-500/30 border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70 transition-all text-xs sm:text-sm font-medium"
            title="Ver sitio web"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            Web
          </a>
        )}

        {gitLink && !isComingSoon && (
          <a
            href={gitLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-500/20 dark:bg-gray-500/20 text-gray-700 dark:text-gray-300 hover:bg-gray-500/30 dark:hover:bg-gray-500/30 border border-gray-400/50 dark:border-gray-500/40 hover:border-gray-500 dark:hover:border-gray-400/70 transition-all text-xs sm:text-sm font-medium"
            title="Ver en GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}

        {!isComingSoon && (
          <button
            onClick={onInfoClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 hover:bg-purple-500/30 dark:hover:bg-purple-500/30 border border-purple-400/50 dark:border-purple-500/40 hover:border-purple-500 dark:hover:border-purple-400/70 transition-all text-xs sm:text-sm font-medium cursor-pointer"
            title="Más información"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            Info
          </button>
        )}

        {isComingSoon && (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-500/20 dark:bg-gray-500/20 text-gray-600 dark:text-gray-400 border border-gray-400/50 dark:border-gray-500/40 text-xs sm:text-sm font-medium">
            Próximamente
          </span>
        )}
      </div>
    </div>
  );
}

const baseUrl = import.meta.env.BASE_URL || '';
// Solo 4 proyectos principales
const hackingProjectsData: Project[] = [
  {
    id: 1,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_notes_title',
    descKey: 'hacking_notes_desc',
    detailedDescKey: 'hacking_notes_detailed',
    screenshots: [
      `${baseUrl}imagenes/logo-fravelz.jpg`,
      // Agregar más capturas aquí
    ],
    features: [
      // Las características se pueden agregar aquí o desde traducciones
    ],
    webLink: '#',
    gitLink: '#',
    tags: ['React', 'Frontend', 'Portfolio'],
    isComingSoon: false
  },
  {
    id: 2,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_ctf_title',
    descKey: 'hacking_ctf_desc',
    detailedDescKey: 'hacking_ctf_detailed',
    screenshots: [],
    features: [],
    webLink: undefined,
    gitLink: undefined,
    tags: ['Full-Stack', 'API', 'Backend'],
    isComingSoon: true
  },
  {
    id: 3,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_tool_title',
    descKey: 'hacking_tool_desc',
    detailedDescKey: 'hacking_tool_detailed',
    screenshots: [],
    features: [],
    webLink: '#',
    gitLink: '#',
    tags: ['Herramientas', 'Web App', 'JavaScript'],
    isComingSoon: false
  },
  {
    id: 4,
    img: `${baseUrl}imagenes/logo-fravelz.jpg`,
    titleKey: 'hacking_analysis_title',
    descKey: 'hacking_analysis_desc',
    detailedDescKey: 'hacking_analysis_detailed',
    screenshots: [],
    features: [],
    webLink: '#',
    gitLink: '#',
    tags: ['UI/UX', 'Diseño', 'Responsive'],
    isComingSoon: false
  }
];

export default function ProyectosSection({ lang = 'es' }: ProyectosSectionProps) {
  const t = getTranslations(lang);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allTags = [...new Set(hackingProjectsData.flatMap(p => p.tags))];
  const filteredProjects = selectedTag
    ? hackingProjectsData.filter(p => p.tags.includes(selectedTag))
    : hackingProjectsData;

  const handleInfoClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Cerrar modal con ESC
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-transparent flex-1"></div>
        <h3 className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-300 px-2 sm:px-4 whitespace-nowrap">
          {(t as any).hacking_projects_title}
        </h3>
        <div className="h-1 bg-gradient-to-l from-cyan-500 to-transparent flex-1"></div>
      </div>

      {/* Filtros de tags */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          onFocus={(e) => e.target.blur()}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedTag === null
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
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedTag === tag
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 text-white'
              : 'bg-cyan-500/20 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-400/50 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400/70'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid de proyectos (solo 3 proyectos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, 3).map(project => (
            <ProjectCard
              key={project.id}
              img={project.img}
              titleKey={project.titleKey}
              descKey={project.descKey}
              tags={project.tags}
              webLink={project.webLink}
              gitLink={project.gitLink}
              onInfoClick={() => handleInfoClick(project)}
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

      {/* Botón para ver más proyectos */}
      {filteredProjects.length > 3 && (
        <div className="flex justify-center">
          <a
            href="https://github.com/FraVelz?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span>{(t as any).more_projects || 'Ver más proyectos'}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      )}

      {/* Modal de información del proyecto */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        t={t}
      />
    </section>
  );
}
