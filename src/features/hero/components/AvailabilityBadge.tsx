import { cn } from "@/utils/cn";

import { HERO_AVAILABILITY_I18N_KEY, type HeroAvailabilityStatus } from "../heroAvailabilityConfig";

type AvailabilityBadgeProps = {
  status: HeroAvailabilityStatus;
  text: string;
  className?: string;
};

const variantClass: Record<HeroAvailabilityStatus, string> = {
  available: cn("border-emerald-500/50 text-emerald-900", "dark:border-emerald-400/45 dark:text-emerald-200"),
  freelance: cn("border-amber-500/50 text-amber-950", "dark:border-amber-400/45 dark:text-amber-100"),
  busy: cn("border-zinc-400/60 text-zinc-700", "dark:border-zinc-500/55 dark:text-zinc-200"),
};

const dotClass: Record<HeroAvailabilityStatus, string> = {
  available: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:bg-emerald-400",
  freelance: "bg-amber-500 dark:bg-amber-400",
  busy: "bg-zinc-400 dark:bg-zinc-500",
};

export default function AvailabilityBadge({ status, text, className }: AvailabilityBadgeProps) {
  const i18nKey = HERO_AVAILABILITY_I18N_KEY[status];

  return (
    <div
      className={cn(
        "flex max-w-fit items-center gap-2 rounded-full border-2 bg-white px-3 py-1.5 pr-3",
        "text-sm font-medium shadow-md ring-1 shadow-zinc-900/15 ring-zinc-900/[0.04] transition-all",
        "hover:shadow-lg dark:bg-zinc-900 dark:shadow-lg dark:shadow-black/25 dark:ring-white/[0.06]",
        variantClass[status],
        className,
      )}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center" aria-hidden="true">
        {status === "available" ? (
          <>
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75",
                "dark:bg-emerald-300",
              )}
            />
            <span className={cn("relative inline-flex size-2.5 rounded-full", dotClass[status])} />
          </>
        ) : (
          <span className={cn("inline-flex size-2.5 rounded-full", dotClass[status])} />
        )}
      </span>
      <span data-i18n={i18nKey}>{text}</span>
    </div>
  );
}
