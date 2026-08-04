/**
 * Corrige telefono y whatsapp en la fila unica de `configuracion` (ya sembrada
 * con datos placeholder/desactualizados). UPDATE sin WHERE es intencional:
 * la tabla tiene una sola fila (ver comentario en el schema).
 *
 * Uso: pnpm tsx scripts/update-configuracion-contacto.ts
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { db } from '../src/lib/db';
import { configuracion } from '../src/lib/db/schema/sitio';

async function main() {
  const [fila] = await db
    .update(configuracion)
    .set({
      telefono: '+504 3250-5304',
      whatsapp: '+504 8819-9499',
    })
    .returning();

  if (!fila) {
    console.error('No hay fila en configuracion — correr primero pnpm seed:content.');
    process.exit(1);
  }

  console.log('Configuracion actualizada:', { telefono: fila.telefono, whatsapp: fila.whatsapp });
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
