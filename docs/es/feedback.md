# Feedback y roadmap

Ideas de mejora y notas de mantenimiento para el portafolio **Next.js**.

---

## Temario

- [Feedback y roadmap](#feedback-y-roadmap)
  - [Roadmap sugerido](#roadmap-sugerido)
  - [Mantenimiento](#mantenimiento)
  - [Flujo de datos (actual)](#flujo-de-datos-actual)

---

## Roadmap sugerido

### Rendimiento

- [ ] Analizar bundle con `@next/bundle-analyzer` (opcional)
- [ ] Revisar imágenes en `public/` y `src/assets/` (formatos modernos, tamaños)
- [ ] Service Worker / PWA (opcional)

### Funcionalidades

- [x] Certificados con visor PDF (implementado en `ui-react`)
- [ ] Blog o artículos (rutas nuevas bajo `src/app/[lang]/…`)
- [ ] Formulario de contacto con backend o servicio (actualmente solo `mailto:`)
- [ ] Integración con API de GitHub para proyectos dinámicos
- [ ] Analytics (p. ej. Plausible, Vercel Analytics)

### SEO

- [x] Sitemap generado (`src/app/sitemap.ts` → `/sitemap.xml`)
- [ ] Schema.org (JSON-LD) en layout o por página
- [ ] Open Graph por ruta más rica (imágenes dinámicas por proyecto)

### Desarrollo

- [ ] Tests (Vitest / Playwright)
- [ ] CI en GitHub Actions (lint + build)
- [ ] Husky + lint-staged (opcional)

### UX

- [ ] Transiciones de vista (p. ej. `template.tsx` o librería de animación)
- [ ] Toasts para acciones (copiar email, errores)

### Internacionalización

- [x] URLs por idioma `/{lang}/…`
- [x] Detección inicial vía middleware + cookie
- [ ] RTL si se añade un idioma que lo requiera

---

## Mantenimiento

```bash
pnpm update
pnpm audit
pnpm build
pnpm lint
```

- Mantener **Next** y **React** al día siguiendo las [guías de upgrade](https://nextjs.org/docs/app/building-your-application/upgrading).
- Tras cambios grandes en dependencias, ejecutar `pnpm build` y revisar la salida.

---

## Flujo de datos (actual)

1. **Petición** a `/{lang}/…`: Next resuelve el segmento `[lang]` y renderiza el árbol de `app/[lang]/`.
2. **Traducciones en servidor**: `getTranslations(lang)` lee JSON desde `public/locals/` (ver `LOCALE_FILES` en `src/utils/i18n.ts`).
3. **Componentes**: por defecto Server Components; la interactividad va en componentes cliente con **`"use client"`** (búsqueda, tema, GSAP en cliente, etc.).
4. **Cliente**: `public/i18n.js` puede actualizar nodos `data-i18n` y notificar con `language-changed` si el usuario cambia idioma desde el script legacy.

[Regresar al readme...](../../README.md)

> Autor: Fravelz
