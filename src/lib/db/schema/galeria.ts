import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

// Portafolio simple: un registro = una pieza en el grid, sin agrupar en albumes.
export const galeria = pgTable('galeria', {
  id: uuid('id').primaryKey().defaultRandom(),
  titulo: text('titulo').notNull(),
  slug: text('slug').notNull().unique(),
  descripcion: text('descripcion'),
  imagenUrl: text('imagen_url').notNull(),
  categoria: text('categoria'),
  destacado: boolean('destacado').default(false).notNull(),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
