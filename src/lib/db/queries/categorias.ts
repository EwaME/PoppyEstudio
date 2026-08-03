import { and, eq, sql } from 'drizzle-orm';
import { db } from '@/lib/db';
import { categorias, productos } from '@/lib/db/schema';
import type { CategoriaInput } from '@/lib/validations/categorias';

export async function getCategorias() {
  return db.select().from(categorias).orderBy(categorias.nombre);
}

export async function getCategoriaById(id: string) {
  const [row] = await db.select().from(categorias).where(eq(categorias.id, id)).limit(1);
  return row ?? null;
}

export async function createCategoria(data: CategoriaInput) {
  const [row] = await db.insert(categorias).values(data).returning();
  return row;
}

export async function updateCategoria(id: string, data: Partial<CategoriaInput>) {
  const [row] = await db.update(categorias).set(data).where(eq(categorias.id, id)).returning();
  return row;
}

export async function deactivateCategoria(id: string) {
  const [row] = await db
    .update(categorias)
    .set({ activo: false })
    .where(eq(categorias.id, id))
    .returning();
  return row;
}

export async function activateCategoria(id: string) {
  const [row] = await db
    .update(categorias)
    .set({ activo: true })
    .where(eq(categorias.id, id))
    .returning();
  return row;
}

export async function getCategoriasConConteo() {
  return db
    .select({
      id: categorias.id,
      nombre: categorias.nombre,
      slug: categorias.slug,
      descripcion: categorias.descripcion,
      imagenUrl: categorias.imagenUrl,
      totalProductos: sql<number>`count(${productos.id})::int`,
    })
    .from(categorias)
    .leftJoin(productos, and(eq(productos.categoriaId, categorias.id), eq(productos.activo, true)))
    .where(eq(categorias.activo, true))
    .groupBy(categorias.id)
    .orderBy(categorias.orden, categorias.nombre);
}

export type CategoriaConConteo = Awaited<ReturnType<typeof getCategoriasConConteo>>[number];
