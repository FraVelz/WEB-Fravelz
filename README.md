<!-- markdownlint-disable MD033 MD041 -->

<p align="center">
  <a href="README.md">Español</a> · <a href="README.en.md">English</a>
</p>

<h1 align="center">WEB-Fravelz</h1>

<p align="center">
  <img src="public/images/portfolio.png" alt="Inicio del portafolio, en español y tema oscuro" width="800">
</p>

<p align="center">Portafolio público: proyectos, CV y contacto en cuatro idiomas.</p>

El sitio está en [fravelz.vercel.app](https://fravelz.vercel.app).
La raíz no es una página: redirige a `/es`, `/en`, `/ru` o `/zh`.

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/licencia-MIT-blue" alt="Licencia MIT"></a>
  <a href="https://github.com/FraVelz/WEB-Fravelz/actions/workflows/ci.yml">
    <img src="https://github.com/FraVelz/WEB-Fravelz/actions/workflows/ci.yml/badge.svg" alt="Estado de CI">
  </a>
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://skillicons.dev/icons?i=ts,react,nextjs,tailwind,pnpm,vercel,githubactions&theme=dark&perline=6"
      >
      <source
        media="(prefers-color-scheme: light)"
        srcset="https://skillicons.dev/icons?i=ts,react,nextjs,tailwind,pnpm,vercel,githubactions&theme=light&perline=6"
      >
      <img
        alt="TypeScript, React, Next.js, Tailwind, pnpm, Vercel, GitHub Actions"
        src="https://skillicons.dev/icons?i=ts,react,nextjs,tailwind,pnpm,vercel,githubactions&perline=6"
      >
    </picture>
  </a>
</p>

## Características

- Presentación, proyectos, tecnologías, sobre mí y contacto.
- Cada proyecto lleva un badge de honestidad: demo, piloto, lab, privado o terminado.
- Cuatro idiomas en la ruta: `es`, `en`, `ru` y `zh`.
- Tema claro, oscuro o el del sistema.

> [!NOTE]
> La versión anterior, en Astro, está en la rama `archive/astro` y en el tag `astro-v1`. Este árbol es Next.js.

## Tecnologías

- **Next.js 16, React 19, TypeScript y Tailwind 4** — App Router y la interfaz.
- **GSAP** — movimiento del hero, el scroll horizontal y el 404.
- **Sentry** — opcional. Sin DSN el cliente no envía nada.
- **Playwright** — smoke de accesibilidad.
- **pnpm y Vercel** — scripts locales y el sitio público.

## Inicio rápido

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000). CI usa Node 22 y pnpm 11.1.1.

> [!TIP]
> `pnpm dev` basta. La URL pública ya cae en `https://fravelz.vercel.app` si no copias `.env.example`.

## Uso

`/` redirige. El contenido vive en `/{lang}/`: presentación, proyectos, tecnologías, sobre mí y contacto.
El CV se abre en un visor PDF. El contacto es un `mailto:`.

> [!IMPORTANT]
> Una cadena nueva de la interfaz entra en los cuatro JSON de `public/locals/`: `es`, `en`, `ru` y `zh`.

Antes de un cambio de UI: `pnpm lint`, `pnpm typecheck`, `pnpm format:check` y `pnpm build`.
El smoke es `pnpm test:e2e`.

## Contribuir

La guía corta está en [CONTRIBUTING.md](CONTRIBUTING.md).
El detalle bilingüe está en [docs/es/contribution.md](docs/es/contribution.md).

> [!WARNING]
> No subas `.env`. El ejemplo versionado es `.env.example`. Un DSN de Sentry se queda fuera del repositorio.

## Licencia

MIT. El texto está en [LICENSE](LICENSE).

## Documentación

- [Características](docs/es/features.md)
- [Estructura](docs/es/structure.md)
- [Arquitectura](docs/es/architecture.md)
- [Tokens](docs/es/tokens.md)
- [Contribución](docs/es/contribution.md)
