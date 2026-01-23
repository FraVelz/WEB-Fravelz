# Estructura de Traducciones (i18n)

## Descripción General

Las traducciones están organizadas en carpetas por idioma, y dentro de cada carpeta se dividen en archivos temáticos para mejorar la legibilidad y mantenimiento.

## Estructura de Carpetas

```
locales/
├── es/                    # Español
│   ├── common.json
│   ├── hero.json
│   ├── music.json
│   ├── certifications.json
│   ├── info.json
│   ├── technologies.json
│   ├── projects.json
│   ├── about.json
│   ├── hobbies.json
│   └── README.md
├── en/                    # English
│   └── (mismo estructura)
├── ru/                    # Русский
│   └── (mismo estructura)
├── zh/                    # 中文
│   └── (mismo estructura)
└── i18n.js               # Archivo de configuración raíz
```

## Secciones de Traducciones

| Archivo               | Propósito                                         |
| --------------------- | ------------------------------------------------- |
| `common.json`         | Textos comunes como navegación, botones de acción |
| `hero.json`           | Sección principal con presentación                |
| `music.json`          | Selector de música y canciones                    |
| `certifications.json` | Certificaciones, formación, credenciales          |
| `info.json`           | Títulos de secciones de información               |
| `technologies.json`   | Tecnologías, herramientas y skills                |
| `projects.json`       | Proyectos (hacking, web, otros)                   |
| `about.json`          | Biografía, historia personal, narrativa           |
| `hobbies.json`        | Pasatiempos e intereses personales                |

## Cómo Agregar Nuevas Traducciones

1. **Crear en el archivo correspondiente**: Si es un texto nuevo, identifica a qué sección temática pertenece
2. **Agregar a todos los idiomas**: Asegúrate de añadir la misma clave en los 4 idiomas
3. **Mantener consistencia**: Usa convención `snake_case` para las claves
4. **Sin necesidad de editar i18n.js**: La configuración combina automáticamente todos los archivos

### Ejemplo

Para agregar una nueva traducción en la sección de proyectos:

**projects.json (es):**
```json
{
  "new_project_title": "Mi Nuevo Proyecto"
}
```

**projects.json (en):**
```json
{
  "new_project_title": "My New Project"
}
```

(Repetir para `ru` y `zh`)

## Ventajas de Esta Estructura

✅ **Modularidad** - Fácil de encontrar y editar traducciones  
✅ **Escalabilidad** - Agregar nuevos idiomas es simple  
✅ **Mantenibilidad** - Documentación clara por sección  
✅ **Colaboración** - Más fácil para trabajar en equipo  
✅ **Performance** - Carga solo lo necesario  

## Idiomas Soportados

- 🇪🇸 Español (es)
- 🇬🇧 English (en)
- 🇷🇺 Русский (ru)
- 🇨🇳 中文 (zh)

