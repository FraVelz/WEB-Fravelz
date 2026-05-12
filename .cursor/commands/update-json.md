# Instrucción: sincronizar traducciones de JSON (`public/locals/`)

## Cuándo usar este documento

Cuando el usuario **actualiza un archivo JSON de localización** y la **versión en español** (`public/locals/es/`) es la que ha editado a mano.

## Estructura del repo

- Español: `public/locals/es/<archivo>.json`
- Inglés: `public/locals/en/<archivo>.json`
- Ruso: `public/locals/ru/<archivo>.json`
- Chino: `public/locals/zh/<archivo>.json`

El **mismo nombre de archivo** debe existir en las cuatro carpetas para un mismo “módulo” de textos (por ejemplo `common.json`, `hero.json`).

## Qué debe adjuntar el usuario

1. El comando **/update-json** (o el archivo `.cursor/commands/update-json.md`) **o** indicación explícita de que aplica esta instrucción.
2. El JSON que ha modificado (normalmente bajo `public/locals/es/`).

## Qué debe hacer el asistente

1. **Identificar** el par de rutas: archivo en `es` y los homólogos `en`, `ru`, `zh`.
2. **Alinear** las otras idiomas con los cambios del español:
   - Misma **jerarquía de claves** (añadir, renombrar o eliminar claves de forma consistente en los cuatro archivos).
   - **Traducir** el valor nuevo o modificado en `en`, `ru`, `zh` (sin cambiar el significado respecto al español).
3. **Corregir ortografía en español** en el JSON de `es` si hace falta y reflejar el sentido corregido en el resto.
4. **Preservar** convenciones del JSON válido (comillas, escapes, sin comas finales) y cualquier sustitución o placeholder que ya use el proyecto (por ejemplo `{{nombre}}` si existiera).

## Resultado esperado

Los cuatro JSON del mismo nombre actualizados y **estructuralmente equivalentes**, con traducciones coherentes con el español.
