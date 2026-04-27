import type { SVGProps } from "react";

import { cn } from "@/utils/cn";

export function WebdevIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={cn("size-6 shrink-0 lg:size-full", className)} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
