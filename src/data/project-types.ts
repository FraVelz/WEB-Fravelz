/**
 * Estructura de datos para proyectos del portafolio.
 *
 * Cada proyecto debe tener:
 * - slug: identificador único para la URL (ej: "notas-hacking")
 * - Información básica (título, descripción, imagen)
 * - Tecnologías utilizadas
 * - Links (demo, GitHub)
 * - Contenido detallado para la vista individual
 */

export interface Project {
  /** Identificador único para la URL */
  slug: string;

  /** Títulos por idioma */
  title: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Descripción corta por idioma */
  shortDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Ruta a la imagen principal */
  featuredImage: string;

  /** Tecnologías utilizadas */
  technologies: string[];

  /** Categoría del proyecto */
  category: 'frontend' | 'fullstack' | 'tool' | 'other';

  /** URL de demo */
  demoUrl?: string;

  /** URL del repositorio */
  githubUrl?: string;

  /** Si está en desarrollo */
  isComingSoon?: boolean;

  /**
   * Estado del proyecto: true = en desarrollo, false = finalizado.
   */
  inDevelopment: boolean;

  /** Descripción larga por idioma (vista individual) */
  fullDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Rutas a capturas de pantalla */
  screenshots?: string[];

  /** Lo que aprendí (por idioma) */
  whatILearned?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };

  /** Detalles técnicos (por idioma) */
  technicalDetails?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };

  /** Si es proyecto destacado */
  featured?: boolean;

  /** Año del proyecto */
  year?: number;
}
