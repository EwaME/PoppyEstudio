# OB Template

Plantilla base de OB Solutions para proyectos web: panel de administracion CRUD
completo (RBAC granular + auditoria) + landing/catalogo publico.

Arquitectura completa, convenciones y patrones documentados en **[RULES.md](./RULES.md)**
— leelo antes de agregar un modulo nuevo.

## Empezar un proyecto nuevo a partir de esta plantilla

1. Copia esta carpeta completa a `C:\Proyectos OB\OB Solutions\<nombre-del-proyecto>`
   (no uses `_template` como nombre del proyecto real).
2. Actualiza `package.json` (`name`), `src/config/site.ts` (nombre, descripcion, URL)
   y `src/config/colors.ts` (paleta de marca del cliente).
3. Crea un proyecto en Supabase y copia las credenciales a `.env.local`
   (ver `.env.example`).
4. `pnpm install`
5. `pnpm db:generate` → revisa el SQL generado en `drizzle/migrations/` → **corre
   `pnpm db:push` u `pnpm db:migrate` vos mismo** (no lo corre Claude).
6. `pnpm seed:rbac` — siembra el catalogo de permisos y crea el rol Administrador.
7. En Supabase, crea tu usuario admin y asignale el rol Administrador insertando en
   `user_roles` (`user_id` = id del usuario en `auth.users`, `role_id` = id del rol
   Administrador).
8. `pnpm dev` → `http://localhost:3000`

## Modulo de referencia

`src/app/(admin)/admin/productos/` implementa el patron CRUD completo (page + client
+ actions + loading, con RBAC y audit log). Copialo y renombralo para cada entidad
nueva — no reinventes la forma, seguí el patron descrito en RULES.md §5.

## Scripts

| Comando | Que hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` / `pnpm start` | Build y arranque de produccion |
| `pnpm db:generate` | Genera SQL de migracion a partir del schema Drizzle |
| `pnpm db:migrate` / `pnpm db:push` | Aplica migraciones — **correlo vos, no Claude** |
| `pnpm db:studio` | Explorador visual de la base de datos |
| `pnpm seed:rbac` | Siembra permisos y rol Administrador |
| `pnpm dlx shadcn add <componente>` | Agrega un componente shadcn/ui nuevo |
