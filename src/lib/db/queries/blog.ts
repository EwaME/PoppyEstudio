import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { blogPosts, blogCategorias } from '@/lib/db/schema';
import type { BlogPostInput } from '@/lib/validations/blog';

const BLOG_RESUMEN_SELECT = {
  id: blogPosts.id,
  titulo: blogPosts.titulo,
  slug: blogPosts.slug,
  resumen: blogPosts.resumen,
  imagenPortada: blogPosts.imagenPortada,
  tiempoLectura: blogPosts.tiempoLectura,
  fechaPublicacion: blogPosts.fechaPublicacion,
  categoriaNombre: blogCategorias.nombre,
};

export async function getBlogPostsRecientes(limit = 3) {
  return db
    .select(BLOG_RESUMEN_SELECT)
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .where(and(eq(blogPosts.publicado, true), eq(blogPosts.activo, true)))
    .orderBy(desc(blogPosts.fechaPublicacion))
    .limit(limit);
}

export async function getBlogPostsPublicados() {
  return db
    .select(BLOG_RESUMEN_SELECT)
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .where(and(eq(blogPosts.publicado, true), eq(blogPosts.activo, true)))
    .orderBy(desc(blogPosts.fechaPublicacion));
}

export type BlogPostResumen = Awaited<ReturnType<typeof getBlogPostsRecientes>>[number];

export async function getBlogPostBySlug(slug: string) {
  const [post] = await db
    .select({
      id: blogPosts.id,
      titulo: blogPosts.titulo,
      slug: blogPosts.slug,
      resumen: blogPosts.resumen,
      contenido: blogPosts.contenido,
      imagenPortada: blogPosts.imagenPortada,
      tiempoLectura: blogPosts.tiempoLectura,
      fechaPublicacion: blogPosts.fechaPublicacion,
      seoTitle: blogPosts.seoTitle,
      seoDescription: blogPosts.seoDescription,
      categoriaNombre: blogCategorias.nombre,
      categoriaSlug: blogCategorias.slug,
    })
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .where(and(eq(blogPosts.slug, slug), eq(blogPosts.publicado, true), eq(blogPosts.activo, true)))
    .limit(1);
  return post ?? null;
}

export type BlogPostDetalle = Awaited<ReturnType<typeof getBlogPostBySlug>>;

export async function getBlogCategorias() {
  return db.select().from(blogCategorias).where(eq(blogCategorias.activo, true)).orderBy(blogCategorias.orden);
}

// ── Admin ──

export async function getBlogPostsTodos() {
  return db
    .select({
      id: blogPosts.id,
      titulo: blogPosts.titulo,
      slug: blogPosts.slug,
      resumen: blogPosts.resumen,
      contenido: blogPosts.contenido,
      imagenPortada: blogPosts.imagenPortada,
      tiempoLectura: blogPosts.tiempoLectura,
      categoriaId: blogPosts.categoriaId,
      categoriaNombre: blogCategorias.nombre,
      publicado: blogPosts.publicado,
      activo: blogPosts.activo,
      fechaPublicacion: blogPosts.fechaPublicacion,
    })
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .orderBy(desc(blogPosts.createdAt));
}

export async function getBlogPostById(id: string) {
  const [row] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return row ?? null;
}

export async function createBlogPost(data: BlogPostInput) {
  const [row] = await db
    .insert(blogPosts)
    .values({
      ...data,
      imagenPortada: data.imagenPortada || null,
      fechaPublicacion: data.publicado ? new Date() : null,
    })
    .returning();
  return row;
}

export async function updateBlogPost(id: string, data: BlogPostInput) {
  const existente = await getBlogPostById(id);
  const [row] = await db
    .update(blogPosts)
    .set({
      ...data,
      imagenPortada: data.imagenPortada || null,
      fechaPublicacion: data.publicado ? (existente?.fechaPublicacion ?? new Date()) : null,
      updatedAt: new Date(),
    })
    .where(eq(blogPosts.id, id))
    .returning();
  return row;
}

export async function deactivateBlogPost(id: string) {
  const [row] = await db
    .update(blogPosts)
    .set({ activo: false, updatedAt: new Date() })
    .where(eq(blogPosts.id, id))
    .returning();
  return row;
}

export async function activateBlogPost(id: string) {
  const [row] = await db
    .update(blogPosts)
    .set({ activo: true, updatedAt: new Date() })
    .where(eq(blogPosts.id, id))
    .returning();
  return row;
}
