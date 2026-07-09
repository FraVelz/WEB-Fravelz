/** Nombres compartidos para <ViewTransition name="..."> entre tarjeta y detalle. */
export function projectHeroTransitionName(slug: string): string {
  return `project-hero-${slug}`;
}

export function projectTitleTransitionName(slug: string): string {
  return `project-title-${slug}`;
}

/** Identidad de tarjeta en la grilla (reposicionamiento al filtrar). */
export function projectCardTransitionName(slug: string): string {
  return `project-card-${slug}`;
}

/** Tipo de transición React para cambios de filtro en /projects. */
export const PROJECT_FILTER_TRANSITION = "filter" as const;
