import { pgTable, uuid, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';
import { productos } from './catalogo';

// Fila unica: la Server Action de actualizacion nunca inserta, solo hace update.
export const configuracion = pgTable('configuracion', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombreNegocio: text('nombre_negocio'),
  slogan: text('slogan'),
  descripcion: text('descripcion'),
  telefono: text('telefono'),
  email: text('email'),
  direccion: text('direccion'),
  horario: text('horario'),
  facebook: text('facebook'),
  instagram: text('instagram'),
  tiktok: text('tiktok'),
  whatsapp: text('whatsapp'),
  logoUrl: text('logo_url'),
  faviconUrl: text('favicon_url'),
  seoTitleDefault: text('seo_title_default'),
  seoDescriptionDefault: text('seo_description_default'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// producto_id NULL = FAQ general del sitio; con valor = FAQ especifica del producto.
export const faq = pgTable('faq', {
  id: uuid('id').primaryKey().defaultRandom(),
  productoId: uuid('producto_id').references(() => productos.id, { onDelete: 'cascade' }),
  pregunta: text('pregunta').notNull(),
  respuesta: text('respuesta').notNull(),
  orden: integer('orden').default(0).notNull(),
  publicado: boolean('publicado').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const redireccionesSeo = pgTable('redirecciones_seo', {
  id: uuid('id').primaryKey().defaultRandom(),
  urlAnterior: text('url_anterior').notNull().unique(),
  urlNueva: text('url_nueva').notNull(),
  codigoEstado: integer('codigo_estado').default(301).notNull(),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
