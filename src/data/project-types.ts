/**
 * Data structure for portfolio projects.
 *
 * Each project must have:
 * - slug: unique identifier for the URL (e.g. "notas-hacking")
 * - Basic info (title, description, image)
 * - Technologies used
 * - Links (demo, GitHub)
 * - Detailed content for the individual view
 */

export interface Project {
  /** Unique identifier for the URL */
  slug: string;

  /** Titles per language */
  title: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Short description per language */
  shortDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Path to the main image */
  featuredImage: string;

  /** Technologies used */
  technologies: string[];

  /** Project category */
  category: 'frontend' | 'fullstack' | 'tool' | 'other';

  /** Demo URL */
  demoUrl?: string;

  /** Repository URL */
  githubUrl?: string;

  /** Whether it is in development */
  isComingSoon?: boolean;

  /**
   * Project status: true = in development, false = completed.
   */
  inDevelopment: boolean;

  /** Long description per language (individual view) */
  fullDescription: {
    es: string;
    en: string;
    ru: string;
    zh: string;
  };

  /** Paths to screenshots */
  screenshots?: string[];

  /** What I learned (per language) */
  whatILearned?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };

  /** Technical details (per language) */
  technicalDetails?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };

  /** Whether it is a featured project */
  featured?: boolean;

  /** Project year */
  year?: number;
}
