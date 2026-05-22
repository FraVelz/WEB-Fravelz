import type { ReactNode, SVGProps } from "react";

import { cn } from "@/utils/cn";

function IconBase({ className, children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      className={cn("size-6 shrink-0 sm:size-7", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function AboutOriginIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.75" />
    </IconBase>
  );
}

export function AboutStudyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        d="M4 19.5V6.75L12 3l8 3.75V19.5L12 23l-8-3.5ZM12 3v16.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function AboutGithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.3-2 2.4-.3 5-1.2 5-5.4-.9-1.5-2.4-1.6-2.8-1.6-.9-.1-2.2.3-3.3 1.5-.6-.1-1.5-.2-2.4 0C7.5 8.2 6.1 8.8 5 10c-1.5 2.2-.4 5.5.9 6.6-.3.9-.5 2.2-.3 3.3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function AboutWorkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.75" />
    </IconBase>
  );
}

export function AboutCertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M7 14v4l5-2.5L17 18v-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function AboutFutureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        d="M4.5 16.5c1.5-4 4.5-6 7.5-6s6 2 7.5 6M12 3v4M9 6l3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </IconBase>
  );
}

const ICON_BY_YEAR: Record<string, typeof AboutOriginIcon> = {
  "2017": AboutOriginIcon,
  "2018-2021": AboutStudyIcon,
  "2021": AboutGithubIcon,
  "2021-2024": AboutWorkIcon,
  "2025": AboutCertIcon,
  "+2026": AboutFutureIcon,
};

export function getAboutTimelineIcon(year: string, isActive: boolean) {
  const Icon = ICON_BY_YEAR[year] ?? AboutOriginIcon;
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl",
        "bg-[rgb(var(--color-card))] text-[rgb(var(--color-primary))]",
        isActive ? "h-12 w-12 sm:h-14 sm:w-14" : "h-10 w-10 sm:h-11 sm:w-11",
      )}
    >
      <Icon className={isActive ? "size-7 sm:size-8" : "size-6"} />
    </span>
  );
}
