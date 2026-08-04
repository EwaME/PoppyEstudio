import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getUserPermissions } from '@/lib/rbac/get-user-permissions';
import { hasDevBypassSession, DEV_ADMIN_EMAIL } from '@/lib/rbac/dev-bypass';
import { ALL_PERMISSION_SLUGS } from '@/lib/rbac/permissions';
import { getPerfilById } from '@/lib/db/queries/perfiles';
import { AdminSidebar } from '@/components/admin/admin-sidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const devBypass = await hasDevBypassSession();

  let permissions: string[];
  let displayName: string;
  let email: string | null;

  if (devBypass) {
    permissions = ALL_PERMISSION_SLUGS;
    displayName = 'Admin (dev)';
    email = DEV_ADMIN_EMAIL;
  } else {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect('/login');

    permissions = [...(await getUserPermissions(user.id))];
    const perfil = await getPerfilById(user.id);
    const nombreCompleto = [perfil?.nombres, perfil?.apellidos].filter(Boolean).join(' ');
    displayName = nombreCompleto || user.email || 'Usuario';
    email = user.email ?? null;
  }

  return (
    <div className="admin-theme flex min-h-screen bg-brand-secondary">
      <AdminSidebar permissions={permissions} displayName={displayName} email={email} />
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}
