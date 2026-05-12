# Contributing

This repository is a **personal project** (Next.js portfolio). Still, if you want to share ideas, report problems, or propose code changes, here is how to do it and what is expected.

---

## Table of contents

- [Contributing](#contributing)
  - [Ways to contribute](#ways-to-contribute)
  - [Pull requests](#pull-requests)
  - [Local setup](#local-setup)
    - [Requirements](#requirements)
    - [Steps](#steps)
  - [Scripts](#scripts)

---

## Ways to contribute

You can take part in several ways; not all of them involve coding:

1. **Feedback, bugs, and ideas (no code)**  
   Open a GitHub issue or send an email with enough detail to reproduce or understand the problem.

2. **Code (pull requests)**  
   Fork, use a descriptive branch, and commit with English messages following [Conventional Commits](https://www.conventionalcommits.org/), then open a PR against `main`. For large changes or anything that questions the site’s design, it helps to **open an issue first** to align expectations.

3. **Documentation**  
   Improvements under `docs/` (Spanish and English when a pair `docs/es/…` and `docs/en/…` exists), clarifications in the `README`, or architecture guides. Keep the same tone as the rest of the files.

4. **Translations (i18n)**  
   App copy lives in JSON under `public/locals/`. If you add or fix keys, keep them **consistent across every language** the site uses (same keys, reviewed wording).

5. **Portfolio data**  
   Project content and metadata live under `src/utils/data/` (and related files). Changes must be **factually accurate** for the project they describe; do not invent information about third parties.

Any contribution must **respect the repository license** and the personal nature of the site: it is not a commercial product open to generic rebranding, but the author’s portfolio.

---

## Pull requests

1. **Fork** the [FraVelz/WEB-Fravelz](https://github.com/FraVelz/WEB-Fravelz) repository.
2. **Use a descriptive branch** (`git checkout -b feature/clear-name` or `fix/…`).
3. **Commits** use [Conventional Commits](https://www.conventionalcommits.org/) in **English** (commit messages).
4. Before opening the PR, run `pnpm lint` and `pnpm build` locally with no errors (unless the PR documents an exception agreed in an issue).
5. **`git push`** and open a **Pull Request** against `main`, with a description that explains **what** changed and **why**.

---

## Local setup

### Requirements

- **Node.js** 20+ (recommended; compatible with Next.js 16)
- **pnpm** (package manager for this repo; see `package.json`)

### Steps

```bash
git clone <fork-or-upstream-url>
cd WEB-Fravelz
pnpm install
pnpm dev
```

The dev site is usually at **http://localhost:3000** (`/` redirects to `/{lang}/`).

---

## Scripts

| Script         | Description                              |
| -------------- | ---------------------------------------- |
| `pnpm dev`     | Development server (Turbopack)         |
| `pnpm build`   | Production build (output in `.next/`)  |
| `pnpm start`   | Serve the production build locally       |
| `pnpm lint`    | ESLint on `src/`                         |
| `pnpm lint:fix`| ESLint with auto-fix                     |
| `pnpm format`  | Prettier on the repository              |
| `pnpm style`   | `format` + `lint:fix`                  |

---

[Return to readme...](../../README.md)

> Author: Fravelz
