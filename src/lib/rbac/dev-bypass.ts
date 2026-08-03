import 'server-only';
import { cookies } from 'next/headers';

/**
 * Bypass de auth solo para plantilla sin Supabase real conectado.
 * Se activa con DEV_BYPASS_AUTH=true + cookie sembrada por el login con
 * credenciales quemadas (ver dev-login-action.ts). Quitar al conectar
 * un proyecto Supabase real.
 */
export const DEV_ADMIN_EMAIL = 'admin@plantilla.dev';
export const DEV_ADMIN_PASSWORD = 'plantilla123';
const DEV_SESSION_COOKIE = 'dev-session';

export async function hasDevBypassSession(): Promise<boolean> {
  if (process.env.DEV_BYPASS_AUTH !== 'true') return false;
  const store = await cookies();
  return store.get(DEV_SESSION_COOKIE)?.value === 'true';
}

export { DEV_SESSION_COOKIE };
