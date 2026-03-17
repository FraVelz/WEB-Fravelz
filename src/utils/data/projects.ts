/**
 * Punto de entrada de datos de proyectos.
 * Re-exporta tipos, lista y utilidades para mantener compatibilidad con imports existentes.
 *
 * Estructura desglosada:
 * - project-types.ts     → interfaz Project
 * - project-*.ts          → datos de cada proyecto
 * - projects-list.ts     → array projects
 * - project-utils.ts     → getAllProjects, getProjectBySlug, etc.
 */

export type { Project } from './project-types';
export { projects } from './projects-list';
export {
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByCategory,
  getAllTechnologies
} from './project-utils';
