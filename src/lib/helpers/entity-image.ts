/**
 * Mapa explicito slug -> archivo en /public/imgs. Las fotos se subieron con
 * nombre propio (no siguen un patron por slug), asi que en vez de calcular
 * la ruta se declara acá una por una. Para agregar/cambiar una foto: subir
 * el archivo a public/imgs y agregar (o editar) la entrada correspondiente.
 */
type EntityImageMap = Record<string, string>;

const PRODUCTO_IMAGENES: EntityImageMap = {
  'camisa-personalizada-estampada': '/imgs/camisaPersonalizada.jpeg',
  'set-de-camisas-familiares': '/imgs/Setcamisas.jpeg',
  'taza-sublimada-personalizada': '/imgs/TazasPersonalizadas.jpeg',
  'set-de-tazas-para-pareja': '/imgs/TazasParejas.jpeg',
  'pack-de-stickers-personalizados': '/imgs/PackStickers.jpeg',
  'corona-de-cumpleanos': '/imgs/corona.jpeg',
  'banda-personalizada-de-cumpleanos': '/imgs/banda.png',
  'topper-personalizado-para-pastel': '/imgs/Topper.png',
  'invitaciones-digitales-personalizadas': '/imgs/carta.png',
  'kit-de-decoracion-tematica': '/imgs/kitCumpleanos.jpeg',
  'esfera-personalizada': '/imgs/esfera.jpeg',
  'caja-personalizada': '/imgs/caja.jpeg',
  'globo-decorativo-personalizado': '/imgs/globo.jpeg',
  'cabezon-de-graduacion-personalizado': '/imgs/graduado.jpeg',
  'bolsa-de-regalo-personalizada': '/imgs/bolsa.jpeg',
  'peluche-de-fieltro-personalizado': '/imgs/PelucheFieltro.png',
};

const CATEGORIA_IMAGENES: EntityImageMap = {};
const BLOG_IMAGENES: EntityImageMap = {};
const GALERIA_IMAGENES: EntityImageMap = {};

export function getProductoImagen(slug: string): string | null {
  return PRODUCTO_IMAGENES[slug] ?? null;
}

export function getCategoriaImagen(slug: string): string | null {
  return CATEGORIA_IMAGENES[slug] ?? null;
}

export function getBlogImagen(slug: string): string | null {
  return BLOG_IMAGENES[slug] ?? null;
}

export function getGaleriaImagen(slug: string): string | null {
  return GALERIA_IMAGENES[slug] ?? null;
}
