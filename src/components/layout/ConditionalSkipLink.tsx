"use client";

import { usePathname } from "next/navigation";

import { languages } from "@/lib/i18n-routing";

const HOME_PATH = new RegExp(`^/(?:${languages.join("|")})/?$`);

function isHomePath(pathname: string | null) {
  return pathname != null && HOME_PATH.test(pathname);
}

export function ConditionalSkipLink({ label }: { label: string }) {
  const pathname = usePathname();

  if (!isHomePath(pathname)) return null;

  return (
    <a href="#main-content" className="skip-link">
      {label}
    </a>
  );
}
