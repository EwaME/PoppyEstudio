'use server';

import { revalidatePath } from 'next/cache';
import { requirePermission } from '@/lib/rbac/require-permission';
import {
  createBlogPost,
  updateBlogPost,
  deactivateBlogPost,
  activateBlogPost,
  getBlogPostById,
} from '@/lib/db/queries/blog';
import { blogPostSchema, type BlogPostInput } from '@/lib/validations/blog';
import { logAudit } from '@/lib/audit/log-audit';
import type { ActionResult } from '@/types';

export async function createBlogPostAction(input: BlogPostInput): Promise<ActionResult<void>> {
  const auth = await requirePermission('blog.create');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = blogPostSchema.safeParse(input);
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const post = await createBlogPost(result.data);
    await logAudit(auth.userId, 'CREAR_BLOG_POST', 'blog_posts', post.id, {
      entidad: result.data.titulo,
      despues: { titulo: result.data.titulo, publicado: result.data.publicado },
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('createBlogPostAction error:', error);
    return { success: false, error: 'Error al crear el articulo.' };
  }
}

export async function updateBlogPostAction(
  id: string,
  input: BlogPostInput
): Promise<ActionResult<void>> {
  const auth = await requirePermission('blog.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = blogPostSchema.safeParse(input);
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const antes = await getBlogPostById(id);
    await updateBlogPost(id, result.data);
    await logAudit(auth.userId, 'EDITAR_BLOG_POST', 'blog_posts', id, {
      entidad: result.data.titulo,
      antes: antes ? { titulo: antes.titulo, publicado: antes.publicado } : undefined,
      despues: { titulo: result.data.titulo, publicado: result.data.publicado },
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath(`/blog/${result.data.slug}`);
    return { success: true, data: undefined };
  } catch (error) {
    console.error('updateBlogPostAction error:', error);
    return { success: false, error: 'Error al actualizar el articulo.' };
  }
}

export async function deactivateBlogPostAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('blog.deactivate');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getBlogPostById(id);
    await deactivateBlogPost(id);
    await logAudit(auth.userId, 'DESACTIVAR_BLOG_POST', 'blog_posts', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: true },
      despues: { activo: false },
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('deactivateBlogPostAction error:', error);
    return { success: false, error: 'Error al desactivar el articulo.' };
  }
}

export async function activateBlogPostAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('blog.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getBlogPostById(id);
    await activateBlogPost(id);
    await logAudit(auth.userId, 'ACTIVAR_BLOG_POST', 'blog_posts', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: false },
      despues: { activo: true },
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('activateBlogPostAction error:', error);
    return { success: false, error: 'Error al activar el articulo.' };
  }
}
