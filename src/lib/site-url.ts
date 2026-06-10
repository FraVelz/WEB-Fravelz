/** Dominio canónico de producción (robots.txt estático, fallback de metadata). */
export const DEFAULT_SITE_URL = "https://fravelz.vercel.app";

/** URL pública del sitio (Open Graph, sitemap, metadata). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return DEFAULT_SITE_URL;
}
