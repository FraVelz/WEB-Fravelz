import type { StaticImageData } from "next/image";

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

  /** Preview principal (`index.webp`), 1200×630 — ver `PROJECT_PREVIEW_IMAGE` en `@/lib/og-image` */
  featuredImage: StaticImageData;

  /** Technologies used */
  technologies: string[];

  /** Project category */
  category: "frontend" | "fullstack" | "tool" | "other";

  /** Demo URL */
  demoUrl?: string;

  /** Repository URL */
  githubUrl?: string;

  /** Private GitHub repo — hide "View code" CTA and omit codeRepository in JSON-LD */
  privateRepo?: boolean;

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
  screenshots?: StaticImageData[];

  /** What I learned (per language) */
  whatILearned?: {
    es: string[];
    en: string[];
    ru: string[];
    zh: string[];
  };

  /** Notas breves u observaciones adicionales del proyecto (por idioma) */
  extraInfo?: {
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
