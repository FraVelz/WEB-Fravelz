const PROGRESS_BY_LEVEL: Record<string, number> = {
  intermedio: 85,
  básico: 65,
  aprendiendo: 40,
};

const BAR_VAR_BY_LEVEL: Record<string, string> = {
  intermedio: "var(--color-success)",
  básico: "var(--color-info)",
  aprendiendo: "var(--color-warning)",
};

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

const LEVEL_CLASS: Record<string, string> = {
  intermedio: "tech-level tech-level--intermediate",
  básico: "tech-level tech-level--basic",
  aprendiendo: "tech-level tech-level--learning",
};

export function getProgressPercent(level: string): number {
  return PROGRESS_BY_LEVEL[level] ?? 50;
}

export function getBarVar(level: string): string {
  return BAR_VAR_BY_LEVEL[level] ?? "var(--color-primary)";
}

export function getAccentVar(techId: string): string {
  return ACCENT_VAR_BY_TECH[techId] ?? "var(--color-accent)";
}

export function getCategoryClass(category: string): string {
  return CATEGORY_CLASS[category] ?? "tech-cat";
}

export function getLevelClass(level: string): string {
  return LEVEL_CLASS[level] ?? "tech-level";
}
