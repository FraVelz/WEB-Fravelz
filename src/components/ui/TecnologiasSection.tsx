import { useState } from 'react';
import { getTranslations, type Language } from '../../utils/i18n';
import ModalInfo from './ModalInfo';

interface Technology {
  id: string;
  name: string;
  level: string;
  levelKey: string;
  category: 'frontend' | 'backend' | 'both';
  categoryKey: string;
  svg: string;
  color: string;
  darkColor: string;
}

interface TecnologiasSectionProps {
  lang?: Language;
}

export default function TecnologiasSection({ lang = 'es' }: TecnologiasSectionProps) {
  const t = getTranslations(lang);
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const technologies: Technology[] = [
    {
      id: 'html',
      name: 'HTML',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/></svg>`,
      color: 'from-orange-500 to-red-600',
      darkColor: 'dark:from-orange-400 dark:to-red-500',
    },
    {
      id: 'css',
      name: 'CSS',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_css</title><polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"/><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"/><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"/><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"/><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"/><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"/></svg>`,
      color: 'from-blue-500 to-cyan-600',
      darkColor: 'dark:from-blue-400 dark:to-cyan-500',
    },
    {
      id: 'js',
      name: 'JavaScript',
      level: 'básico',
      levelKey: 'tech_level_basic',
      category: 'both',
      categoryKey: 'tech_category_both',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"/><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"/></svg>`,
      color: 'from-yellow-400 to-yellow-600',
      darkColor: 'dark:from-yellow-300 dark:to-yellow-500',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="A" x2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#A)" fill-rule="evenodd"/></svg>`,
      color: 'from-cyan-500 to-teal-600',
      darkColor: 'dark:from-cyan-400 dark:to-teal-500',
    },
    {
      id: 'react',
      name: 'React',
      level: 'básico',
      levelKey: 'tech_level_basic',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-label="React" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#fff"/><circle cx="256" cy="256" r="36" fill="#61dafb"/><path stroke="#61dafb" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"/></svg>`,
      color: 'from-blue-400 to-cyan-500',
      darkColor: 'dark:from-blue-300 dark:to-cyan-400',
    },
    {
      id: 'astro',
      name: 'Astro',
      level: 'aprendiendo',
      levelKey: 'tech_level_learning',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Astro</title><path d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"/></svg>`,
      color: 'from-purple-500 to-pink-600',
      darkColor: 'dark:from-purple-400 dark:to-pink-500',
    },
    {
      id: 'firebase',
      name: 'Firebase',
      level: 'aprendiendo',
      levelKey: 'tech_level_learning',
      category: 'backend',
      categoryKey: 'tech_category_backend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#ffa000"/><path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17"/><path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#ffca28"/><path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#ffa000"/></svg>`,
      color: 'from-orange-500 to-yellow-600',
      darkColor: 'dark:from-orange-400 dark:to-yellow-500',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'intermedio':
        return 'text-cyan-600 dark:text-cyan-400';
      case 'básico':
        return 'text-blue-600 dark:text-blue-400';
      case 'aprendiendo':
        return 'text-purple-600 dark:text-purple-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-green-600 dark:text-green-400';
      case 'backend':
        return 'text-red-600 dark:text-red-400';
      case 'both':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <>
      <section id="tecnologia" className="w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {t.tech_title || 'Tecnologías'}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className={`
                group relative
                bg-gradient-to-br ${tech.color} ${tech.darkColor}
                dark:from-gray-800 dark:to-gray-900
                from-gray-100 to-gray-200
                p-4 sm:p-6
                rounded-2xl
                border-2 border-transparent
                hover:border-cyan-400/60 dark:hover:border-cyan-400/60
                transition-all duration-300
                hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40
                hover:scale-105 active:scale-95
                flex flex-col items-center justify-center gap-3
                cursor-pointer
                overflow-hidden
              `}
            >
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: tech.svg }}
              />
              <h3 className="text-sm sm:text-base font-bold text-white dark:text-gray-100 text-center">
                {tech.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </section>

      {selectedTech && (
        <ModalInfo
          isOpen={!!selectedTech}
          onClose={() => setSelectedTech(null)}
          title={selectedTech.name}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div 
                className="w-20 h-20 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: selectedTech.svg }}
              />
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {(t as any).tech_info_level || 'Nivel'}:{' '}
                </span>
                <span className={`font-bold ${getLevelColor(selectedTech.level)}`}>
                  {(t as any)[selectedTech.levelKey] || selectedTech.level}
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {(t as any).tech_info_category || 'Categoría'}:{' '}
                </span>
                <span className={`font-bold ${getCategoryColor(selectedTech.category)}`}>
                  {(t as any)[selectedTech.categoryKey] || selectedTech.category}
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {(t as any).tech_info_technology || 'Tecnología'}:{' '}
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {selectedTech.name}
                </span>
              </div>
            </div>
          </div>
        </ModalInfo>
      )}
    </>
  );
}
