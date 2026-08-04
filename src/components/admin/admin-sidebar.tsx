'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowLeft, LogOut, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ADMIN_NAV } from '@/config/admin-nav';
import { cn } from '@/lib/utils';
import { logoutAction } from '@/app/(admin)/logout-action';

type Props = {
  permissions: string[];
  displayName: string;
  email: string | null;
};

const COLLAPSE_KEY = 'admin-sidebar-collapsed';

export function AdminSidebar({ permissions, displayName, email }: Props) {
  const pathname = usePathname();
  const items = ADMIN_NAV.filter((item) => permissions.includes(item.permission));
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
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
    <nav
      className={cn(
        'flex flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200',
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
            className="h-14 w-auto object-contain"
          />
        )}
        <button
          type="button"
          onClick={toggleCollapsed}
          aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground',
            collapsed && 'mx-auto'
          )}
        >
          {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
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
      </div>

      <Link
        href="/"
        title={collapsed ? 'Volver a la tienda' : undefined}
        className={cn(
          'flex items-center gap-2 border-t px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground',
          collapsed && 'justify-center px-0'
        )}
      >
        <ArrowLeft className="size-4 shrink-0" />
        {!collapsed && 'Volver a la tienda'}
      </Link>

      <div
        className={cn(
          'flex items-center gap-2 border-t p-4',
          collapsed && 'flex-col gap-2 px-2 py-3'
        )}
      >
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
    </nav>
  );
}
