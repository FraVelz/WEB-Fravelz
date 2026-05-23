# Autocommit — WEB-Fravelz (portafolio Next.js)

Usar cuando el usuario pida **hacer commit** del trabajo actual. Mensajes **Conventional Commits**, coherentes con `git log` de este repo. **No** hacer `git push` salvo petición explícita.

## Cuándo ejecutar

- Invocación de **`/auto-commit`** o petición explícita de **commit** / **autocommit**.
- **No** commitear si el usuario no lo pidió.

## Antes de commitear

1. `git status` — staged y unstaged.
2. `git diff` — qué entra en el commit.
3. `git log -15 --oneline` — tono reciente.

**No** incluir `.env`, credenciales ni artefactos de build (`.next/`, etc.) salvo que el usuario lo pida.

## Ámbitos (`scope`) habituales en este repo

`readme`, `i18n`, `home`, `projects`, `certifications`, `contact`, `about-me`, `hero`, `seo`, `proxy`, `locales`, `a11y`, `ci`, `cursor`, `data`, `layout`, `deps`.

Rutas de referencia: `src/app/[lang]/`, `src/features/`, `src/components/`, `public/locals/`, `src/utils/data/`, `docs/es|en/`, `.cursor/`.

## Formas de mensaje

### A) Formato lista — varias áreas en un commit

```text
<type>(<scope>): <acción en imperativo, inglés, sin punto final>
```

Primera línea = resumen; líneas siguientes = un bloque lógico del diff cada una. Línea en blanco opcional tras la primera.

```text
feat(home): add GSAP reveals and horizontal scroll polish

refactor(i18n): centralize lang params and typed translation fallbacks
chore(cursor): align agent commands for docs and commits
```

### B) Formato clásico — un solo tema

```text
feat(a11y): improve keyboard focus across portfolio surfaces
```

## Tipos

| Tipo | Uso aquí |
| --- | --- |
| `feat` | UI, rutas, animaciones, contenido visible |
| `fix` | Bugs, regresiones, CI |
| `docs` | `README`, `docs/`, `.cursor/commands/` |
| `refactor` | Reorganización sin cambio de comportamiento |
| `style` / `chore` | Prettier, tokens, deps, scripts |
| `perf` | LCP, bundles, animaciones |
| `ci` | `.github/workflows/` |

**Evitar** encadenar `feat: … feat: …` en una sola línea.

## Commit

```bash
git commit -m "$(cat <<'EOF'
docs(readme): tighten bilingual README sections

chore(cursor): add update-global-ia-docs command
EOF
)"
```

## Reglas

- Mensaje en **inglés**; respuesta al chat en **español**.
- Cumplir `.cursor/rules/git-commits.mdc` (sin `Co-authored-by` / Cursor).
- Hook rechazado → corregir y **nuevo** commit; sin `--no-verify` salvo petición explícita.
- Si aparece `Co-authored-by: Cursor` y el commit **no está en remoto**: `git commit --amend -F msg.txt` con el mismo texto limpio.

## Comandos relacionados

- Documentación: **`/update-docs`**, barrido masivo **`/update-global-ia-docs`**.
- Auditoría: **`/problems-search`** (no implica commit).
