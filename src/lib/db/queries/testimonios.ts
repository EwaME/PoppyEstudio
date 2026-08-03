import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { testimonios } from '@/lib/db/schema';

export async function getTestimoniosDestacados(limit = 6) {
  return db
    .select()
    .from(testimonios)
    .where(and(eq(testimonios.destacado, true), eq(testimonios.activo, true)))
    .orderBy(desc(testimonios.createdAt))
    .limit(limit);
}

export type Testimonio = Awaited<ReturnType<typeof getTestimoniosDestacados>>[number];
