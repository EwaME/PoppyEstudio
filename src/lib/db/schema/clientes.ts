import { pgTable, uuid, text, numeric, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { productos } from './catalogo';

export const solicitudEstadoEnum = pgEnum('solicitud_estado', [
  'pendiente',
  'en_revision',
  'cotizada',
  'aceptada',
  'rechazada',
  'finalizada',
]);

export const mensajeEstadoEnum = pgEnum('mensaje_estado', [
  'nuevo',
  'leido',
  'respondido',
  'archivado',
]);

export const clientes = pgTable('clientes', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull(),
  telefono: text('telefono'),
  email: text('email'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// Pedido de cotizacion, generado desde el sitio publico (no desde el admin).
export const solicitudes = pgTable('solicitudes', {
  id: uuid('id').primaryKey().defaultRandom(),
  clienteId: uuid('cliente_id')
    .notNull()
    .references(() => clientes.id, { onDelete: 'restrict' }),
  productoId: uuid('producto_id').references(() => productos.id, { onDelete: 'set null' }),
  asunto: text('asunto').notNull(),
  descripcion: text('descripcion').notNull(),
  estado: solicitudEstadoEnum('estado').default('pendiente').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const solicitudAdjuntos = pgTable('solicitud_adjuntos', {
  id: uuid('id').primaryKey().defaultRandom(),
  solicitudId: uuid('solicitud_id')
    .notNull()
    .references(() => solicitudes.id, { onDelete: 'cascade' }),
  url: text('url').notNull(),
  nombre: text('nombre'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const cotizaciones = pgTable('cotizaciones', {
  id: uuid('id').primaryKey().defaultRandom(),
  solicitudId: uuid('solicitud_id')
    .notNull()
    .unique()
    .references(() => solicitudes.id, { onDelete: 'cascade' }),
  subtotal: numeric('subtotal', { precision: 10, scale: 2, mode: 'number' }),
  descuento: numeric('descuento', { precision: 10, scale: 2, mode: 'number' }).default(0),
  total: numeric('total', { precision: 10, scale: 2, mode: 'number' }),
  observaciones: text('observaciones'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// Formulario de contacto general, sin producto asociado (distinto de `solicitudes`).
export const mensajesContacto = pgTable('mensajes_contacto', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull(),
  email: text('email').notNull(),
  telefono: text('telefono'),
  asunto: text('asunto'),
  mensaje: text('mensaje').notNull(),
  estado: mensajeEstadoEnum('estado').default('nuevo').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
