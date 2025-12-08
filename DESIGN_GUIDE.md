# 🎨 Guía de Diseño Visual - WEB-Fravelz

## Índice
1. [Paleta de Colores](#paleta-de-colores)
2. [Principios de Diseño](#principios-de-diseño)
3. [Componentes Visuales](#componentes-visuales)
4. [Mejores Prácticas](#mejores-prácticas)
5. [Ejemplos de Implementación](#ejemplos-de-implementación)

---

## 🎭 Paleta de Colores

### Colores Primarios
```
Cyan:     #06B6D4 (cyan-400/500)
Purple:   #A855F7 (purple-500)
```

### Colores Secundarios
```
Gris Oscuro:    #111827 (gray-950) - Fondo principal
Gris Medio:     #1F2937 (gray-800) - Tarjetas
Gris Claro:     #E5E7EB (gray-200) - Texto secundario
Blanco:         #FFFFFF - Texto principal
```

### Combinaciones Recomendadas
| Elemento | Color Primario | Color Hover | Sombra |
|----------|----------------|-------------|--------|
| Títulos | Gradiente cyan→purple | N/A | Ninguna |
| Botones | Gradiente cyan→purple | Más luminoso | cyan-500/30 |
| Bordes | cyan-500/30 o purple-500/30 | cyan-400/60 | Sutil |
| Acentos | Cyan o Purple | Versión más clara | N/A |

---

## 💡 Principios de Diseño

### 1. **Gradientes en lugar de Colores Sólidos**
Los gradientes dan profundidad y modernidad. Úsalos en:
- ✅ Títulos principales
- ✅ Botones importantes
- ✅ Bordes decorativos
- ✅ Fondos de secciones

**Ejemplo:**
```jsx
className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
```

### 2. **Opacidad en Bordes y Sombras**
Crea elegancia con bordes transparentes que se iluminan al hover:

**Bordes dinámicos:**
```jsx
// Estado normal
border border-cyan-500/30

// Estado hover
hover:border-cyan-400/60 transition-all
```

**Sombras glow:**
```jsx
hover:shadow-lg hover:shadow-cyan-500/20
```

### 3. **Transiciones Suaves**
Siempre incluye transiciones para interactividad fluida:

```jsx
className="transition-all duration-300"
// o simplemente
className="transition-all"
```

### 4. **Jerarquía de Color**
- **Primario (Cyan)**: Llamadas a acción, ubicación, información importante
- **Secundario (Purple)**: Email, detalles, elementos destacados
- **Neutro (Gris)**: Fondos, bordes sutiles, textos secundarios

---

## 🎯 Componentes Visuales

### Tarjetas/Contenedores

**Estructura base:**
```jsx
className="
  bg-gray-900 
  border border-cyan-500/30
  rounded-lg
  hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10
  transition-all
"
```

**Variante Purple:**
```jsx
className="
  bg-gray-900 
  border border-purple-500/30
  hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10
"
```

### Botones

**Botón primario (Acción):**
```jsx
className="
  bg-linear-to-r from-cyan-600 to-purple-600 text-white
  hover:from-cyan-500 hover:to-purple-500
  px-4 py-2 rounded-full
  shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
  transition-all
  font-semibold
"
```

**Botón secundario (Enlace):**
```jsx
className="
  bg-gray-900
  border border-cyan-500/40
  text-cyan-300
  hover:border-cyan-400/60 hover:text-cyan-200
  px-3 py-2 rounded-full
  transition-all
"
```

### Textos

**Título con gradiente:**
```jsx
className="
  text-3xl font-bold
  bg-linear-to-r from-cyan-400 to-purple-400
  bg-clip-text text-transparent
"
```

**Texto destacado (Cyan):**
```jsx
className="text-cyan-300 font-semibold"
```

**Texto secundario (Purple):**
```jsx
className="text-purple-300"
```

### Líneas Separadoras

**Línea sutil:**
```jsx
className="my-6 border-gray-700"
```

---

## ✨ Mejores Prácticas

### 1. **Usa Bordes Transparentes con Hover**
Esto evita que la interfaz "salte" al hacer hover:

```jsx
// ✅ BIEN - Sin saltos visuales
border border-cyan-500/30 hover:border-cyan-400/60

// ❌ MAL - Causa saltos
border-0 hover:border-2
```

### 2. **Combina Bordes con Sombras**
Las sombras refuerzan el efecto visual:

```jsx
// ✅ Completo
border border-cyan-500/30
hover:border-cyan-400/60
hover:shadow-lg hover:shadow-cyan-500/20
transition-all
```

### 3. **Paleta Limitada = Cohesión**
Usa máximo 3-4 colores principales en todo el proyecto:
- Cyan (primario)
- Purple (secundario)
- Grises (neutros)
- Blanco (texto)

### 4. **Consistencia en Redondez**
- Botones pequeños: `rounded-full`
- Tarjetas: `rounded-lg` o `rounded-2xl`
- Contenedores principales: `rounded-2xl`

### 5. **Opacidades Estratégicas**
```
/10  → Muy sutil (sombras)
/20  → Sutil (hover states)
/30  → Visible (bordes normales)
/40  → Más visible (bordes activos)
/60  → Prominente (hover estados)
```

---

## 📋 Ejemplos de Implementación

### Ejemplo 1: Card de Tecnología
```jsx
<div className="
  bg-linear-to-br from-gray-800 to-gray-900
  p-4 rounded-lg
  border border-cyan-500/30
  hover:border-cyan-400/60
  hover:shadow-lg hover:shadow-cyan-500/10
  transition-all
">
  <h3 className="font-semibold text-cyan-300 mb-2">
    Automatización & Scripting
  </h3>
  <p className="text-gray-400">
    Python, Bash Script
  </p>
</div>
```

### Ejemplo 2: Botón de Acción
```jsx
<button className="
  bg-linear-to-r from-cyan-600 to-purple-600
  text-white
  px-4 py-2 rounded-full
  hover:from-cyan-500 hover:to-purple-500
  shadow-lg shadow-cyan-500/30
  hover:shadow-cyan-500/50
  transition-all
  font-semibold
">
  Descargar CV
</button>
```

### Ejemplo 3: Badge/Chip
```jsx
<div className="
  flex items-center gap-2
  text-sm text-cyan-300
  max-w-fit
  bg-gray-900 px-3 py-1
  rounded-full
  border border-cyan-500/40
  hover:border-cyan-400/60
  transition-all
">
  <Icon className="text-cyan-400" />
  <span>Bogotá, Colombia</span>
</div>
```

### Ejemplo 4: Fondo Gradiente Sutil
```jsx
<div className="
  bg-linear-to-t 
  from-cyan-900/30 
  via-gray-900 
  to-purple-900/20
">
  {/* Contenido */}
</div>
```

---

## 🚀 Consejos Avanzados

### 1. **Dark Mode Consistency**
- Siempre usa `bg-gray-950` o `bg-gray-900` como base
- Los colores primarios (cyan/purple) resaltan bien en fondos oscuros
- Nunca uses blancos puros (#FFFFFF), usa `text-gray-50`

### 2. **Accesibilidad**
- Cyan sobre gris oscuro: **Alto contraste ✅**
- Purple sobre gris oscuro: **Alto contraste ✅**
- Siempre prueba con herramientas de contraste

### 3. **Performance**
- Limita el uso de sombras (shadow-lg es suficiente)
- Usa `transition-all` pero especifica `duration-300` si es critico

### 4. **Escala de Diseño**
Para mantener la cohesión:
```
sm (640px)  → Versión móvil, colores igual
md (768px)  → Transición
lg (1024px) → Versión completa
```

### 5. **Pseudo-elementos**
Combina con `group` para efectos más complejos:

```jsx
<div className="group bg-gray-900 border border-cyan-500/30 hover:border-cyan-400/60">
  <span className="group-hover:text-cyan-300 transition-all">
    Hover me
  </span>
</div>
```

---

## 📐 Espaciado Recomendado

| Elemento | Padding | Margin | Border Radius |
|----------|---------|--------|---------------|
| Button | px-4 py-2 | - | rounded-full |
| Card | p-4 | mb-8 | rounded-lg |
| Container | p-8 | - | rounded-2xl |
| Chip | px-3 py-1 | - | rounded-full |
| Badge | px-2 py-1 | - | rounded-full |

---

## 🎓 Lecciones Aprendidas

1. **Los gradientes son tu amigo** → Usa `bg-linear-to-r` en títulos
2. **Opacidad > Colores sólidos** → Crea profundidad con `/30` y `/60`
3. **Sombras sutiles** → `shadow-lg shadow-cyan-500/10` es elegante
4. **Hover states importantes** → Siempre cambia border + shadow
5. **Coherencia visual** → Cyan + Purple en todo el proyecto
6. **Fondos oscuros funcionan** → `bg-gray-950` es la mejor base
7. **Transiciones suaves** → `transition-all` hace magia

---

## 🔗 Recursos Útiles

- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Font Awesome Icons](https://fontawesome.com/search)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)

---

**Creado:** 6 de diciembre de 2025
**Proyecto:** WEB-Fravelz
**Tema:** Dark Mode + Cyan/Purple Gradient Design
