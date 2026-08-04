import type { Metadata } from 'next';
import { Package, Tags, Images, MessageCircle } from 'lucide-react';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductosPorCategoriaChart, SolicitudesSemanaChart } from '@/components/admin/dashboard-charts';

export const metadata: Metadata = { title: 'Dashboard' };

const CONTADORES = [
  { label: 'Productos', valor: 12, icon: Package },
  { label: 'Categorias', valor: 8, icon: Tags },
  { label: 'Fotos en galeria', valor: 24, icon: Images },
  { label: 'Solicitudes nuevas', valor: 5, icon: MessageCircle },
];

export default async function AdminDashboardPage() {
  await requirePagePermission('dashboard.view');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CONTADORES.map((c) => (
          <Card key={c.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
              <c.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{c.valor}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ProductosPorCategoriaChart />
        <SolicitudesSemanaChart />
      </div>

      <p className="text-sm text-muted-foreground">
        Datos de ejemplo — todavia no conectados a metricas reales.
      </p>
    </div>
  );
}
