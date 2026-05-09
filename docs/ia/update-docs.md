# Instrucción: documentación del repositorio (español ↔ inglés)

## Cuándo usar este documento

Cuando el usuario quiere **actualizar documentación** en este repo y adjunta uno o más archivos Markdown (o rutas a los mismos), junto con esta instrucción.

## Tipos de documentación en el repo

### A) Documentos generados por IA

- Se reconocen porque **al final** incluyen una mención explícita de que el archivo fue **generado por IA** (o formulación equivalente) y la **fecha exacta** de su última actualización.

**Qué debe hacer el asistente si el usuario pasa uno de estos:**

1. Aplicar las **ediciones de contenido** que el usuario pida o que resulten necesarias según el contexto del mensaje.
2. **Actualizar el pie** (o bloque final): mantener la aclaración de que es generado por IA y poner la **fecha de última actualización a la fecha actual** (usar la fecha “de hoy” que figure en el contexto de la sesión si está disponible).
3. **Sincronizar la versión en inglés:** para documentos bajo `docs/es/<nombre>.md`, el homólogo suele ser `docs/en/<nombre>.md` (mismo nombre de archivo). Aplicar los mismos cambios conceptuales y, si aplica el pie de IA, **actualizar también** ese pie con **fecha actual**.
4. Algunos archivos viven solo en `docs/` (raíz); en ese caso seguir lo que indique el usuario o mantener un solo archivo coherente con su idioma y propósito.
5. Si **solo** existe documento en un idioma y el usuario pide ambos, crear o actualizar el par **es ↔ en** de forma alineada.

### B) Documentos hechos o editados a mano

- No llevan (o no deben depender de) el pie “generado por IA + fecha” descrito arriba.

**Qué debe hacer el asistente si el usuario pasa uno de estos:**

1. **Revisar ortografía y gramática** del texto en español (y mejorar redacción mínima si hay errores claros).
2. **Actualizar o crear la versión en inglés** correspondiente: traducción fiel al contenido corregido en español, mismo tono técnico.
3. **No** añadir automáticamente un pie “generado por IA” a documentos manuales, salvo que el usuario lo pida.

## Qué debe adjuntar el usuario

1. Este archivo (`docs/ia/update-docs.md`) **o** indicación de que aplica esta instrucción.
2. El o los `.md` a tratar (ruta en el repo o contenido pegado).

## Resultado esperado

Documentación **coherente entre ES y EN**, con convención de pie correcta según el tipo (IA vs manual), y fechas actuales solo donde corresponda a docs generados por IA.
