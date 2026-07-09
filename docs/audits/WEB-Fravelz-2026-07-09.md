# Audit WEB-Fravelz (2026-07-09)

## Summary
Portfolio repo synced: project card UI polish, markdownlint bump (high CVE cleared), prettier fixes. CI local green (lint, format, audit high, build).

## P0 (resolved)
- `linkify-it` high CVE via `markdownlint-cli2@0.23.0`
- Prettier/eslint import formatting
- No `Co-authored-by: Cursor` in new commits

## P1 (monitor)
- 4 moderate/low advisories remain in dev toolchain
- Run `pnpm lighthouse:local` on home and `/projects` periodically

## P2 (backlog)
- React Doctor warnings triage
- Expand automated a11y tests

## Checks
| Area | Status |
|------|--------|
| Security | `security-headers.ts`, audit high gate |
| SEO | `metadata.ts`, `sitemap.ts`, `robots.ts`, OG images |
| a11y | Skip link, landmarks in layout components |
| UX | Horizontal scroll home, project filters |
