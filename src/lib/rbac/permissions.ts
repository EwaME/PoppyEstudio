/**
 * Catalogo canonico de permisos del panel administrativo.
 * Slug: `<modulo>.<accion>`. `view` = ver la seccion (gatea el sidebar);
 * `create`/`edit`/`deactivate` = acciones granulares dentro de ella.
 * No existe accion de borrado duro — desactivar reemplaza a eliminar.
 *
 * Este catalogo alimenta el seed (scripts/seed-rbac.ts) y el gating del sidebar
 * (src/config/admin-nav.ts). Agregar un permiso nuevo = agregarlo aqui y re-sembrar.
 */

export interface PermissionDef {
  slug: string;
  modulo: string;
  accion: 'view' | 'create' | 'edit' | 'deactivate';
  label: string;
}

const fullCrud = (modulo: string, label: string): PermissionDef[] => [
  { slug: `${modulo}.view`, modulo, accion: 'view', label: `Ver ${label}` },
  { slug: `${modulo}.create`, modulo, accion: 'create', label: `Agregar ${label}` },
  { slug: `${modulo}.edit`, modulo, accion: 'edit', label: `Editar ${label}` },
  { slug: `${modulo}.deactivate`, modulo, accion: 'deactivate', label: `Desactivar ${label}` },
];

const viewOnly = (modulo: string, label: string): PermissionDef[] => [
  { slug: `${modulo}.view`, modulo, accion: 'view', label: `Ver ${label}` },
];

/**
 * Modulos sin ciclo create/deactivate desde el admin: los registros los crea
 * el visitante desde el sitio publico (solicitudes, mensajes de contacto) o
 * la tabla es de fila unica (configuracion). Solo se gestiona view/edit.
 */
const viewEdit = (modulo: string, label: string): PermissionDef[] => [
  { slug: `${modulo}.view`, modulo, accion: 'view', label: `Ver ${label}` },
  { slug: `${modulo}.edit`, modulo, accion: 'edit', label: `Editar ${label}` },
];

export const PERMISSIONS: PermissionDef[] = [
  ...viewOnly('dashboard', 'Dashboard'),
  ...fullCrud('categorias', 'Categorias'),
  ...fullCrud('productos', 'Productos'),
  ...fullCrud('blog_categorias', 'Categorias del Blog'),
  ...fullCrud('blog', 'Articulos del Blog'),
  ...fullCrud('galeria', 'Galeria'),
  ...fullCrud('faq', 'Preguntas Frecuentes'),
  ...viewEdit('solicitudes', 'Solicitudes'),
  ...viewEdit('mensajes_contacto', 'Mensajes de Contacto'),
  ...viewEdit('configuracion', 'Configuracion'),
  ...fullCrud('usuarios', 'Usuarios'),
  ...fullCrud('roles', 'Roles y Permisos'),
  ...viewOnly('auditorias', 'Auditorias'),
];

/** Todos los slugs (para asignar el set completo al rol Administrador). */
export const ALL_PERMISSION_SLUGS = PERMISSIONS.map((p) => p.slug);
