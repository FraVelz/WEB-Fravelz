"use client";

import { usePathname } from "next/navigation";

import type { Language } from "@/lib/i18n-routing";
import type { Translations } from "@/types/translations";

import { Header } from "./Header";

/** Rutas sin cabecera fija (certificaciones, listado y detalle de proyectos). */
function isHeaderHiddenPath(pathname: string | null) {
  if (pathname == null) return false;
  return /\/(?:certifications|projects)(?:\/|$)/.test(pathname);
}

export function ConditionalHeader({ t, lang }: { t: Translations; lang: Language }) {
  const pathname = usePathname();

  if (isHeaderHiddenPath(pathname)) return null;

  return <Header t={t} lang={lang} />;
}
