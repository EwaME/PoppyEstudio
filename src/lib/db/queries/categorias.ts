import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { categorias } from '@/lib/db/schema';
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
