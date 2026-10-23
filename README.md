# Portafolio de Fravelz

[English version](./README.EN.md)

Sitio personal de Fravelz: presentación, trabajo y forma de construir. Es la carta pública del perfil, tanto la web como la organización del código.

| | |
| --- | --- |
| Autor | [Fravelz](https://github.com/FraVelz) |
| Licencia | MIT. Ver [LICENSE](./LICENSE). |
| Sitio | https://fravelz.vercel.app |

## Tecnologías

- Next.js, React, TypeScript, Tailwind CSS
- GSAP
- pnpm

## Estructura base

Esqueleto del repositorio. El contenido interno cambia; estas piezas se mantienen.

```text
src/
  app/          rutas
  components/   interfaz compartida
  features/     secciones del sitio
  lib/          soporte
public/         estáticos
docs/           documentación del sitio
e2e/            pruebas de navegador
```

## Puesta en marcha

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```
