import type { Project } from './project-types';
import { projects } from './projects-list';

/** Get all projects */
export function getAllProjects(): Project[] {
  return projects;
}

/** Get project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Get featured projects */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Get projects by category */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

/** Get all unique technologies (sorted) */
export function getAllTechnologies(): string[] {
  const allTechs = projects.flatMap((p) => p.technologies);
  return [...new Set(allTechs)].sort();
}
