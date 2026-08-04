'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Menu,
  MessageCircle,
  House,
  ShoppingBag,
  Heart,
  Images,
  Newspaper,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavbarSearch } from '@/components/layout/navbar-search';
import { CartDrawer } from '@/components/marketing/cart-drawer';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

const NAV_LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/', label: 'Inicio', icon: House },
  { href: '/catalogo', label: 'Catálogo', icon: ShoppingBag },
  { href: '/nosotros', label: 'Nosotros', icon: Heart },
  { href: '/galeria', label: 'Galería', icon: Images },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/contacto', label: 'Contacto', icon: Phone },
];

export function Header({ configuracion }: { configuracion: Configuracion | null }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

          <CartDrawer whatsapp={configuracion?.whatsapp} />

          <Button
            asChild
            size="sm"
            className="hidden bg-brand-primary text-foreground hover:bg-brand-primary-hover sm:inline-flex"
          >
            <a href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Escríbenos
            </a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-80 flex-col gap-0 bg-background p-0">
              <SheetHeader className="border-b bg-background px-6 py-5">
                <SheetTitle asChild>
                  <Image
                    src="/logomaleante.png"
                    alt={siteConfig.name}
                    width={160}
                    height={88}
                    className="h-10 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1.5 overflow-y-auto p-4">
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                        active
                          ? 'bg-brand-primary text-foreground shadow-sm'
                          : 'text-foreground/80 hover:bg-brand-primary/30'
                      )}
                    >
                      <Icon className="size-4.5 shrink-0" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="px-4 pb-2">
                <NavbarSearch
                  containerClassName=""
                  inputClassName="bg-background"
                  onNavigate={() => setMenuOpen(false)}
                />
              </div>

              <div className="mt-auto border-t bg-background p-4">
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
