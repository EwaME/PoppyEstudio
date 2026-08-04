'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavbarSearch } from '@/components/layout/navbar-search';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/galeria', label: 'Galería' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header({ configuracion }: { configuracion: Configuracion | null }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || !isHome;
  const mensajeWhatsapp = 'Hola, quiero cotizar un producto personalizado.';

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'h-16 bg-background/95 shadow-sm backdrop-blur-sm' : 'h-20 bg-transparent'
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logomaleante.png"
            alt={siteConfig.name}
            width={725}
            height={398}
            className={cn('w-auto object-contain transition-all duration-300', solid ? 'h-12' : 'h-16')}
            priority
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary-hover',
                pathname === link.href ? 'text-brand-primary-hover' : 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavbarSearch containerClassName="hidden md:block" inputClassName="w-48 lg:w-64" />

          <Button
            asChild
            size="sm"
            className="hidden bg-brand-primary text-foreground hover:bg-brand-primary-hover sm:inline-flex"
          >
            <a href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Escríbenos
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <NavbarSearch containerClassName="px-4" iconClassName="left-6.5" />
              <div className="mt-auto px-4 pb-4">
                <Button asChild className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover">
                  <a href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Escríbenos
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
