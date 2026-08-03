# DESIGN_SYSTEM.md

# 1. Filosofía de Diseño

## Objetivo

Definir las reglas visuales y de desarrollo de Poppy Crafty para mantener una interfaz consistente, moderna, accesible y escalable.

## Principios

- Diseño limpio y minimalista.
- Fotografías como elemento principal.
- Amplio uso de espacios en blanco.
- Componentes reutilizables.
- Mobile First.
- Accesibilidad por defecto.
- Consistencia visual en todo el sitio.

---

# 2. Identidad Visual

## 2.1 Paleta de Colores

| Token | Color | Uso |
|--------|--------|-----|
| Primary | `#F8BBD9` | Color principal de la marca |
| Primary Hover | `#F48FB1` | Hover de botones y enlaces |
| Secondary | `#F7F3EF` | Fondos secundarios |
| Background | `#FFFFFF` | Fondo principal |
| Surface | `#FAFAFA` | Tarjetas y secciones |
| Text | `#1F2937` | Texto principal |
| Text Muted | `#6B7280` | Texto secundario |
| Border | `#E5E7EB` | Bordes y divisores |
| Success | `#22C55E` | Estados de éxito |
| Warning | `#F59E0B` | Advertencias |
| Error | `#EF4444` | Errores |
| Info | `#3B82F6` | Información |

## 2.2 Tipografía

| Propiedad | Valor |
|------------|-------|
| Fuente principal | Poppins |
| Fallback | sans-serif |

### Escala Tipográfica

| Elemento | Tamaño | Peso |
|-----------|--------|------|
| H1 | 48px | 700 |
| H2 | 36px | 700 |
| H3 | 30px | 600 |
| H4 | 24px | 600 |
| H5 | 20px | 600 |
| Body | 16px | 400 |
| Small | 14px | 400 |
| Caption | 12px | 400 |

## 2.3 Espaciado

| Token | Valor |
|--------|------:|
| xs | 4px |
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 20px |
| 2xl | 24px |
| 3xl | 32px |
| 4xl | 40px |
| 5xl | 48px |
| 6xl | 64px |
| 7xl | 80px |
| 8xl | 96px |
| 9xl | 128px |

> No utilizar valores arbitrarios fuera de esta escala.

## 2.4 Border Radius

| Token | Valor |
|--------|------:|
| sm | 6px |
| md | 10px |
| lg | 16px |
| xl | 24px |

## 2.5 Sombras

| Token | Tailwind |
|--------|----------|
| sm | `shadow-sm` |
| md | `shadow-md` |
| lg | `shadow-lg` |
| xl | `shadow-xl` |

## 2.6 Iconografía

| Propiedad | Valor |
|------------|-------|
| Librería | Lucide React |
| Tamaño por defecto | 20px |
| Color | Hereda el color del texto del componente |

# 3. Layout

## 3.1 Contenedor

| Breakpoint | Ancho Máximo |
|------------|-------------:|
| Default | 100% |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1400px |

- Padding horizontal: 1rem (mobile), 2rem (desktop).
- Contenido siempre centrado.

---

## 3.2 Grid

| Dispositivo | Columnas |
|-------------|---------:|
| Mobile | 1 |
| Tablet | 2 |
| Laptop | 3 |
| Desktop | 4 |

Gap estándar: 24px.

---

## 3.3 Breakpoints

| Nombre | Tamaño |
|---------|--------|
| sm | ≥640px |
| md | ≥768px |
| lg | ≥1024px |
| xl | ≥1280px |
| 2xl | ≥1536px |

---

## 3.4 Secciones

| Elemento | Espaciado Vertical |
|----------|-------------------:|
| Hero | 96px |
| Secciones principales | 80px |
| Secciones secundarias | 64px |
| Cards | 24px |
| Componentes internos | 16px |

---

# 4. Componentes Base

## 4.1 Botón

### Variantes

- Primary
- Secondary
- Outline
- Ghost
- Destructive
- Link

### Tamaños

| Tamaño | Alto |
|---------|-----:|
| sm | 36px |
| md | 44px |
| lg | 52px |

### Estados

- Default
- Hover
- Active
- Focus
- Disabled
- Loading

---

## 4.2 Input

Altura: **44px**

Características:

- Label opcional
- Placeholder
- Helper Text
- Error Message
- Icono opcional
- Disabled
- Focus Ring

---

## 4.3 Textarea

- Altura mínima: 120px.
- Redimensionable únicamente en vertical.

---

## 4.4 Select

- Mismo estilo que Input.
- Búsqueda opcional.
- Placeholder.
- Estados completos.

---

## 4.5 Checkbox

Estados:

- Checked
- Unchecked
- Disabled

---

## 4.6 Badge

Variantes:

- Primary
- Secondary
- Success
- Warning
- Error
- Outline

---

## 4.7 Card

Elementos opcionales:

- Imagen
- Título
- Descripción
- Acciones
- Footer

Radius: lg.

Shadow: md.

---

## 4.8 Modal

Tamaños:

- sm
- md
- lg
- xl

Incluye:

- Header
- Body
- Footer

---

## 4.9 Toast

Tipos:

- Success
- Error
- Warning
- Info

Posición:

- Bottom Right

---

## 4.10 Skeleton

Versiones:

- Texto
- Imagen
- Card
- Avatar

---

## 4.11 Spinner

Tamaños:

- sm
- md
- lg

# 5. Componentes del Sitio

## 5.1 Navbar

### Desktop

- Logo
- Menú principal
- Buscador
- Botón "Cotizar"
- Redes sociales (opcional)

### Mobile

- Logo
- Menú hamburguesa
- Botón "Cotizar"

Navbar sticky.

---

## 5.2 Footer

Secciones:

- Logo
- Descripción
- Enlaces rápidos
- Categorías
- Redes sociales
- Información de contacto
- Derechos de autor

---

## 5.3 Hero

Elementos:

- Título
- Subtítulo
- Botón principal
- Botón secundario
- Imagen/Banner

---

## 5.4 Product Card

Elementos:

- Imagen
- Categoría
- Nombre
- Precio desde
- Botón "Ver producto"

Hover:

- Zoom suave en imagen
- Elevación de la tarjeta

---

## 5.5 Blog Card

Elementos:

- Imagen
- Categoría
- Fecha
- Tiempo de lectura
- Título
- Resumen
- Botón "Leer más"

---

## 5.6 Gallery Card

Elementos:

- Imagen
- Título
- Categoría

Hover:

- Overlay
- Zoom de imagen

---

## 5.7 CTA

Elementos:

- Título
- Descripción
- Botón principal

---

## 5.8 FAQ

- Accordion
- Una pregunta abierta a la vez
- Animación suave

---

## 5.9 Breadcrumb

Formato:

Inicio / Categoría / Página

---

## 5.10 Pagination

Elementos:

- Anterior
- Números
- Siguiente

Responsive.

# 6. Estados

Todos los componentes deberán contemplar los siguientes estados cuando aplique.

| Estado | Descripción |
|---------|-------------|
| Default | Estado inicial |
| Hover | Cursor sobre el componente |
| Focus | Navegación por teclado |
| Active | Elemento seleccionado |
| Disabled | No interactivo |
| Loading | Acción en proceso |
| Error | Validación fallida |
| Empty | Sin contenido |

---

# 7. Animaciones

| Elemento | Animación |
|----------|-----------|
| Botones | Transition 200ms |
| Cards | Elevación + Scale |
| Imágenes | Zoom suave |
| Navbar | Fade |
| Modal | Fade + Scale |
| Accordion | Slide |
| Hero | Fade Up |
| Toast | Slide In |

Duración estándar: **200–300 ms**.

Curva: **ease-in-out**.

# 8. Convenciones de Desarrollo

## Tecnologías

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- React Hook Form
- Zod
- Lucide React
- Framer Motion
- Sonner

---

## Convenciones

- Componentes reutilizables.
- Server Components por defecto.
- Client Components solo cuando sea necesario.
- Mobile First.
- Accesibilidad obligatoria.
- Tipado estricto con TypeScript.
- Sin estilos inline.
- Sin colores hardcodeados.
- Uso de tokens del Design System.
- Componentes desacoplados y reutilizables.

---

## Estructura de Componentes

```text
/components
    /ui
    /layout
    /sections
    /products
    /blog
    /gallery
    /shared
```

---

## Convención de Nombres

- Componentes: PascalCase
- Hooks: useNombre
- Utilidades: camelCase
- Archivos: kebab-case
- Variables CSS: kebab-case