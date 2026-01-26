export const base = import.meta.env.BASE_URL;

const path = (p: string) => `${base}${p.replace(/^\/+/, '')}`;

export default path;
