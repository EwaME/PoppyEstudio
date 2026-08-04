import { and, eq, ilike, or } from 'drizzle-orm';
import { db } from '@/lib/db';
import { productos, categorias, productoOpciones, productoRelacionados } from '@/lib/db/schema';
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

const PRODUCTO_RESUMEN_SELECT = {
  id: productos.id,
  nombre: productos.nombre,
  slug: productos.slug,
  descripcionCorta: productos.descripcionCorta,
  precioDesde: productos.precioDesde,
  categoriaNombre: categorias.nombre,
  categoriaSlug: categorias.slug,
};

export async function getProductosDestacados(limit = 6) {
  return db
    .select(PRODUCTO_RESUMEN_SELECT)
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(eq(productos.destacado, true), eq(productos.activo, true)))
    .orderBy(productos.nombre)
    .limit(limit);
}

export async function getProductosFiltrados({
  q,
  categoriaSlug,
}: {
  q?: string;
  categoriaSlug?: string;
}) {
  const condiciones = [eq(productos.activo, true)];
  if (categoriaSlug) condiciones.push(eq(categorias.slug, categoriaSlug));
  if (q) {
    const coincidencia = or(ilike(productos.nombre, `%${q}%`), ilike(productos.descripcionCorta, `%${q}%`));
    if (coincidencia) condiciones.push(coincidencia);
  }

  return db
    .select(PRODUCTO_RESUMEN_SELECT)
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(...condiciones))
    .orderBy(productos.nombre);
}

export type ProductoResumen = Awaited<ReturnType<typeof getProductosDestacados>>[number];

export async function getProductoDetalle(slug: string) {
  const [producto] = await db
    .select({
      id: productos.id,
      nombre: productos.nombre,
      slug: productos.slug,
      descripcionCorta: productos.descripcionCorta,
      descripcion: productos.descripcion,
      precioDesde: productos.precioDesde,
      tiempoEntrega: productos.tiempoEntrega,
      seoTitle: productos.seoTitle,
      seoDescription: productos.seoDescription,
      categoriaNombre: categorias.nombre,
      categoriaSlug: categorias.slug,
    })
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(eq(productos.slug, slug), eq(productos.activo, true)))
    .limit(1);
  return producto ?? null;
}

export type ProductoDetalle = Awaited<ReturnType<typeof getProductoDetalle>>;

export async function getProductoOpciones(productoId: string) {
  return db
    .select()
    .from(productoOpciones)
    .where(eq(productoOpciones.productoId, productoId))
    .orderBy(productoOpciones.orden);
}

export async function getProductosRelacionados(productoId: string, limit = 4) {
  return db
    .select(PRODUCTO_RESUMEN_SELECT)
    .from(productoRelacionados)
    .innerJoin(productos, eq(productos.id, productoRelacionados.productoRelacionadoId))
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(eq(productoRelacionados.productoId, productoId), eq(productos.activo, true)))
    .limit(limit);
}
