/**
 * Agrega categorias y productos nuevos sin tocar el contenido ya sembrado.
 * A diferencia de seed-content.ts, este script SI es idempotente
 * (onConflictDoNothing por slug) — se puede correr mas de una vez sin
 * duplicar ni fallar si ya existe parte del contenido.
 *
 * Uso: pnpm tsx scripts/seed-content-add-productos.ts
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { inArray } from 'drizzle-orm';
import { db } from '../src/lib/db';
import { categorias, productos } from '../src/lib/db/schema/catalogo';

function slugify(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Sembrando categorias nuevas...');
  const categoriasData = [
    { nombre: 'Esferas', slug: 'esferas', descripcion: 'Esferas decorativas personalizadas.', orden: 9 },
    { nombre: 'Cajas', slug: 'cajas', descripcion: 'Cajas personalizadas para regalos y eventos.', orden: 10 },
    { nombre: 'Globos Decorativos', slug: 'globos-decorativos', descripcion: 'Globos decorativos personalizados para toda ocasion.', orden: 11 },
    { nombre: 'Cabezones Graduados', slug: 'cabezones-graduados', descripcion: 'Cabezones personalizados para graduaciones.', orden: 12 },
    { nombre: 'Bolsas de Regalo', slug: 'bolsas-de-regalo', descripcion: 'Bolsas de regalo personalizadas para cualquier ocasion.', orden: 13 },
    { nombre: 'Peluches de Fieltro', slug: 'peluches-de-fieltro', descripcion: 'Peluches de fieltro hechos a mano.', orden: 14 },
  ];
  await db.insert(categorias).values(categoriasData).onConflictDoNothing({ target: categorias.slug });

  const categoriasActuales = await db
    .select()
    .from(categorias)
    .where(inArray(categorias.slug, categoriasData.map((c) => c.slug)));
  const idPorSlug = new Map(categoriasActuales.map((c) => [c.slug, c.id]));

  console.log('Sembrando productos nuevos (placeholders, sin foto todavia)...');
  const productosData = [
    { categoriaSlug: 'esferas', nombre: 'Esfera personalizada', descripcionCorta: 'Esfera decorativa con nombre o diseno a tu gusto.', precioDesde: 150, tiempoEntrega: '3-5 dias', destacado: false },
    { categoriaSlug: 'cajas', nombre: 'Caja personalizada', descripcionCorta: 'Caja de regalo personalizada para tu evento.', precioDesde: 130, tiempoEntrega: '2-4 dias', destacado: false },
    { categoriaSlug: 'globos-decorativos', nombre: 'Globo decorativo personalizado', descripcionCorta: 'Globo con diseno o frase para decorar tu celebracion.', precioDesde: 90, tiempoEntrega: '2-3 dias', destacado: false },
    { categoriaSlug: 'cabezones-graduados', nombre: 'Cabezon de graduacion personalizado', descripcionCorta: 'Cabezon con la foto del graduado en tamano real.', precioDesde: 280, tiempoEntrega: '3-5 dias', destacado: false },
    { categoriaSlug: 'bolsas-de-regalo', nombre: 'Bolsa de regalo personalizada', descripcionCorta: 'Bolsa de regalo con diseno o frase a tu gusto.', precioDesde: 70, tiempoEntrega: '1-3 dias', destacado: false },
    { categoriaSlug: 'peluches-de-fieltro', nombre: 'Peluche de fieltro personalizado', descripcionCorta: 'Peluche hecho a mano en fieltro, a tu gusto.', precioDesde: 180, tiempoEntrega: '4-6 dias', destacado: false },
  ];
  await db
    .insert(productos)
    .values(
      productosData.map((p) => ({
        categoriaId: idPorSlug.get(p.categoriaSlug)!,
        nombre: p.nombre,
        slug: slugify(p.nombre),
        descripcionCorta: p.descripcionCorta,
        precioDesde: p.precioDesde,
        tiempoEntrega: p.tiempoEntrega,
        destacado: p.destacado,
      }))
    )
    .onConflictDoNothing({ target: productos.slug });

  console.log('Listo. Categorias y productos nuevos sembrados (o ya existian).');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
