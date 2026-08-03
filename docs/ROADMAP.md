# ROADMAP.md

## Fase 0 — Pendiente antes de empezar a codear

Estado al 2026-08-03:

- [x] `package.json` (`name`), `src/config/site.ts` (nombre, descripción, URL,
      locale) actualizados con los datos reales de Poppy Crafty. La `url` es
      un placeholder (`poppycrafty.com`) hasta comprar el dominio real.
- [x] `src/config/colors.ts` actualizado con la paleta real de
      `DESIGN_SYSTEM.md` (`#F8BBD9` primary / `#F48FB1` hover / `#F7F3EF`
      secondary + colores de feedback). **Pendiente:** reflejar estos mismos
      valores en `@theme` de `src/app/globals.css` (RULES.md §8 — `colors.ts`
      es la fuente canónica TS, pero el build de Tailwind v4 lee de
      `globals.css`).
- [x] `src/lib/db/schema/catalogo.ts` reemplazado por el modelo real de
      `DATABASE.md` (sin `stock`, `precio_desde` nullable) y dividido en
      dominios: `catalogo.ts`, `blog.ts`, `galeria.ts`, `clientes.ts`,
      `sitio.ts`, `usuarios.ts` (nuevo, `perfiles` sin columna `rol`).
      `rbac.ts` y `auditorias.ts` no se tocaron. 27 tablas en total —
      `pnpm db:generate` corrido, SQL en `drizzle/migrations/0000_free_eternity.sql`.
      `tsc --noEmit` limpio.
- [x] Módulo de referencia `admin/productos` (validations, queries, actions,
      client, page) actualizado para compilar contra el schema nuevo
      (`precioDesde`, `descripcionCorta`, `tiempoEntrega`, sin `stock`).
- [x] `src/lib/rbac/permissions.ts` extendido con `blog_categorias`, `blog`,
      `galeria`, `faq` (CRUD completo) y `solicitudes`, `mensajes_contacto`,
      `configuracion` (nuevo helper `viewEdit` — sin create/deactivate, ver
      razón en el propio archivo).
- [ ] **`src/config/admin-nav.ts` NO se tocó todavía a propósito** — agregar un
      link ahí sin que exista la página detrás produce un 404 en el sidebar.
      Se agrega módulo por módulo, junto con su `page.tsx`/`actions.ts`, no
      antes. Ver Fase 1.
- [ ] El usuario corre `pnpm db:push` o `pnpm db:migrate` (revisando antes
      `drizzle/migrations/0000_free_eternity.sql`) — Claude no lo corre
      (RULES.md §6, README paso 5).
- [ ] Después de aplicar la migración: `pnpm seed:rbac` (siembra el catálogo de
      permisos ya actualizado) — también lo corre el usuario.
- [ ] Categorías: `src/lib/validations/categorias.ts` sigue con solo
      `nombre`/`slug` — no bloquea nada (no hay página admin de categorías
      todavía), pero al construirla hay que sumarle `descripcion`,
      `imagenUrl`, `orden` (ya existen en el schema).

## Fase 1 — V1 (alcance de este proyecto)

Ver `PROJECT_CONTEXT.md` §"Alcance de la Versión 1" y `SRS.md` para el detalle
página por página.

1. Sitio público: Inicio, Nosotros, Productos (catálogo + filtros + búsqueda),
   Producto individual, Blog, Artículo, Galería, Contacto, FAQ, Políticas, 404.
   - [x] Inicio (landing completa, ver `CHANGELOG.md` y spec en
     `docs/superpowers/specs/2026-08-03-landing-page-design.md`).
   - [x] Productos: catálogo básico (`/catalogo`) con búsqueda y filtro por
     categoría, sin paginación.
   - [ ] Producto individual, Nosotros, Artículo de blog, Galería (página
     propia), Contacto, FAQ, Políticas, 404 — pendientes.
2. Panel administrativo: dashboard, CRUD de categorías/productos (con imágenes,
   opciones, SEO), CRUD de blog (categorías, posts, editor MDX), CRUD de
   galería, gestión de solicitudes/cotizaciones y mensajes de contacto,
   configuración del sitio, gestión de usuarios y roles, auditoría (solo
   lectura).
3. Integraciones: WhatsApp, Instagram, Facebook, TikTok, Google Maps, Google
   Analytics 4, Google Search Console.
4. SEO técnico completo (sitemap, robots.txt, metadata, Open Graph, datos
   estructurados) — prioridad alta, es el canal de adquisición principal según
   `MARKETING.md`.

**Fuera de la V1** (documentado pero no implementado): pagos en línea, carrito
de compras, inventario automático, facturación.

## Fase 2 — Comercio electrónico (futuro, no priorizado)

Preparado en el modelo de datos (`DATABASE.md` §"Dominio futuro") pero no
diseñado a nivel de UX todavía:

- Carrito de compras y checkout.
- Pagos en línea.
- Inventario (aplicaría solo a productos que dejen de ser 100% bajo pedido).
- Cupones y promociones.
- Wishlist / favoritos.
- Seguimiento de pedidos, panel para clientes.
- Newsletter.
- Cotizador automático / personalizador de productos en vivo.

## Métricas de éxito

Ver `MARKETING.md` §"Indicadores (KPIs)" — visitas mensuales, solicitudes de
cotización, tasa de conversión, crecimiento en redes.
