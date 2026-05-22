"use client";

import { cn } from "@/utils/cn";
import { languages } from "@/lib/i18n-routing";
import { useEffect, useRef } from "react";

const LANGUAGE_ICON_PATH =
  "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 " +
  "2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 " +
  "1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802";

function langFromPath(): string {
  const seg = window.location.pathname.split("/").filter(Boolean);
  const found = seg.find((s) => languages.includes(s as (typeof languages)[number]));
  return found ?? "es";
}

export default function LanguageSelect({ tabIndex }: { tabIndex?: number }) {
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
    <div className="language-select-control group/language inline-flex items-center gap-1 rounded-lg p-1">
      <label htmlFor="select-language" className="sr-only" data-i18n="nav_select_language">
        Seleccionar idioma
      </label>

      <svg
        className={cn(
          "pointer-events-none size-5 shrink-0 text-cyan-600 transition-colors",
          "group-hover/language:text-cyan-800 dark:text-cyan-200",
          "dark:group-hover/language:text-cyan-300",
          "group-has-[select:focus-visible]/language:text-cyan-800",
          "dark:group-has-[select:focus-visible]/language:text-cyan-300",
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={LANGUAGE_ICON_PATH} />
      </svg>

      <select
        ref={ref}
        id="select-language"
        tabIndex={tabIndex}
        className={cn(
          "language-selector focus-none min-h-8 min-w-[5.5rem] cursor-pointer appearance-none",
          "rounded-md bg-transparent py-1 pl-0.5 pr-6 text-sm font-medium text-cyan-600",
          "transition-colors hover:text-cyan-800",
          "group-hover/language:text-cyan-800 dark:text-cyan-200",
          "dark:hover:text-cyan-300 dark:group-hover/language:text-cyan-300",
          "group-has-[select:focus-visible]/language:text-cyan-800",
          "dark:group-has-[select:focus-visible]/language:text-cyan-300",
        )}
        aria-label="Seleccionar idioma de la página"
        data-i18n-attr="aria-label:nav_select_language_aria"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}
