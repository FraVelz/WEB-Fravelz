
# Contribuir

Los pasos ordenados y cosas a tener en cuenta si quieres contribuir al proyecto, documentación para agregar cambios y entender el funcionamiento del proyecto.

---

## Temario

- [Contribuir](#contribuir)
  - [Temario](#temario)
  - [Pasos/Recomendaciones para hacer PR](#pasosrecomendaciones-para-hacer-pr)
  - [Despliegue en local](#despliegue-en-local)
    - [Prerrequisitos](#prerrequisitos)
    - [Pasos](#pasos)
  - [Scripts Disponibles](#scripts-disponibles)

---

## Pasos/Recomendaciones para hacer PR

Este es un proyecto personal, pero las sugerencias y mejoras son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commits de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

> Los commits preferiblemente deben utilizar el modelo convetional commits.

---

## Despliegue en local

### Prerrequisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado) o npm/yarn

### Pasos

**1. paso:** tener tu repo en local.

**2. Instalar dependencias:**

``` bash
pnpm install
# o
npm install
```

**3. Iniciar servidor de desarrollo:**

``` bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321/WEB-Fravelz/`.

---

## Scripts Disponibles

| Script         | Descripción                                    |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Inicia servidor de desarrollo con hot-reload   |
| `pnpm build`   | Genera build de producción optimizado          |
| `pnpm preview` | Previsualiza el build de producción localmente |
| `pnpm astro`   | Ejecuta comandos de Astro CLI                  |

---

[Regresar al readme...](../../README.md)

> Autor: Fravelz
