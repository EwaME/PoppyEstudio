/**
 * Siembra el catalogo de permisos (src/lib/rbac/permissions.ts) y crea
 * el rol Administrador con todos los permisos asignados.
 *
 * Uso: pnpm seed:rbac
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { db } from '../src/lib/db';
import { roles, permissions, rolePermissions } from '../src/lib/db/schema';
import { PERMISSIONS } from '../src/lib/rbac/permissions';
import { eq } from 'drizzle-orm';

async function main() {
  console.log('Sembrando permisos...');

  const insertedPermissions = [];
  for (const perm of PERMISSIONS) {
    const [row] = await db
      .insert(permissions)
      .values({ slug: perm.slug, modulo: perm.modulo, accion: perm.accion, label: perm.label })
      .onConflictDoUpdate({
        target: permissions.slug,
        set: { modulo: perm.modulo, accion: perm.accion, label: perm.label },
      })
      .returning();
    insertedPermissions.push(row);
  }
  console.log(`  ${insertedPermissions.length} permisos sembrados.`);

  console.log('Creando rol Administrador...');
  let [adminRole] = await db.select().from(roles).where(eq(roles.nombre, 'Administrador'));
  if (!adminRole) {
    [adminRole] = await db
      .insert(roles)
      .values({ nombre: 'Administrador', descripcion: 'Acceso total al panel' })
      .returning();
  }

  console.log('Asignando todos los permisos al rol Administrador...');
  for (const perm of insertedPermissions) {
    await db
      .insert(rolePermissions)
      .values({ roleId: adminRole.id, permissionId: perm.id })
      .onConflictDoNothing();
  }

  console.log('Listo. Asigna el rol Administrador a tu usuario en la tabla user_roles.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
