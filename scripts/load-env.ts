/**
 * Efecto secundario: carga .env.local ANTES que cualquier otro import.
 * Debe ser el primer import del archivo que lo use -- en ESM los imports
 * se evaluan en orden entre si, pero antes que cualquier statement normal
 * del modulo que los importa (por eso `config()` suelto no alcanza).
 */
import { config } from 'dotenv';

config({ path: '.env.local' });
