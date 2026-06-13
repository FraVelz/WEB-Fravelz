# Autocommit — WEB-Fravelz (portafolio Next.js)

Usar cuando el usuario pida **hacer commit** del trabajo actual. Mensajes **Conventional Commits**, coherentes con
`git log` de este repo. **No** hacer `git push` salvo petición explícita.

## Prohibido (Cursor / co-autor)

- **Nunca** dejar `Co-authored-by: Cursor` (ni variantes) en el mensaje del commit.
- **Nunca** hacer push si `git log -1 --format=%B` muestra un trailer de Cursor o de otro agente/IDE.
- **No** usar solo `git commit -m "..."` desde el agente: usar **`git commit -F`** con un archivo de mensaje limpio.
- Tras cada commit, **obligatorio**: `git log -1 --format=%B` → si hay trailer, `git commit --amend -F` con el mismo texto sin trailer.
- Si ya se publicó con trailer y el usuario lo pide: reescribir historial (quitar líneas `Co-authored-by: Cursor` en todos los commits afectados) y `git push --force-with-lease` solo con petición explícita.

Cumplir siempre [`.cursor/rules/git-commits.mdc`](../rules/git-commits.mdc).

## Cuándo ejecutar

- Invocación de **`/auto-commit`** o petición explícita de **commit** / **autocommit**.
- **No** commitear si el usuario no lo pidió.

## Antes de commitear

1. `git status` — staged y unstaged.
2. `git diff` — qué entra en el commit.
3. `git log -15 --oneline` — tono reciente.
4. **Respetar borrados:** si el diff elimina líneas o archivos, **no restaurarlos** ni "arreglar" el contenido antes del commit salvo petición explícita del usuario. Un borrado suele ser intencional.

**No** incluir `.env`, credenciales ni artefactos de build (`.next/`, etc.) salvo que el usuario lo pida.

## Ámbitos (`scope`) habituales en este repo

`readme`, `i18n`, `home`, `projects`, `certifications`, `contact`, `about-me`, `hero`, `seo`, `proxy`, `locales`,
`a11y`, `ci`, `cursor`, `data`, `layout`, `deps`.

Rutas de referencia: `src/app/[lang]/`, `src/features/`, `src/components/`, `public/locals/`, `src/utils/data/`,
`docs/es|en/`, `.cursor/`.

## Formas de mensaje

### A) Formato lista — varias áreas en un commit

```text
<type>(<scope>): <acción en imperativo, inglés, sin punto final>
```

Primera línea = resumen; líneas siguientes = un bloque lógico del diff cada una. Línea en blanco opcional tras la
primera.

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

| Tipo              | Uso aquí                                    |
| ----------------- | ------------------------------------------- |
| `feat`            | UI, rutas, animaciones, contenido visible   |
| `fix`             | Bugs, regresiones, CI                       |
| `docs`            | `README`, `docs/`, `.cursor/commands/`      |
| `refactor`        | Reorganización sin cambio de comportamiento |
| `style` / `chore` | Prettier, tokens, deps, scripts             |
| `perf`            | LCP, bundles, animaciones                   |
| `ci`              | `.github/workflows/`                        |

**Evitar** encadenar `feat: … feat: …` en una sola línea.

## Commit (obligatorio con `-F`)

```bash
cat > /tmp/commit-msg.txt <<'EOF'
docs(readme): tighten bilingual README sections

chore(cursor): add update-global-ia-docs command
EOF
git commit -F /tmp/commit-msg.txt
git log -1 --format=%B
```

Si aparece `Co-authored-by: Cursor`, enmendar antes de push:

```bash
git commit --amend -F /tmp/commit-msg.txt
git log -1 --format=%B
```

## Reglas

- Mensaje en **inglés**; respuesta al chat en **español**.
- Hook rechazado → corregir y **nuevo** commit; sin `--no-verify` salvo petición explícita.

## Comandos relacionados

- Documentación: **`/update-docs`**, barrido masivo **`/update-global-ia-docs`**.
- Auditoría: **`/problems-search`** (no implica commit).
