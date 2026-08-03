import 'server-only';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { userRoles, rolePermissions, permissions } from '@/lib/db/schema';

/** Devuelve el set de slugs de permisos que tiene un usuario (union de todos sus roles). */
export async function getUserPermissions(userId: string): Promise<Set<string>> {
  const rows = await db
    .select({ slug: permissions.slug })
    .from(userRoles)
    .innerJoin(rolePermissions, eq(rolePermissions.roleId, userRoles.roleId))
    .innerJoin(permissions, eq(permissions.id, rolePermissions.permissionId))
    .where(eq(userRoles.userId, userId));

  return new Set(rows.map((r) => r.slug));
}

export function can(permissionSet: Set<string>, slug: string): boolean {
  return permissionSet.has(slug);
}
