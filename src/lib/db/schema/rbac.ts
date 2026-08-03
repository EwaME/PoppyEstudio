import { pgTable, uuid, text, timestamp, primaryKey } from 'drizzle-orm/pg-core';

export const roles = pgTable('roles', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull().unique(),
  descripcion: text('descripcion'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const permissions = pgTable('permissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(), // formato: modulo.accion (ej. productos.view)
  modulo: text('modulo').notNull(),
  accion: text('accion').notNull(), // view | create | edit | deactivate
  label: text('label').notNull(),
});

export const rolePermissions = pgTable(
  'role_permissions',
  {
    roleId: uuid('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),
    permissionId: uuid('permission_id')
      .notNull()
      .references(() => permissions.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.roleId, t.permissionId] })]
);

export const userRoles = pgTable(
  'user_roles',
  {
    userId: uuid('user_id').notNull(), // referencia a auth.users.id (Supabase)
    roleId: uuid('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.userId, t.roleId] })]
);
