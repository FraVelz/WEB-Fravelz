import type { Project } from './project-types';
import { projects } from './projects-list';

/** Obtener todos los proyectos */
export function getAllProjects(): Project[] {
  return projects;
}

/** Obtener proyecto por slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Obtener proyectos destacados */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Obtener proyectos por categoría */
export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

/** Obtener todas las tecnologías únicas (ordenadas) */
export function getAllTechnologies(): string[] {
  const allTechs = projects.flatMap((p) => p.technologies);
  return [...new Set(allTechs)].sort();
}
