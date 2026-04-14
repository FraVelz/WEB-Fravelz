# Contribuir

Pasos y convenciones si quieres proponer mejoras a este proyecto personal.

---

## Temario

- [Contribuir](#contribuir)
  - [Temario](#temario)
  - [Pull requests](#pull-requests)
  - [Entorno local](#entorno-local)
    - [Requisitos](#requisitos)
    - [Pasos](#pasos)
  - [Scripts](#scripts)

---

## Pull requests

1. Fork del repositorio
2. Rama descriptiva (`git checkout -b feature/nombre-claro`)
3. Commits con [Conventional Commits](https://www.conventionalcommits.org/) en inglés (mensajes)
4. `git push` y abrir un Pull Request contra `main`

---

## Entorno local

### Requisitos

- **Node.js** 20+ (recomendado; compatible con Next.js 16)
- **pnpm** (gestor usado en el repo; ver `package.json`)

### Pasos

```bash
git clone <url-del-fork-o-upstream>
cd WEB-Fravelz
pnpm install
pnpm dev
```

El sitio en desarrollo suele estar en **http://localhost:3000** (redirección desde `/` hacia `/{lang}/`).

---

## Scripts

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Servidor de desarrollo (Turbopack) |
| `pnpm build` | Build de producción (salida en `.next/`) |
| `pnpm start` | Sirve el build de producción en local |
| `pnpm lint` | ESLint sobre `src/` |
| `pnpm lint:fix` | ESLint con corrección automática |
| `pnpm format` | Prettier sobre el repositorio |
| `pnpm style` | `format` + `lint:fix` |

---

[Regresar al readme...](../../README.md)

> Autor: Fravelz
