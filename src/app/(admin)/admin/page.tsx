import type { Metadata } from 'next';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';

export const metadata: Metadata = { title: 'Dashboard' };

export default async function AdminDashboardPage() {
  await requirePagePermission('dashboard.view');

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">
        Punto de partida del panel. Reemplaza esto con las metricas del proyecto.
      </p>
    </div>
  );
}
