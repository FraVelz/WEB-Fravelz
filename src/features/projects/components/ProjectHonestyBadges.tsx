import { cn } from "@/utils/cn";
import type { ProductHonestyBadge } from "@/utils/data/project-types";

export type HonestyBadgeLabels = {
  project_honesty_demo?: string;
  project_honesty_piloto?: string;
  project_honesty_lab?: string;
  project_honesty_privado?: string;
  project_honesty_terminado?: string;
};

const FALLBACK_LABELS: Record<ProductHonestyBadge, string> = {
  demo: "Demo",
  piloto: "Piloto",
  lab: "Lab",
  privado: "Privado",
  terminado: "Terminado",
};

const CARD_STYLES: Record<ProductHonestyBadge, string> = {
  demo: "bg-sky-500 text-white",
  piloto: "bg-indigo-500 text-white",
  lab: "bg-slate-600 text-white",
  privado: "bg-rose-500 text-white",
  terminado: "bg-teal-500 text-white",
};

const DETAIL_STYLES: Record<ProductHonestyBadge, string> = {
  demo: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  piloto: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200",
  lab: "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-200",
  privado: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
  terminado: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200",
};

function labelFor(badge: ProductHonestyBadge, labels: HonestyBadgeLabels): string {
  const key = `project_honesty_${badge}` as keyof HonestyBadgeLabels;
  return labels[key] || FALLBACK_LABELS[badge];
}

type ProjectHonestyBadgesProps = {
  badges: ProductHonestyBadge[];
  labels: HonestyBadgeLabels;
  variant: "card" | "detail";
  className?: string;
};

export default function ProjectHonestyBadges({ badges, labels, variant, className }: ProjectHonestyBadgesProps) {
  if (!badges.length) return null;

  const styles = variant === "card" ? CARD_STYLES : DETAIL_STYLES;
  const size =
    variant === "card" ? "rounded-full px-3 py-1 text-xs font-semibold" : "rounded-full px-3 py-1 text-sm font-medium";

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {badges.map((badge) => (
        <span key={badge} className={cn(size, styles[badge], variant === "card" && "project-card__badge")}>
          {labelFor(badge, labels)}
        </span>
      ))}
    </div>
  );
}
