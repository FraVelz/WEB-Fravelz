import type { Project } from "./project-types";
import { projects } from "./projects-list";

export type ProjectFilter = "all" | "featured" | "frontend" | "fullstack" | "development" | "finished";

const PROJECT_FILTERS = new Set<ProjectFilter>(["all", "featured", "frontend", "fullstack", "development", "finished"]);

/** Get all projects */
export function getAllProjects(): Project[] {
  return projects;
}

/** Proyectos mostrados en la sección principal de la home (primeros 3 de la lista). */
export function getHomeProjects(): Project[] {
  return projects.slice(0, 3);
}

export function parseProjectFilter(value: string | undefined): ProjectFilter {
  if (value && PROJECT_FILTERS.has(value as ProjectFilter)) {
    return value as ProjectFilter;
  }
  return "all";
}

/** True when `value` is a known filter id (not a typo / unknown query). */
export function isKnownProjectFilter(value: string | null | undefined): boolean {
  if (value == null || value === "") return true;
  return PROJECT_FILTERS.has(value as ProjectFilter);
}

export function filterProjects(items: Project[], filter: ProjectFilter): Project[] {
  switch (filter) {
    case "featured":
      return items.filter((p) => p.featured);
    case "frontend":
      return items.filter((p) => p.category === "frontend");
    case "fullstack":
      return items.filter((p) => p.category === "fullstack");
    case "development":
      return items.filter((p) => p.inDevelopment);
    case "finished":
      return items.filter((p) => !p.inDevelopment);
    default:
      return items;
  }
}

/** Get project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
