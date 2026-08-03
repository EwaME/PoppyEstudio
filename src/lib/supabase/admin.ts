import 'server-only';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Cliente con service role key: bypassa RLS.
 * Solo usar en contexto server para operaciones administrativas
 * (crear usuarios, borrar archivos de storage sin sesion, jobs internos).
 * Nunca importar desde un componente cliente ni exponer la key con NEXT_PUBLIC_.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
