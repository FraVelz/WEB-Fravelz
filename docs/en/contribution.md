# Contributing

Steps and conventions if you want to suggest improvements to this personal project.

---

## Table of contents

- [Contributing](#contributing)
  - [Table of contents](#table-of-contents)
  - [Pull requests](#pull-requests)
  - [Local setup](#local-setup)
    - [Requirements](#requirements)
    - [Steps](#steps)
  - [Scripts](#scripts)

---

## Pull requests

1. Fork the repository
2. Use a descriptive branch (`git checkout -b feature/clear-name`)
3. Commit messages in English using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push and open a Pull Request against `main`

---

## Local setup

### Requirements

- **Node.js** 20+ (recommended for Next.js 16)
- **pnpm** (used in this repo; see `package.json`)

### Steps

```bash
git clone <fork-or-upstream-url>
cd WEB-Fravelz
pnpm install
pnpm dev
```

Development server: **http://localhost:3000** (`/` redirects to `/{lang}/`).

---

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Development server (Turbopack) |
| `pnpm build` | Production build (output in `.next/`) |
| `pnpm start` | Run production build locally |
| `pnpm lint` | ESLint on `src/` |
| `pnpm lint:fix` | ESLint with auto-fix |
| `pnpm format` | Prettier |
| `pnpm style` | `format` + `lint:fix` |

---

[Return to readme...](../../README.md)

> Author: Fravelz
