import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, Tags, Package, Images, Users, ShieldCheck, History } from 'lucide-react';

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  permission: string; // slug requerido para ver el link (view del modulo)
};

export const ADMIN_NAV: AdminNavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, permission: 'dashboard.view' },
  { label: 'Categorias', href: '/admin/categorias', icon: Tags, permission: 'categorias.view' },
  { label: 'Productos', href: '/admin/productos', icon: Package, permission: 'productos.view' },
  { label: 'Galeria', href: '/admin/galeria', icon: Images, permission: 'galeria.view' },
  { label: 'Usuarios', href: '/admin/usuarios', icon: Users, permission: 'usuarios.view' },
  { label: 'Roles y Permisos', href: '/admin/roles', icon: ShieldCheck, permission: 'roles.view' },
  { label: 'Auditorias', href: '/admin/auditorias', icon: History, permission: 'auditorias.view' },
];
