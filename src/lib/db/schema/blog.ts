import { pgTable, uuid, text, integer, boolean, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { perfiles } from './usuarios';

export const blogCategorias = pgTable('blog_categorias', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull().unique(),
  slug: text('slug').notNull().unique(),
  descripcion: text('descripcion'),
  orden: integer('orden').default(0).notNull(),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoriaId: uuid('categoria_id')
    .notNull()
    .references(() => blogCategorias.id, { onDelete: 'restrict' }),
  autorId: uuid('autor_id').references(() => perfiles.id, { onDelete: 'set null' }),
  titulo: text('titulo').notNull(),
  slug: text('slug').notNull().unique(),
  resumen: text('resumen'),
  contenido: text('contenido').notNull(), // MDX
  imagenPortada: text('imagen_portada'),
  tiempoLectura: integer('tiempo_lectura'),
  // Estado editorial (borrador/publicado) - independiente de `activo` (soft delete).
  publicado: boolean('publicado').default(false).notNull(),
  fechaPublicacion: timestamp('fecha_publicacion', { withTimezone: true }),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const blogTags = pgTable('blog_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombre: text('nombre').notNull().unique(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const blogPostTags = pgTable(
  'blog_post_tags',
  {
    postId: uuid('post_id')
      .notNull()
      .references(() => blogPosts.id, { onDelete: 'cascade' }),
    tagId: uuid('tag_id')
      .notNull()
      .references(() => blogTags.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.postId, t.tagId] })]
);

export const blogRelacionados = pgTable(
  'blog_relacionados',
  {
    postId: uuid('post_id')
      .notNull()
      .references(() => blogPosts.id, { onDelete: 'cascade' }),
    postRelacionadoId: uuid('post_relacionado_id')
      .notNull()
      .references(() => blogPosts.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.postId, t.postRelacionadoId] })]
);
