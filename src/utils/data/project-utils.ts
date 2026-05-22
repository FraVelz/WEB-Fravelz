import type { Project } from "./project-types";
import { projects } from "./projects-list";

/** Get all projects */
export function getAllProjects(): Project[] {
  return projects;
}

/** Get project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
