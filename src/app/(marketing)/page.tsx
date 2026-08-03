import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { Hero } from '@/components/sections/hero';
import { ProductosDestacados } from '@/components/sections/productos-destacados';
import { Categorias } from '@/components/sections/categorias';
import { Beneficios } from '@/components/sections/beneficios';
import { ComoPedimos } from '@/components/sections/como-pedimos';
import { Galeria } from '@/components/sections/galeria';
import { Blog } from '@/components/sections/blog';
import { Testimonios } from '@/components/sections/testimonios';
import { CTAFinal } from '@/components/sections/cta-final';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Regalos y decoración personalizada en Choluteca`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
  },
};

export default async function HomePage() {
  const configuracion = await getConfiguracion();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: configuracion?.nombreNegocio ?? siteConfig.name,
    description: configuracion?.descripcion ?? siteConfig.description,
    telephone: configuracion?.telefono ?? undefined,
    email: configuracion?.email ?? undefined,
    address: configuracion?.direccion ?? undefined,
    url: siteConfig.url,
  };

  return (
    <>
      {/* Datos estructurados de negocio local (SRS §60) — contenido server-side, no input de usuario. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero configuracion={configuracion} />
      <ProductosDestacados />
      <Categorias />
      <Beneficios />
      <ComoPedimos />
      <Galeria />
      <Blog />
      <Testimonios />
      <CTAFinal configuracion={configuracion} />
    </>
  );
}
