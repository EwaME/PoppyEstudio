'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { blogPostSchema, type BlogPostInput } from '@/lib/validations/blog';
import {
  createBlogPostAction,
  updateBlogPostAction,
  deactivateBlogPostAction,
  activateBlogPostAction,
} from './actions';

type BlogPost = {
  id: string;
  titulo: string;
  slug: string;
  resumen: string | null;
  contenido: string;
  imagenPortada: string | null;
  tiempoLectura: number | null;
  categoriaId: string;
  categoriaNombre: string;
  publicado: boolean;
  activo: boolean;
  fechaPublicacion: Date | null;
};

type Categoria = { id: string; nombre: string; slug: string };

type Props = {
  posts: BlogPost[];
  categorias: Categoria[];
  permissions: string[];
};

const DEFAULT_VALUES: BlogPostInput = {
  categoriaId: '',
  titulo: '',
  slug: '',
  resumen: '',
  contenido: '',
  imagenPortada: '',
  tiempoLectura: undefined,
  publicado: false,
};

export function BlogAdminClient({ posts, categorias, permissions }: Props) {
  const can = (slug: string) => permissions.includes(slug);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);

  const form = useForm<BlogPostInput>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: DEFAULT_VALUES,
  });

  function openCreate() {
    setEditing(null);
    form.reset(DEFAULT_VALUES);
    setOpen(true);
  }

  function openEdit(post: BlogPost) {
    setEditing(post);
    form.reset({
      categoriaId: post.categoriaId,
      titulo: post.titulo,
      slug: post.slug,
      resumen: post.resumen ?? '',
      contenido: post.contenido,
      imagenPortada: post.imagenPortada ?? '',
      tiempoLectura: post.tiempoLectura ?? undefined,
      publicado: post.publicado,
    });
    setOpen(true);
  }

  async function onSubmit(values: BlogPostInput) {
    const result = editing
      ? await updateBlogPostAction(editing.id, values)
      : await createBlogPostAction(values);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(editing ? 'Articulo actualizado.' : 'Articulo creado.');
    setOpen(false);
  }

  async function onToggleActivo(post: BlogPost) {
    const result = post.activo
      ? await deactivateBlogPostAction(post.id)
      : await activateBlogPostAction(post.id);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(post.activo ? 'Articulo desactivado.' : 'Articulo activado.');
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blog</h1>
        {can('blog.create') && <Button onClick={openCreate}>Nuevo articulo</Button>}
      </div>

      {posts.length === 0 && (
        <p className="rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground">
          Sin articulos registrados.
        </p>
      )}

      {/* Mobile: tarjetas apiladas */}
      {posts.length > 0 && (
        <div className="grid gap-3 sm:hidden">
          {posts.map((post) => (
            <div key={post.id} className="space-y-2 rounded-xl border bg-card p-3 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <p className="truncate text-sm font-medium">{post.titulo}</p>
                <Badge variant={post.activo ? 'default' : 'secondary'} className="shrink-0">
                  {post.activo ? 'Activo' : 'Inactivo'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {post.categoriaNombre} · {post.publicado ? 'Publicado' : 'Borrador'}
              </p>
              <div className="flex gap-2 pt-1">
                {can('blog.edit') && (
                  <Button variant="outline" size="sm" onClick={() => openEdit(post)}>
                    Editar
                  </Button>
                )}
                {can('blog.deactivate') && (
                  <Button variant="outline" size="sm" onClick={() => onToggleActivo(post)}>
                    {post.activo ? 'Desactivar' : 'Activar'}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Desktop: tabla */}
      {posts.length > 0 && (
        <div className="hidden overflow-hidden rounded-xl border bg-card sm:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titulo</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Publicado</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.titulo}</TableCell>
                  <TableCell>{post.categoriaNombre}</TableCell>
                  <TableCell>
                    <Badge variant={post.publicado ? 'default' : 'secondary'}>
                      {post.publicado ? 'Publicado' : 'Borrador'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={post.activo ? 'default' : 'secondary'}>
                      {post.activo ? 'Activo' : 'Inactivo'}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex justify-end gap-2 text-right">
                    {can('blog.edit') && (
                      <Button variant="outline" size="sm" onClick={() => openEdit(post)}>
                        Editar
                      </Button>
                    )}
                    {can('blog.deactivate') && (
                      <Button variant="outline" size="sm" onClick={() => onToggleActivo(post)}>
                        {post.activo ? 'Desactivar' : 'Activar'}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar articulo' : 'Nuevo articulo'}</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="categoriaId">Categoria</Label>
              <Controller
                name="categoriaId"
                control={form.control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="categoriaId">
                      <SelectValue placeholder="Selecciona una categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categorias.map((categoria) => (
                        <SelectItem key={categoria.id} value={categoria.id}>
                          {categoria.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.categoriaId && (
                <p className="text-sm text-destructive">{form.formState.errors.categoriaId.message}</p>
              )}
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
              <Label htmlFor="resumen">Resumen</Label>
              <Textarea id="resumen" rows={2} {...form.register('resumen')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imagenPortada">Imagen de portada (URL)</Label>
              <Input id="imagenPortada" placeholder="https://..." {...form.register('imagenPortada')} />
              {form.formState.errors.imagenPortada && (
                <p className="text-sm text-destructive">{form.formState.errors.imagenPortada.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tiempoLectura">Tiempo de lectura (minutos)</Label>
              <Input
                id="tiempoLectura"
                type="number"
                {...form.register('tiempoLectura', { valueAsNumber: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contenido">Contenido (Markdown)</Label>
              <Textarea id="contenido" rows={14} className="font-mono text-xs" {...form.register('contenido')} />
              {form.formState.errors.contenido && (
                <p className="text-sm text-destructive">{form.formState.errors.contenido.message}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                id="publicado"
                type="checkbox"
                className="size-4 rounded border-input"
                {...form.register('publicado')}
              />
              <Label htmlFor="publicado">Publicado</Label>
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
