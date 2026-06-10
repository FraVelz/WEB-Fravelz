import { getSiteUrl } from "@/lib/site-url";

/** Dimensiones estándar Open Graph / preview de cartas de proyecto. */
export const PROJECT_PREVIEW_IMAGE = {
  width: 1200,
  height: 630,
  aspectRatio: "1200 / 630" as const,
} as const;

/** Resuelve rutas relativas (`/images/...`, `/_next/static/...`) a URL absoluta para OG/Twitter/JSON-LD. */
export function resolveOgImageUrl(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return `${getSiteUrl()}${path}`;
}
