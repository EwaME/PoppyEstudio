import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { galeria } from '@/lib/db/schema';
import type { GaleriaInput } from '@/lib/validations/galeria';

export async function getGaleriaDestacada(limit = 6) {
  return db
    .select()
    .from(galeria)
    .where(and(eq(galeria.destacado, true), eq(galeria.activo, true)))
    .orderBy(desc(galeria.createdAt))
    .limit(limit);
}

export async function getGaleriaActiva() {
  return db.select().from(galeria).where(eq(galeria.activo, true)).orderBy(desc(galeria.createdAt));
}

export async function getGaleriaTodas() {
  return db.select().from(galeria).orderBy(desc(galeria.createdAt));
}

export async function getGaleriaPiezaById(id: string) {
  const [row] = await db.select().from(galeria).where(eq(galeria.id, id)).limit(1);
  return row ?? null;
}

export async function createGaleriaPieza(data: GaleriaInput & { imagenUrl: string }) {
  const [row] = await db.insert(galeria).values(data).returning();
  return row;
}

export async function updateGaleriaPieza(
  id: string,
  data: Partial<GaleriaInput & { imagenUrl: string }>
) {
  const [row] = await db
    .update(galeria)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export async function deactivateGaleriaPieza(id: string) {
  const [row] = await db
    .update(galeria)
    .set({ activo: false, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export async function activateGaleriaPieza(id: string) {
  const [row] = await db
    .update(galeria)
    .set({ activo: true, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export type GaleriaPieza = Awaited<ReturnType<typeof getGaleriaDestacada>>[number];
