'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ADMIN_NAV } from '@/config/admin-nav';
import { cn } from '@/lib/utils';

export function AdminSidebar({ permissions }: { permissions: string[] }) {
  const pathname = usePathname();
  const items = ADMIN_NAV.filter((item) => permissions.includes(item.permission));

  return (
    <nav className="flex w-60 flex-col gap-1 border-r bg-sidebar p-4 text-sidebar-foreground">
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
    </nav>
  );
}
