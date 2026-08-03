import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { galeria } from '@/lib/db/schema';

export async function getGaleriaDestacada(limit = 6) {
  return db
    .select()
    .from(galeria)
    .where(and(eq(galeria.destacado, true), eq(galeria.activo, true)))
    .orderBy(desc(galeria.createdAt))
    .limit(limit);
}

export type GaleriaPieza = Awaited<ReturnType<typeof getGaleriaDestacada>>[number];
