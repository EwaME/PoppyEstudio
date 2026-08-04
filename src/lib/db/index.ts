import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * En dev, Next.js re-evalua este modulo en cada cambio (HMR). Sin cachear en
 * globalThis, cada re-evaluacion crea un pool nuevo sin cerrar el anterior y
 * las conexiones se van acumulando hasta agotar el limite de Supabase.
 */
const globalForDb = globalThis as unknown as { client?: ReturnType<typeof postgres> };

const client = globalForDb.client ?? postgres(process.env.DATABASE_URL!, { prepare: false });
if (process.env.NODE_ENV !== 'production') globalForDb.client = client;

export const db = drizzle(client, { schema });
