# 🎨 Paletas de colores del proyecto

Este proyecto usa principalmente **Tailwind CSS (paleta por defecto)** con modo oscuro por clase (`.dark`) y gradientes utilitarios. Además hay algunos **hex directos** en CSS/componentes.

> Nota: los SVG “logos de tecnologías” incluyen colores propios de cada marca (no forman parte de la UI del sitio, pero sí aparecen en el código).

## 1) Fondos (Background)

### Fondo principal (claro)
- **Gradiente**: `bg-gradient-to-b from-slate-100 via-blue-50 to-cyan-50`
- **Uso típico**: body y páginas (ej. layout principal / certifications).

### Fondo principal (oscuro)
- **Gradiente**: `dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950`
- **Variante** (también usada): `dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`

### Superficies / cards
- **Claras**: `bg-white`, `bg-slate-50`, `bg-gray-50`, `bg-gray-100`
- **Oscuras**: `dark:bg-gray-800`, `dark:bg-gray-900`, `dark:bg-slate-900`

## 2) Acentos (Brand) y gradientes

### Acento principal (Cyan)
- **Texto/links**: `text-cyan-600/700/800` + `dark:text-cyan-200/300/400`
- **Fondos suaves**: `bg-cyan-50`, `bg-cyan-100` + `dark:bg-cyan-900/30` (y variantes con opacidad)
- **Bordes/rings**: `border-cyan-200/300/400/500` + `focus:ring-cyan-500`

### Acento secundario (Purple)
- **Títulos**: `bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent`
- **Acciones**: gradientes `from-cyan-500 to-purple-500` (y hover `from-cyan-600 to-purple-600`)
- **Estados UI puntuales**: se usa `purple-*` en algunos componentes interactivos.

### Gradiente “primary” para botones
- `bg-gradient-to-r from-cyan-500 to-blue-500 text-white`
- Hover típico: `hover:from-cyan-600 hover:to-blue-600`

### Separadores / líneas decorativas
- `bg-gradient-to-r from-transparent via-cyan-400/60 dark:via-gray-600 to-transparent`

## 3) Neutros (texto y layout)

- **Texto principal claro**: `text-slate-900`, `text-gray-900`, `text-slate-800`
- **Texto secundario/muted**: `text-slate-600`, `text-gray-600`, `text-slate-500`
- **Modo oscuro**:
  - Principal: `dark:text-gray-100/200/300`
  - Muted: `dark:text-gray-400/500`
- **Bordes neutros**: `border-slate-200`, `border-gray-200/300` + `dark:border-slate-700`, `dark:border-gray-700`

## 4) Estados (semantic colors)

Estos colores aparecen en badges/etiquetas y estados de proyecto:

- **Éxito / finalizado**: `emerald-*` (p. ej. `bg-emerald-500`, `bg-emerald-100`, `text-emerald-800`)
- **Warning / en desarrollo**: `amber-*` (p. ej. `bg-amber-500`, `bg-amber-100`, `text-amber-800`)
- **“Coming soon”**: `yellow-*` (p. ej. `bg-yellow-500`, `bg-yellow-100`, `text-yellow-800`)
- **Info/soporte**: `blue-500` (p. ej. línea de timeline en “Sobre mí”)

## 5) Colores en hex (no Tailwind) detectados

### Selección de texto (`src/styles/global.css`)
- **Selección en títulos/strong**: `#a855f7` (equivalente aproximado a `purple-500`) sobre `#ffffff`
- **Selección global**: `#079bd6ef` (cyan/blue personalizado) sobre `#ffffff`

### Partículas (`src/components/ui/Particles.astro`)
- `#38bdf8` (equivalente aproximado a `sky-400`)

### Link animado (`src/components/ui/Link.astro`)
- `#22d3ee` (equivalente aproximado a `cyan-400`)

### Botón “Ver proyectos” (`src/components/ui/Button.astro`)
- Variables/colores directos usados en el CSS del componente:
  - `--clr: #000`
  - `#fff`
  - `#02a2f8` (azul/cyan personalizado)

## 6) Componentes con paletas propias (destacados)

- **Reproductor de música (`src/components/ui-react/MusicPlayer.tsx`)**
  - Fondo/headers con gradientes que mezclan `white/slate/cyan` en claro y `gray/cyan/purple` en oscuro, manteniendo la identidad cyan/purple.

## 7) Resumen (qué “define” el look & feel)

- **Base**: neutros `slate/gray` + superficies `white`/`gray-800`
- **Brand**: **cyan** (primario) + **purple** (secundario)
- **Acciones**: gradientes **cyan→blue** y **cyan→purple**
- **Estados**: `emerald` (ok), `amber` (warning), `yellow` (soon)

