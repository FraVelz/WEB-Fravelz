import { getAllProjects } from "@/utils/data/projects";
import { certificates } from "@/utils/data/certificates";
import { technologies } from "@/components/features/technologies/data";

import { type Lang, type SearchResult } from "../utils/data";
import { getUrlForI18nKey } from "../utils/functions";

export function searchPortfolio(
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
    const desc = (p.shortDescription[lang] || p.shortDescription.es).toLowerCase();
    const techs = p.technologies.map((t) => t.toLowerCase());
    const slug = p.slug.toLowerCase();
    const fullDesc = (p.fullDescription?.[lang] || p.fullDescription?.es || "").toLowerCase();

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
    if ((name.includes(q) || id.includes(q) || q.includes(id)) && !seenTechs.has(t.id)) {
      seenTechs.add(t.id);
      results.push({ type: "technology", id: t.id, name: t.name });
    }
  }

  // 3. Certificados
  for (const c of certificates) {
    const title = c.title.toLowerCase();
    const issuer = c.issuer.toLowerCase();
    const desc = (c.shortDescription || "").toLowerCase();
    if ((title.includes(q) || issuer.includes(q) || desc.includes(q)) && !seenCerts.has(c.id)) {
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
