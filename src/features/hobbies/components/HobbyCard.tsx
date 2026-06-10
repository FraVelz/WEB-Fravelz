import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

type HobbyCardProps = {
  cardId: string;
  icon: ReactNode;
  title: string;
  description: string;
  wrapperClassName: string;
  contentClassName?: string;
  bodyClassName?: string;
  footer?: ReactNode;
};

export function HobbyCard({
  cardId,
  icon,
  title,
  description,
  wrapperClassName,
  contentClassName,
  bodyClassName = "max-w-[320px] space-y-3",
  footer,
}: HobbyCardProps) {
  const isFocusable = !footer;

  return (
    <div
      tabIndex={isFocusable ? 0 : undefined}
      role={isFocusable ? "group" : undefined}
      aria-label={isFocusable ? `${title}. ${description}` : undefined}
      className={cn(
        "card relative rounded-[10px] bg-[rgb(var(--color-white)/0.1)]",
        isFocusable && "outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary)/0.5)]",
        wrapperClassName,
      )}
      data-card={cardId}
    >
      <div
        className={cn(
          "card-content absolute inset-px z-[2] overflow-hidden rounded-[inherit]",
          "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-card))]",
          "px-5 py-2.5 shadow-[inset_0_0_0_1px_rgb(var(--color-black)/0.06)]",
          contentClassName,
        )}
      >
        <div
          className={cn(
            "mb-0.5 grid min-h-[42px] min-w-[42px] shrink-0 place-items-center rounded-[14px] p-1",
            "border border-[rgb(var(--color-white)/0.06)] bg-[rgb(var(--color-white)/0.04)]",
            "text-[var(--card-accent)] shadow-[0_10px_30px_rgb(var(--color-black)/0.12)]",
            "lg:size-full lg:max-h-[124px] lg:max-w-[124px]",
          )}
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className={bodyClassName}>
          <h3 className="text-[0.95rem] leading-[1.1] font-extrabold tracking-tight text-[rgb(var(--color-text))]">
            {title}
          </h3>
          <p className="text-[0.82rem] leading-[1.35] text-[rgb(var(--color-text-muted))]">{description}</p>
          {footer}
        </div>
      </div>
    </div>
  );
}
