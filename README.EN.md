# Fravelz portfolio

[Versión en español](./README.md)

Fravelz personal site: introduction, work, and how it is built. It is the public profile card, both as a website and as a codebase.

| | |
| --- | --- |
| Autor | [Fravelz](https://github.com/FraVelz) |
| Licencia | MIT. See [LICENSE](./LICENSE). |
| Sitio | https://fravelz.vercel.app |

## Stack

- Next.js, React, TypeScript, Tailwind CSS
- GSAP
- pnpm

## Base layout

Repository skeleton. Inner files change; these pieces stay.

```text
src/
  app/          routes
  components/   shared UI
  features/     site sections
  lib/          support
public/         static files
docs/           site documentation
e2e/            browser tests
```

## Run

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```
