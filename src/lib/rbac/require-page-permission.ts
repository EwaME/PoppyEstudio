import 'server-only';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getUserPermissions, can } from './get-user-permissions';
import { hasDevBypassSession } from './dev-bypass';
import { ALL_PERMISSION_SLUGS } from './permissions';

/**
 * Guard para Server Components (page.tsx del panel admin).
 * Redirige a /login si no hay sesion, o a /admin/sin-acceso si falta el permiso.
 * Devuelve el set completo de permisos del usuario para pasarlo al client component
 * (gating de botones de accion dentro de la pagina).
 */
export async function requirePagePermission(slug: string) {
  if (await hasDevBypassSession()) {
    return { userId: 'dev-user', permissions: new Set(ALL_PERMISSION_SLUGS) };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const permissions = await getUserPermissions(user.id);
  if (!can(permissions, slug)) redirect('/admin/sin-acceso');

  return { userId: user.id, permissions };
}
