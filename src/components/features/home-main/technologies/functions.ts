export function getProgressPercent(level: string): number {
  switch (level) {
    case "intermedio":
      return 85;
    case "básico":
      return 65;
    case "aprendiendo":
      return 40;
    default:
      return 50;
  }
}

export function getBarVar(level: string): string {
  switch (level) {
    case "intermedio":
      return "var(--color-success)";
    case "básico":
      return "var(--color-info)";
    case "aprendiendo":
      return "var(--color-warning)";
    default:
      return "var(--color-primary)";
  }
}

export function getAccentVar(techId: string): string {
  switch (techId) {
    case "html":
    case "astro":
    case "firebase":
      return "var(--color-warning)";
    case "css":
    case "tailwind":
    case "react":
      return "var(--color-primary)";
    case "js":
      return "var(--color-warning)";
    case "supabase":
      return "var(--color-success)";
    default:
      return "var(--color-accent)";
  }
}

export function getCategoryClass(category: string): string {
  switch (category) {
    case "frontend":
      return "tech-cat tech-cat--frontend";
    case "backend":
      return "tech-cat tech-cat--backend";
    case "both":
      return "text-amber-700 dark:text-yellow-400";
    default:
      return "tech-cat";
  }
}

export function getLevelClass(level: string): string {
  switch (level) {
    case "intermedio":
      return "tech-level tech-level--intermediate";
    case "básico":
      return "tech-level tech-level--basic";
    case "aprendiendo":
      return "tech-level tech-level--learning";
    default:
      return "tech-level";
  }
}
