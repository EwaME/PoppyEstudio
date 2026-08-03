# Diseño: Landing Page de Poppy Crafty

**Fecha:** 2026-08-03
**Estado:** Aprobado por el usuario, pendiente de plan de implementación.

## Contexto

`src/app/(marketing)/page.tsx` es el placeholder genérico de la plantilla OB
Solutions. Hay que construir la landing real especificada en `docs/SRS.md`
Parte 4.1 (§45-62), con los tokens de `docs/DESIGN_SYSTEM.md` y contra el
schema real ya migrado (`docs/DATABASE.md`), pero la DB está vacía y no hay
fotografías reales de Poppy Crafty todavía.

Contexto completo del proyecto: `docs/PROJECT_CONTEXT.md`, `docs/DECISIONS.md`,
`docs/CHANGELOG.md`, `docs/ROADMAP.md` (léanse antes de retomar este spec en
una sesión nueva).

## Decisiones de esta sesión (resumen de la ronda de preguntas)

1. **Contenido**: se siembra contenido de ejemplo realista (no se espera carga
   real ni se deja todo en estado vacío) — permite ver y probar la landing
   completa ya.
2. **Imágenes**: sin fotos de stock ni servicios externos. Placeholder propio
   (gradiente de marca + ícono Lucide), sin llamadas de red, reemplazable
   después solo cambiando la URL en DB — no se construye upload de imágenes en
   este alcance.
3. **Datos de contacto (`configuracion`)**: placeholder claramente ficticio
   (`+504 0000-0000`, `@poppycrafty`), reemplazable desde el admin cuando
   existan datos reales.
4. **Animación**: completa según `DESIGN_SYSTEM.md` §7 (Framer Motion) —
   fade-up, parallax leve en Hero, scroll reveals, hover en cards — cuidando
   que no perjudique LCP/INP (nueva dependencia, no instalada aún).
5. **Buscador del header**: funcional de verdad (no decorativo) → implica
   construir `/catalogo` básico en este mismo alcance, porque si no el
   buscador no tiene destino.
6. **Feed de redes sociales (SRS §55)**: **se reemplaza** por una sección de
   Testimonios propia (tabla nueva `testimonios`, solo lectura pública) en vez
   del feed en vivo de Instagram/Facebook — evita depender de APIs de Meta.
   Esto es un desvío documentado del SRS, no un olvido.
7. **Alcance de Testimonios**: tabla nueva de solo lectura pública en esta
   versión (sin formulario público de envío) — SRS §118 lista "sistema de
   reseñas" como funcionalidad **futura**, y escritura pública abre temas de
   moderación/spam/RLS no diseñados. Se puebla vía seed/admin, mismo patrón
   RBAC que el resto de módulos (permiso ya definido, sin página admin todavía
   — igual criterio que dejó `admin-nav.ts` sin tocar en la sesión anterior).

## Fuera de alcance (explícito)

- Página de producto individual (`/catalogo/[slug]`) — los botones "Ver más"
  quedan apuntando a una ruta que aún no existe, igual que ya se acepta para
  el blog.
- Página de artículo de blog individual (`/blog/[slug]`).
- Formulario de solicitud de cotización / contacto.
- Páginas de Políticas (footer linkea a `#` documentado como pendiente).
- Formulario público de envío de testimonios/reseñas.
- Feed en vivo de redes sociales (API de Meta) — reemplazado, ver decisión 6.
- Página admin de gestión de Testimonios (el permiso RBAC sí se define).
- Paginación en `/catalogo` (catálogo chico por ahora).

## 1. Fundamentos (prerequisito antes de UI)

- **`src/app/globals.css` `@theme`**: reemplazar los placeholders
  `--color-brand-primary: #171717` / `--color-brand-secondary: #404040` y los
  `--color-feedback-*` genéricos por los valores reales de
  `src/config/colors.ts` (única fuente canónica TS, por RULES.md §8):
  - `--color-brand-primary: #F8BBD9`
  - `--color-brand-primary-hover: #F48FB1` (token nuevo, no existía)
  - `--color-brand-secondary: #F7F3EF`
  - `--color-feedback-success: #22C55E`
  - `--color-feedback-error: #EF4444`
  - `--color-feedback-warning: #F59E0B`
  - `--color-feedback-info: #3B82F6`

  No se agregan tokens que no estén en `colors.ts` (ej. no se crea
  `--color-brand-text`/`-surface`/`-border` — esos ya los cubren los tokens
  shadcn existentes: `foreground`, `card`, `border`, `muted-foreground`).

- **Tipografía Poppins**: el layout raíz (`src/app/layout.tsx`) sirve al panel
  admin con Geist y no se toca. Poppins se carga vía `next/font/google` solo
  en `src/app/(marketing)/layout.tsx` (nuevo), aplicada como className al
  wrapper del grupo — coherente con que la paleta de marca también es "solo
  sitio público" (nota ya existente en `colors.ts`).

- **Dependencia nueva**: `framer-motion` (`pnpm add framer-motion`).
  `lucide-react` ya está instalado.

## 2. Tabla nueva: `testimonios`

Se agrega a `src/lib/db/schema/clientes.ts`, se documenta como tabla 28 en
`docs/DATABASE.md`, y se anota la decisión en `docs/DECISIONS.md` (desvío de
SRS §55, ver decisión 6 arriba).

```
testimonios
- id: uuid pk default random
- nombreCliente: text not null
- rol: text nullable            (ej. "Mamá de cumpleañera", "Organizadora de eventos")
- texto: text not null
- estrellas: integer not null   (1-5, validado en Zod, no a nivel DB)
- destacado: boolean default false not null   (cuáles se muestran en landing)
- activo: boolean default true not null       (soft delete, convención del proyecto)
- createdAt: timestamp with tz default now not null
```

Query pública: `getTestimoniosDestacados()` → `activo = true AND destacado =
true`, `orderBy createdAt desc`, `limit 6`.

RBAC: nuevo permiso `testimonios` en `src/lib/rbac/permissions.ts` usando
`fullCrud()` (mismo patrón que `productos`/`galeria`). Requiere:
`pnpm db:generate` (nueva migración), y el usuario corre `db:push` +
`seed:rbac` de nuevo después (igual que la vez anterior — Claude no las
corre).

## 3. Placeholders visuales

Componente `ImagePlaceholder` en `src/components/shared/image-placeholder.tsx`:
div con gradiente en tonos de marca (`brand-primary` → `brand-secondary`) +
ícono Lucide centrado (prop `icon`) + label opcional (prop `label`, para
accesibilidad vía `aria-label` ya que no hay `<img>` real).

Cada card que hoy tendría foto (`ProductCard`, `CategoriaCard`, `BlogCard`,
`GalleryCard`, Hero) renderiza `next/image` si el campo `imagenUrl` /
`imagenPortada` viene con valor, o `ImagePlaceholder` si es `null`. El seed de
esta sesión deja esos campos en `null` a propósito — se reemplazan después
solo subiendo la URL real vía admin, sin tocar componentes.

## 4. Layout, Header, Footer

- `src/app/(marketing)/layout.tsx`: server component, obtiene `configuracion`
  (fila única) una vez, envuelve `children` con `<Header configuracion={...}
  />` y `<Footer configuracion={...} categorias={...} />`. Carga la fuente
  Poppins.

- **Header** — `src/components/layout/header.tsx`:
  - Logo, nav principal (Inicio, Catálogo, Nosotros*, Blog, Galería,
    Contacto* — los marcados con \* enlazan a rutas fuera de alcance, se
    documentan como pendientes, no se ocultan del nav).
  - Buscador: input controlado, en submit navega a `/catalogo?q=<valor>`
    (client component chico, el resto del header puede ser server).
  - Botón WhatsApp/"Cotizar" (usa `configuracion.whatsapp`).
  - Mobile: menú hamburguesa con `Sheet` (ya existe en `components/ui/`),
    botón WhatsApp siempre visible.
  - Comportamiento: transparente sobre el Hero al cargar; con scroll pasa a
    fondo blanco + sombra + altura reducida (via `framer-motion` `useScroll`
    o listener de scroll con `useState`).

- **Footer** — `src/components/layout/footer.tsx`: logo, descripción
  (`configuracion.descripcion`), enlaces rápidos, categorías (desde DB),
  redes sociales (`configuracion.facebook/instagram/tiktok`), contacto
  (teléfono/email/dirección), horario, copyright con año dinámico, links de
  Políticas apuntando a `#` (documentado, fuera de alcance).

## 5. Secciones de la landing

`src/components/sections/`, un archivo por sección. Cada una es Server
Component que hace su propia query (mismo patrón que `admin/productos`); la
animación de scroll-reveal se aplica con un wrapper cliente delgado
(`src/components/shared/reveal.tsx`, usa `framer-motion` `whileInView`) que
envuelve al contenido ya renderizado en servidor — evita convertir toda la
sección en client component.

| Sección | Fuente de datos | Notas |
|---|---|---|
| `hero.tsx` | `configuracion` (WhatsApp) | Único `<h1>` de la página; fade-up de texto + parallax leve en `ImagePlaceholder`; botones "Solicitar por WhatsApp" (link `wa.me`) y "Explorar Catálogo" (`/catalogo`) |
| `productos-destacados.tsx` | `productos` where `destacado` AND `activo`, limit 6 | Grid 3 col desktop / 2 tablet, carrusel horizontal en mobile (scroll-snap CSS, sin librería nueva) |
| `categorias.tsx` | `categorias` where `activo`, con conteo de productos por categoría (subquery) | Grid con ícono mapeado por nombre de categoría (mapa estático `nombre → LucideIcon`) |
| `beneficios.tsx` | Estático (6 ítems de SRS §51 — hardcoded, no amerita tabla) | Cards con ícono |
| `como-pedimos.tsx` | Estático (6 pasos de SRS §52) | Timeline horizontal desktop → vertical mobile |
| `galeria.tsx` | `galeria` where `destacado` AND `activo` | Masonry grid (CSS columns), click abre lightbox propio (componente chico, sin librería nueva) |
| `blog.tsx` | `blogPosts` where `publicado` AND `activo`, orderBy `fechaPublicacion desc`, limit 3 | — |
| `testimonios.tsx` | `testimonios` (tabla nueva) — reemplaza SRS §55 | Estrellas renderizadas con ícono `Star` de Lucide relleno/vacío según `estrellas` |
| `cta-final.tsx` | `configuracion` | Botones "Solicitar Cotización" (→ `/catalogo`, no hay form de cotización aún) + WhatsApp |

Orden en `page.tsx`: Hero → ProductosDestacados → Categorias → Beneficios →
ComoPedimos → Galeria → Blog → Testimonios → CTAFinal (Header/Footer los pone
el layout).

## 6. `/catalogo` (básico)

`src/app/(marketing)/catalogo/page.tsx`, Server Component, lee `searchParams`
(`q`, `categoria`). Nueva query `getProductosFiltrados({ q?, categoriaSlug?
})` en `src/lib/db/queries/productos.ts`: `ILIKE` sobre `nombre` y
`descripcionCorta`, join opcional a `categorias` por slug, `where activo =
true`. Filtrado en servidor (no client-side) → URLs compartibles y coherente
con "URLs amigables" (SRS §60). Reutiliza `ProductCard` de la sección
Productos Destacados. Grid responsive 1/2/3/4 columnas. Sin paginación en
esta versión.

## 7. Seed de contenido

`scripts/seed-content.ts` (nuevo, mismo patrón que `scripts/seed-rbac.ts`:
importa `scripts/load-env.ts` primero, antes que cualquier otro import).
Contenido a sembrar:

- 8 categorías reales: Camisas, Tazas, Stickers, Coronas, Bandas, Toppers,
  Papelería, Decoraciones (nombre real, sin `imagenUrl`).
- ~10 productos con texto real de Poppy Crafty (nombre, descripción corta,
  `precioDesde`, `tiempoEntrega`), repartidos entre categorías, la mitad
  `destacado = true`.
- 3 posts de blog (título, resumen, contenido MDX corto, `publicado = true`,
  `fechaPublicacion`).
- 6 piezas de galería (`destacado = true`, sin `imagenUrl`).
- 6 testimonios (`destacado = true`, estrellas variadas 4-5).
- 1 fila de `configuracion`: nombre, slogan, descripción, teléfono/WhatsApp
  placeholder (`+504 0000-0000`), redes (`@poppycrafty`), horario.

No se corre automáticamente — el usuario lo ejecuta (`pnpm tsx
scripts/seed-content.ts` o script equivalente en `package.json`), mismo
criterio que `db:push`/`seed:rbac`.

## Accesibilidad y SEO (transversal, no una sección aparte)

- WCAG 2.2 AA: landmarks semánticos (`<header>`, `<nav>`, `<main>`,
  `<footer>`), focus visible, navegación por teclado en menú mobile y
  lightbox de galería, alt text (`aria-label` en `ImagePlaceholder`, `alt`
  real cuando haya `next/image`).
- Un solo `<h1>` (Hero).
- `generateMetadata` en `page.tsx`: title/description/OG/Twitter Card desde
  `siteConfig` + `configuracion`. JSON-LD `LocalBusiness`/`Organization` con
  datos de `configuracion`.
- Imágenes reales futuras en WebP + lazy loading (`next/image` ya lo hace por
  defecto); los placeholders actuales son CSS puro, no imágenes, así que no
  penalizan LCP.

## Criterios de aceptación

- Landing recorre las 9 secciones + header + footer, con datos reales del
  seed (no placeholders de texto tipo "Lorem ipsum").
- Buscador del header lleva a `/catalogo?q=...` y devuelve resultados reales
  filtrados server-side.
- `pnpm tsc --noEmit` limpio.
- Responsive: mobile/tablet/desktop revisados a mano (Playwright/browser
  manual, ver skill `run` si aplica).
- Paleta y tipografía de marca visibles (no Geist ni grises placeholder en el
  sitio público).
- `docs/DATABASE.md`, `docs/DECISIONS.md`, `docs/CHANGELOG.md`,
  `docs/ROADMAP.md` actualizados reflejando la tabla nueva y el desvío de
  SRS §55.
