import type { SVGProps } from "react";

import { cn } from "@/utils/cn";

export function TypingIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={cn("size-6 shrink-0 lg:size-full", className)} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 8h16a2 2 0 0 1 2 2v6H2v-6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01M7 15h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
