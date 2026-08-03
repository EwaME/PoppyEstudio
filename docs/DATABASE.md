# DATABASE.md

> Fuente única de verdad del modelo de datos de Poppy Crafty. Reemplaza a los
> tres capítulos de base de datos que traía `SRS.md` (Cap. 6, Cap. 8 y Cap. 17
> del borrador original) — ver `DECISIONS.md` (2026-08-03) para el porqué de la
> fusión y qué se descartó de cada uno.
>
> Motor: **PostgreSQL** vía **Supabase**. ORM: **Drizzle** (`drizzle-orm/postgres-js`),
> por RULES.md §6. Todo campo de fecha usa `TIMESTAMPTZ`. Toda clave primaria es
> `UUID` generada por default (`defaultRandom()` en Drizzle).

---

## Convenciones (obligatorias, sin excepción)

- **Nombres de tabla y columna de negocio → español** (`productos`, `categorias`,
  `blog_posts`, `precio_desde`). Coherente con RULES.md §2.
- **Nombres de tabla del mecanismo RBAC → inglés** (`roles`, `permissions`,
  `role_permissions`, `user_roles`). Son infraestructura técnica genérica
  reutilizable entre proyectos de OB Solutions, no entidades de negocio de Poppy
  — así ya está implementado en `src/lib/db/schema/rbac.ts`, no se cambia.
- **`auditorias`** (tabla de auditoría) va en español — así ya existe en
  `src/lib/db/schema/auditorias.ts`.
- **Soft delete = `activo: boolean default true`**, nunca `deleted_at`. Desactivar
  reemplaza a eliminar en todo el catálogo (RULES.md §3.1). Esto es distinto de
  campos de estado editorial como `publicado` (blog) o `estado` (solicitudes),
  que son un concepto aparte: un post puede estar `activo = true` y
  `publicado = false` (borrador visible solo en el panel).
  - Los campos VARCHAR(n) con longitud del SRS original se dejan como texto libre
    (`text()` en Drizzle, igual que el código ya existente) — el límite de
    longitud se aplica en el schema Zod de `lib/validations/`, no en la columna
    (RULES.md §7: la validación de negocio vive en Zod, no en el tipo de columna).
  - Slugs siempre `UNIQUE`, generados a partir del nombre/título.
  - Ninguna tabla tiene borrado físico salvo procesos administrativos puntuales
    (ej. purgar mensajes de contacto archivados hace más de un año — no es un
    requerimiento actual, solo una posibilidad futura).

---

## Diagrama de módulos

```text
CATÁLOGO
├── categorias
├── productos
├── producto_imagenes
├── producto_opciones
├── producto_etiquetas
├── producto_etiqueta_relaciones
└── producto_relacionados

BLOG
├── blog_categorias
├── blog_posts
├── blog_tags
├── blog_post_tags
└── blog_relacionados

GALERÍA
└── galeria

CLIENTES / SOLICITUDES
├── clientes
├── solicitudes
├── solicitud_adjuntos
├── cotizaciones
└── mensajes_contacto

SITIO
├── configuracion
├── faq
└── redirecciones_seo

ADMINISTRACIÓN (RBAC + auditoría — ya implementado en src/lib/db/schema/)
├── roles
├── permissions
├── role_permissions
├── user_roles
├── perfiles
└── auditorias
```

---

## Módulo Catálogo

### `categorias`

| Campo | Tipo | Restricciones | Descripción |
|---|---|---|---|
| id | uuid | PK | |
| nombre | text | NOT NULL, UNIQUE | |
| slug | text | NOT NULL, UNIQUE | URL amigable |
| descripcion | text | NULL | |
| imagen_url | text | NULL | |
| orden | integer | DEFAULT 0 | orden de visualización |
| activo | boolean | DEFAULT true | |
| created_at | timestamptz | NOT NULL | |
| updated_at | timestamptz | NOT NULL | |

Reglas: no se elimina una categoría con productos asociados (`onDelete: 'restrict'`
en la FK de `productos.categoria_id`, ya así en `catalogo.ts`). Categorías
inactivas no aparecen en el sitio público ni en el sidebar de navegación.

### `productos`

| Campo | Tipo | Restricciones | Descripción |
|---|---|---|---|
| id | uuid | PK | |
| categoria_id | uuid | FK → categorias, RESTRICT | |
| nombre | text | NOT NULL | |
| slug | text | NOT NULL, UNIQUE | |
| descripcion_corta | text | NULL | resumen para tarjetas |
| descripcion | text | NULL | información completa |
| **precio_desde** | numeric(10,2) | NULL | precio orientativo, no final — **sin campo `stock`, no aplica inventario** |
| tiempo_entrega | text | NULL | ej. "5-7 días hábiles" |
| destacado | boolean | DEFAULT false | |
| activo | boolean | DEFAULT true | |
| seo_title | text | NULL | |
| seo_description | text | NULL | |
| created_at | timestamptz | NOT NULL | |
| updated_at | timestamptz | NOT NULL | |

> Reemplaza a `src/lib/db/schema/catalogo.ts` actual, que tiene `stock` y
> `precio NOT NULL` heredados del placeholder genérico de la plantilla. Ver
> checklist de migración en `ROADMAP.md`.

Índices: `slug`, `categoria_id`, `activo`, `destacado`.

### `producto_imagenes`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| producto_id | uuid | FK → productos, CASCADE |
| url | text | NOT NULL |
| alt | text | NULL |
| principal | boolean | DEFAULT false |
| orden | integer | DEFAULT 0 |
| created_at | timestamptz | NOT NULL |

Regla: solo una imagen por producto puede tener `principal = true` (se aplica en
la Server Action, no a nivel de constraint SQL).

### `producto_opciones`

Opciones de personalización (color, talla, material...). No es inventario, solo
catálogo de configuraciones seleccionables.

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| producto_id | uuid | FK → productos, CASCADE |
| nombre | text | NOT NULL (ej. "Color") |
| valor | text | NOT NULL (ej. "Rosa pastel") |
| incremento_precio | numeric(10,2) | DEFAULT 0 |
| orden | integer | DEFAULT 0 |
| created_at | timestamptz | NOT NULL |

### `producto_etiquetas` y `producto_etiqueta_relaciones`

Etiquetas libres para filtros de catálogo (ocasión, tipo de personalización —
ver especificación de la página Productos: filtros por categoría/ocasión/precio).

```
producto_etiquetas (id, nombre, slug UNIQUE, created_at)
producto_etiqueta_relaciones (producto_id FK, etiqueta_id FK)  -- PK compuesta
```

### `producto_relacionados`

Curación manual de "productos relacionados" en la página de producto individual.

```
producto_relacionados (producto_id FK, producto_relacionado_id FK)  -- PK compuesta
```

---

## Módulo Blog

### `blog_categorias`

Mismo shape que `categorias` (nombre, slug, descripcion, orden, activo,
timestamps).

### `blog_posts`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| categoria_id | uuid | FK → blog_categorias |
| autor_id | uuid | FK → perfiles, NULL |
| titulo | text | NOT NULL |
| slug | text | NOT NULL, UNIQUE |
| resumen | text | NULL |
| contenido | text | NOT NULL — MDX |
| imagen_portada | text | NULL |
| tiempo_lectura | integer | NULL — minutos, calculado |
| publicado | boolean | DEFAULT false — estado editorial (borrador/publicado) |
| fecha_publicacion | timestamptz | NULL |
| seo_title | text | NULL |
| seo_description | text | NULL |
| activo | boolean | DEFAULT true — soft delete, independiente de `publicado` |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

Índices: `slug`, `categoria_id`, `publicado`, `fecha_publicacion`.

### `blog_tags` / `blog_post_tags` / `blog_relacionados`

Mismo patrón que el módulo Catálogo: etiquetas M:N y relacionados manuales.

```
blog_tags (id, nombre UNIQUE, slug UNIQUE, created_at)
blog_post_tags (post_id FK, tag_id FK)  -- PK compuesta
blog_relacionados (post_id FK, post_relacionado_id FK)  -- PK compuesta
```

---

## Módulo Galería

### `galeria`

Portafolio visual simple (no requiere agrupar en álbumes — un registro = una
pieza mostrada en el grid, según la especificación de la página Galería).

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| titulo | text | NOT NULL |
| slug | text | UNIQUE |
| descripcion | text | NULL |
| imagen_url | text | NOT NULL |
| categoria | text | NULL — filtro simple, no FK |
| destacado | boolean | DEFAULT false |
| activo | boolean | DEFAULT true |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

---

## Módulo Clientes / Solicitudes

Dos flujos de entrada distintos, según `ContextoBase.md`: **formulario de
contacto** (consulta general) y **formulario de pedido/cotización** (atado a un
producto). Se modelan como dos tablas separadas porque tienen ciclos de vida
distintos.

### `clientes`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| nombre | text | NOT NULL |
| telefono | text | NULL |
| email | text | NULL |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

### `solicitudes` (pedido de cotización)

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| cliente_id | uuid | FK → clientes |
| producto_id | uuid | FK → productos, NULL |
| asunto | text | NOT NULL |
| descripcion | text | NOT NULL |
| estado | enum `solicitud_estado` | NOT NULL, DEFAULT 'pendiente' |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

`solicitud_estado`: `pendiente`, `en_revision`, `cotizada`, `aceptada`,
`rechazada`, `finalizada`.

### `solicitud_adjuntos`

Imágenes de referencia que el cliente adjunta al pedir cotización.

```
solicitud_adjuntos (id, solicitud_id FK, url, nombre NULL, created_at)
```

### `cotizaciones`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| solicitud_id | uuid | FK → solicitudes, UNIQUE |
| subtotal | numeric(10,2) | |
| descuento | numeric(10,2) | DEFAULT 0 |
| total | numeric(10,2) | |
| observaciones | text | NULL |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

### `mensajes_contacto` (formulario de contacto general, sin producto asociado)

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| nombre | text | NOT NULL |
| email | text | NOT NULL |
| telefono | text | NULL |
| asunto | text | NULL |
| mensaje | text | NOT NULL |
| estado | enum `mensaje_estado` | DEFAULT 'nuevo' |
| created_at | timestamptz | NOT NULL |

`mensaje_estado`: `nuevo`, `leido`, `respondido`, `archivado`.

---

## Módulo Sitio

### `configuracion`

Fila única (constraint de aplicación: la Server Action de update nunca inserta,
solo actualiza el registro existente).

| Campo | Tipo |
|---|---|
| id | uuid |
| nombre_negocio | text |
| slogan | text |
| descripcion | text |
| telefono | text |
| email | text |
| direccion | text |
| horario | text |
| facebook / instagram / tiktok / whatsapp | text |
| logo_url / favicon_url | text |
| seo_title_default | text |
| seo_description_default | text |
| updated_at | timestamptz |

### `faq`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| producto_id | uuid | FK → productos, NULL — NULL = FAQ general del sitio |
| pregunta | text | NOT NULL |
| respuesta | text | NOT NULL |
| orden | integer | DEFAULT 0 |
| publicado | boolean | DEFAULT true |
| created_at | timestamptz | NOT NULL |
| updated_at | timestamptz | NOT NULL |

### `redirecciones_seo`

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| url_anterior | text | NOT NULL, UNIQUE |
| url_nueva | text | NOT NULL |
| codigo_estado | integer | DEFAULT 301 |
| activo | boolean | DEFAULT true |
| created_at | timestamptz | NOT NULL |

---

## Módulo Administración — RBAC (ya implementado, no se modifica el mecanismo)

Ya existe en `src/lib/db/schema/rbac.ts` y `auditorias.ts`. Se documenta aquí para
que quede completo el diccionario de datos, y se ajusta **un solo campo**
(`perfiles.rol` se elimina — ver `DECISIONS.md` punto 4).

```
roles              (id, nombre, descripcion, created_at)
permissions        (id, slug, modulo, accion, label)
role_permissions   (role_id, permission_id)             -- PK compuesta
user_roles         (user_id, role_id)                   -- PK compuesta, user_id → auth.users.id
```

### `perfiles`

1:1 con `auth.users` de Supabase.

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK, FK → auth.users |
| nombres | text | |
| apellidos | text | |
| telefono | text | NULL |
| avatar_url | text | NULL |
| activo | boolean | DEFAULT true |
| created_at | timestamptz | |
| updated_at | timestamptz | |

**Sin columna `rol`.** El rol de un usuario se define únicamente a través de
`user_roles` — tener una columna `rol` fija en `perfiles` además de la tabla
`user_roles` crearía dos fuentes de verdad que podrían contradecirse.

### `auditorias`

Ya implementado en `src/lib/db/schema/auditorias.ts`, sin cambios:

```
auditorias (id, usuario_id, accion, tabla, registro_id, entidad NULL, antes jsonb, despues jsonb, created_at)
```

---

## Catálogo de permisos (RBAC) según el modelo de datos final

RULES.md §3.1 fija el mecanismo (`slug = modulo.accion`, acciones estándar
`view/create/edit/deactivate`). Lo que faltaba definir era **qué módulos
existen**, ahora que el modelo de datos está cerrado. Extiende el catálogo real
de `src/lib/rbac/permissions.ts` (no se edita el archivo en esta sesión, queda
como pendiente en `ROADMAP.md`):

| Módulo | Acciones | Tabla(s) que gatea | Nota |
|---|---|---|---|
| `dashboard` | view | — | ya existe |
| `categorias` | view/create/edit/deactivate | `categorias` | ya existe |
| `productos` | view/create/edit/deactivate | `productos`, `producto_imagenes`, `producto_opciones`, `producto_etiquetas`, `producto_relacionados` | ya existe |
| `blog_categorias` | view/create/edit/deactivate | `blog_categorias` | nuevo |
| `blog` | view/create/edit/deactivate | `blog_posts`, `blog_tags`, `blog_relacionados` | nuevo |
| `galeria` | view/create/edit/deactivate | `galeria` | nuevo |
| `solicitudes` | view/edit | `clientes`, `solicitudes`, `solicitud_adjuntos`, `cotizaciones` | nuevo — **sin** `create`/`deactivate`: las crea el cliente desde el sitio público, su ciclo de vida lo controla `estado`, no se desactivan |
| `mensajes_contacto` | view/edit | `mensajes_contacto` | nuevo — mismo caso: sin create/deactivate |
| `configuracion` | view/edit | `configuracion`, `faq`, `redirecciones_seo` | nuevo — fila única, sin create/deactivate |
| `usuarios` | view/create/edit/deactivate | `perfiles` | ya existe |
| `roles` | view/create/edit/deactivate | `roles`, `permissions`, `role_permissions`, `user_roles` | ya existe |
| `auditorias` | view | `auditorias` | ya existe, solo lectura por diseño (RULES.md §4) |

`permissions.ts` solo tiene los helpers `fullCrud()` y `viewOnly()`. Los módulos
`solicitudes`, `mensajes_contacto` y `configuracion` necesitan un tercer patrón
view+edit sin create/deactivate — se recomienda agregar un helper `viewEdit()`
análogo a los otros dos cuando se implemente cada módulo.

Roles semilla sugeridos (reemplazan al enum `admin/editor` de `perfiles.rol` del
SRS original, ahora vía `role_permissions`):

- **Administrador** — todos los permisos (`ALL_PERMISSION_SLUGS`).
- **Editor** — `view/create/edit` de `blog`, `blog_categorias`, `galeria`,
  `faq`; sin acceso a `configuracion`, `usuarios`, `roles` ni `auditorias`.

---

## Dominio futuro (documentado, no implementado en V1)

Preparación mencionada en `ContextoBase.md` ("funcionalidades premium") y en los
tres capítulos de BD originales. No se crean tablas ahora — se listan para que
quien implemente e-commerce más adelante sepa dónde enganchar sin rediseñar lo
existente:

`carrito`, `pedidos`, `pedido_items` (→ `productos`, `producto_opciones`),
`pagos`, `cupones`, `wishlist` (→ `perfiles`/`clientes` + `productos`),
`notificaciones`, `newsletter_suscriptores`, portal de cliente (extensión de
`clientes` con auth propia).

---

## Row Level Security (RLS)

Principio general (RULES.md §7 checklist, punto "RLS activo como segunda capa"):

- Lectura pública: `categorias`, `productos`, `producto_imagenes`,
  `producto_opciones`, `blog_categorias`, `blog_posts` (solo `publicado = true`
  y `activo = true`), `blog_tags`, `galeria` (solo `activo = true`), `faq`
  (solo `publicado = true`), `configuracion`.
- Escritura pública controlada (INSERT sin SELECT): `clientes`, `solicitudes`,
  `solicitud_adjuntos`, `mensajes_contacto` — un visitante puede crear una
  solicitud o mensaje, pero no leer las de otros.
- Todo lo demás (incluyendo `cotizaciones`, `auditorias`, `roles`,
  `permissions`, `role_permissions`, `user_roles`, `perfiles`,
  `redirecciones_seo`): solo usuarios autenticados con el permiso
  correspondiente — RLS es la segunda capa, el guard real es
  `requirePermission`/`requirePagePermission` en el código (RULES.md §7).
