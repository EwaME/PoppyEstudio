import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { productos, categorias } from '@/lib/db/schema';
import type { ProductoInput } from '@/lib/validations/productos';

export async function getProductosConCategoria() {
  return db
    .select({
      id: productos.id,
      nombre: productos.nombre,
      slug: productos.slug,
      descripcionCorta: productos.descripcionCorta,
      precioDesde: productos.precioDesde,
      tiempoEntrega: productos.tiempoEntrega,
      activo: productos.activo,
      categoriaId: productos.categoriaId,
      categoriaNombre: categorias.nombre,
    })
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .orderBy(productos.nombre);
}

export async function getProductoById(id: string) {
  const [row] = await db.select().from(productos).where(eq(productos.id, id)).limit(1);
  return row ?? null;
}

export async function createProducto(data: ProductoInput) {
  const [row] = await db.insert(productos).values(data).returning();
  return row;
}

export async function updateProducto(id: string, data: Partial<ProductoInput>) {
  const [row] = await db
    .update(productos)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(productos.id, id))
    .returning();
  return row;
}

export async function deactivateProducto(id: string) {
  const [row] = await db
    .update(productos)
    .set({ activo: false, updatedAt: new Date() })
    .where(eq(productos.id, id))
    .returning();
  return row;
}

export async function activateProducto(id: string) {
  const [row] = await db
    .update(productos)
    .set({ activo: true, updatedAt: new Date() })
    .where(eq(productos.id, id))
    .returning();
  return row;
}
