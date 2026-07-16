# Design tokens (WEB-Fravelz)

Fuente de verdad: `src/app/globals.css` (`@theme` + overrides `.dark`). Los colores se consumen como `rgb(var(--token) / alpha)`.

## Color

| Token | Rol | Light (RGB) | Dark |
|-------|-----|-------------|------|
| `--color-bg` | Fondo página | slate-50 | slate-950 |
| `--color-surface` | Superficie / cards shell | white | gray-900 |
| `--color-card` | Relleno secundario | slate-100 | gray-800 |
| `--color-text` | Texto principal | slate-900 | gray-100 |
| `--color-text-muted` | Texto secundario | slate-500 | gray-400 |
| `--color-primary` | Brand / focus / CTAs | cyan-500 | cyan-400 |
| `--color-primary-hover` | Hover brand | cyan-600 | cyan-500 |
| `--color-accent` | Acento puntual | purple-500 | purple-400 |
| `--color-success` / `warning` / `danger` / `info` | Estados | emerald / amber / red / blue | (heredan) |
| `--color-drawer-border` | Bordes drawer | slate-200 | gray-700 |

Uso típico: `bg-[rgb(var(--color-surface))]`, `text-[rgb(var(--color-text-muted))]`.

## Espacio y layout

| Token / convención | Valor | Uso |
|--------------------|-------|-----|
| `--header-height` | `5.25rem` | Skip-link, anclas, padding bajo header fijo |
| Escala Tailwind | `gap-2`…`gap-9`, `p-4`/`p-6`, `px-4 sm:px-6 lg:px-8` | Listas, cards, páginas |
| Contenedor proyectos | `max-w-7xl` | Índice de proyectos |

No hay escala `--space-*` dedicada; el ritmo vertical usa utilidades Tailwind sobre los tokens de color.

## Radius

| Contexto | Valor típico |
|----------|--------------|
| Cards proyecto | `rounded-xl` shell / `rounded-[8px]` cara |
| Chips / badges | `rounded-full` o `rounded-md` |
| Modales / search | `rounded-xl` / `rounded-2xl` |
| Botones hero | `rounded-lg` |

## Z-index (capas)

| Capa | Valor | Dónde |
|------|-------|--------|
| Ambient / partículas | `0`–`1` | glow, particles |
| Contenido card | `1`–`3` | hobbies / projects overlays |
| Skip-link | `100` | `globals.css` |
| Search / drawer backdrop | `50` | Search modal, mobile drawer |
| Drawer panel | `60` | `MobileDrawer` |
| PDF modal | `100` (`z-100`) | `PdfViewerModal` |

Regla: overlays de diálogo ≥ 50; skip-link y PDF en 100 para quedar por encima del chrome.

## Focus

Sombras de foco en tokens: `--focus-ring-shadow`, `--focus-field-shadow`, `--hero-btn-*-focus-shadow`, `--theme-toggle-focus-shadow`. Preferir `focus-visible` + estas variables frente a `outline` ad-hoc.

## Tema

`.dark` en `html` redefine los `--color-*` de superficie/texto/brand. No duplicar paletas hardcodeadas en componentes nuevos.
