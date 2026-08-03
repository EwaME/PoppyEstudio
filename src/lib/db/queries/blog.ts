import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { blogPosts, blogCategorias } from '@/lib/db/schema';

export async function getBlogPostsRecientes(limit = 3) {
  return db
    .select({
      id: blogPosts.id,
      titulo: blogPosts.titulo,
      slug: blogPosts.slug,
      resumen: blogPosts.resumen,
      imagenPortada: blogPosts.imagenPortada,
      tiempoLectura: blogPosts.tiempoLectura,
      fechaPublicacion: blogPosts.fechaPublicacion,
      categoriaNombre: blogCategorias.nombre,
    })
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .where(and(eq(blogPosts.publicado, true), eq(blogPosts.activo, true)))
    .orderBy(desc(blogPosts.fechaPublicacion))
    .limit(limit);
}

export type BlogPostResumen = Awaited<ReturnType<typeof getBlogPostsRecientes>>[number];
