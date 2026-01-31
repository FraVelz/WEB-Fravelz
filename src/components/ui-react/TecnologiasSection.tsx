import { useState, useEffect } from 'react';

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
}

export default function TecnologiasSection({}: TecnologiasSectionProps) {
  const [translations, setTranslations] = useState<any>({});
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // Escuchar cambios de idioma
    const handleLanguageChange = (event: CustomEvent) => {
      setTranslations(event.detail.translations || {});
    };

    window.addEventListener('language-changed', handleLanguageChange as EventListener);
    
    // Obtener traducción inicial
    if (typeof window !== 'undefined' && (window as any).i18n) {
      const currentLang = (window as any).i18n.getCurrentLanguage();
      const t = (window as any).i18n.getTranslations(currentLang);
      setTranslations(t || {});
    }

    return () => {
      window.removeEventListener('language-changed', handleLanguageChange as EventListener);
    };
  }, []);

  const t = translations;

  const technologies: Technology[] = [
    {
      id: 'html',
      name: 'HTML',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/></svg>`,
      color: 'from-cyan-50 to-blue-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-900',
    },
    {
      id: 'css',
      name: 'CSS',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_css</title><polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#1572b6"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#33a9dc"/><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style="fill:#fff"/><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style="fill:#ebebeb"/><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style="fill:#fff"/><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style="fill:#ebebeb"/><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style="fill:#ebebeb"/></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
    {
      id: 'js',
      name: 'JavaScript',
      level: 'básico',
      levelKey: 'tech_level_basic',
      category: 'frontend',
      categoryKey: 'tech_category_both',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"/><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"/></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: 'intermedio',
      levelKey: 'tech_level_intermediate',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="A" x2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#A)" fill-rule="evenodd"/></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
    {
      id: 'react',
      name: 'React',
      level: 'básico',
      levelKey: 'tech_level_basic',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg viewBox="0 0 3618.6 3618.6" id="Layer_2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style>.st0{fill:#222}.st1{fill:#00d8ff}.st2{fill:none;stroke:#00d8ff;stroke-width:144.7456;stroke-miterlimit:10}</style><path class="st0" d="M0 0h3618.6v3618.6H0z"></path><circle class="st1" cx="1806.5" cy="1807.1" r="302.6"></circle><path class="st2" d="M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"></path><path class="st2" d="M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"></path><path class="st2" d="M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"></path></g></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
    {
      id: 'astro',
      name: 'Astro',
      level: 'básico',
      levelKey: 'tech_level_basic',
      category: 'frontend',
      categoryKey: 'tech_category_frontend',
      svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_astro</title><path d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z" style="fill:#ff5d01;fill-rule:evenodd"></path></g></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
    {
      id: 'supabase',
      name: 'Supabase',
      level: 'aprendiendo',
      levelKey: 'tech_level_learning',
      category: 'backend',
      categoryKey: 'tech_category_backend',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Supabase</title><path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" fill="#3ECF8E"/></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-900',
    },
    {
      id: 'firebase',
      name: 'Firebase',
      level: 'aprendiendo',
      levelKey: 'tech_level_learning',
      category: 'backend',
      categoryKey: 'tech_category_backend',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#ffa000"/><path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17"/><path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#ffca28"/><path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#ffa000"/></svg>`,
      color: 'from-blue-50 to-cyan-50',
      darkColor: 'dark:from-gray-800 dark:to-gray-850',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'intermedio':
        return 'text-cyan-700 dark:text-cyan-400';
      case 'básico':
        return 'text-blue-700 dark:text-blue-400';
      case 'aprendiendo':
        return 'text-purple-700 dark:text-purple-400';
      default:
        return 'text-slate-700 dark:text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-emerald-700 dark:text-green-400';
      case 'backend':
        return 'text-rose-700 dark:text-red-400';
      case 'both':
        return 'text-amber-700 dark:text-yellow-400';
      default:
        return 'text-slate-700 dark:text-gray-400';
    }
  };

  return (
    <section id="tecnologia" className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {t.tech_title || 'Tecnologías'}
        </h2>
        
        <button
          onClick={() => setShowInfo(!showInfo)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl
            transition-all duration-300
            font-semibold text-sm sm:text-base
            ${showInfo
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
              : 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-2 border-cyan-400/70 dark:border-cyan-500/40 hover:border-cyan-600 dark:hover:border-cyan-400/70 shadow-md shadow-cyan-500/20 dark:shadow-none font-semibold'
            }
            hover:scale-105 active:scale-95
            cursor-pointer
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`w-5 h-5 transition-transform duration-300 ${showInfo ? 'rotate-180' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <span>
            {showInfo 
              ? ((t as any).tech_hide_info || 'Ocultar información') 
              : ((t as any).tech_show_info || 'Mostrar información')
            }
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="group relative"
          >
            <div
              className={`
                relative
                bg-gradient-to-br ${tech.color} ${tech.darkColor}
                p-4 sm:p-6
                rounded-xl
                border-2 border-cyan-300/60 dark:border-gray-700/60
                hover:border-cyan-500 dark:hover:border-gray-600
                transition-all duration-300
                shadow-md shadow-cyan-500/10 dark:shadow-none
                hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-gray-900/50
                hover:scale-[1.02] active:scale-100
                flex flex-col items-center justify-center gap-3
                overflow-visible
                ${showInfo ? 'pb-20 sm:pb-24' : ''}
              `}
            >
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center z-10 opacity-90 dark:opacity-95"
                dangerouslySetInnerHTML={{ __html: tech.svg }}
              />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-gray-200 text-center z-10">
                {tech.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              {/* Información que aparece encima */}
              {showInfo && (
                <div className={`
                  absolute bottom-0 left-0 right-0
                  bg-gradient-to-br from-cyan-50/95 via-blue-50/95 to-cyan-100/95
                  dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95
                  backdrop-blur-sm
                  rounded-b-2xl
                  p-3 sm:p-4
                  border-t-2 border-cyan-400/60 dark:border-gray-700/60
                  animate-fadeIn
                  z-20
                  shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/30
                `}>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800 dark:text-gray-300">
                        {(t as any).tech_info_level || 'Nivel'}:
                      </span>
                      <span className={`font-bold ${getLevelColor(tech.level)}`}>
                        {(t as any)[tech.levelKey] || tech.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800 dark:text-gray-300">
                        {(t as any).tech_info_category || 'Categoría'}:
                      </span>
                      <span className={`font-bold ${getCategoryColor(tech.category)}`}>
                        {(t as any)[tech.categoryKey] || tech.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Aviso informativo */}
      <div className="mt-8 p-4 sm:p-5 rounded-xl bg-cyan-50/80 dark:bg-gray-800/50 border-2 border-cyan-300/60 dark:border-cyan-500/30 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
            <span className="font-semibold text-cyan-700 dark:text-cyan-300">
              {t.tech_note || 'Nota:'}
            </span>{' '}
            {t.tech_disclaimer || ''}
          </p>
        </div>
      </div>
    </section>
  );
}
