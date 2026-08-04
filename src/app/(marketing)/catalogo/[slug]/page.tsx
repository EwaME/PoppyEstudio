import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { EntityImage } from '@/components/shared/entity-image';
import { ProductCard } from '@/components/marketing/product-card';
import { AddToCart } from '@/components/marketing/add-to-cart';
import { getProductoDetalle, getProductoOpciones, getProductosRelacionados } from '@/lib/db/queries/productos';
import { getFaqProducto } from '@/lib/db/queries/faq';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { getCategoryIcon } from '@/lib/helpers/category-icons';
import { getProductoImagen } from '@/lib/helpers/entity-image';
import { whatsappHref } from '@/lib/helpers/whatsapp';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const producto = await getProductoDetalle(slug);
  if (!producto) return {};

  return {
    title: producto.seoTitle || `${producto.nombre} | Poppy Crafty`,
    description: producto.seoDescription || producto.descripcionCorta || undefined,
  };
}

export default async function ProductoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = await getProductoDetalle(slug);
  if (!producto) notFound();

  const [opciones, faqs, relacionados, configuracion] = await Promise.all([
    getProductoOpciones(producto.id),
    getFaqProducto(producto.id),
    getProductosRelacionados(producto.id),
    getConfiguracion(),
  ]);

  const Icon = getCategoryIcon(producto.categoriaSlug);
  const imagen = getProductoImagen(producto.slug);
  const mensajeWhatsapp = `Hola, quiero cotizar: ${producto.nombre}.`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-brand-primary-hover">Inicio</Link>
        <ChevronRight className="size-3.5" />
        <Link href="/catalogo" className="hover:text-brand-primary-hover">Catálogo</Link>
        <ChevronRight className="size-3.5" />
        <Link href={`/catalogo?categoria=${producto.categoriaSlug}`} className="hover:text-brand-primary-hover">
          {producto.categoriaNombre}
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground">{producto.nombre}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        {imagen ? (
          <EntityImage
            src={imagen}
            label={producto.nombre}
            className="aspect-square w-full rounded-2xl"
            fallback={<ImagePlaceholder icon={Icon} label={producto.nombre} className="aspect-square w-full rounded-2xl" />}
          />
        ) : (
          <ImagePlaceholder icon={Icon} label={producto.nombre} className="aspect-square w-full rounded-2xl" />
        )}

        <div className="space-y-5">
          <div className="space-y-2">
            <Badge variant="outline">{producto.categoriaNombre}</Badge>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">{producto.nombre}</h1>
            {producto.descripcionCorta && <p className="text-lg text-muted-foreground">{producto.descripcionCorta}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="font-heading text-2xl font-semibold">
              {producto.precioDesde != null ? `Desde L. ${producto.precioDesde.toFixed(2)}` : 'Precio a cotizar'}
            </p>
            {producto.tiempoEntrega && (
              <Badge variant="secondary">Entrega: {producto.tiempoEntrega}</Badge>
            )}
          </div>

          {opciones.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Opciones disponibles</p>
              <div className="flex flex-wrap gap-2">
                {opciones.map((opcion) => (
                  <Badge key={opcion.id} variant="outline">
                    {opcion.nombre}: {opcion.valor}
                    {opcion.incrementoPrecio > 0 && ` (+L. ${opcion.incrementoPrecio.toFixed(2)})`}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {producto.descripcion && (
            <p className="whitespace-pre-line text-muted-foreground">{producto.descripcion}</p>
          )}

          <Button asChild size="lg" className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover sm:w-auto">
            <a
              href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle /> Cotizar este producto por WhatsApp
            </a>
          </Button>

          <AddToCart slug={producto.slug} nombre={producto.nombre} precioDesde={producto.precioDesde} />
        </div>
      </div>

      {faqs.length > 0 && (
        <section className="mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.id}>
                <p className="font-heading font-semibold">{item.pregunta}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {relacionados.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold">Productos relacionados</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relacionados.map((relacionado) => (
              <ProductCard key={relacionado.id} producto={relacionado} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
