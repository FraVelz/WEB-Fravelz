import { getAllProjects } from "@/utils/data/projects";
import { languages } from "@/lib/i18n-routing";
import type { MetadataRoute } from "next";

const site = "https://fravelz.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    entries.push({
      url: `${site}/${lang}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${site}/${lang}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    entries.push({
      url: `${site}/${lang}/certifications`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    for (const p of projects) {
      entries.push({
        url: `${site}/${lang}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
