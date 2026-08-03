# Reglas de Arquitectura — Plantilla OB Solutions

Este documento es la fuente de verdad para todo proyecto web nuevo de OB Solutions
(sistemas CRUD de administracion + landing/catalogo publico). Nace del analisis de
El Asador, OBF-Portal y OB-urbano-style: consolida los patrones que funcionaron en
produccion en los tres.

---

## 0. Stack

| Capa | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI runtime | React 19 |
| Lenguaje | TypeScript (strict) |
| Estilos | Tailwind CSS v4 (`@theme` en `globals.css`) |
| Componentes | shadcn/ui (base Radix, preset Nova) — copiados a `src/components/ui/`, no dependencia externa |
| Base de datos | PostgreSQL vía Supabase |
| ORM | Drizzle ORM (`drizzle-orm/postgres-js`) |
| Auth | Supabase Auth (`@supabase/ssr`) |
| Validacion | Zod |
| Forms | react-hook-form + `@hookform/resolvers/zod` |
| Data fetching cliente | TanStack Query |
| Tablas | TanStack Table (cuando la tabla necesita sort/filter/paginacion client-side) |
| Estado global cliente | Zustand (carrito, favoritos, filtros persistentes de UI) |
| Notificaciones | sonner |
| Iconos | lucide-react |
| Gestor de paquetes | pnpm |

**Por que este stack:** es el que ya corre en produccion en los tres proyectos de
referencia. No se evalua alternativa por proyecto — el costo de aprender un stack
nuevo por cliente supera el beneficio. Excepciones solo si el cliente exige un
requisito tecnico incompatible (raro).

---

## 1. Estructura de Carpetas

```
src/
├── app/
│   ├── (auth)/                 # login, registro, recuperar password — sin sidebar
│   ├── (admin)/admin/          # panel CRUD, un folder por modulo de negocio
│   │   └── [modulo]/
│   │       ├── page.tsx            # Server Component: guard + fetch + delega a client
│   │       ├── [modulo]-client.tsx # Client Component: tabla, modales, formularios
│   │       ├── actions.ts          # Server Actions: auth guard + zod + query + audit
│   │       └── loading.tsx         # skeleton
│   ├── (marketing)/             # landing publica, catalogo — sin auth
│   ├── auth/callback/           # exchangeCodeForSession de Supabase
│   └── api/                     # route handlers (webhooks, integraciones externas)
├── components/
│   ├── ui/                      # shadcn — no editar a mano, regenerar con `pnpm dlx shadcn add`
│   ├── admin/                   # sidebar, shell, tablas reutilizables del panel
│   ├── auth/
│   ├── layout/                  # navbar, footer del sitio publico
│   └── marketing/
├── config/
│   ├── site.ts                  # metadata SEO base
│   ├── colors.ts                # paleta de marca (fuente canonica TS)
│   └── admin-nav.ts             # items del sidebar admin + permiso que gatea cada uno
├── hooks/                       # custom hooks de cliente
├── lib/
│   ├── db/
│   │   ├── schema/               # una tabla (o grupo cohesivo) = un archivo
│   │   ├── queries/               # funciones de consulta por entidad, nunca SQL crudo
│   │   └── index.ts               # instancia de conexion Drizzle
│   ├── supabase/{client,server,admin}.ts
│   ├── rbac/                     # permissions.ts, require-permission.ts, require-page-permission.ts, get-user-permissions.ts
│   ├── audit/log-audit.ts
│   ├── validations/               # un schema Zod por entidad
│   ├── helpers/                   # funciones puras reutilizables
│   └── utils.ts                   # cn() (clsx + tailwind-merge)
├── services/                     # logica de negocio compleja que no cabe en actions.ts
├── store/                        # zustand
├── types/                        # ActionResult<T>, PaginatedResult<T>, tipos globales
└── proxy.ts                      # reemplaza middleware.ts en Next 16 — refresca sesion Supabase
```

**Regla de dependencias (sin ciclos):**
```
components → hooks → services → lib/db → schema
                  ↘ lib/helpers ↗
actions.ts (route-local) → lib/rbac, lib/validations, lib/db/queries, lib/audit
```

---

## 2. Idioma

- **Rutas, nombres de tabla, columnas, mensajes al usuario:** español (`categorias`,
  `productos`, `activo`, "Correo o contraseña incorrectos"). Coherente con el
  mercado hondureño/latam y con SEO en español.
- **Codigo interno** (nombres de función, tipos, variables): inglés (`createCategoria`
  se permite en español porque nombra una entidad de dominio; pero `getUserPermissions`,
  `ActionResult`, `requirePermission` van en inglés — son infraestructura, no dominio).
- Regla practica: si el nombre describe **una entidad de negocio del cliente**, va en
  español. Si describe **un mecanismo tecnico genérico reutilizable entre proyectos**,
  va en inglés.

---

## 3. RBAC Granular (obligatorio en todo proyecto)

Cada proyecto nuevo sale con el sistema de permisos ya armado, no se decide caso por
caso. Es mas codigo inicial pero evita reescribir el mismo mecanismo — probado en
produccion en OB-urbano-style.

### 3.1 Modelo

```
roles              (id, nombre, descripcion)
permissions        (id, slug, modulo, accion, label)   -- slug: "modulo.accion"
role_permissions   (role_id, permission_id)             -- N:M
user_roles         (user_id, role_id)                   -- user_id referencia auth.users.id
```

- **Slug** = `<modulo>.<accion>`. Acciones estandar: `view` (gatea el link del sidebar
  y el acceso a la pagina), `create`, `edit`, `deactivate`.
- **No existe borrado duro.** Desactivar (`activo: false`) reemplaza a eliminar en
  todo el catalogo — mantiene integridad referencial e historial de auditoria.
- El catalogo vive en `src/lib/rbac/permissions.ts` (codigo, no en la DB directamente)
  y se siembra con `pnpm seed:rbac`. Agregar un permiso nuevo = agregarlo ahi y
  re-sembrar (usa `onConflictDoUpdate`, es idempotente).

### 3.2 Guards

- **`requirePermission(slug)`** — usar en Server Actions y Route Handlers. No lanza
  excepciones: devuelve `{ ok: true, userId }` o `{ ok: false, error }`. El caller
  decide el flujo con un `if`.
- **`requirePagePermission(slug)`** — usar en `page.tsx` de rutas admin (Server
  Component). Redirige a `/login` si no hay sesion, a `/admin/sin-acceso` si falta el
  permiso. Devuelve `{ userId, permissions }` — el set completo se pasa al client
  component para gatear botones individuales (`can('productos.edit')`).

### 3.3 Sidebar dinamico

`src/config/admin-nav.ts` define cada link con su `permission` requerido. El
`AdminSidebar` filtra por el set de permisos del usuario — nadie ve un link a una
seccion que no puede abrir.

---

## 4. Audit Log (obligatorio en toda mutacion)

Toda Server Action que crea, edita, desactiva o activa un registro llama a
`logAudit(userId, accion, tabla, registroId, { entidad, antes, despues })` **despues**
de la mutacion exitosa, antes del `revalidatePath`.

- `accion` en mayusculas, snake-implicito: `CREAR_PRODUCTO`, `EDITAR_CATEGORIA`,
  `DESACTIVAR_USUARIO`.
- `antes`/`despues` son objetos parciales (solo los campos que cambiaron o son
  relevantes para soporte), no el registro completo.
- `logAudit` **nunca lanza** — un fallo de auditoria no debe tumbar la accion
  principal, solo se loguea el error en consola.
- La pagina `/admin/auditorias` (permiso `auditorias.view`, sin `create/edit`) lista
  el historial — es de solo lectura por diseño.

---

## 5. Patron de Modulo CRUD

Cada entidad de negocio (categorias, productos, usuarios...) sigue exactamente esta
forma. Es mecanico a proposito — la ventaja es que cualquier dev del equipo (o Claude
en una sesion futura) reconoce el patron sin tener que releer el proyecto entero.

```
app/(admin)/admin/[modulo]/
├── page.tsx              # 1) requirePagePermission('modulo.view')
│                         # 2) fetch paralelo (Promise.all) de las queries necesarias
│                         # 3) delega render a [modulo]-client.tsx
├── [modulo]-client.tsx   # 'use client' — tabla (shadcn Table o TanStack Table),
│                         # modal de crear/editar con react-hook-form + zodResolver,
│                         # gating de botones con permissions.includes(slug)
├── actions.ts            # 'use server' — por cada mutacion:
│                         #   requirePermission(slug) → if (!auth.ok) return error
│                         #   schema.safeParse(input) → if (!success) return error
│                         #   query de lib/db/queries/
│                         #   logAudit(...)
│                         #   revalidatePath('/admin/modulo')
│                         #   return ActionResult
└── loading.tsx           # Skeleton mientras carga el Server Component
```

Ver implementacion de referencia completa en `src/app/(admin)/admin/productos/`.

**Tipo de retorno de toda Server Action:**
```ts
// src/types/index.ts
export type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string };
```

---

## 6. Base de Datos — Drizzle

- **Una tabla (o grupo cohesivo de tablas relacionadas) = un archivo** en
  `lib/db/schema/`. Se re-exporta todo desde `schema/index.ts`.
- **Queries siempre en `lib/db/queries/`, nunca SQL crudo en componentes ni en
  actions.ts.** Las actions llaman funciones de queries; las queries son las unicas
  que importan `db` y el schema.
- **Prohibido interpolar strings en SQL crudo.** Drizzle parametriza automaticamente;
  si hace falta `sql\`...\`` para algo puntual, usar siempre bind params, nunca
  concatenacion.
- Conexion: `postgres-js` contra el pooler de Supabase (puerto 6543 en runtime,
  puerto directo 5432 para migraciones de `drizzle-kit`).
- **Migraciones son manuales:** Claude genera el SQL (`drizzle-kit generate`) pero
  **nunca ejecuta `db:migrate` ni `db:push` contra la base real** — el usuario corre
  el comando el mismo tras revisar el SQL generado.

---

## 7. Seguridad — Validacion de Inputs

**Todo input de usuario pasa por un schema Zod antes de tocar la base de datos.**
Sin excepcion, ni siquiera en un endpoint "interno".

```ts
// lib/validations/productos.ts
export const productoSchema = z.object({
  nombre: z.string().min(2).max(150).trim(),
  precio: z.coerce.number().positive(),
});
export type ProductoInput = z.infer<typeof productoSchema>;
```

Checklist de seguridad por feature nueva:
- [ ] Input validado con Zod **en el servidor** (la validacion de react-hook-form en
      cliente es UX, no seguridad).
- [ ] Guard de RBAC (`requirePermission`/`requirePagePermission`) antes de cualquier
      lectura o escritura sensible.
- [ ] Queries via Drizzle, sin interpolacion de strings.
- [ ] Variables sensibles solo en `.env.local`, nunca con prefijo `NEXT_PUBLIC_` si
      son secretas (`SUPABASE_SERVICE_ROLE_KEY` jamas al cliente).
- [ ] `lib/supabase/admin.ts` (service role, bypassa RLS) solo se importa desde
      codigo server, nunca desde un client component.
- [ ] Row Level Security activo en Supabase como segunda capa de defensa (no
      reemplaza los guards de RBAC en la app, los complementa).

---

## 8. Tailwind v4 y Paleta de Colores

- Paleta de marca centralizada en `src/config/colors.ts` (fuente canonica TS),
  reflejada en `@theme` de `src/app/globals.css` (fuente real en build).
- shadcn ya provee el set de tokens funcionales para el panel admin
  (`bg-background`, `text-foreground`, `bg-primary`, `bg-muted`, `bg-destructive`...)
  — **usar esos en el admin, no la paleta de marca.** La paleta de marca
  (`bg-brand-primary`, etc) es para el sitio publico/marketing, donde importa la
  identidad visual del cliente.
- **Nunca** `bg-[--color-x]` / `text-[--color-x]` con corchetes — en Tailwind v4 NO
  se envuelve en `var()`, compila a CSS invalido que el navegador descarta en
  silencio (sin error de build). Usar la clase directa generada por `@theme`
  (`bg-brand-primary`) o el shorthand de parentesis para variables no registradas
  como color-token (`bg-(--mi-variable)`).
- Mobile-first, breakpoints estandar (`sm md lg xl`), `cn()` para clases condicionales,
  `cva` para variantes de componente.

---

## 9. Autenticacion

- Supabase Auth vía `@supabase/ssr`. Tres clientes:
  - `lib/supabase/client.ts` — browser (`createBrowserClient`).
  - `lib/supabase/server.ts` — Server Components/Actions (`createServerClient` +
    cookies de `next/headers`).
  - `lib/supabase/admin.ts` — service role, bypassa RLS, solo server, solo para
    operaciones administrativas (crear usuarios, jobs internos).
- `src/proxy.ts` (reemplaza `middleware.ts` en Next 16) refresca el access token en
  cada request y reescribe la cookie.
- Callback de OAuth/magic link en `app/auth/callback/route.ts`
  (`exchangeCodeForSession`).

---

## 10. Convenciones Generales

- **Nombres descriptivos**, funciones pequeñas (<40 lineas como señal de alerta, no
  regla dura), early returns para evitar anidamiento.
- **Sin comentarios obvios.** Solo el "por que" cuando no es evidente (una restriccion
  oculta, un workaround de un bug especifico, un comportamiento que sorprenderia).
- **Estados de UI completos:** todo boton async muestra loading, toda lista tiene
  estado vacio, todo formulario muestra error inline bajo el campo.
- **Skeletons**, no spinners, para contenido estructurado (`loading.tsx` por ruta).
- **Sin `console.log`** en codigo de produccion (`console.error` en catches esta bien).
- **Migraciones de DB y commits de git: siempre manuales por el usuario.** Claude
  genera el SQL o el diff, nunca ejecuta `drizzle-kit migrate/push` ni `git commit`
  contra el repo real sin que el usuario lo corra el mismo.

---

## Checklist antes de dar un modulo CRUD por terminado

- [ ] `page.tsx` llama `requirePagePermission('modulo.view')`.
- [ ] Cada Server Action en `actions.ts` llama `requirePermission` con el slug correcto.
- [ ] Input validado con Zod en cada action (`safeParse`, nunca `parse` que lanza).
- [ ] `logAudit` en cada create/update/deactivate/activate, con `antes`/`despues`.
- [ ] `revalidatePath` de la ruta afectada (y de rutas relacionadas si aplica, ej.
      desactivar una categoria afecta la lista de productos).
- [ ] Botones de accion gateados por permiso en el client component.
- [ ] `loading.tsx` con skeleton.
- [ ] Sin borrado duro — solo `activo: false`.
- [ ] Permiso nuevo agregado a `lib/rbac/permissions.ts` y a `config/admin-nav.ts`
      si el modulo necesita entrada en el sidebar.
