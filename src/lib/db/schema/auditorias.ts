import { pgTable, uuid, text, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const auditorias = pgTable('auditorias', {
  id: uuid('id').primaryKey().defaultRandom(),
  usuarioId: uuid('usuario_id').notNull(), // auth.users.id
  accion: text('accion').notNull(), // ej. CREAR_PRODUCTO, DESACTIVAR_CATEGORIA
  tabla: text('tabla').notNull(),
  registroId: text('registro_id').notNull(),
  entidad: text('entidad'), // etiqueta legible del registro afectado
  antes: jsonb('antes'),
  despues: jsonb('despues'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
