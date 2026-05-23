# Contribuir

Este repositorio es un **proyecto personal** (portafolio Next.js). Aun así, si quieres aportar ideas, reportar problemas
o proponer cambios de código, aquí tienes cómo hacerlo y qué se espera.

---

## Temario

- [Contribuir](#contribuir)
  - [Formas de contribuir](#formas-de-contribuir)
  - [Pull requests](#pull-requests)
  - [Entorno local](#entorno-local)
    - [Requisitos](#requisitos)
    - [Pasos](#pasos)
  - [Scripts](#scripts)

---

## Formas de contribuir

Puedes participar de varias maneras; no todas implican programar:

1. **Feedback, bugs e ideas (sin código)**  
   Abre un issue en GitHub o escribe por correo, con el detalle que ayude a reproducir o entender el problema.

2. **Código (pull requests)**  
Fork, rama descriptiva, commits con mensajes en inglés siguiendo [Conventional
Commits](https://www.conventionalcommits.org/), y PR hacia `main`. Para cambios grandes o que discuten el diseño del
sitio, conviene **abrir antes un issue** para alinear expectativas.

3. **Documentación**  
Mejoras en `docs/` (español e inglés cuando exista pareja `docs/es/…` y `docs/en/…`), aclaraciones en el `README` o en
guías de arquitectura. Mantén el mismo estilo que el resto de los archivos.

4. **Traducciones (i18n)**  
Los textos de la app viven en JSON bajo `public/locals/`. Si añades o corriges claves, hazlo de forma **coherente en
todos los idiomas** que use el sitio (mismas claves, mensajes revisados).

5. **Datos del portafolio**  
Contenido de proyectos y metadatos en `src/utils/data/` (y ficheros relacionados). Los cambios deben ser **factualmente
correctos** respecto al proyecto que describen; evita datos inventados sobre terceros.

Cualquier aporte debe **respetar la licencia del repositorio** y el carácter personal del sitio: no se trata de un
producto comercial abierto a rebranding genérico, sino del portafolio de su autor.

---

## Pull requests

1. **Fork** del repositorio [FraVelz/WEB-Fravelz](https://github.com/FraVelz/WEB-Fravelz).
2. **Rama descriptiva** (`git checkout -b feature/nombre-claro` o `fix/…`).
3. **Commits** con [Conventional Commits](https://www.conventionalcommits.org/) en **inglés** (mensajes del commit).
4. Antes de abrir el PR, en local: `pnpm lint` y `pnpm build` sin errores (salvo que el PR documente una excepción
   acordada en un issue).
5. **`git push`** y abrir un **Pull Request** contra la rama `main`, con una descripción que explique el **qué** y el
   **por qué** del cambio.

---

## Entorno local

### Requisitos

- **Node.js** 20+ (recomendado; compatible con Next.js 16)
- **pnpm** (gestor usado en el repo; ver `package.json`)

### Pasos

```bash
git clone <url-del-fork-o-upstream>
cd WEB-Fravelz
pnpm install
pnpm dev
```

El sitio en desarrollo suele estar en **<http://localhost:3000>** (redirección desde `/` hacia `/{lang}/`).

---

## Scripts

| Script        | Descripción                                      |
| ------------- | ------------------------------------------------ |
| `pnpm dev`    | Servidor de desarrollo (Turbopack)             |
| `pnpm build`  | Build de producción (salida en `.next/`)       |
| `pnpm start`  | Sirve el build de producción en local          |
| `pnpm lint`   | ESLint sobre `src/`                            |
| `pnpm lint:fix` | ESLint con corrección automática             |
| `pnpm format` | Prettier sobre el repositorio                  |
| `pnpm style`  | `format` + `lint:fix`                          |

---

[Regresar al readme...](../../README.md)

> Autor: Fravelz
