import type { Metadata } from 'next';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';
import { getGaleriaTodas } from '@/lib/db/queries/galeria';
import { GaleriaAdminClient } from './galeria-client';

export const metadata: Metadata = { title: 'Galeria' };

export default async function GaleriaAdminPage() {
  const { permissions } = await requirePagePermission('galeria.view');
  const piezas = await getGaleriaTodas();

  return <GaleriaAdminClient piezas={piezas} permissions={[...permissions]} />;
}
