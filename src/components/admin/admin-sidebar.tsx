'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, LogOut } from 'lucide-react';
import { ADMIN_NAV } from '@/config/admin-nav';
import { cn } from '@/lib/utils';
import { logoutAction } from '@/app/(admin)/logout-action';

type Props = {
  permissions: string[];
  displayName: string;
  email: string | null;
};

export function AdminSidebar({ permissions, displayName, email }: Props) {
  const pathname = usePathname();
  const items = ADMIN_NAV.filter((item) => permissions.includes(item.permission));

  return (
    <nav className="flex w-60 flex-col border-r bg-sidebar text-sidebar-foreground">
      <Link
        href="/"
        className="flex items-center gap-2 border-b px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Volver a la tienda
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                active
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-t p-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-foreground">
          {displayName.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{displayName}</p>
          {email && <p className="truncate text-xs text-muted-foreground">{email}</p>}
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            aria-label="Cerrar sesion"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-destructive"
          >
            <LogOut className="size-4" />
          </button>
        </form>
      </div>
    </nav>
  );
}
