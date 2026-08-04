import 'server-only';
import { createAdminClient } from './admin';

const BUCKET = 'galeria';
const MAX_BYTES = 5 * 1024 * 1024;
const TIPOS_PERMITIDOS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

/**
 * Sube una imagen al bucket publico `galeria` y devuelve su URL publica.
 * Corre siempre server-side (service role) — el bucket no necesita policies
 * de escritura para el cliente porque nunca sube directo desde el browser.
 */
export async function uploadGaleriaImagen(file: File): Promise<string> {
  const extension = TIPOS_PERMITIDOS[file.type];
  if (!extension) {
    throw new Error('Formato de imagen no soportado. Usa JPG, PNG o WEBP.');
  }
  if (file.size > MAX_BYTES) {
    throw new Error('La imagen supera el tamano maximo de 5MB.');
  }

  const nombreArchivo = `${crypto.randomUUID()}.${extension}`;
  const supabase = createAdminClient();

  const { error } = await supabase.storage.from(BUCKET).upload(nombreArchivo, file, {
    contentType: file.type,
    cacheControl: '3600',
  });
  if (error) throw new Error(`Error al subir imagen: ${error.message}`);

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(nombreArchivo);
  return data.publicUrl;
}
