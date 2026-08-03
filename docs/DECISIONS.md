# DECISIONS.md

> Registro de decisiones importantes del proyecto Poppy Crafty. Cada vez que se
> tome una decisión de arquitectura, alcance o negocio que no sea obvia releyendo
> el código, se anota aquí. Evita que dentro de tres meses nadie recuerde el
> "por qué".

---

## 2026-08-03 — Consolidación de `docs/` y resolución de conflictos del SRS

Se recibieron 4 documentos de contexto (`docs-context/ContextoBase.md`,
`design_system.md`, `MARKETING_AND_ANALYSIS.md`, `planPoppy.md` — este último de
21,011 líneas, el borrador de `PoppyCraft_SRS.md`) generados en sesiones previas
con otro asistente. Se consolidaron en la carpeta `docs/` que propone el propio
`ContextoBase.md`. Durante la fusión aparecieron conflictos reales que había que
resolver, no solo copiar y pegar.

### 1. Base de datos: tres capítulos contradictorios → uno solo (`DATABASE.md`)

`planPoppy.md` define el modelo de datos **tres veces**, sin que ninguna versión
avise que reemplaza a la anterior:

| Capítulo | Línea | Idioma de tablas | Nivel de detalle |
|---|---|---|---|
| Cap. 6 "Diseño de la Base de Datos" | 6990 | Inglés (`products`, `product_categories`...) | Completo, con RLS |
| Cap. 8 "Arquitectura de la Base de Datos" | 18122 | Inglés (ejemplos: `roles`, `permissions`) | Solo principios — nunca llegó a definir tablas (prometía 8.1–8.14 y corta) |
| Cap. 17 "Diseño de Base de Datos" | 20157 | Español (`productos`, `categorias`...) | Completo, diccionario de datos |

**Decisión:** `docs/DATABASE.md` es ahora la única fuente de verdad del esquema.
Se construyó tomando como base el Cap. 17 (español, alineado con RULES.md §2:
nombres de tabla de negocio en español) y enriqueciéndolo con conceptos del Cap. 6
que el Cap. 17 no cubría pero sí son necesarios: etiquetas de producto,
productos/artículos relacionados, redirecciones SEO, campos de `configuracion`
que faltaban (horario, SEO por defecto). El Cap. 8 no aportó tablas (nunca se
escribieron) pero sí confirmó la intención original de tener un dominio
"Roles y Permisos" — coherente con [[rbac-granular]].

Los capítulos 6, 8 y 17 de `docs/SRS.md` fueron reemplazados por un puntero a
`DATABASE.md` para que no quede una cuarta copia desincronizándose con el tiempo.

**Por qué importa:** si alguien lee `planPoppy.md` tal cual, puede terminar
generando un schema Drizzle con tablas en inglés (Cap. 6/8) y luego otro en
español (Cap. 17) en distintos momentos. Ya pasó parcialmente: el código
placeholder en `src/lib/db/schema/catalogo.ts` usa español (correcto), pero no
coincide en campos con ninguno de los tres capítulos del SRS (tiene `stock` y
`precio` obligatorio, cuando el negocio es 100% personalización bajo pedido, sin
inventario — ver sección siguiente).

### 2. `productos.stock` y `precio` obligatorio no aplican al modelo de negocio

`src/lib/db/schema/catalogo.ts` (código placeholder de la plantilla OB, pensado
para un e-commerce genérico) tiene `stock: integer` y `precio: numeric NOT NULL`.

`ContextoBase.md` y el Cap. 17 del SRS son explícitos: Poppy Crafty **no
representa inventario** (cada producto es personalizado bajo pedido, no hay stock
de unidades) y el precio mostrado es un "precio desde" orientativo, no un precio
final fijo — el precio real sale de la cotización.

**Decisión:** `DATABASE.md` define `productos.precio_desde` (nullable) y **sin**
campo `stock`. El código placeholder actual (`catalogo.ts`) queda documentado como
pendiente de reemplazo — no se tocó en esta sesión porque la tarea era armar
`docs/`, no migrar schema. Ver checklist en `ROADMAP.md`.

### 3. `deleted_at` (soft delete por fecha) vs `activo` (booleano)

El Cap. 17 del SRS usa `deleted_at TIMESTAMPTZ` para soft delete. RULES.md §3.1 y
el código ya existente (`categorias.ts`, `productos.ts` en `catalogo.ts`) usan
`activo: boolean`.

**Decisión:** se sigue la convención ya usada en el código real y en RULES.md:
`activo boolean default true`, no `deleted_at`. Es lo que ya hacen
`deactivateProducto` / `deactivateCategoria` en `src/lib/db/queries/`.

### 4. RBAC: se mantiene exactamente como está en la plantilla (RULES.md §3 + código real)

Al usuario le pareció bien el mecanismo de RBAC ya definido en RULES.md y en
`src/lib/db/schema/rbac.ts` / `src/lib/rbac/permissions.ts` — **no se rediseña**.
Lo único que faltaba era decidir **qué módulos y permisos existen**, en función
del modelo de datos final. Eso se resolvió en `DATABASE.md` §RBAC y debe
reflejarse en `src/lib/rbac/permissions.ts` cuando se implemente cada módulo
(no se tocó el código en esta sesión).

Cambio puntual: la tabla `perfiles` (Cap. 17 del SRS) traía una columna
`rol ENUM(admin, editor)` redundante con el sistema de `user_roles` — se elimina
esa columna en `DATABASE.md`. El rol de un usuario se decide **solo** vía
`user_roles`, nunca vía una columna fija en `perfiles`; si no fuera así, un
usuario podría tener dos fuentes de verdad contradictorias sobre su rol.

### 5. Contradicción de alcance: "panel administrativo NO incluido en V1"

`planPoppy.md` §7 "Alcance" (Parte 1, escrita al inicio del documento) dice
explícitamente `✘ Panel administrativo funcional` como fuera de la Versión 1. Pero
el Capítulo 7 completo del mismo documento (Partes 7.1 a 7.8, miles de líneas)
especifica un panel administrativo funcional completo — dashboard, CRUD de
productos, CRUD de blog, gestión de imágenes, SEO por producto, etc.

**Decisión:** se prioriza el Capítulo 7 (detallado, y coherente con RULES.md, que
exige panel admin CRUD + RBAC desde el día uno en todo proyecto nuevo de OB
Solutions). El panel administrativo **sí** es parte de la V1. La línea de
`docs/SRS.md` §7 se corrigió para no contradecir esto. Ver `ROADMAP.md`.

### 6. Documento de marketing se mantiene como archivo aparte

`MARKETING_AND_ANALYSIS.md` (FODA, benchmark, KPIs, buyer personas, embudo de
conversión) no encajaba limpiamente en ninguno de los 7 archivos que propone
`ContextoBase.md`. Se agregó como `docs/MARKETING.md` en vez de forzarlo dentro
de `SRS.md` — es contenido de negocio, no de producto/UX, y se referencia desde
ahí cuando aplica (SEO, público objetivo, KPIs de éxito).

---

## 2026-08-03 (cont.) — Ejecución de la Fase 0: schema real + RBAC extendido

Se implementó en código lo que `DATABASE.md` dejó documentado.

- **`admin-nav.ts` no se tocó a propósito.** Se agregó el permiso de cada
  módulo nuevo en `permissions.ts` (para que el seed y `requirePermission` ya
  puedan usarse), pero no su link en el sidebar — un link sin página detrás es
  un 404 silencioso. RULES.md §5 ata nav + page + actions + client como una
  unidad por módulo; se prefiere agregar el link cuando el módulo completo
  exista, no antes.
- **Helper `viewEdit()` nuevo en `permissions.ts`**, junto a `fullCrud()` y
  `viewOnly()` que ya existían. `solicitudes`, `mensajes_contacto` y
  `configuracion` no tienen `create` ni `deactivate` con sentido: los dos
  primeros los origina el visitante desde el sitio público (su ciclo de vida
  lo controla la columna `estado`, no un booleano de activo/inactivo
  administrado a mano); `configuracion` es una fila única, no se crea ni se
  desactiva.
- **`precioDesde` usa `z.number()` + `valueAsNumber: true` en el input, no
  `z.coerce.number()`.** Con Zod 4 + `@hookform/resolvers/zod`, `z.coerce`
  hace que el tipo de *entrada* del resolver sea `unknown`, lo cual no
  tipa-checkea contra `useForm<ProductoInput>()` (el tipo de salida). Mismo
  patrón que ya usaba el código original para `precio`/`stock`, se mantiene.
- Se corrió `pnpm db:generate` (permitido por RULES.md §6, no toca la base de
  datos real) — 27 tablas, `drizzle/migrations/0000_free_eternity.sql`. **No**
  se corrió `db:push`, `db:migrate` ni `seed:rbac` — quedan para que el usuario
  los ejecute después de revisar el SQL generado.

## 2026-08-03 (cont.) — `pnpm dev` usa Webpack, no Turbopack

`next dev` (Turbopack, default en Next 16) falla en esta máquina Windows con
`Error: EPERM: operation not permitted, rename '...manifest.js.tmp.xxx' -> '...manifest.js'`
apenas se compila una segunda ruta — típico de Turbopack en Windows chocando
con un antivirus/indexador que bloquea momentáneamente el archivo temporal
durante el rename atómico. Pasa incluso con `.next` recién borrado, no es cache
corrupta.

**Decisión:** `package.json` → `"dev": "next dev --webpack"` (flag documentado
en `node_modules/next/dist/docs/01-app/03-api-reference/06-cli/next.md`, según
manda `AGENTS.md`). Con Webpack no aparece el error.

**Pendiente opcional (no bloqueante):** agregar excepción de Windows Defender
para la carpeta del proyecto (o `.next/`) para poder volver a Turbopack — más
rápido, pero requiere permisos de administrador, no se hizo en esta sesión.

También: `pnpm dev` puede dejar procesos `node` huérfanos corriendo si se
interrumpe abruptamente (Ctrl+C brusco, cierre de terminal) — el proceso hijo de
Turbopack/Webpack no siempre muere con el padre en Windows. Si `db:push` o un
siguiente `pnpm dev` fallan por archivos bloqueados en `.next`, revisar
`Get-Process node` / Task Manager por procesos `next dev` viejos antes de asumir
que es un bug nuevo.

## Plantilla para futuras entradas

```md
## AAAA-MM-DD — Título corto de la decisión

Qué se decidió y por qué. Qué alternativa se descartó y por qué.
```
