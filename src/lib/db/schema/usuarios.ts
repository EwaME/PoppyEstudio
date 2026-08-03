import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

// 1:1 con auth.users de Supabase. Sin columna `rol`: el rol se define
// unicamente via user_roles (rbac.ts) para no tener dos fuentes de verdad.
export const perfiles = pgTable('perfiles', {
  id: uuid('id').primaryKey(), // = auth.users.id, no autogenerado
  nombres: text('nombres'),
  apellidos: text('apellidos'),
  telefono: text('telefono'),
  avatarUrl: text('avatar_url'),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
