'use server';

import { cookies } from 'next/headers';
import { DEV_ADMIN_EMAIL, DEV_ADMIN_PASSWORD, DEV_SESSION_COOKIE } from '@/lib/rbac/dev-bypass';

export async function devLogin(email: string, password: string): Promise<boolean> {
  if (process.env.DEV_BYPASS_AUTH !== 'true') return false;
  if (email !== DEV_ADMIN_EMAIL || password !== DEV_ADMIN_PASSWORD) return false;

  const store = await cookies();
  store.set(DEV_SESSION_COOKIE, 'true', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return true;
}
