'use server';

import { revalidatePath } from 'next/cache';
import { requirePermission } from '@/lib/rbac/require-permission';
import {
  createProducto,
  updateProducto,
  deactivateProducto,
  activateProducto,
  getProductoById,
} from '@/lib/db/queries/productos';
import { productoSchema, type ProductoInput } from '@/lib/validations/productos';
import { logAudit } from '@/lib/audit/log-audit';
import type { ActionResult } from '@/types';

export async function createProductoAction(input: ProductoInput): Promise<ActionResult<void>> {
  const auth = await requirePermission('productos.create');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = productoSchema.safeParse(input);
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const producto = await createProducto(result.data);
    await logAudit(auth.userId, 'CREAR_PRODUCTO', 'productos', producto.id, {
      entidad: result.data.nombre,
      despues: result.data,
    });
    revalidatePath('/admin/productos');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('createProductoAction error:', error);
    return { success: false, error: 'Error al crear el producto.' };
  }
}

export async function updateProductoAction(
  id: string,
  input: ProductoInput
): Promise<ActionResult<void>> {
  const auth = await requirePermission('productos.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = productoSchema.safeParse(input);
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const antes = await getProductoById(id);
    await updateProducto(id, result.data);
    await logAudit(auth.userId, 'EDITAR_PRODUCTO', 'productos', id, {
      entidad: result.data.nombre,
      antes: antes ? { nombre: antes.nombre, precioDesde: antes.precioDesde } : undefined,
      despues: { nombre: result.data.nombre, precioDesde: result.data.precioDesde },
    });
    revalidatePath('/admin/productos');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('updateProductoAction error:', error);
    return { success: false, error: 'Error al actualizar el producto.' };
  }
}

export async function deactivateProductoAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('productos.deactivate');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getProductoById(id);
    await deactivateProducto(id);
    await logAudit(auth.userId, 'DESACTIVAR_PRODUCTO', 'productos', id, {
      entidad: antes?.nombre ?? id,
      antes: { activo: true },
      despues: { activo: false },
    });
    revalidatePath('/admin/productos');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('deactivateProductoAction error:', error);
    return { success: false, error: 'Error al desactivar el producto.' };
  }
}

export async function activateProductoAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('productos.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getProductoById(id);
    await activateProducto(id);
    await logAudit(auth.userId, 'ACTIVAR_PRODUCTO', 'productos', id, {
      entidad: antes?.nombre ?? id,
      antes: { activo: false },
      despues: { activo: true },
    });
    revalidatePath('/admin/productos');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('activateProductoAction error:', error);
    return { success: false, error: 'Error al activar el producto.' };
  }
}
