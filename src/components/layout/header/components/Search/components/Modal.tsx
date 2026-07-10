"use client";

import "../search.css";

import { createPortal } from "react-dom";
import { useEffect, useRef, useMemo, useReducer } from "react";

import { cn } from "@/utils/cn";
import type { Language } from "@/lib/i18n-routing";
import type { Translations } from "@/types/translations";
import { getBaseUrl } from "../utils/functions";
import { searchPortfolio } from "../utils/searchPortfolio";

import { HighlightMatch } from "../components/HighlightMatch";

/** Valores por defecto (es) si falta alguna clave en las traducciones SSR */
const SEARCH_INPUT_ID = "search-modal-input";

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
};

type SearchSessionAction = { type: "set-query"; query: string };

function searchSessionReducer(state: SearchSessionState, action: SearchSessionAction): SearchSessionState {
  if (action.type === "set-query") {
    return { ...state, query: action.query };
  }
  return state;
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
  lang,
  translations,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Language;
  translations: Translations;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [session, dispatchSession] = useReducer(searchSessionReducer, { query: "" });
  const { query } = session;

  const baseUrl = getBaseUrl();

  const results = useMemo(
    () => searchPortfolio(query, lang, translations, baseUrl),
    [query, lang, translations, baseUrl],
  );

  useEffect(() => {
    if (!isActive) return;

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
  }, [isActive, setIsActive]);

  if (!isActive) return null;

  const noResultsText = searchLabel(translations, "search_no_results").replace(/\{query\}/g, query);

  return createPortal(
    <dialog
      open
      className="fixed inset-0 z-50 m-0 h-auto max-h-none w-auto max-w-none border-0 bg-transparent p-0 text-inherit"
      aria-label={searchLabel(translations, "search_dialog_aria")}
    >
      <button
        type="button"
        className={cn(searchBackdropClass, "cursor-default border-0 p-0")}
        aria-label={searchLabel(translations, "search_close_aria")}
        onClick={() => setIsActive(false)}
      />

      <div className="relative z-10 flex items-start justify-center px-4 pt-[15vh] pb-8 sm:px-6">
        <div className={searchPanelClass}>
          <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
            <label htmlFor={SEARCH_INPUT_ID} className="flex min-w-0 flex-1 items-center gap-3">
              <svg
                className="size-5 shrink-0 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">{searchLabel(translations, "search_placeholder")}</span>
              <input
                ref={inputRef}
                type="search"
                name="search"
                id={SEARCH_INPUT_ID}
                autoComplete="off"
                value={query}
                onChange={(e) => dispatchSession({ type: "set-query", query: e.target.value })}
                placeholder={searchLabel(translations, "search_placeholder")}
                className={cn(
                  "min-w-0 flex-1 rounded-md bg-transparent px-1 py-2 text-base text-gray-900 placeholder-gray-400",
                  "outline-none focus-visible:shadow-[var(--focus-field-shadow)]",
                  "dark:text-gray-100 dark:placeholder-gray-500",
                )}
              />
            </label>
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
              <ul className="py-2">
                {results.map((r) => {
                  if (r.type === "project") {
                    return (
                      <li key={`p-${r.slug}`}>
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
                      <li key={`t-${r.id}`}>
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
                      <li key={`c-${r.id}`}>
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
                    <li key={`pg-${r.url}`}>
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
    </dialog>,
    document.body,
  );
}
