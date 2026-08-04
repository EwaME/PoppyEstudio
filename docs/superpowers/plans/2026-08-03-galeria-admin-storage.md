# Panel Admin de Galeria + Storage + Flip Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modulo CRUD admin para `/admin/galeria` que sube fotos al bucket publico de Supabase Storage `galeria` (en vez de rutas quemadas), y la galeria publica pasa de grid+modal a tarjetas estilo polaroid que giran (flip) al hacer click, mostrando titulo+descripcion en el reverso.

**Architecture:** Sigue el patron CRUD ya establecido en `src/app/(admin)/admin/productos/` (page.tsx guard+fetch → client.tsx tabla+dialog → actions.ts server actions con RBAC+zod+audit+revalidate). La subida de archivo ocurre server-side dentro del Server Action usando `createAdminClient()` (service role, bypassa RLS de Storage) — el cliente solo manda un `FormData` con el `File` + campos de texto.

**Tech Stack:** Next.js 16 App Router, Drizzle ORM, Zod, react-hook-form, `@supabase/supabase-js` (service role) para Storage. Sin test runner configurado en el proyecto (no hay jest/vitest — mismo estado que el modulo de Productos, que tampoco tiene tests): la verificacion de cada tarea es `tsc --noEmit` + prueba manual en el navegador, no TDD con test runner.

---

### Task 1: Permitir el host de Supabase Storage en `next/image`

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Agregar `remotePatterns` derivado de `NEXT_PUBLIC_SUPABASE_URL`**

Reemplazar el contenido completo de `next.config.ts`:

```ts
import type { NextConfig } from "next";

const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseHost
      ? [
          {
            protocol: 'https',
            hostname: supabaseHost,
            pathname: '/storage/v1/object/public/**',
          },
        ]
      : [],
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verificar que el proyecto sigue tipando bien**

Run: `npx tsc --noEmit -p .`
Expected: sin errores nuevos.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: permitir imagenes remotas del bucket de Supabase Storage"
```

---

### Task 2: Schema de validacion Zod para galeria

**Files:**
- Create: `src/lib/validations/galeria.ts`

- [ ] **Step 1: Crear el schema**

```ts
import { z } from 'zod';

export const galeriaSchema = z.object({
  titulo: z.string().min(2, 'Minimo 2 caracteres').max(150).trim(),
  slug: z
    .string()
    .min(2)
    .max(180)
    .regex(/^[a-z0-9-]+$/, 'Solo minusculas, numeros y guiones'),
  descripcion: z.string().max(1000).optional(),
  categoria: z.string().max(80).optional(),
  destacado: z.boolean().default(false),
});

export type GaleriaInput = z.infer<typeof galeriaSchema>;
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/lib/validations/galeria.ts
git commit -m "feat: schema zod para piezas de galeria"
```

---

### Task 3: Helper de subida a Supabase Storage

**Files:**
- Create: `src/lib/supabase/storage.ts`

- [ ] **Step 1: Crear el helper de subida**

```ts
import 'server-only';
import { createAdminClient } from './admin';

const BUCKET = 'galeria';
const MAX_BYTES = 5 * 1024 * 1024;
const TIPOS_PERMITIDOS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

/**
 * Sube una imagen al bucket publico `galeria` y devuelve su URL publica.
 * Corre siempre server-side (service role) — el bucket no necesita policies
 * de escritura para el cliente porque nunca sube directo desde el browser.
 */
export async function uploadGaleriaImagen(file: File): Promise<string> {
  const extension = TIPOS_PERMITIDOS[file.type];
  if (!extension) {
    throw new Error('Formato de imagen no soportado. Usa JPG, PNG o WEBP.');
  }
  if (file.size > MAX_BYTES) {
    throw new Error('La imagen supera el tamano maximo de 5MB.');
  }

  const nombreArchivo = `${crypto.randomUUID()}.${extension}`;
  const supabase = createAdminClient();

  const { error } = await supabase.storage.from(BUCKET).upload(nombreArchivo, file, {
    contentType: file.type,
    cacheControl: '3600',
  });
  if (error) throw new Error(`Error al subir imagen: ${error.message}`);

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(nombreArchivo);
  return data.publicUrl;
}
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/lib/supabase/storage.ts
git commit -m "feat: helper de subida de imagenes al bucket de galeria"
```

---

### Task 4: Queries CRUD de galeria

**Files:**
- Modify: `src/lib/db/queries/galeria.ts` (reemplazar contenido completo)

- [ ] **Step 1: Agregar funciones CRUD manteniendo las existentes**

```ts
import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { galeria } from '@/lib/db/schema';
import type { GaleriaInput } from '@/lib/validations/galeria';

export async function getGaleriaDestacada(limit = 6) {
  return db
    .select()
    .from(galeria)
    .where(and(eq(galeria.destacado, true), eq(galeria.activo, true)))
    .orderBy(desc(galeria.createdAt))
    .limit(limit);
}

export async function getGaleriaActiva() {
  return db.select().from(galeria).where(eq(galeria.activo, true)).orderBy(desc(galeria.createdAt));
}

export async function getGaleriaTodas() {
  return db.select().from(galeria).orderBy(desc(galeria.createdAt));
}

export async function getGaleriaPiezaById(id: string) {
  const [row] = await db.select().from(galeria).where(eq(galeria.id, id)).limit(1);
  return row ?? null;
}

export async function createGaleriaPieza(data: GaleriaInput & { imagenUrl: string }) {
  const [row] = await db.insert(galeria).values(data).returning();
  return row;
}

export async function updateGaleriaPieza(
  id: string,
  data: Partial<GaleriaInput & { imagenUrl: string }>
) {
  const [row] = await db
    .update(galeria)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export async function deactivateGaleriaPieza(id: string) {
  const [row] = await db
    .update(galeria)
    .set({ activo: false, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export async function activateGaleriaPieza(id: string) {
  const [row] = await db
    .update(galeria)
    .set({ activo: true, updatedAt: new Date() })
    .where(eq(galeria.id, id))
    .returning();
  return row;
}

export type GaleriaPieza = Awaited<ReturnType<typeof getGaleriaDestacada>>[number];
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/lib/db/queries/galeria.ts
git commit -m "feat: queries CRUD para galeria"
```

---

### Task 5: Entrada de Galeria en el sidebar admin

**Files:**
- Modify: `src/config/admin-nav.ts`

- [ ] **Step 1: Agregar icono `Images` y el item de nav**

Reemplazar el archivo completo:

```ts
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
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/config/admin-nav.ts
git commit -m "feat: agregar Galeria al sidebar admin"
```

---

### Task 6: Server Actions de galeria

**Files:**
- Create: `src/app/(admin)/admin/galeria/actions.ts`

- [ ] **Step 1: Crear las 4 server actions (create/update/deactivate/activate)**

```ts
'use server';

import { revalidatePath } from 'next/cache';
import { requirePermission } from '@/lib/rbac/require-permission';
import {
  createGaleriaPieza,
  updateGaleriaPieza,
  deactivateGaleriaPieza,
  activateGaleriaPieza,
  getGaleriaPiezaById,
} from '@/lib/db/queries/galeria';
import { uploadGaleriaImagen } from '@/lib/supabase/storage';
import { galeriaSchema } from '@/lib/validations/galeria';
import { logAudit } from '@/lib/audit/log-audit';
import type { ActionResult } from '@/types';

function parseFormData(formData: FormData) {
  return {
    titulo: String(formData.get('titulo') ?? ''),
    slug: String(formData.get('slug') ?? ''),
    descripcion: String(formData.get('descripcion') ?? '') || undefined,
    categoria: String(formData.get('categoria') ?? '') || undefined,
    destacado: formData.get('destacado') === 'true',
  };
}

export async function createGaleriaPiezaAction(formData: FormData): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.create');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = galeriaSchema.safeParse(parseFormData(formData));
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  const archivo = formData.get('imagen');
  if (!(archivo instanceof File) || archivo.size === 0) {
    return { success: false, error: 'Selecciona una imagen.' };
  }

  try {
    const imagenUrl = await uploadGaleriaImagen(archivo);
    const pieza = await createGaleriaPieza({ ...result.data, imagenUrl });
    await logAudit(auth.userId, 'CREAR_GALERIA', 'galeria', pieza.id, {
      entidad: result.data.titulo,
      despues: result.data,
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('createGaleriaPiezaAction error:', error);
    const message = error instanceof Error ? error.message : 'Error al crear la pieza de galeria.';
    return { success: false, error: message };
  }
}

export async function updateGaleriaPiezaAction(
  id: string,
  formData: FormData
): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  const result = galeriaSchema.safeParse(parseFormData(formData));
  if (!result.success) return { success: false, error: 'Datos de formulario invalidos.' };

  try {
    const antes = await getGaleriaPiezaById(id);
    const archivo = formData.get('imagen');
    const imagenUrl =
      archivo instanceof File && archivo.size > 0 ? await uploadGaleriaImagen(archivo) : undefined;

    await updateGaleriaPieza(id, { ...result.data, ...(imagenUrl ? { imagenUrl } : {}) });
    await logAudit(auth.userId, 'EDITAR_GALERIA', 'galeria', id, {
      entidad: result.data.titulo,
      antes: antes ? { titulo: antes.titulo } : undefined,
      despues: { titulo: result.data.titulo },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('updateGaleriaPiezaAction error:', error);
    const message = error instanceof Error ? error.message : 'Error al actualizar la pieza de galeria.';
    return { success: false, error: message };
  }
}

export async function deactivateGaleriaPiezaAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.deactivate');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getGaleriaPiezaById(id);
    await deactivateGaleriaPieza(id);
    await logAudit(auth.userId, 'DESACTIVAR_GALERIA', 'galeria', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: true },
      despues: { activo: false },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('deactivateGaleriaPiezaAction error:', error);
    return { success: false, error: 'Error al desactivar la pieza de galeria.' };
  }
}

export async function activateGaleriaPiezaAction(id: string): Promise<ActionResult<void>> {
  const auth = await requirePermission('galeria.edit');
  if (!auth.ok) return { success: false, error: auth.error };

  try {
    const antes = await getGaleriaPiezaById(id);
    await activateGaleriaPieza(id);
    await logAudit(auth.userId, 'ACTIVAR_GALERIA', 'galeria', id, {
      entidad: antes?.titulo ?? id,
      antes: { activo: false },
      despues: { activo: true },
    });
    revalidatePath('/admin/galeria');
    revalidatePath('/galeria');
    return { success: true, data: undefined };
  } catch (error) {
    console.error('activateGaleriaPiezaAction error:', error);
    return { success: false, error: 'Error al activar la pieza de galeria.' };
  }
}
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores (fallara hasta Task 8 porque `ActionResult`, `logAudit`, etc ya existen — este archivo no depende de nada nuevo sin crear, deberia pasar solo).

- [ ] **Step 3: Commit**

```bash
git add "src/app/(admin)/admin/galeria/actions.ts"
git commit -m "feat: server actions CRUD de galeria con subida a storage"
```

---

### Task 7: Page.tsx del modulo admin

**Files:**
- Create: `src/app/(admin)/admin/galeria/page.tsx`
- Create: `src/app/(admin)/admin/galeria/loading.tsx`

- [ ] **Step 1: Crear `page.tsx`**

```tsx
import type { Metadata } from 'next';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';
import { getGaleriaTodas } from '@/lib/db/queries/galeria';
import { GaleriaAdminClient } from './galeria-client';

export const metadata: Metadata = { title: 'Galeria' };

export default async function GaleriaAdminPage() {
  const { permissions } = await requirePagePermission('galeria.view');
  const piezas = await getGaleriaTodas();

  return <GaleriaAdminClient piezas={piezas} permissions={[...permissions]} />;
}
```

- [ ] **Step 2: Crear `loading.tsx`**

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
```

- [ ] **Step 3: Commit** (fallara el build hasta Task 8 porque falta `galeria-client.tsx` — normal, se commitea junto en la practica; si se ejecuta task por task, hacer commit combinado con Task 8)

```bash
git add "src/app/(admin)/admin/galeria/page.tsx" "src/app/(admin)/admin/galeria/loading.tsx"
git commit -m "feat: page y loading skeleton del admin de galeria"
```

---

### Task 8: Client component del modulo admin (tabla + modal)

**Files:**
- Create: `src/app/(admin)/admin/galeria/galeria-client.tsx`

- [ ] **Step 1: Crear el componente**

```tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { galeriaSchema, type GaleriaInput } from '@/lib/validations/galeria';
import {
  createGaleriaPiezaAction,
  updateGaleriaPiezaAction,
  deactivateGaleriaPiezaAction,
  activateGaleriaPiezaAction,
} from './actions';

type GaleriaPieza = {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string | null;
  imagenUrl: string;
  categoria: string | null;
  destacado: boolean;
  activo: boolean;
};

type Props = {
  piezas: GaleriaPieza[];
  permissions: string[];
};

const DEFAULT_VALUES: GaleriaInput = {
  titulo: '',
  slug: '',
  descripcion: '',
  categoria: '',
  destacado: false,
};

export function GaleriaAdminClient({ piezas, permissions }: Props) {
  const can = (slug: string) => permissions.includes(slug);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GaleriaPieza | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);

  const form = useForm<GaleriaInput>({
    resolver: zodResolver(galeriaSchema),
    defaultValues: DEFAULT_VALUES,
  });

  function openCreate() {
    setEditing(null);
    setArchivo(null);
    form.reset(DEFAULT_VALUES);
    setOpen(true);
  }

  function openEdit(pieza: GaleriaPieza) {
    setEditing(pieza);
    setArchivo(null);
    form.reset({
      titulo: pieza.titulo,
      slug: pieza.slug,
      descripcion: pieza.descripcion ?? '',
      categoria: pieza.categoria ?? '',
      destacado: pieza.destacado,
    });
    setOpen(true);
  }

  async function onSubmit(values: GaleriaInput) {
    if (!editing && !archivo) {
      toast.error('Selecciona una imagen.');
      return;
    }

    const formData = new FormData();
    formData.set('titulo', values.titulo);
    formData.set('slug', values.slug);
    formData.set('descripcion', values.descripcion ?? '');
    formData.set('categoria', values.categoria ?? '');
    formData.set('destacado', String(values.destacado));
    if (archivo) formData.set('imagen', archivo);

    const result = editing
      ? await updateGaleriaPiezaAction(editing.id, formData)
      : await createGaleriaPiezaAction(formData);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(editing ? 'Foto actualizada.' : 'Foto agregada.');
    setOpen(false);
  }

  async function onToggleActivo(pieza: GaleriaPieza) {
    const result = pieza.activo
      ? await deactivateGaleriaPiezaAction(pieza.id)
      : await activateGaleriaPiezaAction(pieza.id);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(pieza.activo ? 'Foto desactivada.' : 'Foto activada.');
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Galeria</h1>
        {can('galeria.create') && <Button onClick={openCreate}>Nueva foto</Button>}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Foto</TableHead>
              <TableHead>Titulo</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Destacado</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {piezas.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  Sin fotos registradas.
                </TableCell>
              </TableRow>
            )}
            {piezas.map((pieza) => (
              <TableRow key={pieza.id}>
                <TableCell>
                  {pieza.imagenUrl ? (
                    <Image
                      src={pieza.imagenUrl}
                      alt={pieza.titulo}
                      width={48}
                      height={48}
                      className="size-12 rounded object-cover"
                    />
                  ) : (
                    <div className="flex size-12 items-center justify-center rounded bg-muted">
                      <Camera className="size-5 text-muted-foreground" />
                    </div>
                  )}
                </TableCell>
                <TableCell>{pieza.titulo}</TableCell>
                <TableCell>{pieza.categoria ?? '—'}</TableCell>
                <TableCell>{pieza.destacado ? 'Si' : 'No'}</TableCell>
                <TableCell>
                  <Badge variant={pieza.activo ? 'default' : 'secondary'}>
                    {pieza.activo ? 'Activo' : 'Inactivo'}
                  </Badge>
                </TableCell>
                <TableCell className="flex justify-end gap-2 text-right">
                  {can('galeria.edit') && (
                    <Button variant="outline" size="sm" onClick={() => openEdit(pieza)}>
                      Editar
                    </Button>
                  )}
                  {can('galeria.deactivate') && (
                    <Button variant="outline" size="sm" onClick={() => onToggleActivo(pieza)}>
                      {pieza.activo ? 'Desactivar' : 'Activar'}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar foto' : 'Nueva foto'}</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="imagen">Imagen {editing ? '(opcional, para reemplazar)' : ''}</Label>
              <Input
                id="imagen"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => setArchivo(e.target.files?.[0] ?? null)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="titulo">Titulo</Label>
              <Input id="titulo" {...form.register('titulo')} />
              {form.formState.errors.titulo && (
                <p className="text-sm text-destructive">{form.formState.errors.titulo.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" {...form.register('slug')} />
              {form.formState.errors.slug && (
                <p className="text-sm text-destructive">{form.formState.errors.slug.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripcion</Label>
              <Textarea id="descripcion" {...form.register('descripcion')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Input id="categoria" placeholder="Ej. Cumpleanos" {...form.register('categoria')} />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="destacado"
                type="checkbox"
                className="size-4 rounded border-input"
                checked={form.watch('destacado')}
                onChange={(e) => form.setValue('destacado', e.target.checked)}
              />
              <Label htmlFor="destacado">Destacado</Label>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Guardando...' : 'Guardar'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add "src/app/(admin)/admin/galeria/galeria-client.tsx"
git commit -m "feat: UI admin de galeria (tabla + modal con subida de imagen)"
```

---

### Task 9: Rediseno de la galeria publica — tarjetas flip estilo polaroid

**Files:**
- Modify: `src/components/marketing/galeria-grid.tsx` (reemplazar contenido completo)

- [ ] **Step 1: Reemplazar el grid+modal actual por tarjetas flip**

Contexto: hoy el componente busca la imagen con `getGaleriaImagen(pieza.slug)`, que apunta a un mapa estatico siempre vacio para galeria (`GALERIA_IMAGENES = {}` en `src/lib/helpers/entity-image.ts`) — por eso nunca se veian fotos reales ahi. Ahora la imagen sale directo de `pieza.imagenUrl` (columna de la DB, llenada por el upload a Storage).

```tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { cn } from '@/lib/utils';
import type { GaleriaPieza } from '@/lib/db/queries/galeria';

export function GaleriaGrid({ piezas }: { piezas: GaleriaPieza[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      {piezas.map((pieza, index) => (
        <GaleriaCard key={pieza.id} pieza={pieza} tilt={index % 2 === 0 ? '-rotate-2' : 'rotate-2'} />
      ))}
    </div>
  );
}

function GaleriaCard({ pieza, tilt }: { pieza: GaleriaPieza; tilt: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      className="group block w-full text-left [perspective:1000px]"
      aria-label={`Ver detalle de ${pieza.titulo}`}
    >
      <div
        className={cn(
          'relative aspect-[4/5] w-full transition-transform duration-500 [transform-style:preserve-3d]',
          flipped && '[transform:rotateY(180deg)]'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 flex flex-col gap-2 rounded-sm bg-white p-3 pb-6 shadow-md transition-transform duration-300 [backface-visibility:hidden] group-hover:scale-[1.02]',
            tilt
          )}
        >
          <div className="relative flex-1 overflow-hidden bg-muted">
            {pieza.imagenUrl ? (
              <Image
                src={pieza.imagenUrl}
                alt={pieza.titulo}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder icon={Camera} label={pieza.titulo} className="absolute inset-0" />
            )}
          </div>
          <p className="truncate text-center font-heading text-sm text-neutral-700">{pieza.titulo}</p>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center gap-2 rounded-sm bg-brand-secondary p-4 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="font-heading text-base font-semibold">{pieza.titulo}</p>
          {pieza.categoria && <p className="text-xs text-brand-primary-hover">{pieza.categoria}</p>}
          <p className="text-sm text-muted-foreground">
            {pieza.descripcion || 'Sin descripcion todavia.'}
          </p>
        </div>
      </div>
    </button>
  );
}
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit -p .`
Expected: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/marketing/galeria-grid.tsx
git commit -m "feat: tarjetas flip estilo polaroid en galeria publica, leyendo imagenUrl real"
```

---

### Task 10: Verificacion manual end-to-end

**Files:** ninguno (solo verificacion)

- [ ] **Step 1: Confirmar que el rol Administrador ya tiene los permisos `galeria.*`**

El usuario corre (mutacion a DB real — no la ejecuta el agente):
```bash
pnpm seed:rbac
```
Expected: idempotente, no falla si ya existian los permisos `galeria.view/create/edit/deactivate`.

- [ ] **Step 2: Levantar el dev server**

El usuario corre (o Claude con `run: launch app` skill si esta disponible):
```bash
pnpm dev
```

- [ ] **Step 3: Probar el flujo admin**

1. Entrar a `http://localhost:3000/admin/galeria`.
2. Click "Nueva foto" → subir una imagen JPG/PNG real, titulo, slug, descripcion, categoria.
3. Guardar → confirmar toast de exito y que la fila aparece en la tabla con miniatura visible (confirma que `remotePatterns` de Task 1 funciono).
4. Editar la misma fila sin tocar la imagen → confirmar que se actualiza el texto y la imagen sigue igual.
5. Desactivar → confirmar badge cambia a "Inactivo".

- [ ] **Step 4: Probar la galeria publica**

1. Entrar a `http://localhost:3000/galeria`.
2. Confirmar que la foto activa aparece con estilo polaroid (tilt sutil, marco blanco).
3. Click sobre la tarjeta → confirmar que gira y muestra titulo+descripcion en el reverso.
4. Click de nuevo → confirma que vuelve al frente.

- [ ] **Step 5: Confirmar que no quedo nada roto**

Run: `npx tsc --noEmit -p .`
Expected: sin errores en todo el proyecto.

No hay Step de commit en esta tarea — es solo verificacion manual.

---

## Notas de auto-revision

- **Cobertura:** las 4 secciones del diseno aprobado (Storage+datos, Panel admin, Galeria publica flip, Wiring RBAC/nav) tienen tarea dedicada (Tasks 1-4 dato/infra, 5 nav, 6-8 admin, 9 publico, 10 verificacion).
- **Sin placeholders:** cada Task trae el archivo completo a crear/reemplazar, sin TODOs.
- **Consistencia de tipos:** `GaleriaInput` (Task 2) se usa igual en `storage.ts` (no lo usa), `queries/galeria.ts` (Task 4), `actions.ts` (Task 6) y `galeria-client.tsx` (Task 8) — mismos nombres de campo (`titulo`, `slug`, `descripcion`, `categoria`, `destacado`) en las 4 capas. `GaleriaPieza` (tipo exportado de `queries/galeria.ts`) se usa igual en `galeria-grid.tsx` (Task 9) y como base del tipo local en `galeria-client.tsx` (Task 8).
- **No se toco** `src/lib/helpers/entity-image.ts` — sigue sirviendo para productos/blog que usan mapeo estatico; galeria ahora es independiente de ese sistema (usa Storage real).
