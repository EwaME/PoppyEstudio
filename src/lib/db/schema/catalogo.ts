import {
  pgTable,
  uuid,
  text,
  numeric,
  integer,
  boolean,
  timestamp,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const categorias = pgTable('categorias', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull().unique(),
  slug: text('slug').notNull().unique(),
  descripcion: text('descripcion'),
  imagenUrl: text('imagen_url'),
  orden: integer('orden').default(0).notNull(),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

// No representa inventario: Poppy Crafty personaliza bajo pedido, sin stock.
export const productos = pgTable('productos', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoriaId: uuid('categoria_id')
    .notNull()
    .references(() => categorias.id, { onDelete: 'restrict' }),
  nombre: text('nombre').notNull(),
  slug: text('slug').notNull().unique(),
  descripcionCorta: text('descripcion_corta'),
  descripcion: text('descripcion'),
  precioDesde: numeric('precio_desde', { precision: 10, scale: 2, mode: 'number' }),
  tiempoEntrega: text('tiempo_entrega'),
  destacado: boolean('destacado').default(false).notNull(),
  activo: boolean('activo').default(true).notNull(),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const productoImagenes = pgTable('producto_imagenes', {
  id: uuid('id').primaryKey().defaultRandom(),
  productoId: uuid('producto_id')
    .notNull()
    .references(() => productos.id, { onDelete: 'cascade' }),
  url: text('url').notNull(),
  alt: text('alt'),
  principal: boolean('principal').default(false).notNull(),
  orden: integer('orden').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// Opciones de personalizacion (color, talla, material...). No es inventario.
export const productoOpciones = pgTable('producto_opciones', {
  id: uuid('id').primaryKey().defaultRandom(),
  productoId: uuid('producto_id')
    .notNull()
    .references(() => productos.id, { onDelete: 'cascade' }),
  nombre: text('nombre').notNull(),
  valor: text('valor').notNull(),
  incrementoPrecio: numeric('incremento_precio', {
    precision: 10,
    scale: 2,
    mode: 'number',
  })
    .default(0)
    .notNull(),
  orden: integer('orden').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const productoEtiquetas = pgTable('producto_etiquetas', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull().unique(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const productoEtiquetaRelaciones = pgTable(
  'producto_etiqueta_relaciones',
  {
    productoId: uuid('producto_id')
      .notNull()
      .references(() => productos.id, { onDelete: 'cascade' }),
    etiquetaId: uuid('etiqueta_id')
      .notNull()
      .references(() => productoEtiquetas.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.productoId, t.etiquetaId] })]
);

// Curacion manual de "productos relacionados" en la pagina de producto individual.
export const productoRelacionados = pgTable(
  'producto_relacionados',
  {
    productoId: uuid('producto_id')
      .notNull()
      .references(() => productos.id, { onDelete: 'cascade' }),
    productoRelacionadoId: uuid('producto_relacionado_id')
      .notNull()
      .references(() => productos.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.productoId, t.productoRelacionadoId] })]
);
