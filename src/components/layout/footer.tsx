import Link from 'next/link';
import { ExternalLink, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import type { Configuracion } from '@/lib/db/queries/configuracion';
import type { CategoriaConConteo } from '@/lib/db/queries/categorias';

export function Footer({
  configuracion,
  categorias,
}: {
  configuracion: Configuracion | null;
  categorias: CategoriaConConteo[];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-brand-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-heading text-lg font-bold text-brand-primary-hover">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{configuracion?.descripcion ?? siteConfig.description}</p>
          <div className="flex gap-3 pt-1">
            {configuracion?.facebook && (
              <a
                href={configuracion.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-brand-primary-hover"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
            {configuracion?.instagram && (
              <a
                href={configuracion.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-brand-primary-hover"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-heading text-sm font-semibold">Enlaces</p>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-brand-primary-hover">Inicio</Link>
            <Link href="/catalogo" className="hover:text-brand-primary-hover">Catálogo</Link>
            <Link href="/blog" className="hover:text-brand-primary-hover">Blog</Link>
            <Link href="/galeria" className="hover:text-brand-primary-hover">Galería</Link>
          </nav>
        </div>

        <div className="space-y-2">
          <p className="font-heading text-sm font-semibold">Categorías</p>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            {categorias.slice(0, 6).map((categoria) => (
              <Link
                key={categoria.id}
                href={`/catalogo?categoria=${categoria.slug}`}
                className="hover:text-brand-primary-hover"
              >
                {categoria.nombre}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-heading text-sm font-semibold text-foreground">Contacto</p>
          {configuracion?.direccion && (
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" /> {configuracion.direccion}
            </p>
          )}
          {configuracion?.telefono && (
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> {configuracion.telefono}
            </p>
          )}
          {configuracion?.email && (
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> {configuracion.email}
            </p>
          )}
          {configuracion?.horario && (
            <p className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" /> {configuracion.horario}
            </p>
          )}
        </div>
      </div>

      <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground sm:px-8">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados. ·{' '}
          <Link href="#" className="hover:text-brand-primary-hover">Políticas de privacidad</Link>
        </p>
      </div>
    </footer>
  );
}
