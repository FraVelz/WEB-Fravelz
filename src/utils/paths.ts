/** App base: "/" in dev, "/WEB-Fravelz/" in prod. Single place that uses BASE_URL. */
export const base = (import.meta.env.BASE_URL || '/').replace(/([^/])$/, '$1/');
