# Instrucción: actualizar proyectos del portafolio (`src/utils/data/projects/`)

## Cuándo usar este documento

Cuando el usuario **crea o edita** un archivo de proyecto (`project-*.ts`) y ha trabajado la **versión en español** como
fuente de verdad.

## Qué debe adjuntar el usuario

1. El comando **/update-projects** (o el archivo `.cursor/commands/update-projects.md`) **o** un mensaje que indique
   explícitamente que aplica esta instrucción.
2. El archivo TypeScript del proyecto correspondiente, por ejemplo `src/utils/data/projects/project-ejemplo.ts`.

## Qué debe hacer el asistente

1. **Leer** `src/utils/data/project-types.ts` para respetar el tipo `Project` (campos obligatorios y opcionales,
   categorías permitidas, etc.).
2. **Tomar el contenido en `es` como referencia** y **traducir o alinear** las claves **`en`**, **`ru`** y **`zh`** para
   que reflejen el mismo significado que el español (tono técnico, sin inventar datos que no estén en `es`).
3. **Corregir ortografía y redacción en español** si detecta errores en `es` (typos, acentos, concordancia); las otras
   idiomas deben actualizarse en consecuencia.
4. **Mantener** nombres propios de tecnologías, URLs, `slug`, rutas de imports y estructura del objeto tal como exige el
   archivo y el resto del repositorio.
5. **Proyecto nuevo:** comprobar si hace falta **importar y registrar** el proyecto en `src/utils/data/projects-list.ts`
   (además de crear el `.ts` del proyecto e imágenes si aplica).

## Idiomas del modelo de datos

Cada texto multilingüe usa siempre: **`es`**, **`en`**, **`ru`**, **`zh`**.

## Resultado esperado

Un único archivo de proyecto (o lista + proyecto si es nuevo) con **todas las idiomas coherentes** con la versión
española corregida y lista para commit.
