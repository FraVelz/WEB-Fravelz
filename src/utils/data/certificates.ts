export type CertificateCategory = "web" | "backend" | "security" | "other";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: number;
  /** Main certificate category (for web emphasis). */
  category: CertificateCategory;
  /** Path to PDF under `public/pdfs/...`, e.g. `/pdfs/web/my-certificate.pdf`. */
  pdfPath?: string;
  /** Optional short text to show below the title. */
  shortDescription?: string;
}

/**
 * Fill this array with your actual certificates.
 * Example:
 *
 * {
 *   id: 'freecodecamp-responsive-web',
 *   title: 'Responsive Web Design',
 *   issuer: 'freeCodeCamp',
 *   year: 2025,
 *   category: 'web',
 *   pdfPath: '/pdfs/web/freecodecamp-responsive-web.pdf',
 *   shortDescription: 'HTML, CSS, Flexbox, Grid and accessibility.'
 * }
 */

/** Agrupa certificados en secciones disjuntas (cada certificado aparece una sola vez). */
export function groupCertificates(certs: Certificate[]) {
  const hixec = certs.filter((c) => c.issuer === "Hixec");
  const hack4u = certs.filter((c) => c.issuer === "Hack4u");
  const web = certs.filter(
    (c) =>
      c.category === "web" && c.issuer !== "Hixec" && c.issuer !== "Hack4u",
  );
  const other = certs.filter(
    (c) =>
      c.category !== "web" && c.issuer !== "Hixec" && c.issuer !== "Hack4u",
  );
  const n = hixec.length + hack4u.length + web.length + other.length;
  if (n !== certs.length) {
    throw new Error(
      `groupCertificates: se agruparon ${n} de ${certs.length} certificados; revisa categorías e issuers.`,
    );
  }
  return { web, hixec, hack4u, other };
}

export const certificates: Certificate[] = [
  // --- Web Development (midudev) ---
  {
    id: "midudev-html",
    title: "HTML desde cero",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/html.pdf",
    shortDescription:
      "Fundamentos de HTML para maquetar páginas web accesibles.",
  },
  {
    id: "midudev-css",
    title: "CSS desde cero",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/css.pdf",
    shortDescription:
      "Selectores, cascada, maquetación básica y buenas prácticas de estilos.",
  },
  {
    id: "midudev-css-grid",
    title: "CSS Grid Layout",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/css-grid.pdf",
    shortDescription:
      "Maquetación moderna con CSS Grid para layouts complejos y responsivos.",
  },
  {
    id: "midudev-tailwind",
    title: "Tailwind CSS",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/tailwindcss.pdf",
    shortDescription:
      "Diseño con utilidades Tailwind, componentes reutilizables y buenas prácticas.",
  },
  {
    id: "midudev-animaciones-css",
    title: "Animaciones con CSS",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/animaciones-css.pdf",
    shortDescription:
      "Transiciones, keyframes y micro-interacciones con CSS moderno.",
  },
  {
    id: "midudev-gsap-js",
    title: "Animaciones con GSAP y JavaScript",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/gsap-animaciones-js.pdf",
    shortDescription:
      "Animaciones avanzadas con GSAP y JavaScript para interfaces web dinámicas.",
  },
  {
    id: "midudev-astro-headless",
    title: "Astro + Headless CMS",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/astro-headlessCMS.pdf",
    shortDescription:
      "Integración de Astro con CMS headless para sitios rápidos y mantenibles.",
  },
  {
    id: "midudev-utility-types-ts",
    title: "Utility Types de TypeScript",
    issuer: "midudev",
    category: "web",
    pdfPath: "/pdfs/midudev/utilityTypes-typescript.pdf",
    shortDescription:
      "Uso de utility types de TypeScript para tipar mejor aplicaciones web.",
  },

  // --- Web / frontend (SoloLearn) ---
  {
    id: "sololearn-html",
    title: "Introducción a HTML",
    issuer: "SoloLearn",
    category: "web",
    pdfPath: "/pdfs/sololearn/introduction-to-html.pdf",
    shortDescription: "Fundamentos de HTML en la plataforma SoloLearn.",
  },
  {
    id: "sololearn-javascript",
    title: "Introducción a JavaScript",
    issuer: "SoloLearn",
    category: "web",
    pdfPath: "/pdfs/sololearn/introduction-to-javascript.pdf",
    shortDescription: "Bases de JavaScript para desarrollo web interactivo.",
  },

  // --- Programación general (SoloLearn) ---
  {
    id: "sololearn-python-intro",
    title: "Introducción a Python",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/introduction-to-python.pdf",
    shortDescription: "Primeros pasos en Python y sintaxis esencial.",
  },
  {
    id: "sololearn-python-intermediate",
    title: "Python intermedio",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/python-intermediate.pdf",
    shortDescription:
      "Conceptos intermedios de Python y práctica estructurada.",
  },
  {
    id: "sololearn-c-intro",
    title: "Introducción a C",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/introduction-to-c.pdf",
    shortDescription: "Fundamentos del lenguaje C.",
  },
  {
    id: "sololearn-c-intermediate",
    title: "C intermedio",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/c-intermediate.pdf",
    shortDescription: "Profundización en C más allá del nivel básico.",
  },
  {
    id: "sololearn-cpp-intro",
    title: "Introducción a C++",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/introduction-to-cpp.pdf",
    shortDescription: "Primeros pasos en C++ y paradigmas básicos.",
  },
  {
    id: "sololearn-cpp-intermediate",
    title: "C++ intermedio",
    issuer: "SoloLearn",
    category: "other",
    pdfPath: "/pdfs/sololearn/cpp-Intermediate.pdf",
    shortDescription: "Conceptos intermedios de C++ en SoloLearn.",
  },

  // --- Cybersecurity / Ethical hacking (Hixec) ---
  {
    id: "hixec-ciberseguridad-101",
    title: "Ciberseguridad y Privacidad 101",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Ciberseguridad-y-Privacidad-101-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-ciberseguridad-202",
    title: "Ciberseguridad y Privacidad 202",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Ciberseguridad-y-Privacidad-202-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-ciberseguridad-303",
    title: "Ciberseguridad y Privacidad 303",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Ciberseguridad-y-Privacidad-303-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-linux-hacking",
    title: "Linux para Hacking Ético",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Linux-para-Hacking-Etico-HXC-1133-Hixec.pdf",
  },
  {
    id: "hixec-redes-hacking",
    title: "Redes para Hacking Ético",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Redes-para-Hacking-Etico-HXC-1133-Hixec.pdf",
  },
  {
    id: "hixec-windows-hacking",
    title: "Windows para Hacking Ético",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Windows-para-Hacking-Etico-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-osint",
    title: "OSINT para Hackers Éticos",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-OSINT-para-Hackers-Eticos-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-privacidad-hackers",
    title: "Privacidad para Hackers Éticos",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Privacidad-para-Hackers-Eticos-HXC-3388-Hixec.pdf",
  },
  {
    id: "hixec-malware",
    title: "Detección y Protección Contra Malware",
    issuer: "Hixec",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hixec/Fravelz-Deteccion-y-Proteccion-Contra-Malware-HXC-3388-Hixec.pdf",
  },

  // --- Cybersecurity / Ethical hacking (Hack4u) ---
  {
    id: "hack4u-intro-linux",
    title: "Introducción a Linux",
    issuer: "Hack4u",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hack4u/certificado-hack4u-introduccion-a-linux.pdf",
  },
  {
    id: "hack4u-personalizacion",
    title: "Personalización de Entorno",
    issuer: "Hack4u",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hack4u/certificado-hack4u-personalizacion.pdf",
  },
  {
    id: "hack4u-python-ofensivo",
    title: "Python Ofensivo",
    issuer: "Hack4u",
    category: "security",
    pdfPath:
      "/pdfs/hacking-certificates/hack4u/certificado-hack4u-python-ofensivo.pdf",
  },
];
