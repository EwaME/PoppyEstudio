import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getUserPermissions } from '@/lib/rbac/get-user-permissions';
import { hasDevBypassSession } from '@/lib/rbac/dev-bypass';
import { ALL_PERMISSION_SLUGS } from '@/lib/rbac/permissions';
import { AdminSidebar } from '@/components/admin/admin-sidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const devBypass = await hasDevBypassSession();

  let permissions: string[];

  if (devBypass) {
    permissions = ALL_PERMISSION_SLUGS;
  } else {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect('/login');

    permissions = [...(await getUserPermissions(user.id))];
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar permissions={permissions} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
