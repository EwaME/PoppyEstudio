'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { DEV_SESSION_COOKIE } from '@/lib/rbac/dev-bypass';

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  const store = await cookies();
  store.delete(DEV_SESSION_COOKIE);

  redirect('/login');
}
