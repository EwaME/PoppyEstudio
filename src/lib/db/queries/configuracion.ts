import { db } from '@/lib/db';
import { configuracion } from '@/lib/db/schema';

export async function getConfiguracion() {
  const [row] = await db.select().from(configuracion).limit(1);
  return row ?? null;
}

export type Configuracion = Awaited<ReturnType<typeof getConfiguracion>>;
