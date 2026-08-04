'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LogOut, Menu, PanelLeftClose, Store, type LucideIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ADMIN_NAV } from '@/config/admin-nav';
import { cn } from '@/lib/utils';
import { logoutAction } from '@/app/(admin)/logout-action';

type NavItem = { href: string; label: string; icon: LucideIcon };

type Props = {
  permissions: string[];
  displayName: string;
  email: string | null;
};

const COLLAPSE_KEY = 'admin-sidebar-collapsed';

function NavLinks({
  items,
  pathname,
  collapsed,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  return (
    <>
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            title={collapsed ? item.label : undefined}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
              collapsed && 'justify-center px-0',
              active
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            <Icon className="size-4 shrink-0" />
            {!collapsed && item.label}
          </Link>
        );
      })}
    </>
  );
}

function UserFooter({ displayName, email, collapsed }: { displayName: string; email: string | null; collapsed: boolean }) {
  return (
    <div className={cn('flex items-center gap-2 border-t p-4', collapsed && 'flex-col gap-2 px-2 py-3')}>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-foreground">
        {displayName.charAt(0).toUpperCase()}
      </div>
      {!collapsed && (
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{displayName}</p>
          {email && <p className="truncate text-xs text-muted-foreground">{email}</p>}
        </div>
      )}
      <form action={logoutAction}>
        <button
          type="submit"
          aria-label="Cerrar sesion"
          title={collapsed ? 'Cerrar sesion' : undefined}
          className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-destructive"
        >
          <LogOut className="size-4" />
        </button>
      </form>
    </div>
  );
}

export function AdminSidebar({ permissions, displayName, email }: Props) {
  const pathname = usePathname();
  const items = ADMIN_NAV.filter((item) => permissions.includes(item.permission));
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // SSR no tiene localStorage — el efecto evita mismatch de hydration leyendo la preferencia tras montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCollapsed(localStorage.getItem(COLLAPSE_KEY) === 'true');
  }, []);

  function toggleCollapsed() {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem(COLLAPSE_KEY, String(next));
      return next;
    });
  }

  return (
    <>
      {/* Barra superior + drawer — solo mobile */}
      <div className="flex items-center justify-between gap-2 border-b bg-sidebar p-3 text-sidebar-foreground md:hidden">
        <Image src="/logomaleante.png" alt="Poppy Crafty" width={140} height={77} className="h-9 w-auto object-contain" />
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menu"
              className="flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="flex w-72 flex-col bg-sidebar p-0 text-sidebar-foreground">
            <SheetHeader className="border-b">
              <SheetTitle asChild>
                <Image src="/logomaleante.png" alt="Poppy Crafty" width={180} height={99} className="h-11 w-auto object-contain" />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              <NavLinks items={items} pathname={pathname} collapsed={false} onNavigate={() => setMobileOpen(false)} />
            </div>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 border-t px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              <Store className="size-4 shrink-0" /> Volver a la tienda
            </Link>
            <UserFooter displayName={displayName} email={email} collapsed={false} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar fija — desktop */}
      <nav
        className={cn(
          'hidden flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200 md:flex',
          collapsed ? 'w-16' : 'w-60'
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b p-4">
          {!collapsed && (
            <Image
              src="/logomaleante.png"
              alt="Poppy Crafty"
              width={180}
              height={99}
              className="h-11.25 w-auto object-contain"
            />
          )}
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
            className={cn(
              'flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground',
              collapsed && 'mx-auto h-auto w-10'
            )}
          >
            {collapsed ? (
              <Image
                src="/logomaleante.png"
                alt="Expandir sidebar"
                width={140}
                height={77}
                className="w-10 object-contain"
              />
            ) : (
              <PanelLeftClose className="size-4" />
            )}
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          <NavLinks items={items} pathname={pathname} collapsed={collapsed} />
        </div>

        <Link
          href="/"
          title={collapsed ? 'Volver a la tienda' : undefined}
          className={cn(
            'flex items-center gap-2 border-t px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground',
            collapsed && 'justify-center px-0'
          )}
        >
          <Store className="size-4 shrink-0" />
          {!collapsed && 'Volver a la tienda'}
        </Link>

        <UserFooter displayName={displayName} email={email} collapsed={collapsed} />
      </nav>
    </>
  );
}
