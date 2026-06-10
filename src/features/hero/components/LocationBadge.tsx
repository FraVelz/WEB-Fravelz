import { cn } from "@/utils/cn";

type LocationBadgeProps = {
  text: string;
  className?: string;
};

export default function LocationBadge({ text, className }: LocationBadgeProps) {
  return (
    <div
      className={cn(
        "flex max-w-fit items-center gap-2 rounded-full border-2 border-cyan-400/55 bg-white px-3 py-1.5 pr-3",
        "text-sm font-medium text-cyan-800 shadow-md ring-1 shadow-slate-900/15 ring-slate-900/[0.04] transition-all",
        "hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/15",
        "dark:border-cyan-500/40 dark:bg-gray-900 dark:text-cyan-300 dark:shadow-lg",
        "dark:shadow-black/25 dark:ring-white/[0.06]",
        "dark:hover:border-cyan-400/60 dark:hover:shadow-cyan-500/10",
        className,
      )}
    >
      <svg
        className="h-4 w-4 shrink-0 rounded-sm"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <path fill="#fbd116" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4" />
        <path fill="#22408c" d="M0 18h36v7H0z" />
        <path fill="#ce2028" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
