import type { Metadata } from 'next';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';
import { getProductosConCategoria } from '@/lib/db/queries/productos';
import { getCategorias } from '@/lib/db/queries/categorias';
import { ProductosClient } from './productos-client';

export const metadata: Metadata = { title: 'Productos' };

export default async function ProductosPage() {
  const { permissions } = await requirePagePermission('productos.view');

  const [productos, categorias] = await Promise.all([
    getProductosConCategoria(),
    getCategorias(),
  ]);

  return (
    <ProductosClient
      productos={productos}
      categorias={categorias}
      permissions={[...permissions]}
    />
  );
}
