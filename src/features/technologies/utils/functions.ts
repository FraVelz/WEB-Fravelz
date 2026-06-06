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

const CATEGORY_CLASS: Record<string, string> = {
  frontend: "tech-cat tech-cat--frontend",
  backend: "tech-cat tech-cat--backend",
  both: "text-amber-700 dark:text-yellow-400",
};

export function getAccentVar(techId: string): string {
  return ACCENT_VAR_BY_TECH[techId] ?? "var(--color-accent)";
}

export function getCategoryClass(category: string): string {
  return CATEGORY_CLASS[category] ?? "tech-cat";
}
