import { createPortal } from "react-dom";
import { useState, useEffect, useRef, useMemo } from "react";
import { cn } from "@/utils/cn";
import { getAllProjects } from "@/utils/data/projects";
import { certificates } from "@/utils/data/certificates";
import { technologies } from "@/components/features/technologies/data";

type Lang = "es" | "en" | "ru" | "zh";
const LANGUAGES: Lang[] = ["es", "en", "ru", "zh"];

const LOCALE_FILES = [
  "common",
  "hero",
  "music",
  "certifications",
  "info",
  "technologies",
  "about",
  "hobbies",
  "footer",
];

function getLangFromPath(): Lang {
  const segment = window.location.pathname.split("/").filter(Boolean)[0];
  return LANGUAGES.includes(segment as Lang) ? (segment as Lang) : "es";
}

function getBaseUrl(): string {
  return (typeof window !== "undefined" && (window as any).__BASE_URL__) || "/";
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = escapeRegExp(query.trim());
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="rounded bg-cyan-200/80 px-0.5 font-medium text-cyan-900 dark:bg-cyan-500/40 dark:text-cyan-100"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Mapea prefijos de claves i18n a URL y etiqueta de sección */
function getUrlForI18nKey(
  key: string,
  baseUrl: string,
  lang: Lang,
): { url: string; label: string } | null {
  const k = key.toLowerCase();
  if (
    k.startsWith("nav_presentation") ||
    k.startsWith("hero_") ||
    k === "ir_abajo" ||
    k === "autor"
  )
    return { url: `${baseUrl}${lang}/#presentation`, label: "Presentación" };
  if (
    k.startsWith("nav_about") ||
    k.startsWith("about_") ||
    k.startsWith("info_about") ||
    k.startsWith("info_currently")
  )
    return { url: `${baseUrl}${lang}/#about-me`, label: "Sobre Mí" };
  if (k.startsWith("nav_technologies") || k.startsWith("tech_"))
    return { url: `${baseUrl}${lang}/#technologies`, label: "Tecnologías" };
  if (
    k.startsWith("nav_projects") ||
    k.startsWith("projects_") ||
    k.startsWith("hacking_") ||
    (k.startsWith("project_") && !k.includes("preview"))
  )
    return { url: `${baseUrl}${lang}/#projects`, label: "Proyectos" };
  if (
    k.startsWith("nav_certifications") ||
    k.startsWith("cert_") ||
    k.startsWith("info_certifications")
  )
    return {
      url: `${baseUrl}${lang}/certifications`,
      label: "Certificaciones",
    };
  if (k.startsWith("contact_"))
    return { url: `${baseUrl}${lang}/#contacto`, label: "Contacto" };
  if (k.startsWith("hobbies_") || k.startsWith("info_hobbies"))
    return { url: `${baseUrl}${lang}/#hobbies`, label: "Pasatiempos" };
  if (k.startsWith("footer_") || k.startsWith("error_") || k.startsWith("dev_"))
    return { url: `${baseUrl}${lang}/`, label: "Inicio" };
  if (k.startsWith("music_") || k.startsWith("cancion_"))
    return { url: `${baseUrl}${lang}/#presentation`, label: "Música" };
  return { url: `${baseUrl}${lang}/`, label: "Página" };
}

type SearchResult =
  | { type: "project"; slug: string; title: string; technologies: string[] }
  | { type: "technology"; id: string; name: string }
  | { type: "certificate"; id: string; title: string; issuer: string }
  | { type: "page"; url: string; label: string; snippet: string };

async function fetchTranslations(
  lang: Lang,
  baseUrl: string,
): Promise<Record<string, string>> {
  try {
    const files = await Promise.all(
      LOCALE_FILES.map((name) =>
        fetch(`${baseUrl}locals/${lang}/${name}.json`).then((r) =>
          r.ok ? r.json() : {},
        ),
      ),
    );
    return Object.assign({}, ...files);
  } catch {
    return {};
  }
}

function searchPortfolio(
  query: string,
  lang: Lang,
  translations: Record<string, string>,
  baseUrl: string,
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];
  const seenUrls = new Set<string>();
  const seenProjects = new Set<string>();
  const seenTechs = new Set<string>();
  const seenCerts = new Set<string>();

  // 1. Proyectos
  const projects = getAllProjects();
  for (const p of projects) {
    const title = p.title[lang] || p.title.es;
    const desc = (
      p.shortDescription[lang] || p.shortDescription.es
    ).toLowerCase();
    const techs = p.technologies.map((t) => t.toLowerCase());
    const slug = p.slug.toLowerCase();
    const fullDesc = (
      p.fullDescription?.[lang] ||
      p.fullDescription?.es ||
      ""
    ).toLowerCase();

    const matches =
      title.toLowerCase().includes(q) ||
      desc.includes(q) ||
      fullDesc.includes(q) ||
      techs.some((t) => t.includes(q) || q.includes(t)) ||
      slug.includes(q);

    if (matches && !seenProjects.has(p.slug)) {
      seenProjects.add(p.slug);
      results.push({
        type: "project",
        slug: p.slug,
        title,
        technologies: p.technologies,
      });
    }
  }

  // 2. Tecnologías
  for (const t of technologies) {
    const name = t.name.toLowerCase();
    const id = t.id.toLowerCase();
    if (
      (name.includes(q) || id.includes(q) || q.includes(id)) &&
      !seenTechs.has(t.id)
    ) {
      seenTechs.add(t.id);
      results.push({ type: "technology", id: t.id, name: t.name });
    }
  }

  // 3. Certificados
  for (const c of certificates) {
    const title = c.title.toLowerCase();
    const issuer = c.issuer.toLowerCase();
    const desc = (c.shortDescription || "").toLowerCase();
    if (
      (title.includes(q) || issuer.includes(q) || desc.includes(q)) &&
      !seenCerts.has(c.id)
    ) {
      seenCerts.add(c.id);
      results.push({
        type: "certificate",
        id: c.id,
        title: c.title,
        issuer: c.issuer,
      });
    }
  }

  // 4. Contenido de la página (traducciones i18n)
  for (const [key, value] of Object.entries(translations)) {
    if (typeof value !== "string" || value.length < 3) continue;
    if (!value.toLowerCase().includes(q)) continue;

    const mapped = getUrlForI18nKey(key, baseUrl, lang);
    if (!mapped || seenUrls.has(mapped.url)) continue;

    seenUrls.add(mapped.url);
    results.push({
      type: "page",
      url: mapped.url,
      label: mapped.label,
      snippet: value.length > 80 ? value.slice(0, 77) + "..." : value,
    });
  }

  return results.slice(0, 16);
}

function Modal({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState<Lang>("es");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  const baseUrl = getBaseUrl();

  const results = useMemo(
    () => searchPortfolio(query, lang, translations, baseUrl),
    [query, lang, translations, baseUrl],
  );

  useEffect(() => {
    if (!isActive) return;
    setLang(getLangFromPath());
    setQuery("");
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

  useEffect(() => {
    if (!isActive) return;
    const l =
      (typeof window !== "undefined" &&
        (window as any).i18n?.getCurrentLanguage?.()) ||
      getLangFromPath();
    const langKey = LANGUAGES.includes(l as Lang) ? (l as Lang) : "es";
    setLang(langKey);

    const win = window as any;
    if (win.i18n?.getTranslations) {
      const t = win.i18n.getTranslations(langKey);
      if (t && typeof t === "object") setTranslations(t);
      else fetchTranslations(langKey, baseUrl).then(setTranslations);
    } else {
      fetchTranslations(langKey, baseUrl).then(setTranslations);
    }
  }, [isActive, baseUrl]);

  if (!isActive) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[15vh] pb-8 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={() => setIsActive(false)}
      />

      <div
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-200/50",
          "dark:bg-gray-900 dark:ring-gray-700/50",
        )}
        onClick={(e) => e.stopPropagation()}
      >
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
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en toda la página..."
            className={cn(
              "min-w-0 flex-1 bg-transparent py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none",
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
            aria-label="Cerrar búsqueda"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <p className="p-4 text-sm text-gray-500 dark:text-gray-400">
              Escribe al menos 2 caracteres para buscar...
            </p>
          ) : results.length === 0 ? (
            <p className="p-4 text-sm text-gray-500 dark:text-gray-400">
              No se encontraron resultados para &quot;{query}&quot;
            </p>
          ) : (
            <ul className="py-2" role="listbox">
              {results.map((r, idx) => {
                if (r.type === "project") {
                  return (
                    <li key={`p-${r.slug}`} role="option">
                      <a
                        href={`${baseUrl}${lang}/projects/${r.slug}`}
                        className="flex flex-col gap-0.5 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsActive(false)}
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {highlightMatch(r.title, query)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {r.technologies.slice(0, 5).map((tech, i) => (
                            <span key={`${tech}-${i}`}>
                              {i > 0 && " · "}
                              {highlightMatch(tech, query)}
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
                        className="flex items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsActive(false)}
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {highlightMatch(r.name, query)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Tecnología
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
                        className="flex flex-col gap-0.5 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsActive(false)}
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {highlightMatch(r.title, query)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {highlightMatch(r.issuer, query)}
                        </span>
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={`pg-${idx}-${r.url}`} role="option">
                    <a
                      href={r.url}
                      className="flex flex-col gap-0.5 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsActive(false)}
                    >
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {r.label}
                      </span>
                      <span className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                        {highlightMatch(r.snippet, query)}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function Search() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <svg
          className="size-6 text-slate-800 transition-colors hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
          fill="currentColor"
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
      </button>

      <Modal isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}
