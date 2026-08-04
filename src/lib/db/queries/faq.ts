import { and, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { faq } from '@/lib/db/schema';

export async function getFaqProducto(productoId: string) {
  return db
    .select()
    .from(faq)
    .where(and(eq(faq.productoId, productoId), eq(faq.publicado, true)))
    .orderBy(faq.orden);
}

export type FaqItem = Awaited<ReturnType<typeof getFaqProducto>>[number];
