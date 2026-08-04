import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { perfiles } from '@/lib/db/schema';

export async function getPerfilById(id: string) {
  const [row] = await db.select().from(perfiles).where(eq(perfiles.id, id)).limit(1);
  return row ?? null;
}
