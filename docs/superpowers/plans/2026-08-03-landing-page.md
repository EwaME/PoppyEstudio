# Landing Page de Poppy Crafty — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el placeholder genérico de `src/app/(marketing)/page.tsx` por la landing real de Poppy Crafty (header, hero, 7 secciones de contenido, CTA, footer), sumar `/catalogo` básico, una tabla nueva de testimonios, y sembrar contenido de ejemplo — todo según `docs/superpowers/specs/2026-08-03-landing-page-design.md`.

**Architecture:** Server Components que hacen su propia query (mismo patrón que `admin/productos`, ver `RULES.md` §5) para cada sección; un wrapper cliente delgado (`Reveal`) aplica scroll-animations de Framer Motion sin convertir las secciones enteras en client components. Placeholders de imagen (gradiente + ícono Lucide) en vez de fotos reales, reemplazables después vía DB. Paleta/tipografía de marca aplicadas solo al grupo `(marketing)` — el panel admin no se toca.

**Tech Stack:** Next.js 16 (App Router, RSC), TypeScript estricto, Tailwind CSS v4, Drizzle ORM/Supabase, Framer Motion (nueva dependencia), lucide-react, shadcn/ui.

**Nota sobre verificación:** este repo no tiene test runner configurado (`package.json` no declara ninguno, no hay archivos `*.test.*`/`*.spec.*`, `RULES.md` no menciona tests automatizados). La convención existente verifica con `tsc --noEmit` + revisión manual en navegador (ver checklist de `RULES.md`). Los pasos de este plan siguen esa misma convención en vez de introducir un framework de testing no solicitado — cada tarea termina con `pnpm tsc --noEmit` limpio y, cuando aplica, una verificación visual manual con `pnpm dev`.

---

## Antes de empezar

- [ ] Confirmar que no hay cambios sin commitear: `git status`.
- [ ] Confirmar rama de trabajo (`git branch --show-current`) — si se quiere aislar este trabajo, usar `superpowers:using-git-worktrees` antes de la Tarea 1.

---

### Tarea 1: Sincronizar tokens de marca en `globals.css`

**Files:**
- Modify: `src/app/globals.css:50-56`

- [ ] **Paso 1: Reemplazar el bloque de tokens de marca**

En `src/app/globals.css`, dentro de `@theme inline { ... }`, reemplazar:

```css
  /* Marca — ver src/config/colors.ts (fuente canonica en TS) */
  --color-brand-primary: #171717;
  --color-brand-secondary: #404040;
  --color-feedback-success: #16A34A;
  --color-feedback-error: #DC2626;
  --color-feedback-warning: #D97706;
  --color-feedback-info: #0891B2;
```

por:

```css
  /* Marca — ver src/config/colors.ts (fuente canonica en TS) */
  --color-brand-primary: #F8BBD9;
  --color-brand-primary-hover: #F48FB1;
  --color-brand-secondary: #F7F3EF;
  --color-feedback-success: #22C55E;
  --color-feedback-error: #EF4444;
  --color-feedback-warning: #F59E0B;
  --color-feedback-info: #3B82F6;
```

- [ ] **Paso 2: Verificar que compila**

Run: `pnpm tsc --noEmit`
Expected: sin errores (este cambio es solo CSS, no debería afectar TS).

- [ ] **Paso 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: sincronizar tokens de marca de colors.ts en globals.css"
```

---

### Tarea 2: Instalar Framer Motion

**Files:**
- Modify: `package.json`, `pnpm-lock.yaml` (automático)

- [ ] **Paso 1: Instalar**

Run: `pnpm add framer-motion`
Expected: se agrega `"framer-motion": "^..."` a `dependencies` en `package.json`.

- [ ] **Paso 2: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: agregar framer-motion para animaciones del sitio publico"
```

---

### Tarea 3: Componente `ImagePlaceholder`

**Files:**
- Create: `src/components/shared/image-placeholder.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ImagePlaceholder({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary',
        className
      )}
    >
      <Icon className="size-10 text-foreground/40" strokeWidth={1.5} />
    </div>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/shared/image-placeholder.tsx
git commit -m "feat: componente ImagePlaceholder (gradiente + icono) para contenido sin foto real"
```

---

### Tarea 4: Componente `Reveal` (scroll-animation)

**Files:**
- Create: `src/components/shared/reveal.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/shared/reveal.tsx
git commit -m "feat: componente Reveal para scroll-reveal con Framer Motion"
```

---

### Tarea 5: Helper `whatsappHref`

**Files:**
- Create: `src/lib/helpers/whatsapp.ts`

- [ ] **Paso 1: Crear el helper**

```ts
/** Arma un link wa.me a partir del numero guardado en `configuracion` (puede traer formato humano, ej. "+504 0000-0000"). */
export function whatsappHref(numero: string | null | undefined, mensaje: string) {
  const digits = (numero ?? '').replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(mensaje)}`;
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/lib/helpers/whatsapp.ts
git commit -m "feat: helper whatsappHref compartido"
```

---

### Tarea 6: Tabla `testimonios` en el schema

**Files:**
- Modify: `src/lib/db/schema/clientes.ts`

- [ ] **Paso 1: Agregar la tabla al final del archivo**

Agregar al final de `src/lib/db/schema/clientes.ts` (después de `mensajesContacto`):

```ts
// Solo lectura publica en V1 (SRS §118 lista "sistema de resenas" como
// funcionalidad futura). Se puebla via seed/admin, no hay formulario publico
// de envio todavia — evita moderacion/spam sin RLS disenado para eso.
export const testimonios = pgTable('testimonios', {
  id: uuid('id').primaryKey().defaultRandom(),
  nombreCliente: text('nombre_cliente').notNull(),
  rol: text('rol'),
  texto: text('texto').notNull(),
  estrellas: integer('estrellas').notNull(),
  destacado: boolean('destacado').default(false).notNull(),
  activo: boolean('activo').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
```

- [ ] **Paso 2: Agregar `integer` al import de `drizzle-orm/pg-core`**

En la primera línea del archivo, cambiar:

```ts
import { pgTable, uuid, text, numeric, timestamp, pgEnum } from 'drizzle-orm/pg-core';
```

por:

```ts
import { pgTable, uuid, text, numeric, integer, boolean, timestamp, pgEnum } from 'drizzle-orm/pg-core';
```

(Nota: `boolean` también se agrega — no estaba importado en este archivo porque ninguna tabla anterior de `clientes.ts` lo usaba.)

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores. `src/lib/db/schema/index.ts` ya re-exporta todo desde `./clientes`, no necesita cambios.

- [ ] **Paso 4: Generar la migración**

Run: `pnpm db:generate`
Expected: nuevo archivo en `drizzle/migrations/` con el `CREATE TABLE testimonios`. **No correr `db:push` ni `db:migrate`** (RULES.md §6 — eso lo corre el usuario).

- [ ] **Paso 5: Commit**

```bash
git add src/lib/db/schema/clientes.ts drizzle/migrations
git commit -m "feat: tabla testimonios (solo lectura publica, reemplaza feed de redes sociales)"
```

---

### Tarea 7: Permiso RBAC de `testimonios`

**Files:**
- Modify: `src/lib/rbac/permissions.ts:39-53`

- [ ] **Paso 1: Agregar el permiso al catálogo**

En `PERMISSIONS`, agregar una línea después de `...fullCrud('galeria', 'Galeria'),`:

```ts
  ...fullCrud('galeria', 'Galeria'),
  ...fullCrud('testimonios', 'Testimonios'),
  ...fullCrud('faq', 'Preguntas Frecuentes'),
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/lib/rbac/permissions.ts
git commit -m "feat: permiso RBAC del modulo testimonios (sin pagina admin todavia)"
```

**Nota para el usuario (dejar en el mensaje final, no es parte del código):** después de correr `db:push` con la migración de la Tarea 6, hay que re-correr `pnpm seed:rbac` para sembrar el permiso nuevo.

---

### Tarea 8: Query `getConfiguracion`

**Files:**
- Create: `src/lib/db/queries/configuracion.ts`

- [ ] **Paso 1: Crear la query**

```ts
import { db } from '@/lib/db';
import { configuracion } from '@/lib/db/schema';

export async function getConfiguracion() {
  const [row] = await db.select().from(configuracion).limit(1);
  return row ?? null;
}

export type Configuracion = Awaited<ReturnType<typeof getConfiguracion>>;
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/lib/db/queries/configuracion.ts
git commit -m "feat: query getConfiguracion (fila unica del sitio)"
```

---

### Tarea 9: Query `getTestimoniosDestacados`

**Files:**
- Create: `src/lib/db/queries/testimonios.ts`

- [ ] **Paso 1: Crear la query**

```ts
import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { testimonios } from '@/lib/db/schema';

export async function getTestimoniosDestacados(limit = 6) {
  return db
    .select()
    .from(testimonios)
    .where(and(eq(testimonios.destacado, true), eq(testimonios.activo, true)))
    .orderBy(desc(testimonios.createdAt))
    .limit(limit);
}

export type Testimonio = Awaited<ReturnType<typeof getTestimoniosDestacados>>[number];
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/lib/db/queries/testimonios.ts
git commit -m "feat: query getTestimoniosDestacados"
```

---

### Tarea 10: Queries de galería y blog para la landing

**Files:**
- Create: `src/lib/db/queries/galeria.ts`
- Create: `src/lib/db/queries/blog.ts`

- [ ] **Paso 1: Crear `src/lib/db/queries/galeria.ts`**

```ts
import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { galeria } from '@/lib/db/schema';

export async function getGaleriaDestacada(limit = 6) {
  return db
    .select()
    .from(galeria)
    .where(and(eq(galeria.destacado, true), eq(galeria.activo, true)))
    .orderBy(desc(galeria.createdAt))
    .limit(limit);
}

export type GaleriaPieza = Awaited<ReturnType<typeof getGaleriaDestacada>>[number];
```

- [ ] **Paso 2: Crear `src/lib/db/queries/blog.ts`**

```ts
import { and, desc, eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { blogPosts, blogCategorias } from '@/lib/db/schema';

export async function getBlogPostsRecientes(limit = 3) {
  return db
    .select({
      id: blogPosts.id,
      titulo: blogPosts.titulo,
      slug: blogPosts.slug,
      resumen: blogPosts.resumen,
      imagenPortada: blogPosts.imagenPortada,
      tiempoLectura: blogPosts.tiempoLectura,
      fechaPublicacion: blogPosts.fechaPublicacion,
      categoriaNombre: blogCategorias.nombre,
    })
    .from(blogPosts)
    .innerJoin(blogCategorias, eq(blogCategorias.id, blogPosts.categoriaId))
    .where(and(eq(blogPosts.publicado, true), eq(blogPosts.activo, true)))
    .orderBy(desc(blogPosts.fechaPublicacion))
    .limit(limit);
}

export type BlogPostResumen = Awaited<ReturnType<typeof getBlogPostsRecientes>>[number];
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 4: Commit**

```bash
git add src/lib/db/queries/galeria.ts src/lib/db/queries/blog.ts
git commit -m "feat: queries getGaleriaDestacada y getBlogPostsRecientes"
```

---

### Tarea 11: Extender queries de `categorias` y `productos`

**Files:**
- Modify: `src/lib/db/queries/categorias.ts`
- Modify: `src/lib/db/queries/productos.ts`

- [ ] **Paso 1: Extender `src/lib/db/queries/categorias.ts`**

Cambiar el import inicial de:

```ts
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { categorias } from '@/lib/db/schema';
import type { CategoriaInput } from '@/lib/validations/categorias';
```

a:

```ts
import { and, eq, sql } from 'drizzle-orm';
import { db } from '@/lib/db';
import { categorias, productos } from '@/lib/db/schema';
import type { CategoriaInput } from '@/lib/validations/categorias';
```

Agregar al final del archivo:

```ts
export async function getCategoriasConConteo() {
  return db
    .select({
      id: categorias.id,
      nombre: categorias.nombre,
      slug: categorias.slug,
      descripcion: categorias.descripcion,
      imagenUrl: categorias.imagenUrl,
      totalProductos: sql<number>`count(${productos.id})::int`,
    })
    .from(categorias)
    .leftJoin(productos, and(eq(productos.categoriaId, categorias.id), eq(productos.activo, true)))
    .where(eq(categorias.activo, true))
    .groupBy(categorias.id)
    .orderBy(categorias.orden, categorias.nombre);
}

export type CategoriaConConteo = Awaited<ReturnType<typeof getCategoriasConConteo>>[number];
```

- [ ] **Paso 2: Extender `src/lib/db/queries/productos.ts`**

Cambiar el import inicial de:

```ts
import { eq } from 'drizzle-orm';
```

a:

```ts
import { and, eq, ilike, or } from 'drizzle-orm';
```

Agregar al final del archivo:

```ts
const PRODUCTO_RESUMEN_SELECT = {
  id: productos.id,
  nombre: productos.nombre,
  slug: productos.slug,
  descripcionCorta: productos.descripcionCorta,
  precioDesde: productos.precioDesde,
  categoriaNombre: categorias.nombre,
  categoriaSlug: categorias.slug,
};

export async function getProductosDestacados(limit = 6) {
  return db
    .select(PRODUCTO_RESUMEN_SELECT)
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(eq(productos.destacado, true), eq(productos.activo, true)))
    .orderBy(productos.nombre)
    .limit(limit);
}

export async function getProductosFiltrados({
  q,
  categoriaSlug,
}: {
  q?: string;
  categoriaSlug?: string;
}) {
  const condiciones = [eq(productos.activo, true)];
  if (categoriaSlug) condiciones.push(eq(categorias.slug, categoriaSlug));
  if (q) {
    const coincidencia = or(ilike(productos.nombre, `%${q}%`), ilike(productos.descripcionCorta, `%${q}%`));
    if (coincidencia) condiciones.push(coincidencia);
  }

  return db
    .select(PRODUCTO_RESUMEN_SELECT)
    .from(productos)
    .innerJoin(categorias, eq(categorias.id, productos.categoriaId))
    .where(and(...condiciones))
    .orderBy(productos.nombre);
}

export type ProductoResumen = Awaited<ReturnType<typeof getProductosDestacados>>[number];
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 4: Commit**

```bash
git add src/lib/db/queries/categorias.ts src/lib/db/queries/productos.ts
git commit -m "feat: queries getCategoriasConConteo, getProductosDestacados y getProductosFiltrados"
```

---

### Tarea 12: Mapa de íconos por categoría

**Files:**
- Create: `src/lib/helpers/category-icons.ts`

- [ ] **Paso 1: Crear el helper**

```ts
import { Shirt, Coffee, Sticker, Crown, Ribbon, PartyPopper, FileText, Sparkles, Gift, type LucideIcon } from 'lucide-react';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  camisas: Shirt,
  tazas: Coffee,
  stickers: Sticker,
  coronas: Crown,
  bandas: Ribbon,
  toppers: PartyPopper,
  papeleria: FileText,
  decoraciones: Sparkles,
};

/** `Gift` es el fallback para categorias sembradas fuera de este set inicial. */
export function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Gift;
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/lib/helpers/category-icons.ts
git commit -m "feat: mapa de iconos Lucide por slug de categoria"
```

---

### Tarea 13: Layout de `(marketing)` con Header y Footer

**Files:**
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/app/(marketing)/layout.tsx`

- [ ] **Paso 1: Crear `src/components/layout/header.tsx`**

```tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type FormEvent } from 'react';
import { Menu, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header({ configuracion }: { configuracion: Configuracion | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/catalogo?q=${encodeURIComponent(trimmed)}` : '/catalogo');
  }

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
        <Link href="/" className="font-heading text-lg font-bold text-brand-primary-hover">
          {siteConfig.name}
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
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos..."
              aria-label="Buscar productos"
              className="w-48 pl-8 lg:w-64"
            />
          </form>

          <Button
            asChild
            size="sm"
            className="hidden bg-brand-primary text-foreground hover:bg-brand-primary-hover sm:inline-flex"
          >
            <a href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Cotizar
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <form onSubmit={handleSearch} className="relative px-4">
                <Search className="absolute top-1/2 left-6.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  aria-label="Buscar productos"
                  className="pl-8"
                />
              </form>
              <div className="mt-auto px-4 pb-4">
                <Button asChild className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover">
                  <a href={whatsappHref(configuracion?.whatsapp, mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle /> Escribir por WhatsApp
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
```

- [ ] **Paso 2: Crear `src/components/layout/footer.tsx`**

```tsx
import Link from 'next/link';
import { Facebook, Instagram, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import type { Configuracion } from '@/lib/db/queries/configuracion';
import type { CategoriaConConteo } from '@/lib/db/queries/categorias';

export function Footer({
  configuracion,
  categorias,
}: {
  configuracion: Configuracion | null;
  categorias: CategoriaConConteo[];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-brand-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-heading text-lg font-bold text-brand-primary-hover">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{configuracion?.descripcion ?? siteConfig.description}</p>
          <div className="flex gap-3 pt-1">
            {configuracion?.facebook && (
              <a
                href={configuracion.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-brand-primary-hover"
              >
                <Facebook className="size-5" />
              </a>
            )}
            {configuracion?.instagram && (
              <a
                href={configuracion.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-brand-primary-hover"
              >
                <Instagram className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-heading text-sm font-semibold">Enlaces</p>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-brand-primary-hover">Inicio</Link>
            <Link href="/catalogo" className="hover:text-brand-primary-hover">Catálogo</Link>
            <Link href="/blog" className="hover:text-brand-primary-hover">Blog</Link>
            <Link href="/galeria" className="hover:text-brand-primary-hover">Galería</Link>
          </nav>
        </div>

        <div className="space-y-2">
          <p className="font-heading text-sm font-semibold">Categorías</p>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            {categorias.slice(0, 6).map((categoria) => (
              <Link
                key={categoria.id}
                href={`/catalogo?categoria=${categoria.slug}`}
                className="hover:text-brand-primary-hover"
              >
                {categoria.nombre}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-heading text-sm font-semibold text-foreground">Contacto</p>
          {configuracion?.direccion && (
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" /> {configuracion.direccion}
            </p>
          )}
          {configuracion?.telefono && (
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> {configuracion.telefono}
            </p>
          )}
          {configuracion?.email && (
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> {configuracion.email}
            </p>
          )}
          {configuracion?.horario && (
            <p className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" /> {configuracion.horario}
            </p>
          )}
        </div>
      </div>

      <div className="border-t px-4 py-4 text-center text-xs text-muted-foreground sm:px-8">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados. ·{' '}
          <Link href="#" className="hover:text-brand-primary-hover">Políticas de privacidad</Link>
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Paso 3: Crear `src/app/(marketing)/layout.tsx`**

```tsx
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';

// Poppins solo en el sitio publico — el panel admin sigue con Geist (layout raiz).
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const [configuracion, categorias] = await Promise.all([
    getConfiguracion(),
    getCategoriasConConteo(),
  ]);

  return (
    <div className={`${poppins.className} flex min-h-screen flex-col`}>
      <Header configuracion={configuracion} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer configuracion={configuracion} categorias={categorias} />
    </div>
  );
}
```

- [ ] **Paso 4: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 5: Commit**

```bash
git add src/components/layout/header.tsx src/components/layout/footer.tsx "src/app/(marketing)/layout.tsx"
git commit -m "feat: layout publico con Header y Footer (Poppins, WhatsApp, buscador)"
```

---

### Tarea 14: `ProductCard` compartido

**Files:**
- Create: `src/components/marketing/product-card.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { getCategoryIcon } from '@/lib/helpers/category-icons';
import type { ProductoResumen } from '@/lib/db/queries/productos';

export function ProductCard({ producto }: { producto: ProductoResumen }) {
  const Icon = getCategoryIcon(producto.categoriaSlug);

  return (
    <Card className="group h-full gap-0 overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <ImagePlaceholder
        icon={Icon}
        label={producto.nombre}
        className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
      />
      <CardContent className="space-y-1 pt-4">
        <p className="text-xs font-medium text-brand-primary-hover">{producto.categoriaNombre}</p>
        <p className="font-heading font-semibold">{producto.nombre}</p>
        {producto.descripcionCorta && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{producto.descripcionCorta}</p>
        )}
        <p className="pt-1 text-sm font-medium">
          {producto.precioDesde != null ? `Desde L. ${producto.precioDesde.toFixed(2)}` : 'Precio a cotizar'}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent p-4 pt-3">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/catalogo/${producto.slug}`}>
            Ver más <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/marketing/product-card.tsx
git commit -m "feat: componente ProductCard compartido entre landing y catalogo"
```

---

### Tarea 15: Sección Hero

**Files:**
- Create: `src/components/sections/hero.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

export function Hero({ configuracion }: { configuracion: Configuracion | null }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    // -mt-16 cancela el pt-16 del <main> del layout: el Hero debe llegar
    // hasta el borde superior real de la ventana, detras del header
    // transparente (ver Tarea 13).
    <section className="relative -mt-16 flex min-h-[90vh] items-center overflow-hidden pt-16">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <ImagePlaceholder
          icon={Gift}
          label="Productos personalizados de Poppy Crafty"
          className="h-full w-full"
        />
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl space-y-5"
        >
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Creamos detalles personalizados que convierten tus momentos especiales en recuerdos inolvidables.
          </h1>
          <p className="text-lg text-foreground/80">
            Personalizamos camisas, tazas, toppers, coronas, cajas, stickers y mucho más para hacer única cada
            celebración.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-primary text-foreground hover:bg-brand-primary-hover">
              <a
                href={whatsappHref(configuracion?.whatsapp, 'Hola, quiero solicitar un pedido personalizado.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Solicitar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalogo">
                Explorar Catálogo <ArrowRight />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ChevronDown className="size-6 text-foreground/50" />
      </motion.div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/hero.tsx
git commit -m "feat: seccion Hero con parallax leve y fade-up (unico h1 de la pagina)"
```

---

### Tarea 16: Sección Productos Destacados

**Files:**
- Create: `src/components/sections/productos-destacados.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import { getProductosDestacados } from '@/lib/db/queries/productos';
import { ProductCard } from '@/components/marketing/product-card';
import { Reveal } from '@/components/shared/reveal';

export async function ProductosDestacados() {
  const productos = await getProductosDestacados(6);
  if (productos.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Productos Destacados</h2>
          <p className="mt-2 text-muted-foreground">Lo más pedido para hacer única tu celebración.</p>
        </div>
      </Reveal>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
        {productos.map((producto, index) => (
          <Reveal key={producto.id} delay={index * 0.05}>
            <div className="w-64 shrink-0 snap-start sm:w-auto">
              <ProductCard producto={producto} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/productos-destacados.tsx
git commit -m "feat: seccion Productos Destacados (carrusel en mobile, grid en desktop)"
```

---

### Tarea 17: Sección Categorías

**Files:**
- Create: `src/components/sections/categorias.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import Link from 'next/link';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { Reveal } from '@/components/shared/reveal';
import { getCategoryIcon } from '@/lib/helpers/category-icons';

export async function Categorias() {
  const categorias = await getCategoriasConConteo();
  if (categorias.length === 0) return null;

  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Categorías</h2>
            <p className="mt-2 text-muted-foreground">Encontrá el producto perfecto para tu ocasión.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categorias.map((categoria, index) => {
            const Icon = getCategoryIcon(categoria.slug);
            return (
              <Reveal key={categoria.id} delay={index * 0.04}>
                <Link
                  href={`/catalogo?categoria=${categoria.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border bg-background p-6 text-center transition-shadow hover:shadow-md"
                >
                  <ImagePlaceholder icon={Icon} label={categoria.nombre} className="size-16 rounded-full" />
                  <p className="font-heading font-semibold">{categoria.nombre}</p>
                  <p className="text-xs text-muted-foreground">
                    {categoria.totalProductos} producto{categoria.totalProductos === 1 ? '' : 's'}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/categorias.tsx
git commit -m "feat: seccion Categorias con conteo de productos"
```

---

### Tarea 18: Sección Beneficios (estática)

**Files:**
- Create: `src/components/sections/beneficios.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import { Sparkles, Palette, Gem, Heart, Truck, MapPinned } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const BENEFICIOS = [
  { icon: Sparkles, titulo: 'Personalización completa', descripcion: 'Cada producto se adapta a tu idea, no al revés.' },
  { icon: Palette, titulo: 'Diseños exclusivos', descripcion: 'Creamos una propuesta única para tu pedido.' },
  { icon: Gem, titulo: 'Materiales de calidad', descripcion: 'Insumos seleccionados para que dure y luzca bien.' },
  { icon: Heart, titulo: 'Atención personalizada', descripcion: 'Te acompañamos de la idea a la entrega.' },
  { icon: Truck, titulo: 'Entrega responsable', descripcion: 'Cumplimos los tiempos que te prometemos.' },
  { icon: MapPinned, titulo: 'Cobertura nacional', descripcion: 'Enviamos tu pedido a cualquier parte de Honduras.' },
];

export function Beneficios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Por qué elegir Poppy Crafty?</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFICIOS.map((beneficio, index) => (
          <Reveal key={beneficio.titulo} delay={index * 0.05}>
            <div className="flex flex-col items-start gap-3 rounded-xl border p-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-primary/30">
                <beneficio.icon className="size-5 text-brand-primary-hover" />
              </div>
              <p className="font-heading font-semibold">{beneficio.titulo}</p>
              <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/beneficios.tsx
git commit -m "feat: seccion Beneficios (contenido estatico)"
```

---

### Tarea 19: Sección ¿Cómo realizamos tu pedido?

**Files:**
- Create: `src/components/sections/como-pedimos.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import { MessageCircle, Lightbulb, Image as ImageIcon, PenTool, Factory, PackageCheck } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const PASOS = [
  { icon: MessageCircle, titulo: 'Contáctanos', descripcion: 'Escribinos por WhatsApp o el formulario del sitio.' },
  { icon: Lightbulb, titulo: 'Cuéntanos tu idea', descripcion: 'Contanos qué estás celebrando y cómo lo imaginás.' },
  { icon: ImageIcon, titulo: 'Envíanos referencias', descripcion: 'Fotos, colores o ejemplos que te inspiren.' },
  { icon: PenTool, titulo: 'Diseñamos tu producto', descripcion: 'Preparamos una propuesta exclusiva para vos.' },
  { icon: Factory, titulo: 'Fabricación', descripcion: 'Producimos tu pedido con cuidado en cada detalle.' },
  { icon: PackageCheck, titulo: 'Entrega', descripcion: 'Te lo hacemos llegar donde estés en Honduras.' },
];

export function ComoPedimos() {
  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Cómo realizamos tu pedido?</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {PASOS.map((paso, index) => (
            <Reveal key={paso.titulo} delay={index * 0.05}>
              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-primary font-heading text-sm font-bold text-foreground">
                  {index + 1}
                </div>
                <paso.icon className="size-5 text-brand-primary-hover" />
                <p className="font-heading text-sm font-semibold">{paso.titulo}</p>
                <p className="text-xs text-muted-foreground">{paso.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/como-pedimos.tsx
git commit -m "feat: seccion Como realizamos tu pedido (timeline 6 pasos)"
```

---

### Tarea 20: Sección Galería (masonry + lightbox)

**Files:**
- Create: `src/components/marketing/galeria-grid.tsx`
- Create: `src/components/sections/galeria.tsx`

- [ ] **Paso 1: Crear `src/components/marketing/galeria-grid.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import type { GaleriaPieza } from '@/lib/db/queries/galeria';

export function GaleriaGrid({ piezas }: { piezas: GaleriaPieza[] }) {
  const [abierta, setAbierta] = useState<GaleriaPieza | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {piezas.map((pieza) => (
          <button
            key={pieza.id}
            type="button"
            onClick={() => setAbierta(pieza)}
            className="group block w-full overflow-hidden rounded-xl text-left"
          >
            <ImagePlaceholder
              icon={ImageOff}
              label={pieza.titulo}
              className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={abierta != null} onOpenChange={(open) => !open && setAbierta(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle>{abierta?.titulo}</DialogTitle>
          <ImagePlaceholder icon={ImageOff} label={abierta?.titulo ?? ''} className="aspect-video w-full" />
          {abierta?.descripcion && <p className="text-sm text-muted-foreground">{abierta.descripcion}</p>}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

- [ ] **Paso 2: Crear `src/components/sections/galeria.tsx`**

```tsx
import { getGaleriaDestacada } from '@/lib/db/queries/galeria';
import { Reveal } from '@/components/shared/reveal';
import { GaleriaGrid } from '@/components/marketing/galeria-grid';

export async function Galeria() {
  const piezas = await getGaleriaDestacada(6);
  if (piezas.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Galería de Trabajos</h2>
          <p className="mt-2 text-muted-foreground">Piezas reales que ya entregamos.</p>
        </div>
      </Reveal>
      <GaleriaGrid piezas={piezas} />
    </section>
  );
}
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 4: Commit**

```bash
git add src/components/marketing/galeria-grid.tsx src/components/sections/galeria.tsx
git commit -m "feat: seccion Galeria con masonry grid y lightbox"
```

---

### Tarea 21: `BlogCard` + Sección Blog

**Files:**
- Create: `src/components/marketing/blog-card.tsx`
- Create: `src/components/sections/blog.tsx`

- [ ] **Paso 1: Crear `src/components/marketing/blog-card.tsx`**

```tsx
import Link from 'next/link';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import type { BlogPostResumen } from '@/lib/db/queries/blog';

export function BlogCard({ post }: { post: BlogPostResumen }) {
  const fecha = post.fechaPublicacion
    ? new Date(post.fechaPublicacion).toLocaleDateString('es-HN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <Card className="gap-0 overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <ImagePlaceholder icon={BookOpen} label={post.titulo} className="aspect-video w-full" />
      <CardContent className="space-y-2 pt-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-brand-primary-hover">{post.categoriaNombre}</span>
          {fecha && (
            <span className="flex items-center gap-1">
              <Calendar className="size-3" /> {fecha}
            </span>
          )}
          {post.tiempoLectura && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {post.tiempoLectura} min
            </span>
          )}
        </div>
        <Link href={`/blog/${post.slug}`} className="block font-heading font-semibold hover:text-brand-primary-hover">
          {post.titulo}
        </Link>
        {post.resumen && <p className="line-clamp-2 text-sm text-muted-foreground">{post.resumen}</p>}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block pt-1 text-sm font-medium text-brand-primary-hover hover:underline"
        >
          Leer más →
        </Link>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Paso 2: Crear `src/components/sections/blog.tsx`**

```tsx
import { getBlogPostsRecientes } from '@/lib/db/queries/blog';
import { BlogCard } from '@/components/marketing/blog-card';
import { Reveal } from '@/components/shared/reveal';

export async function Blog() {
  const posts = await getBlogPostsRecientes(3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Del Blog</h2>
            <p className="mt-2 text-muted-foreground">
              Ideas, tips de Cricut y sublimación para tu próximo proyecto.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 4: Commit**

```bash
git add src/components/marketing/blog-card.tsx src/components/sections/blog.tsx
git commit -m "feat: seccion Blog con los 3 articulos mas recientes"
```

---

### Tarea 22: Sección Testimonios

**Files:**
- Create: `src/components/sections/testimonios.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import { Star } from 'lucide-react';
import { getTestimoniosDestacados } from '@/lib/db/queries/testimonios';
import { Reveal } from '@/components/shared/reveal';

export async function Testimonios() {
  const testimonios = await getTestimoniosDestacados(6);
  if (testimonios.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Lo que dicen de nosotros</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonios.map((testimonio, index) => (
          <Reveal key={testimonio.id} delay={index * 0.05}>
            <div className="flex h-full flex-col gap-3 rounded-xl border p-6">
              <div className="flex gap-0.5" aria-label={`${testimonio.estrellas} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < testimonio.estrellas
                        ? 'size-4 fill-brand-primary-hover text-brand-primary-hover'
                        : 'size-4 text-muted-foreground/30'
                    }
                  />
                ))}
              </div>
              <p className="flex-1 text-sm text-muted-foreground">&ldquo;{testimonio.texto}&rdquo;</p>
              <div>
                <p className="font-heading text-sm font-semibold">{testimonio.nombreCliente}</p>
                {testimonio.rol && <p className="text-xs text-muted-foreground">{testimonio.rol}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/testimonios.tsx
git commit -m "feat: seccion Testimonios con calificacion en estrellas (reemplaza feed de redes)"
```

---

### Tarea 23: Sección CTA Final

**Files:**
- Create: `src/components/sections/cta-final.tsx`

- [ ] **Paso 1: Crear el componente**

```tsx
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

export function CTAFinal({ configuracion }: { configuracion: Configuracion | null }) {
  return (
    <section className="bg-brand-primary py-20">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Listo para crear algo único?</h2>
          <p className="text-foreground/80">Hablemos sobre tu próximo proyecto personalizado.</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
              <a href="/catalogo">
                Solicitar Cotización <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/20 bg-transparent">
              <a
                href={whatsappHref(configuracion?.whatsapp, 'Hola, quiero cotizar un producto personalizado.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
```

- [ ] **Paso 2: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Commit**

```bash
git add src/components/sections/cta-final.tsx
git commit -m "feat: seccion CTA Final"
```

---

### Tarea 24: Ensamblar `page.tsx` de la landing

**Files:**
- Modify: `src/app/(marketing)/page.tsx` (reemplazo completo del placeholder)

- [ ] **Paso 1: Reemplazar el contenido completo del archivo**

```tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { Hero } from '@/components/sections/hero';
import { ProductosDestacados } from '@/components/sections/productos-destacados';
import { Categorias } from '@/components/sections/categorias';
import { Beneficios } from '@/components/sections/beneficios';
import { ComoPedimos } from '@/components/sections/como-pedimos';
import { Galeria } from '@/components/sections/galeria';
import { Blog } from '@/components/sections/blog';
import { Testimonios } from '@/components/sections/testimonios';
import { CTAFinal } from '@/components/sections/cta-final';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Regalos y decoración personalizada en Choluteca`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
  },
};

export default async function HomePage() {
  const configuracion = await getConfiguracion();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: configuracion?.nombreNegocio ?? siteConfig.name,
    description: configuracion?.descripcion ?? siteConfig.description,
    telephone: configuracion?.telefono ?? undefined,
    email: configuracion?.email ?? undefined,
    address: configuracion?.direccion ?? undefined,
    url: siteConfig.url,
  };

  return (
    <>
      {/* Datos estructurados de negocio local (SRS §60) — contenido server-side, no input de usuario. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero configuracion={configuracion} />
      <ProductosDestacados />
      <Categorias />
      <Beneficios />
      <ComoPedimos />
      <Galeria />
      <Blog />
      <Testimonios />
      <CTAFinal configuracion={configuracion} />
    </>
  );
}
```

- [ ] **Paso 2: Verificar tipos**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

- [ ] **Paso 3: Verificación visual manual**

Run: `pnpm dev`
Abrir `http://localhost:3000` en el navegador. Confirmar:
- Header transparente al cargar, pasa a blanco+sombra al hacer scroll.
- Un solo `<h1>` en la página (inspeccionar el DOM o `document.querySelectorAll('h1').length === 1` en la consola).
- Todas las secciones aparecen aunque la DB esté vacía (con `return null` en las que no tienen datos — no debería haber errores en consola).
- No hay `console.log` ni errores en la consola del navegador.

- [ ] **Paso 4: Commit**

```bash
git add "src/app/(marketing)/page.tsx"
git commit -m "feat: ensamblar la landing real de Poppy Crafty (reemplaza el placeholder)"
```

---

### Tarea 25: Página `/catalogo`

**Files:**
- Create: `src/components/marketing/catalogo-filtros.tsx`
- Create: `src/app/(marketing)/catalogo/page.tsx`

- [ ] **Paso 1: Crear `src/components/marketing/catalogo-filtros.tsx`**

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { CategoriaConConteo } from '@/lib/db/queries/categorias';

export function CatalogoFiltros({
  categorias,
  categoriaActiva,
  qActual,
}: {
  categorias: CategoriaConConteo[];
  categoriaActiva?: string;
  qActual?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(qActual ?? '');

  function buildUrl(next: { q?: string; categoria?: string }) {
    const params = new URLSearchParams();
    const finalQ = 'q' in next ? next.q : qActual;
    const finalCategoria = 'categoria' in next ? next.categoria : categoriaActiva;
    if (finalQ) params.set('q', finalQ);
    if (finalCategoria) params.set('categoria', finalCategoria);
    const query = params.toString();
    return query ? `/catalogo?${query}` : '/catalogo';
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(buildUrl({ q: q.trim() }));
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          className="w-full pl-8 sm:w-72"
        />
      </form>

      <div className="flex flex-wrap gap-2">
        <Button
          asChild
          variant={categoriaActiva ? 'outline' : 'default'}
          size="sm"
          className={cn(!categoriaActiva && 'bg-brand-primary text-foreground hover:bg-brand-primary-hover')}
        >
          <a href={buildUrl({ categoria: undefined })}>Todas</a>
        </Button>
        {categorias.map((categoria) => (
          <Button
            key={categoria.id}
            asChild
            variant={categoriaActiva === categoria.slug ? 'default' : 'outline'}
            size="sm"
            className={cn(
              categoriaActiva === categoria.slug && 'bg-brand-primary text-foreground hover:bg-brand-primary-hover'
            )}
          >
            <a href={buildUrl({ categoria: categoria.slug })}>{categoria.nombre}</a>
          </Button>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Paso 2: Crear `src/app/(marketing)/catalogo/page.tsx`**

```tsx
import type { Metadata } from 'next';
import { getProductosFiltrados } from '@/lib/db/queries/productos';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';
import { ProductCard } from '@/components/marketing/product-card';
import { CatalogoFiltros } from '@/components/marketing/catalogo-filtros';

export const metadata: Metadata = { title: 'Catálogo | Poppy Crafty' };

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categoria?: string }>;
}) {
  const { q, categoria } = await searchParams;

  const [productos, categorias] = await Promise.all([
    getProductosFiltrados({ q, categoriaSlug: categoria }),
    getCategoriasConConteo(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="mb-8 space-y-2">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Catálogo</h1>
        <p className="text-muted-foreground">
          {q ? `Resultados para "${q}"` : 'Explorá todos nuestros productos personalizables.'}
        </p>
      </div>

      <CatalogoFiltros categorias={categorias} categoriaActiva={categoria} qActual={q} />

      {productos.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No encontramos productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores. **Si falla específicamente en la firma de `searchParams`** (este proyecto corre Next 16, que puede diferir de versiones anteriores — ver advertencia en `AGENTS.md`): ajustar el tipo de `searchParams` según el error exacto de `tsc`/Next y dejar una nota en el commit explicando el ajuste.

- [ ] **Paso 4: Verificación visual manual**

Con `pnpm dev` corriendo, abrir `http://localhost:3000/catalogo`, `http://localhost:3000/catalogo?categoria=camisas` y `http://localhost:3000/catalogo?q=taza`. Confirmar que los filtros combinan bien y el estado vacío se ve bien si no hay resultados.

- [ ] **Paso 5: Commit**

```bash
git add src/components/marketing/catalogo-filtros.tsx "src/app/(marketing)/catalogo/page.tsx"
git commit -m "feat: pagina /catalogo basica con busqueda y filtro por categoria"
```

---

### Tarea 26: Script de seed de contenido

**Files:**
- Create: `scripts/seed-content.ts`
- Modify: `package.json` (agregar script `seed:content`)

- [ ] **Paso 1: Crear `scripts/seed-content.ts`**

```ts
/**
 * Siembra contenido de ejemplo (categorias, productos, blog, galeria,
 * testimonios, configuracion) para poder ver y probar la landing completa
 * sin esperar carga real de contenido.
 *
 * A diferencia de seed-rbac.ts, este script NO es idempotente: asume DB
 * vacia de contenido y usa slugs UNIQUE — correrlo dos veces falla por
 * violacion de unicidad. Es intencional (bootstrap de una sola vez).
 *
 * Uso: pnpm seed:content
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { db } from '../src/lib/db';
import { categorias, productos } from '../src/lib/db/schema/catalogo';
import { blogCategorias, blogPosts } from '../src/lib/db/schema/blog';
import { galeria } from '../src/lib/db/schema/galeria';
import { testimonios } from '../src/lib/db/schema/clientes';
import { configuracion } from '../src/lib/db/schema/sitio';

function slugify(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Sembrando categorias...');
  const categoriasInsertadas = await db
    .insert(categorias)
    .values([
      { nombre: 'Camisas', slug: 'camisas', descripcion: 'Camisas personalizadas para toda ocasion.', orden: 1 },
      { nombre: 'Tazas', slug: 'tazas', descripcion: 'Tazas sublimadas con tu diseno favorito.', orden: 2 },
      { nombre: 'Stickers', slug: 'stickers', descripcion: 'Stickers personalizados para lo que imagines.', orden: 3 },
      { nombre: 'Coronas', slug: 'coronas', descripcion: 'Coronas de cumpleanos hechas a mano.', orden: 4 },
      { nombre: 'Bandas', slug: 'bandas', descripcion: 'Bandas personalizadas para tu celebracion.', orden: 5 },
      { nombre: 'Toppers', slug: 'toppers', descripcion: 'Toppers para pasteles y postres.', orden: 6 },
      { nombre: 'Papeleria', slug: 'papeleria', descripcion: 'Invitaciones y papeleria para eventos.', orden: 7 },
      { nombre: 'Decoraciones', slug: 'decoraciones', descripcion: 'Decoraciones a la medida para fiestas.', orden: 8 },
    ])
    .returning();
  const idPorSlug = new Map(categoriasInsertadas.map((c) => [c.slug, c.id]));

  console.log('Sembrando productos...');
  const productosData = [
    { categoriaSlug: 'camisas', nombre: 'Camisa personalizada estampada', descripcionCorta: 'Camisa 100% algodon con tu diseno o frase.', precioDesde: 250, tiempoEntrega: '3-5 dias', destacado: true },
    { categoriaSlug: 'camisas', nombre: 'Set de camisas familiares', descripcionCorta: 'Camisas a juego para toda la familia.', precioDesde: 900, tiempoEntrega: '5-7 dias', destacado: false },
    { categoriaSlug: 'tazas', nombre: 'Taza sublimada personalizada', descripcionCorta: 'Taza ceramica con foto o diseno a color.', precioDesde: 180, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'tazas', nombre: 'Set de tazas para pareja', descripcionCorta: 'Dos tazas a juego con diseno personalizado.', precioDesde: 320, tiempoEntrega: '3-4 dias', destacado: false },
    { categoriaSlug: 'stickers', nombre: 'Pack de stickers personalizados', descripcionCorta: 'Set de 12 stickers troquelados con tu diseno.', precioDesde: 150, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'coronas', nombre: 'Corona de cumpleanos', descripcionCorta: 'Corona artesanal con el nombre y edad.', precioDesde: 220, tiempoEntrega: '3-5 dias', destacado: true },
    { categoriaSlug: 'bandas', nombre: 'Banda personalizada de cumpleanos', descripcionCorta: 'Banda satinada con frase o nombre bordado.', precioDesde: 190, tiempoEntrega: '3-4 dias', destacado: false },
    { categoriaSlug: 'toppers', nombre: 'Topper personalizado para pastel', descripcionCorta: 'Topper en acrilico o madera con tu tema.', precioDesde: 140, tiempoEntrega: '2-3 dias', destacado: true },
    { categoriaSlug: 'papeleria', nombre: 'Invitaciones digitales personalizadas', descripcionCorta: 'Invitacion digital lista para compartir por WhatsApp.', precioDesde: 120, tiempoEntrega: '1-2 dias', destacado: false },
    { categoriaSlug: 'decoraciones', nombre: 'Kit de decoracion tematica', descripcionCorta: 'Kit completo de decoracion para tu evento.', precioDesde: 650, tiempoEntrega: '5-7 dias', destacado: true },
  ];
  await db.insert(productos).values(
    productosData.map((p) => ({
      categoriaId: idPorSlug.get(p.categoriaSlug)!,
      nombre: p.nombre,
      slug: slugify(p.nombre),
      descripcionCorta: p.descripcionCorta,
      precioDesde: p.precioDesde,
      tiempoEntrega: p.tiempoEntrega,
      destacado: p.destacado,
    }))
  );

  console.log('Sembrando blog...');
  const [categoriaBlog] = await db
    .insert(blogCategorias)
    .values({ nombre: 'Manualidades', slug: 'manualidades', descripcion: 'Tips de Cricut, sublimacion y manualidades.' })
    .returning();
  await db.insert(blogPosts).values([
    {
      categoriaId: categoriaBlog.id,
      titulo: '5 ideas para personalizar tazas con Cricut',
      slug: '5-ideas-para-personalizar-tazas-con-cricut',
      resumen: 'Te compartimos 5 ideas faciles para darle un toque unico a tus tazas sublimadas.',
      contenido: '# 5 ideas para personalizar tazas\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 4,
      publicado: true,
      fechaPublicacion: new Date('2026-07-20'),
    },
    {
      categoriaId: categoriaBlog.id,
      titulo: 'Como elegir el vinil correcto para camisas',
      slug: 'como-elegir-el-vinil-correcto-para-camisas',
      resumen: 'Guia rapida para elegir el tipo de vinil segun la tela y el diseno.',
      contenido: '# Como elegir el vinil correcto\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 5,
      publicado: true,
      fechaPublicacion: new Date('2026-07-10'),
    },
    {
      categoriaId: categoriaBlog.id,
      titulo: 'Tendencias en decoracion de cumpleanos 2026',
      slug: 'tendencias-en-decoracion-de-cumpleanos-2026',
      resumen: 'Las tendencias que mas estamos viendo este ano en decoracion de fiestas.',
      contenido: '# Tendencias en decoracion de cumpleanos\n\nContenido de ejemplo del articulo.',
      tiempoLectura: 3,
      publicado: true,
      fechaPublicacion: new Date('2026-06-28'),
    },
  ]);

  console.log('Sembrando galeria...');
  await db.insert(galeria).values(
    [
      'Camisas para cumpleanos tematico',
      'Tazas para San Valentin',
      'Corona para quince anos',
      'Set de bienvenida para baby shower',
      'Stickers para emprendimiento local',
      'Decoracion para graduacion',
      // imagenUrl vacio a proposito: la columna es NOT NULL en el schema pero
      // no hay fotos reales todavia — cadena vacia funciona como sentinel
      // "sin foto" (falsy, igual que null en los demas campos imagenUrl).
    ].map((titulo) => ({ titulo, slug: slugify(titulo), imagenUrl: '', destacado: true }))
  );

  console.log('Sembrando testimonios...');
  await db.insert(testimonios).values([
    { nombreCliente: 'Karen Martinez', rol: 'Mama de cumpleanera', texto: 'Todo quedo hermoso, superaron lo que imagine para el cumpleanos de mi hija.', estrellas: 5, destacado: true },
    { nombreCliente: 'Douglas Reyes', rol: 'Organizador de eventos', texto: 'Cumplieron con el tiempo de entrega y la calidad fue excelente.', estrellas: 5, destacado: true },
    { nombreCliente: 'Fatima Lopez', rol: 'Emprendedora', texto: 'Los stickers para mi negocio quedaron exactamente como los pedi.', estrellas: 4, destacado: true },
    { nombreCliente: 'Marlon Ordonez', rol: 'Cliente frecuente', texto: 'Ya es la tercera vez que pido con ellos, siempre buena atencion.', estrellas: 5, destacado: true },
    { nombreCliente: 'Suyapa Banegas', rol: 'Mama de quinceanera', texto: 'La corona y la banda quedaron perfectas para la fiesta.', estrellas: 5, destacado: true },
    { nombreCliente: 'Jorge Castellanos', rol: 'Negocio local', texto: 'Buen precio y buena calidad en las tazas que pedimos para regalar.', estrellas: 4, destacado: true },
  ]);

  console.log('Sembrando configuracion...');
  await db.insert(configuracion).values({
    nombreNegocio: 'Poppy Crafty',
    slogan: 'Detalles personalizados para momentos inolvidables',
    descripcion:
      'Personalizacion de camisas, tazas, stickers y regalos para eventos y celebraciones en Choluteca, Honduras.',
    telefono: '+504 0000-0000',
    email: 'contacto@poppycrafty.com',
    direccion: 'Choluteca, Honduras',
    horario: 'Lunes a sabado, 9:00am - 6:00pm',
    facebook: 'https://facebook.com/poppycrafty',
    instagram: 'https://instagram.com/poppycrafty',
    tiktok: 'https://tiktok.com/@poppycrafty',
    whatsapp: '+504 0000-0000',
  });

  console.log('Listo. Contenido de ejemplo sembrado.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Paso 2: Agregar el script a `package.json`**

En la sección `"scripts"`, agregar después de `"seed:rbac": "tsx scripts/seed-rbac.ts"`:

```json
    "seed:rbac": "tsx scripts/seed-rbac.ts",
    "seed:content": "tsx scripts/seed-content.ts"
```

- [ ] **Paso 3: Verificar**

Run: `pnpm tsc --noEmit`
Expected: sin errores.

**No correr `pnpm seed:content` en esta tarea** — requiere que el usuario ya haya corrido `db:push` con la migración de la Tarea 6 (tabla `testimonios`), y RULES.md/ROADMAP.md establecen que las migraciones y su aplicación las corre el usuario. Dejarlo para el checklist final que se le entrega al usuario.

- [ ] **Paso 4: Commit**

```bash
git add scripts/seed-content.ts package.json
git commit -m "feat: script de seed de contenido de ejemplo (seed:content)"
```

---

### Tarea 27: Actualizar documentación (`DATABASE.md`, `DECISIONS.md`, `CHANGELOG.md`, `ROADMAP.md`)

**Files:**
- Modify: `docs/DATABASE.md:311-315`
- Modify: `docs/DECISIONS.md` (agregar entrada nueva al final, antes de la plantilla)
- Modify: `docs/CHANGELOG.md` (agregar entrada bajo `## 2026-08-03` o una fecha nueva si corresponde)
- Modify: `docs/ROADMAP.md` (marcar avance de Fase 1)

- [ ] **Paso 1: Agregar la tabla `testimonios` a `docs/DATABASE.md`**

Insertar después de la sección `### \`mensajes_contacto\`` (línea 312, antes del `---` de la línea 314):

```markdown

### `testimonios`

Solo lectura pública en V1 — SRS §118 lista "sistema de reseñas" como
funcionalidad futura, y escritura pública abre moderación/spam/RLS no
diseñados todavía. Reemplaza la sección "Redes Sociales / feed en vivo" de
SRS §55 en la landing (ver `docs/DECISIONS.md`).

| Campo | Tipo | Restricciones |
|---|---|---|
| id | uuid | PK |
| nombre_cliente | text | NOT NULL |
| rol | text | NULL |
| texto | text | NOT NULL |
| estrellas | integer | NOT NULL (1-5, validado en Zod si se agrega form admin) |
| destacado | boolean | DEFAULT false |
| activo | boolean | DEFAULT true |
| created_at | timestamptz | NOT NULL |
```

También agregar `testimonios` a la lista de "Lectura pública" en la sección `## Row Level Security (RLS)` (línea ~465), junto a `galeria`.

- [ ] **Paso 2: Agregar entrada a `docs/DECISIONS.md`**

Agregar antes de `## Plantilla para futuras entradas`:

```markdown
## 2026-08-03 (cont.) — Landing page: tabla `testimonios` reemplaza el feed de redes sociales

Al construir la landing (`docs/superpowers/specs/2026-08-03-landing-page-design.md`)
se decidió no implementar el feed en vivo de Instagram/Facebook que pedía
SRS §55 — requiere credenciales de API de Meta que no existen y agregan una
dependencia externa frágil para una sección de la home. Se reemplazó por una
sección de Testimonios con calificación en estrellas, respaldada por una
tabla nueva (`testimonios`, ver `DATABASE.md`).

**Alcance acotado a propósito:** solo lectura pública en esta versión — SRS
§118 lista "sistema de reseñas" como funcionalidad futura, y un formulario
público de envío abre temas de moderación/spam/RLS no diseñados. Se puebla
vía seed (`scripts/seed-content.ts`) o admin futuro; el permiso RBAC
(`testimonios.*`) ya está en `permissions.ts` siguiendo el mismo criterio que
`admin-nav.ts` — permiso primero, página cuando el módulo se construya
completo.

También se agregó `/catalogo` (búsqueda + filtro por categoría, sin
paginación) porque el buscador del header de la landing necesitaba un
destino real — no estaba en el alcance original de "construir la landing"
pero es parte de la Fase 1 del `ROADMAP.md` de todos modos.
```

- [ ] **Paso 3: Agregar entrada a `docs/CHANGELOG.md`**

Agregar al final del archivo (nueva entrada bajo la fecha de hoy — usar la fecha real del día en que se ejecuta esta tarea, no necesariamente `2026-08-03` si el plan se ejecuta después):

```markdown

- **Landing page real construida**, reemplazando el placeholder de la
  plantilla: Header, Hero, Productos Destacados, Categorías, Beneficios,
  Cómo Realizamos tu Pedido, Galería, Blog, Testimonios (reemplaza el feed de
  redes sociales de SRS §55, ver `DECISIONS.md`), CTA Final, Footer. Paleta y
  tipografía de marca (Poppins) aplicadas solo al grupo `(marketing)`.
  Framer Motion agregado para scroll-reveal y parallax del Hero.
- Página `/catalogo` básica (búsqueda + filtro por categoría, sin
  paginación).
- Tabla nueva `testimonios` (28 tablas en total), permiso RBAC agregado,
  migración generada (no aplicada — pendiente `db:push` + `seed:rbac` del
  usuario).
- Script `scripts/seed-content.ts` (`pnpm seed:content`) con contenido de
  ejemplo: 8 categorías, 10 productos, 3 posts de blog, 6 piezas de galería,
  6 testimonios y la fila de `configuracion` (datos de contacto placeholder,
  marcados como ficticios).
```

- [ ] **Paso 4: Marcar avance en `docs/ROADMAP.md`**

En la sección `## Fase 1 — V1`, después del punto 1, agregar una nota de estado:

```markdown
1. Sitio público: Inicio, Nosotros, Productos (catálogo + filtros + búsqueda),
   Producto individual, Blog, Artículo, Galería, Contacto, FAQ, Políticas, 404.
   - [x] Inicio (landing completa, ver `CHANGELOG.md` y spec en
     `docs/superpowers/specs/2026-08-03-landing-page-design.md`).
   - [x] Productos: catálogo básico (`/catalogo`) con búsqueda y filtro por
     categoría, sin paginación.
   - [ ] Producto individual, Nosotros, Artículo de blog, Galería (página
     propia), Contacto, FAQ, Políticas, 404 — pendientes.
```

- [ ] **Paso 5: Commit**

```bash
git add docs/DATABASE.md docs/DECISIONS.md docs/CHANGELOG.md docs/ROADMAP.md
git commit -m "docs: documentar tabla testimonios, catalogo basico y avance de la landing"
```

---

### Tarea 28: Verificación final

**Files:** (ninguno — solo verificación)

- [ ] **Paso 1: Type-check completo**

Run: `pnpm tsc --noEmit`
Expected: sin errores, cero warnings de tipos.

- [ ] **Paso 2: Lint**

Run: `pnpm lint`
Expected: sin errores. Si hay warnings preexistentes no relacionados con este trabajo, no es necesario resolverlos en este plan.

- [ ] **Paso 3: Levantar el sitio y revisar responsive**

Run: `pnpm dev`
En el navegador, contra `http://localhost:3000`:
- Probar en viewport mobile (375px), tablet (768px) y desktop (1280px+) con las DevTools.
- Confirmar que el menú hamburguesa abre/cierra correctamente en mobile.
- Confirmar que el botón de WhatsApp del header es visible en mobile.
- Confirmar navegación por teclado: Tab a través del header, foco visible en cada link/botón.
- Revisar la consola del navegador: sin errores ni warnings de React/Next.

- [ ] **Paso 4: Checklist de contenido**

Con `pnpm seed:content` corrido por el usuario (después de aplicar la migración de la Tarea 6), confirmar visualmente:
- Las 9 secciones de la home muestran contenido real del seed, no vacío.
- `/catalogo` devuelve productos y el filtro por categoría + búsqueda funcionan.
- Los links de WhatsApp abren `wa.me` con el número placeholder y el mensaje precargado correcto.

- [ ] **Paso 5: Reportar al usuario los pasos manuales pendientes**

Dejar explícito en el mensaje final (no requiere commit) que el usuario debe correr, en este orden:

```bash
pnpm db:push       # aplica la migracion de testimonios (revisar el SQL generado antes)
pnpm seed:rbac      # re-sembrar permisos (incluye el nuevo testimonios.*)
pnpm seed:content   # contenido de ejemplo para ver la landing completa
```

---

## Resumen de archivos nuevos/modificados

**Nuevos:**
- `src/components/shared/{image-placeholder,reveal}.tsx`
- `src/lib/helpers/{whatsapp,category-icons}.ts`
- `src/lib/db/queries/{configuracion,testimonios,galeria,blog}.ts`
- `src/components/layout/{header,footer}.tsx`
- `src/app/(marketing)/layout.tsx`
- `src/components/marketing/{product-card,blog-card,galeria-grid,catalogo-filtros}.tsx`
- `src/components/sections/{hero,productos-destacados,categorias,beneficios,como-pedimos,galeria,blog,testimonios,cta-final}.tsx`
- `src/app/(marketing)/catalogo/page.tsx`
- `scripts/seed-content.ts`

**Modificados:**
- `src/app/globals.css` (tokens de marca)
- `package.json` (framer-motion, script `seed:content`)
- `src/lib/db/schema/clientes.ts` (tabla `testimonios`)
- `src/lib/rbac/permissions.ts` (permiso `testimonios`)
- `src/lib/db/queries/{categorias,productos}.ts` (queries nuevas)
- `src/app/(marketing)/page.tsx` (reemplazo completo del placeholder)
- `docs/{DATABASE,DECISIONS,CHANGELOG,ROADMAP}.md`

---

## Auto-revisión del plan

- **Cobertura del spec:** las 9 secciones de la landing (Tareas 15-23), header/footer (Tarea 13), fundamentos de tokens/tipografía (Tareas 1-2), tabla de testimonios (Tareas 6-9), `/catalogo` (Tarea 25), seed (Tarea 26) y actualización de docs (Tarea 27) cubren todo el spec de diseño aprobado. Los ítems marcados "fuera de alcance" en el spec (producto individual, artículo de blog, formulario de cotización, políticas, admin de testimonios) no tienen tarea — es intencional.
- **Sin placeholders:** cada tarea trae código completo, sin `TODO`/`TBD`.
- **Consistencia de tipos:** `ProductoResumen` (Tarea 11) se usa igual en `ProductCard` (Tarea 14), `ProductosDestacados` (Tarea 16) y `/catalogo` (Tarea 25). `Configuracion` (Tarea 8) se usa igual en `Header`, `Footer`, `Hero`, `CTAFinal` y `page.tsx`. `CategoriaConConteo` (Tarea 11) se usa igual en `Footer`, `Categorias` y `CatalogoFiltros`. `GaleriaPieza`, `BlogPostResumen`, `Testimonio` cada uno con un solo productor y un solo consumidor.
