/** Arma un link wa.me a partir del numero guardado en `configuracion` (puede traer formato humano, ej. "+504 0000-0000"). */
export function whatsappHref(numero: string | null | undefined, mensaje: string) {
  const digits = (numero ?? '').replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(mensaje)}`;
}
