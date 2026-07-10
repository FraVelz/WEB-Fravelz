/** Dominio canónico de producción (fallback cuando no hay env de despliegue). */
const DEFAULT_SITE_URL = "https://fravelz.vercel.app";

/** URL pública del sitio (sitemap, canonical, JSON-LD). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return DEFAULT_SITE_URL;
}

/** Base para resolver rutas relativas en la Metadata API (`openGraph`, `twitter`, etc.). */
export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
