'use server';

import { revalidatePath } from 'next/cache';
import { requirePermission } from '@/lib/rbac/require-permission';
import {
  createGaleriaPieza,
  updateGaleriaPieza,
  deactivateGaleriaPieza,
  activateGaleriaPieza,
  getGaleriaPiezaById,
} from '@/lib/db/queries/galeria';
import { uploadGaleriaImagen } from '@/lib/supabase/storage';
import { galeriaSchema } from '@/lib/validations/galeria';
import { logAudit } from '@/lib/audit/log-audit';
import type { ActionResult } from '@/types';

function parseFormData(formData: FormData) {
  return {
    titulo: String(formData.get('titulo') ?? ''),
    slug: String(formData.get('slug') ?? ''),
    descripcion: String(formData.get('descripcion') ?? '') || undefined,
    categoria: String(formData.get('categoria') ?? '') || undefined,
    destacado: formData.get('destacado') === 'true',
  };
}

export async function createGaleriaPiezaAction(formData: FormData): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.create');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = galeriaSchema.safeParse(parseFormData(formData));
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  const archivo = formData.get('imagen');
  if (!(archivo instanceof File) || archivo.size === 0) {
    return { success: false, error: 'Selecciona una imagen.' };
  }

  try {
    const imagenUrl = await uploadGaleriaImagen(archivo);
    const pieza = await createGaleriaPieza({ ...result.data, imagenUrl });
    await logAudit(auth.userId, 'CREAR_GALERIA', 'galeria', pieza.id, {
      entidad: result.data.titulo,
      despues: result.data,
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('createGaleriaPiezaAction error:', error);
    const message = error instanceof Error ? error.message : 'Error al crear la pieza de galeria.';
    return { success: false, error: message };
  }
}

export async function updateGaleriaPiezaAction(
  id: string,
  formData: FormData
): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = galeriaSchema.safeParse(parseFormData(formData));
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const antes = await getGaleriaPiezaById(id);
    const archivo = formData.get('imagen');
    const imagenUrl =
      archivo instanceof File && archivo.size > 0 ? await uploadGaleriaImagen(archivo) : undefined;

    await updateGaleriaPieza(id, { ...result.data, ...(imagenUrl ? { imagenUrl } : {}) });
    await logAudit(auth.userId, 'EDITAR_GALERIA', 'galeria', id, {
      entidad: result.data.titulo,
      antes: antes ? { titulo: antes.titulo } : undefined,
      despues: { titulo: result.data.titulo },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('updateGaleriaPiezaAction error:', error);
    const message = error instanceof Error ? error.message : 'Error al actualizar la pieza de galeria.';
    return { success: false, error: message };
  }
}

export async function deactivateGaleriaPiezaAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.deactivate');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getGaleriaPiezaById(id);
    await deactivateGaleriaPieza(id);
    await logAudit(auth.userId, 'DESACTIVAR_GALERIA', 'galeria', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: true },
      despues: { activo: false },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('deactivateGaleriaPiezaAction error:', error);
    return { success: false, error: 'Error al desactivar la pieza de galeria.' };
  }
}

export async function activateGaleriaPiezaAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getGaleriaPiezaById(id);
    await activateGaleriaPieza(id);
    await logAudit(auth.userId, 'ACTIVAR_GALERIA', 'galeria', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: false },
      despues: { activo: true },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('activateGaleriaPiezaAction error:', error);
    return { success: false, error: 'Error al activar la pieza de galeria.' };
  }
}
