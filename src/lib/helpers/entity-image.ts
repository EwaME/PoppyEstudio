/**
 * Convencion de fotos "quemadas" en /public/imgs: sin DB ni upload, el
 * archivo se sube directo a la carpeta con el nombre del slug y aparece
 * solo — si no existe todavia, el componente EntityImage cae al placeholder.
 */
export type EntityImageTipo = 'productos' | 'categorias' | 'blog' | 'galeria';

export function entityImagePath(tipo: EntityImageTipo, slug: string) {
  return `/imgs/${tipo}/${slug}.jpg`;
}
