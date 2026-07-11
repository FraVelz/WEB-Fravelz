import type { Language } from "@/lib/i18n-routing";
import { languages } from "@/lib/i18n-routing";
import { pageUrl } from "@/lib/metadata";
import { resolveOgImageUrl } from "@/lib/og-image";
import { getSiteUrl } from "@/lib/site-url";
import type { Project } from "@/utils/data/project-types";

const SCHEMA_CONTEXT = "https://schema.org";

const PERSON_ID = "#person";
const SITE_ID = "#website";

const PERSON = {
  name: "Francisco J. Vélez O.",
  alternateName: "Fravelz",
  jobTitle: "Fullstack Developer",
  sameAs: ["https://github.com/FraVelz"],
} as const;

export type JsonLdGraph = {
  "@context": typeof SCHEMA_CONTEXT;
  "@graph": Record<string, unknown>[];
};

function graph(data: Record<string, unknown>[]): JsonLdGraph {
  return { "@context": SCHEMA_CONTEXT, "@graph": data };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": `${getSiteUrl()}${PERSON_ID}`,
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    url: getSiteUrl(),
    jobTitle: PERSON.jobTitle,
    sameAs: [...PERSON.sameAs],
  };
}

function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${getSiteUrl()}${SITE_ID}`,
    name: "Fravelz",
    url: getSiteUrl(),
    inLanguage: [...languages],
    author: { "@id": `${getSiteUrl()}${PERSON_ID}` },
  };
}

function webPageNode(options: { lang: Language; pathname?: string; title: string; description: string }) {
  const url = pageUrl(options.lang, options.pathname);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.title,
    description: options.description,
    inLanguage: options.lang,
    isPartOf: { "@id": `${getSiteUrl()}${SITE_ID}` },
    about: { "@id": `${getSiteUrl()}${PERSON_ID}` },
  };
}

function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function homeJsonLd(lang: Language, title: string, description: string) {
  return graph([personNode(), webSiteNode(), webPageNode({ lang, title, description })]);
}

export function projectsIndexJsonLd(
  lang: Language,
  title: string,
  description: string,
  projects: Project[],
  homeLabel: string,
) {
  const listUrl = pageUrl(lang, "projects");
  return graph([
    webPageNode({ lang, pathname: "projects", title, description }),
    breadcrumbNode([
      { name: homeLabel, url: pageUrl(lang) },
      { name: title, url: listUrl },
    ]),
    {
      "@type": "ItemList",
      name: title,
      description,
      url: listUrl,
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title[lang],
        url: pageUrl(lang, `projects/${project.slug}`),
      })),
    },
  ]);
}

export function certificationsJsonLd(lang: Language, title: string, description: string, homeLabel: string) {
  const page = pageUrl(lang, "certifications");
  return graph([
    webPageNode({ lang, pathname: "certifications", title, description }),
    breadcrumbNode([
      { name: homeLabel, url: pageUrl(lang) },
      { name: title, url: page },
    ]),
  ]);
}

export function projectDetailJsonLd(lang: Language, project: Project, labels: { home: string; projects: string }) {
  const title = project.title[lang];
  const description = project.fullDescription[lang];
  const url = pageUrl(lang, `projects/${project.slug}`);
  const imageUrl = resolveOgImageUrl(project.featuredImage.src);

  const creativeWork: Record<string, unknown> = {
    "@type": "SoftwareSourceCode",
    "@id": `${url}#project`,
    name: title,
    description,
    url,
    image: imageUrl,
    author: { "@id": `${getSiteUrl()}${PERSON_ID}` },
    keywords: project.technologies.join(", "),
    programmingLanguage: project.technologies,
  };

  if (project.year) {
    creativeWork.datePublished = `${project.year}-01-01`;
  }
  if (project.demoUrl) {
    creativeWork.workExample = { "@type": "WebApplication", url: project.demoUrl };
  }
  if (project.githubUrl && !project.privateRepo) {
    creativeWork.codeRepository = project.githubUrl;
  }

  return graph([
    personNode(),
    webPageNode({ lang, pathname: `projects/${project.slug}`, title, description }),
    breadcrumbNode([
      { name: labels.home, url: pageUrl(lang) },
      { name: labels.projects, url: pageUrl(lang, "projects") },
      { name: title, url },
    ]),
    creativeWork,
  ]);
}
