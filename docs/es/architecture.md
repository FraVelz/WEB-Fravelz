# Arquitectura y guía de desarrollo (Next.js)

Este documento describe cómo extender el portafolio tras la migración a **Next.js** (App Router).

---

## Añadir una nueva sección en la home

1. **Componente de servidor (por defecto)**  
   Crea un archivo bajo `src/components/features/<nombre>/<Nombre>Section.tsx` que reciba `lang` y use `getTranslations` desde `@/utils/i18n`.

2. **Componente cliente** (estado, GSAP, listeners)  
   Añade **`"use client"`** al inicio del archivo o extrae la parte interactiva a un subcomponente cliente.

3. **Incluir en la home**  
   Importa la sección en [`src/components/features/PageFeature/HomeMain.tsx`](../../src/components/features/PageFeature/HomeMain.tsx) en el orden deseado (respeta el contenedor `.horizontal` / `.panel` si aplica scroll horizontal en desktop).

---

## Traducciones

1. Edita los JSON en **`public/locals/{es,en,ru,zh}/`** manteniendo las mismas claves en todos los idiomas.
2. Si añades un archivo JSON nuevo, inclúyelo en el array **`LOCALE_FILES`** dentro de [`src/utils/i18n.ts`](../../src/utils/i18n.ts).
3. En componentes servidor: `const t = await getTranslations(lang)` o `getTranslations(lang)` según el contexto (está envuelto en `cache` de React).
4. El script **`public/i18n.js`** sigue actualizando elementos con `data-i18n` en el cliente.

---

## Añadir un idioma nuevo

1. Crea `public/locals/<codigo>/` copiando la estructura de `es/`.
2. Amplía el tipo **`Language`** y el array **`languages`** en [`src/lib/i18n-routing.ts`](../../src/lib/i18n-routing.ts).
3. Añade el locale a **`generateStaticParams`** en [`src/app/[lang]/layout.tsx`](../../src/app/[lang]/layout.tsx) (ya deriva de `languages`).

---

## Build y despliegue

### Desarrollo

```bash
pnpm install
pnpm dev
```

Por defecto: **http://localhost:3000** (Turbopack).

### Producción local

```bash
pnpm build
pnpm start
```

Salida: directorio **`.next/`** (no `dist/` como en export estático puro).

### Despliegue recomendado: Vercel

- Framework: **Next.js**.
- Build command: `pnpm build`.
- El repositorio puede conectarse a Vercel para despliegues automáticos desde `main`.

### Sitio en producción

- URL de referencia: **https://fravelz.vercel.app/**

### Versión archivada (Astro)

- Rama: [`archive/astro`](https://github.com/FraVelz/WEB-Fravelz/tree/archive/astro)  
- Tag: [`astro-v1`](https://github.com/FraVelz/WEB-Fravelz/releases/tag/astro-v1)

---

## Internacionalización (resumen)

| Capa | Rol |
|------|-----|
| `src/middleware.ts` | Redirige `/` según cookie `lang` o `Accept-Language`. |
| `src/lib/i18n-routing.ts` | Lista de idiomas y validación (compatible con Edge). |
| `src/utils/i18n.ts` | Carga JSON desde `public/locals/` en el servidor. |
| `public/i18n.js` | Actualización en cliente y eventos para componentes legacy. |

[Regresar al readme...](../../README.md)

> Autor: Fravelz
