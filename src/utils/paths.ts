/** Base de la app: "/" en dev, "/WEB-Fravelz/" en prod. Único lugar que usa BASE_URL. */
export const base = (import.meta.env.BASE_URL || '/').replace(/([^/])$/, '$1/');
