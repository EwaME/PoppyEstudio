import 'server-only';
import { createClient } from '@/lib/supabase/server';
import { getUserPermissions, can } from './get-user-permissions';
import { hasDevBypassSession } from './dev-bypass';

type AuthSuccess = { ok: true; userId: string };
type AuthFailure = { ok: false; error: string };
export type RequirePermissionResult = AuthSuccess | AuthFailure;

/**
 * Guard para Server Actions y API Routes.
 * Verifica si el usuario autenticado tiene el permiso especificado.
 *
 * Devuelve un objeto con `ok: true` y el `userId` en caso de exito,
 * o `ok: false` y un mensaje de error descriptivo en caso de fallo.
 * No lanza excepciones: el llamador maneja el flujo con un if.
 */
export async function requirePermission(slug: string): Promise<RequirePermissionResult> {
  if (await hasDevBypassSession()) {
    return { ok: true, userId: 'dev-user' };
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return { ok: false, error: 'No autenticado. Por favor, inicia sesion.' };
    }

    const perms = await getUserPermissions(user.id);
    if (!can(perms, slug)) {
      return { ok: false, error: `Permiso insuficiente: se requiere ${slug}` };
    }

    return { ok: true, userId: user.id };
  } catch (err) {
    console.error('requirePermission: error inesperado', err);
    return { ok: false, error: 'Error interno de autenticacion y permisos.' };
  }
}
