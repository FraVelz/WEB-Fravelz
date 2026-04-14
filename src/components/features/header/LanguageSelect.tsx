"use client";

import { cn } from "@/utils/cn";
import { languages } from "@/lib/i18n-routing";
import { useEffect, useRef } from "react";

function langFromPath(): string {
  const seg = window.location.pathname.split("/").filter(Boolean);
  const found = seg.find((s) => languages.includes(s as (typeof languages)[number]));
  return found ?? "es";
}

export default function LanguageSelect() {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.value = langFromPath();
    const onChange = () => {
      const lang = el.value;
      document.cookie = `lang=${lang}; path=/; max-age=31536000`;
      try {
        localStorage.setItem("preferred-language", lang);
      } catch {
        /* ignore */
      }
      window.location.href = `/${lang}/`;
    };
    el.addEventListener("change", onChange);
    return () => el.removeEventListener("change", onChange);
  }, []);

  return (
    <select
      ref={ref}
      className={cn(
        "language-selector cursor-pointer rounded-lg bg-transparent text-sm font-medium",
        "text-cyan-600 transition-all dark:text-cyan-200",
      )}
      aria-label="Seleccionar idioma de la página"
      data-i18n-attr="aria-label:nav_select_language_aria"
    >
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="zh">中文</option>
    </select>
  );
}
