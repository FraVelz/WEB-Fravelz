# Componentes No Utilizados

Este documento lista los componentes y archivos que no se están utilizando en el proyecto actual.

## Componentes React/JSX No Utilizados

### 1. `src/components/ui/Music.jsx`
- **Estado**: ❌ No utilizado
- **Razón**: Reemplazado por `MusicPlayer.tsx`
- **Problemas**: 
  - Usa `react-i18next` que no está en el proyecto
  - Versión antigua del reproductor de música
- **Acción recomendada**: Eliminar

### 2. `src/components/ui/ModalCertificados.jsx`
- **Estado**: ❌ No utilizado
- **Razón**: No se encuentra ninguna referencia en el código
- **Problemas**: 
  - Usa `react-i18next` que no está en el proyecto
  - Sistema de certificados no implementado actualmente
- **Acción recomendada**: Eliminar o implementar si se necesita en el futuro

### 3. `src/components/ui/ModalInfo.jsx`
- **Estado**: ❌ No utilizado
- **Razón**: Reemplazado por `ModalInfo.tsx` (versión TypeScript)
- **Problemas**: Versión antigua en JavaScript
- **Acción recomendada**: Eliminar

### 4. `src/components/ui/Parrafo.jsx`
- **Estado**: ❌ No utilizado
- **Razón**: Reemplazado por `Parrafo.astro` (versión Astro)
- **Problemas**: Versión antigua en JavaScript
- **Acción recomendada**: Eliminar

## Componentes Astro No Utilizados

### 5. `src/components/ui/GithubLink.astro`
- **Estado**: ❌ No utilizado (removido de PresentacionSection)
- **Razón**: Eliminado según solicitud del usuario
- **Acción recomendada**: Ya no se usa, puede eliminarse

## Componentes React No Utilizados (Versiones Alternativas)

### 6. `src/components/ui/Header.tsx`
- **Estado**: ❌ No utilizado
- **Razón**: Se usa `Header.astro` en su lugar
- **Problemas**: Versión React que no se está usando
- **Acción recomendada**: Eliminar

### 7. `src/components/ui/ThemeSelector.tsx`
- **Estado**: ❌ No utilizado
- **Razón**: Se usa `ToggleTheme.astro` en su lugar
- **Problemas**: Versión React que no se está usando
- **Acción recomendada**: Eliminar

### 8. `src/components/ui/LanguageSelector.tsx`
- **Estado**: ❌ No utilizado
- **Razón**: Se usa el selector inline en `ElementsHeader.astro`
- **Problemas**: Versión React que no se está usando
- **Acción recomendada**: Eliminar

### 9. `src/components/ui/SobreMiSection.tsx`
- **Estado**: ❌ No utilizado
- **Razón**: Se usa `SobreMiSection.astro` en su lugar
- **Problemas**: Versión React que no se está usando
- **Acción recomendada**: Eliminar

## Notas

- Todos estos componentes pueden ser eliminados de forma segura
- Si en el futuro se necesita alguna funcionalidad similar, se recomienda usar las versiones actuales (TypeScript/Astro)
- Los componentes que usan `react-i18next` deben migrarse al sistema de i18n actual (`utils/i18n.ts`)

## Componentes Activos

### Componentes React (TypeScript) Activos
- ✅ `MusicPlayer.tsx` - Reproductor de música
- ✅ `MusicButton.tsx` - Botón para abrir reproductor
- ✅ `CopyEmailButton.tsx` - Botón para copiar email
- ✅ `TecnologiasSection.tsx` - Sección de tecnologías
- ✅ `ProyectosSection.tsx` - Sección de proyectos
- ✅ `ProyectosHackingSection.tsx` - Sección de proyectos hacking (usado en ProyectosSection.astro)
- ✅ `SobreMiModalButton.tsx` - Botón modal sobre mí
- ✅ `ModalInfo.tsx` - Modal de información

### Componentes Astro
- ✅ `Parrafo.astro` - Párrafo con estilos
- ✅ `Enlace.astro` - Enlace de navegación
- ✅ `Line.astro` - Línea divisoria
- ✅ `LocationBadge.astro` - Badge de ubicación
- ✅ `ToggleTheme.astro` - Toggle de tema
- ✅ `DevelopmentWarning.astro` - Advertencia de desarrollo
- ✅ `ScrollIndicator.astro` - Indicador de scroll
