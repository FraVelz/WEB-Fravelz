/* eslint-disable @typescript-eslint/no-explicit-any -- window.i18n */
/* eslint-disable jsx-a11y/role-has-required-aria-props -- combobox options */
"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useMemo, useReducer } from "react";

import { cn } from "@/utils/cn";

import { LANGUAGES, LOCALE_FILES, type Lang } from "../utils/data";
import { getLangFromPath, getBaseUrl } from "../utils/functions";
import { searchPortfolio } from "../utils/searchPortfolio";

import { HighlightMatch } from "../components/HighlightMatch";

async function fetchTranslations(lang: Lang, baseUrl: string): Promise<Record<string, string>> {
  try {
    const files = await Promise.all(
      LOCALE_FILES.map((name) => fetch(`${baseUrl}locals/${lang}/${name}.json`).then((r) => (r.ok ? r.json() : {}))),
    );
    return Object.assign({}, ...files);
  } catch {
    return {};
  }
}

/** Valores por defecto (es) si aún no hay traducciones cargadas o falta la clave */
const SEARCH_TEXT_FALLBACK: Record<string, string> = {
  search_dialog_aria: "Buscar",
  search_placeholder: "Buscar en toda la página…",
  search_close_aria: "Cerrar búsqueda",
  search_min_chars: "Escribe al menos 2 caracteres para buscar…",
  search_no_results: "No se encontraron resultados para «{query}»",
  search_result_technology: "Tecnología",
};

function searchLabel(translations: Record<string, string>, key: keyof typeof SEARCH_TEXT_FALLBACK): string {
  return translations[key] ?? SEARCH_TEXT_FALLBACK[key] ?? key;
}

type SearchSessionState = {
  query: string;
  lang: Lang;
  translations: Record<string, string>;
};

type SearchSessionAction =
  | { type: "open"; lang: Lang; translations: Record<string, string> }
  | { type: "set-query"; query: string };

function searchSessionReducer(state: SearchSessionState, action: SearchSessionAction): SearchSessionState {
  switch (action.type) {
    case "open":
      return { query: "", lang: action.lang, translations: action.translations };
    case "set-query":
      return { ...state, query: action.query };
    default:
      return state;
  }
}

const searchBackdropClass = cn(
  "absolute inset-0 z-0 bg-slate-900/55 backdrop-blur-md transition-opacity",
  "dark:bg-black/60 dark:backdrop-blur-sm",
);

const searchPanelClass = cn(
  "w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-[rgb(var(--color-surface))]",
  "shadow-2xl shadow-slate-900/15 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/40",
);

const searchResultColumnLinkClass = cn(
  "search-result-link flex flex-col gap-0.5 px-4 py-3 transition-colors",
  "hover:bg-gray-100 dark:hover:bg-gray-800",
);

const searchResultInlineLinkClass = cn(
  "search-result-link flex items-center gap-2 px-4 py-3 transition-colors",
  "hover:bg-gray-100 dark:hover:bg-gray-800",
);

export function Modal({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [session, dispatchSession] = useReducer(searchSessionReducer, {
    query: "",
    lang: "es" as Lang,
    translations: {},
  });
  const { query, lang, translations } = session;

  const baseUrl = getBaseUrl();

  const results = useMemo(
    () => searchPortfolio(query, lang, translations, baseUrl),
    [query, lang, translations, baseUrl],
  );

  useEffect(() => {
    if (!isActive) return;

    const l = (typeof window !== "undefined" && (window as any).i18n?.getCurrentLanguage?.()) || getLangFromPath();
    const langKey = LANGUAGES.includes(l as Lang) ? (l as Lang) : "es";

    const applySession = (loaded: Record<string, string>) => {
      dispatchSession({ type: "open", lang: langKey, translations: loaded });
    };

    const win = window as any;
    if (win.i18n?.getTranslations) {
      const t = win.i18n.getTranslations(langKey);
      if (t && typeof t === "object") applySession(t);
      else void fetchTranslations(langKey, baseUrl).then(applySession);
    } else {
      void fetchTranslations(langKey, baseUrl).then(applySession);
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    document.addEventListener("keydown", handleEscape);
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isActive, setIsActive, baseUrl]);

  if (!isActive) return null;

  const noResultsText = searchLabel(translations, "search_no_results").replace(/\{query\}/g, query);

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={searchLabel(translations, "search_dialog_aria")}
    >
      {/* Capa de atenuación: más opaca en claro para separar el panel del fondo */}
      <button
        type="button"
        className={cn(searchBackdropClass, "cursor-default border-0 p-0")}
        aria-label={searchLabel(translations, "search_close_aria")}
        onClick={() => setIsActive(false)}
      />

      <div className="relative z-10 flex items-start justify-center px-4 pt-[15vh] pb-8 sm:px-6">
        <div className={searchPanelClass}>
          <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
            <svg
              className="size-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              value={query}
              onChange={(e) => dispatchSession({ type: "set-query", query: e.target.value })}
              placeholder={searchLabel(translations, "search_placeholder")}
              className={cn(
                "min-w-0 flex-1 rounded-md bg-transparent py-2 text-base text-gray-900 placeholder-gray-400",
                "dark:text-gray-100 dark:placeholder-gray-500",
              )}
            />
            <button
              type="button"
              onClick={() => setIsActive(false)}
              className={cn(
                "shrink-0 cursor-pointer rounded-lg p-1.5 text-gray-400 transition-colors",
                "hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300",
              )}
              aria-label={searchLabel(translations, "search_close_aria")}
            >
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="max-h-[50vh] overflow-y-auto">
            {query.trim().length < 2 ? (
              <p className="p-4 text-sm text-gray-500 dark:text-gray-400">
                {searchLabel(translations, "search_min_chars")}
              </p>
            ) : results.length === 0 ? (
              <p className="p-4 text-sm text-gray-500 dark:text-gray-400">{noResultsText}</p>
            ) : (
              <ul className="py-2" role="listbox">
                {results.map((r) => {
                  if (r.type === "project") {
                    return (
                      <li key={`p-${r.slug}`} role="option">
                        <a
                          href={`${baseUrl}${lang}/projects/${r.slug}`}
                          className={searchResultColumnLinkClass}
                          onClick={() => setIsActive(false)}
                        >
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            <HighlightMatch text={r.title} query={query} />
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {r.technologies.slice(0, 5).map((tech, i) => (
                              <span key={tech}>
                                {i > 0 && " · "}
                                <HighlightMatch text={tech} query={query} />
                              </span>
                            ))}
                          </span>
                        </a>
                      </li>
                    );
                  }
                  if (r.type === "technology") {
                    return (
                      <li key={`t-${r.id}`} role="option">
                        <a
                          href={`${baseUrl}${lang}/#technologies`}
                          className={searchResultInlineLinkClass}
                          onClick={() => setIsActive(false)}
                        >
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            <HighlightMatch text={r.name} query={query} />
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {searchLabel(translations, "search_result_technology")}
                          </span>
                        </a>
                      </li>
                    );
                  }
                  if (r.type === "certificate") {
                    return (
                      <li key={`c-${r.id}`} role="option">
                        <a
                          href={`${baseUrl}${lang}/certifications`}
                          className={searchResultColumnLinkClass}
                          onClick={() => setIsActive(false)}
                        >
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            <HighlightMatch text={r.title} query={query} />
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            <HighlightMatch text={r.issuer} query={query} />
                          </span>
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={`pg-${r.url}`} role="option">
                      <a href={r.url} className={searchResultColumnLinkClass} onClick={() => setIsActive(false)}>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{r.label}</span>
                        <span className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                          <HighlightMatch text={r.snippet} query={query} />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
