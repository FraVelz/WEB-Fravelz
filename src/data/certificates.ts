export type CertificateCategory = 'web' | 'backend' | 'security' | 'other';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  /** Categoría principal del certificado (para énfasis en web). */
  category: CertificateCategory;
  /** Ruta al PDF dentro de `public/pdfs/...`, por ejemplo `/pdfs/web/mi-certificado.pdf`. */
  pdfPath?: string;
  /** Texto corto opcional para mostrar debajo del título. */
  shortDescription?: string;
}

/**
 * Rellena este array con tus certificados reales.
 * Ejemplo:
 *
 * {
 *   id: 'freecodecamp-responsive-web',
 *   title: 'Responsive Web Design',
 *   issuer: 'freeCodeCamp',
 *   year: 2025,
 *   category: 'web',
 *   pdfPath: '/pdfs/web/freecodecamp-responsive-web.pdf',
 *   shortDescription: 'HTML, CSS, Flexbox, Grid y accesibilidad.'
 * }
 */
export const certificates: Certificate[] = [
  // --- Desarrollo Web (midudev) ---
  {
    id: 'midudev-html',
    title: 'HTML desde cero',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/html.pdf',
    shortDescription: 'Fundamentos de HTML para maquetar páginas web accesibles.'
  },
  {
    id: 'midudev-css',
    title: 'CSS desde cero',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/css.pdf',
    shortDescription: 'Selectores, cascada, maquetación básica y buenas prácticas de estilos.'
  },
  {
    id: 'midudev-css-grid',
    title: 'CSS Grid Layout',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/css-grid.pdf',
    shortDescription: 'Maquetación moderna con CSS Grid para layouts complejos y responsivos.'
  },
  {
    id: 'midudev-tailwind',
    title: 'Tailwind CSS',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/tailwindcss.pdf',
    shortDescription: 'Diseño con utilidades Tailwind, componentes reutilizables y buenas prácticas.'
  },
  {
    id: 'midudev-animaciones-css',
    title: 'Animaciones con CSS',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/animaciones-css.pdf',
    shortDescription: 'Transiciones, keyframes y micro-interacciones con CSS moderno.'
  },
  {
    id: 'midudev-gsap-js',
    title: 'Animaciones con GSAP y JavaScript',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/gsap-animaciones-js.pdf',
    shortDescription: 'Animaciones avanzadas con GSAP y JavaScript para interfaces web dinámicas.'
  },
  {
    id: 'midudev-astro-headless',
    title: 'Astro + Headless CMS',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/astro-headlessCMS.pdf',
    shortDescription: 'Integración de Astro con CMS headless para sitios rápidos y mantenibles.'
  },
  {
    id: 'midudev-utility-types-ts',
    title: 'Utility Types de TypeScript',
    issuer: 'midudev',
    category: 'web',
    pdfPath: '/pdfs/midudev/utilityTypes-typescript.pdf',
    shortDescription: 'Uso de utility types de TypeScript para tipar mejor aplicaciones web.'
  },

  // --- Ciberseguridad / Hacking ético (Hixec) ---
  {
    id: 'hixec-ciberseguridad-101',
    title: 'Ciberseguridad y Privacidad 101',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Ciberseguridad-y-Privacidad-101-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-ciberseguridad-202',
    title: 'Ciberseguridad y Privacidad 202',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Ciberseguridad-y-Privacidad-202-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-ciberseguridad-303',
    title: 'Ciberseguridad y Privacidad 303',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Ciberseguridad-y-Privacidad-303-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-linux-hacking',
    title: 'Linux para Hacking Ético',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Linux-para-Hacking-Etico-HXC-1133-Hixec.pdf'
  },
  {
    id: 'hixec-redes-hacking',
    title: 'Redes para Hacking Ético',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Redes-para-Hacking-Etico-HXC-1133-Hixec.pdf'
  },
  {
    id: 'hixec-windows-hacking',
    title: 'Windows para Hacking Ético',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Windows-para-Hacking-Etico-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-osint',
    title: 'OSINT para Hackers Éticos',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-OSINT-para-Hackers-Eticos-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-privacidad-hackers',
    title: 'Privacidad para Hackers Éticos',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Privacidad-para-Hackers-Eticos-HXC-3388-Hixec.pdf'
  },
  {
    id: 'hixec-malware',
    title: 'Detección y Protección Contra Malware',
    issuer: 'Hixec',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hixec/Fravelz-Deteccion-y-Proteccion-Contra-Malware-HXC-3388-Hixec.pdf'
  },

  // --- Ciberseguridad / Hacking ético (Hack4u) ---
  {
    id: 'hack4u-intro-linux',
    title: 'Introducción a Linux',
    issuer: 'Hack4u',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hack4u/certificado-hack4u-introduccion-a-linux.pdf'
  },
  {
    id: 'hack4u-personalizacion',
    title: 'Personalización de Entorno',
    issuer: 'Hack4u',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hack4u/certificado-hack4u-personalizacion.pdf'
  },
  {
    id: 'hack4u-python-ofensivo',
    title: 'Python Ofensivo',
    issuer: 'Hack4u',
    category: 'security',
    pdfPath: '/pdfs/certificados-hacking/hack4u/certificado-hack4u-python-ofensivo.pdf'
  }
];

