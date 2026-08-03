/**
 * Siembra contenido de ejemplo (categorias, productos, blog, galeria,
 * testimonios, configuracion) para poder ver y probar la landing completa
 * sin esperar carga real de contenido.
 *
 * A diferencia de seed-rbac.ts, este script NO es idempotente: asume DB
 * vacia de contenido y usa slugs UNIQUE — correrlo dos veces falla por
 * violacion de unicidad. Es intencional (bootstrap de una sola vez).
 *
 * Uso: pnpm seed:content
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { db } from '../src/lib/db';
import { categorias, productos } from '../src/lib/db/schema/catalogo';
import { blogCategorias, blogPosts } from '../src/lib/db/schema/blog';
import { galeria } from '../src/lib/db/schema/galeria';
import { testimonios } from '../src/lib/db/schema/clientes';
import { configuracion } from '../src/lib/db/schema/sitio';

function slugify(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Sembrando categorias...');
  const categoriasInsertadas = await db
    .insert(categorias)
    .values([
      { nombre: 'Camisas', slug: 'camisas', descripcion: 'Camisas personalizadas para toda ocasion.', orden: 1 },
      { nombre: 'Tazas', slug: 'tazas', descripcion: 'Tazas sublimadas con tu diseno favorito.', orden: 2 },
      { nombre: 'Stickers', slug: 'stickers', descripcion: 'Stickers personalizados para lo que imagines.', orden: 3 },
      { nombre: 'Coronas', slug: 'coronas', descripcion: 'Coronas de cumpleanos hechas a mano.', orden: 4 },
      { nombre: 'Bandas', slug: 'bandas', descripcion: 'Bandas personalizadas para tu celebracion.', orden: 5 },
      { nombre: 'Toppers', slug: 'toppers', descripcion: 'Toppers para pasteles y postres.', orden: 6 },
      { nombre: 'Papeleria', slug: 'papeleria', descripcion: 'Invitaciones y papeleria para eventos.', orden: 7 },
      { nombre: 'Decoraciones', slug: 'decoraciones', descripcion: 'Decoraciones a la medida para fiestas.', orden: 8 },
    ])
    .returning();
  const idPorSlug = new Map(categoriasInsertadas.map((c) => [c.slug, c.id]));

  console.log('Sembrando productos...');
  const productosData = [
    { categoriaSlug: 'camisas', nombre: 'Camisa personalizada estampada', descripcionCorta: 'Camisa 100% algodon con tu diseno o frase.', precioDesde: 250, tiempoEntrega: '3-5 dias', destacado: true },
    { categoriaSlug: 'camisas', nombre: 'Set de camisas familiares', descripcionCorta: 'Camisas a juego para toda la familia.', precioDesde: 900, tiempoEntrega: '5-7 dias', destacado: false },
    { categoriaSlug: 'tazas', nombre: 'Taza sublimada personalizada', descripcionCorta: 'Taza ceramica con foto o diseno a color.', precioDesde: 180, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'tazas', nombre: 'Set de tazas para pareja', descripcionCorta: 'Dos tazas a juego con diseno personalizado.', precioDesde: 320, tiempoEntrega: '3-4 dias', destacado: false },
    { categoriaSlug: 'stickers', nombre: 'Pack de stickers personalizados', descripcionCorta: 'Set de 12 stickers troquelados con tu diseno.', precioDesde: 150, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'coronas', nombre: 'Corona de cumpleanos', descripcionCorta: 'Corona artesanal con el nombre y edad.', precioDesde: 220, tiempoEntrega: '3-5 dias', destacado: true },
    { categoriaSlug: 'bandas', nombre: 'Banda personalizada de cumpleanos', descripcionCorta: 'Banda satinada con frase o nombre bordado.', precioDesde: 190, tiempoEntrega: '3-4 dias', destacado: false },
    { categoriaSlug: 'toppers', nombre: 'Topper personalizado para pastel', descripcionCorta: 'Topper en acrilico o madera con tu tema.', precioDesde: 140, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'papeleria', nombre: 'Invitaciones digitales personalizadas', descripcionCorta: 'Invitacion digital lista para compartir por WhatsApp.', precioDesde: 120, tiempoEntrega: '1-2 dias', destacado: false },
    { categoriaSlug: 'decoraciones', nombre: 'Kit de decoracion tematica', descripcionCorta: 'Kit completo de decoracion para tu evento.', precioDesde: 650, tiempoEntrega: '5-7 dias', destacado: true },
  ];
  await db.insert(productos).values(
    productosData.map((p) => ({
      categoriaId: idPorSlug.get(p.categoriaSlug)!,
      nombre: p.nombre,
      slug: slugify(p.nombre),
      descripcionCorta: p.descripcionCorta,
      precioDesde: p.precioDesde,
      tiempoEntrega: p.tiempoEntrega,
      destacado: p.destacado,
    }))
  );

  console.log('Sembrando blog...');
  const [categoriaBlog] = await db
    .insert(blogCategorias)
    .values({ nombre: 'Manualidades', slug: 'manualidades', descripcion: 'Tips de Cricut, sublimacion y manualidades.' })
    .returning();
  await db.insert(blogPosts).values([
    {
      categoriaId: categoriaBlog.id,
      titulo: '5 ideas para personalizar tazas con Cricut',
      slug: '5-ideas-para-personalizar-tazas-con-cricut',
      resumen: 'Te compartimos 5 ideas faciles para darle un toque unico a tus tazas sublimadas.',
      contenido: '# 5 ideas para personalizar tazas\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 4,
      publicado: true,
      fechaPublicacion: new Date('2026-07-20'),
    },
    {
      categoriaId: categoriaBlog.id,
      titulo: 'Como elegir el vinil correcto para camisas',
      slug: 'como-elegir-el-vinil-correcto-para-camisas',
      resumen: 'Guia rapida para elegir el tipo de vinil segun la tela y el diseno.',
      contenido: '# Como elegir el vinil correcto\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 5,
      publicado: true,
      fechaPublicacion: new Date('2026-07-10'),
    },
    {
      categoriaId: categoriaBlog.id,
      titulo: 'Tendencias en decoracion de cumpleanos 2026',
      slug: 'tendencias-en-decoracion-de-cumpleanos-2026',
      resumen: 'Las tendencias que mas estamos viendo este ano en decoracion de fiestas.',
      contenido: '# Tendencias en decoracion de cumpleanos\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 3,
      publicado: true,
      fechaPublicacion: new Date('2026-06-28'),
    },
  ]);

  console.log('Sembrando galeria...');
  await db.insert(galeria).values(
    [
      'Camisas para cumpleanos tematico',
      'Tazas para San Valentin',
      'Corona para quince anos',
      'Set de bienvenida para baby shower',
      'Stickers para emprendimiento local',
      'Decoracion para graduacion',
      // imagenUrl vacio a proposito: la columna es NOT NULL en el schema pero
      // no hay fotos reales todavia — cadena vacia funciona como sentinel
      // "sin foto" (falsy, igual que null en los demas campos imagenUrl).
    ].map((titulo) => ({ titulo, slug: slugify(titulo), imagenUrl: '', destacado: true }))
  );

  console.log('Sembrando testimonios...');
  await db.insert(testimonios).values([
    { nombreCliente: 'Karen Martinez', rol: 'Mama de cumpleanera', texto: 'Todo quedo hermoso, superaron lo que imagine para el cumpleanos de mi hija.', estrellas: 5, destacado: true },
    { nombreCliente: 'Douglas Reyes', rol: 'Organizador de eventos', texto: 'Cumplieron con el tiempo de entrega y la calidad fue excelente.', estrellas: 5, destacado: true },
    { nombreCliente: 'Fatima Lopez', rol: 'Emprendedora', texto: 'Los stickers para mi negocio quedaron exactamente como los pedi.', estrellas: 4, destacado: true },
    { nombreCliente: 'Marlon Ordonez', rol: 'Cliente frecuente', texto: 'Ya es la tercera vez que pido con ellos, siempre buena atencion.', estrellas: 5, destacado: true },
    { nombreCliente: 'Suyapa Banegas', rol: 'Mama de quinceanera', texto: 'La corona y la banda quedaron perfectas para la fiesta.', estrellas: 5, destacado: true },
    { nombreCliente: 'Jorge Castellanos', rol: 'Negocio local', texto: 'Buen precio y buena calidad en las tazas que pedimos para regalar.', estrellas: 4, destacado: true },
  ]);

  console.log('Sembrando configuracion...');
  await db.insert(configuracion).values({
    nombreNegocio: 'Poppy Crafty',
    slogan: 'Detalles personalizados para momentos inolvidables',
    descripcion:
      'Personalizacion de camisas, tazas, stickers y regalos para eventos y celebraciones en Choluteca, Honduras.',
    telefono: '+504 0000-0000',
    email: 'contacto@poppycrafty.com',
    direccion: 'Choluteca, Honduras',
    horario: 'Lunes a sabado, 9:00am - 6:00pm',
    instagram: 'https://www.instagram.com/poppy.crafty?igsh=MWY4OWJzZHRzamtwYw==',
    tiktok: 'https://www.tiktok.com/@poppy.estudio?_r=1&_t=ZS-98aF7Rcl3gH',
    whatsapp: '+504 8819-9499',
  });

  console.log('Listo. Contenido de ejemplo sembrado.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
