import 'server-only';
import { db } from '@/lib/db';
import { auditorias } from '@/lib/db/schema';

type LogAuditInput = {
  entidad?: string;
  antes?: unknown;
  despues?: unknown;
};

/**
 * Registra una accion de auditoria. Se llama desde cada Server Action
 * que crea, edita o desactiva un registro (nunca desde el cliente).
 * No lanza: un fallo de auditoria no debe tumbar la accion principal,
 * solo se loguea en consola para investigar despues.
 */
export async function logAudit(
  usuarioId: string,
  accion: string,
  tabla: string,
  registroId: string,
  data: LogAuditInput = {}
): Promise<void> {
  try {
    await db.insert(auditorias).values({
      usuarioId,
      accion,
      tabla,
      registroId,
      entidad: data.entidad,
      antes: data.antes,
      despues: data.despues,
    });
  } catch (err) {
    console.error('logAudit: fallo al registrar auditoria', { accion, tabla, registroId, err });
  }
}
