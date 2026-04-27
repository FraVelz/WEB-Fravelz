import type { SVGProps } from "react";

import { cn } from "@/utils/cn";

/** Meridiano vertical: arcos consecutivos requieren `a` explícito entre segmentos. */
const GLOBE_MERIDIAN = "M12 2a15.3 15.3 0 0 0 0 20a15.3 15.3 0 0 0 0-20Z";

export function PoliticsIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cn("size-6 shrink-0 lg:size-full", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
      <path d="M2 12h20" />
      <path d={GLOBE_MERIDIAN} fill="none" />
    </svg>
  );
}
