# CHANGELOG.md

## 2026-08-03

- Se consolidó `docs-context/` (ContextoBase.md, design_system.md,
  MARKETING_AND_ANALYSIS.md, planPoppy.md — 21,011 líneas) en la carpeta oficial
  `docs/` propuesta desde el inicio del proyecto.
- Se resolvieron 3 versiones contradictorias del modelo de base de datos
  (capítulos 6, 8 y 17 del SRS original) en un único `DATABASE.md`.
- Se definió el catálogo de permisos RBAC (módulos y acciones) en función del
  modelo de datos final, siguiendo el mecanismo ya implementado en
  `src/lib/db/schema/rbac.ts` y RULES.md §3 — sin rediseñar el mecanismo.
- Se detectó y documentó (sin corregir código) que el schema placeholder actual
  (`src/lib/db/schema/catalogo.ts`) no coincide con el modelo de negocio real
  (tiene `stock`/`precio` obligatorio; Poppy Crafty no maneja inventario). Ver
  `DECISIONS.md` y checklist en `ROADMAP.md`.
- No se inició desarrollo de código ni se corrieron migraciones en esta primera
  mitad de la sesión — el repo seguía siendo la plantilla base de OB Solutions
  sin personalizar.
- **Segunda mitad de la sesión:** se ejecutó la Fase 0 completa del roadmap.
  `package.json`, `site.ts` y `colors.ts` actualizados con datos reales de
  Poppy Crafty. Schema de `src/lib/db/schema/` reemplazado por el modelo de
  `DATABASE.md` (27 tablas, sin `stock`, `precio_desde` nullable, `perfiles`
  sin columna `rol`), dividido en `catalogo.ts`, `blog.ts`, `galeria.ts`,
  `clientes.ts`, `sitio.ts`, `usuarios.ts`. Módulo de referencia
  `admin/productos` actualizado para compilar contra el nuevo schema.
  `src/lib/rbac/permissions.ts` extendido con los módulos nuevos y el helper
  `viewEdit`. `pnpm db:generate` corrido (`drizzle/migrations/0000_free_eternity.sql`,
  no aplicado). `tsc --noEmit` limpio. `admin-nav.ts` deliberadamente sin
  tocar todavía (se actualiza módulo por módulo junto con su página, ver
  `ROADMAP.md`). Falta que el usuario corra `db:push`/`db:migrate` y
  `seed:rbac`.

## 2026-08-03 (cont.)

- **Landing page real construida**, reemplazando el placeholder de la
  plantilla: Header, Hero, Productos Destacados, Categorías, Beneficios,
  Cómo Realizamos tu Pedido, Galería, Blog, Testimonios (reemplaza el feed de
  redes sociales de SRS §55, ver `DECISIONS.md`), CTA Final, Footer. Paleta y
  tipografía de marca (Poppins) aplicadas solo al grupo `(marketing)`.
  Framer Motion agregado para scroll-reveal y parallax del Hero.
- Página `/catalogo` básica (búsqueda + filtro por categoría, sin
  paginación).
- Tabla nueva `testimonios` (28 tablas en total), permiso RBAC agregado,
  migración generada (no aplicada — pendiente `db:push` + `seed:rbac` del
  usuario).
- Script `scripts/seed-content.ts` (`pnpm seed:content`) con contenido de
  ejemplo: 8 categorías, 10 productos, 3 posts de blog, 6 piezas de galería,
  6 testimonios y la fila de `configuracion` (datos de contacto placeholder,
  marcados como ficticios).
