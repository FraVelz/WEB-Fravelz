# Contributing — WEB-Fravelz

Personal Next.js portfolio. Contributions (issues, docs, PRs) are welcome when they respect the site’s personal character and the rules below.

Bilingual detail (ES / EN): [`docs/es/contribution.md`](./docs/es/contribution.md) · [`docs/en/contribution.md`](./docs/en/contribution.md).

---

## Quick start (pnpm)

**Requirements:** Node.js **20+** (CI uses 22) · **pnpm** 11.x (see `packageManager` / workflow).

```bash
git clone https://github.com/FraVelz/WEB-Fravelz.git
cd WEB-Fravelz
pnpm install
pnpm dev
```

Dev URL: [http://localhost:3000](http://localhost:3000) (`/` → `/{lang}/`).

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Dev server (Turbopack) |
| `pnpm build` / `pnpm start` | Production build / serve |
| `pnpm lint` / `pnpm typecheck` | ESLint + `tsc --noEmit` |
| `pnpm format` / `pnpm format:check` | Prettier |
| `pnpm test:e2e` | Playwright a11y smoke |
| `pnpm lighthouse:budget` | Archived Lighthouse budget check |
| `pnpm analyze` | Bundle analyzer (`ANALYZE=true`) |

Before a PR: `pnpm lint && pnpm typecheck && pnpm format:check` (and `pnpm build` for UI changes).

---

## Component scopes

Place code where it is **actually used**. Do not put single-feature UI in `src/components/ui/`. Full rule: [`.cursor/rules/component-scope.mdc`](./.cursor/rules/component-scope.mdc).

| Scope | Path |
|-------|------|
| One App Router page | `src/app/.../_components/` |
| One portfolio section | `src/features/<name>/components/` |
| App chrome (header/footer) | `src/components/layout/` |
| Shared UI (2+ consumers) | `src/components/ui/` |
| Domain data (projects, certs) | `src/utils/data/` |
| i18n / theme / site URL | `src/lib/` + `public/locals/` |

Promote to `components/ui` only when a **second** consumer outside the feature needs it (e.g. `PanelReveal`, `PdfViewerModal`).

---

## i18n checklist (4 languages)

Copy lives under `public/locals/{es,en,ru,zh}/`. See [`public/locals/README.md`](./public/locals/README.md).

When you add or change a UI string:

1. [ ] Add/edit the key in **`es/`** first (reference).
2. [ ] Mirror the **same key** in `en/`, `ru/`, and `zh/` (no missing keys).
3. [ ] Prefer short stable names (`nav_projects`, `project_honesty_demo`).
4. [ ] UI must not flash raw keys — use fallbacks (`translationOr` / `FALLBACK_LABELS` for honesty badges).
5. [ ] If the key is used in Playwright or SEO, update tests / metadata as needed.

Honesty badge keys (must stay aligned ×4): `project_honesty_demo` | `piloto` | `lab` | `privado` | `terminado`.

---

## Commits & PRs

- **Conventional Commits** in **English** (no trailing period on the subject).
- Common scopes: `home`, `projects`, `hero`, `a11y`, `ci`, `docs`, `i18n`, `ops`, `data`, `cursor`.
- Never add `Co-authored-by: Cursor` (or other AI trailers).
- Branch from `main`, open PR with **what** + **why**. Large design changes: open an issue first.

Agent `/auto-commit` protocol: [`.cursor/commands/auto-commit.md`](./.cursor/commands/auto-commit.md).

---

## Design & ops pointers

| Topic | Doc |
|-------|-----|
| Design notes (Button / PanelReveal / PDF modal) | [`docs/design-notes.md`](./docs/design-notes.md) |
| Tokens | [`docs/es/tokens.md`](./docs/es/tokens.md) |
| ADRs | [`docs/adr/`](./docs/adr/) |
| Runbook | [`docs/ops/runbook.md`](./docs/ops/runbook.md) |
| Hiring demo 10 min | [`docs/ops/guion-10min.md`](./docs/ops/guion-10min.md) |
| Quarterly re-audit template | [`docs/audits/TEMPLATE-re-audit.md`](./docs/audits/TEMPLATE-re-audit.md) |

---

## License

MIT — see [LICENSE](./LICENSE). Keep factual accuracy in project data; do not invent third-party claims.
