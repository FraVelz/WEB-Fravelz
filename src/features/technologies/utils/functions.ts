const ACCENT_VAR_BY_TECH: Record<string, string> = {
  html: "var(--color-warning)",
  astro: "var(--color-warning)",
  firebase: "var(--color-warning)",
  css: "var(--color-primary)",
  tailwind: "var(--color-primary)",
  react: "var(--color-primary)",
  js: "var(--color-warning)",
  supabase: "var(--color-success)",
};

const BADGE_CLASS: Record<string, string> = {
  frontend: "tech-badge tech-badge--frontend",
  backend: "tech-badge tech-badge--backend",
  both: "tech-badge tech-badge--both",
};

export function getAccentVar(techId: string): string {
  return ACCENT_VAR_BY_TECH[techId] ?? "var(--color-accent)";
}

export function getBadgeClass(category: string): string {
  return BADGE_CLASS[category] ?? "tech-badge";
}
