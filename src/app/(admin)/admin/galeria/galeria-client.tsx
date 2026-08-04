'use client';

import { useEffect, useState } from 'react';
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

function Miniatura({ src, label, size = 'size-12' }: { src: string; label: string; size?: string }) {
  if (!src) {
    return (
      <div className={`flex ${size} shrink-0 items-center justify-center rounded-lg bg-muted`}>
        <Camera className="size-5 text-muted-foreground" />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={label}
      width={48}
      height={48}
      className={`${size} shrink-0 rounded-lg object-cover`}
    />
  );
}

export function GaleriaAdminClient({ piezas, permissions }: Props) {
  const can = (slug: string) => permissions.includes(slug);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GaleriaPieza | null>(null);
  const [archivo, setArchivo] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!archivo) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(archivo);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [archivo]);

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

      {piezas.length === 0 && (
        <p className="rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground">
          Sin fotos registradas.
        </p>
      )}

      {/* Mobile: tarjetas apiladas */}
      {piezas.length > 0 && (
        <div className="grid gap-3 sm:hidden">
          {piezas.map((pieza) => (
            <div key={pieza.id} className="flex gap-3 rounded-xl border bg-card p-3 shadow-sm">
              <Miniatura src={pieza.imagenUrl} label={pieza.titulo} size="size-14" />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-sm font-medium">{pieza.titulo}</p>
                  <Badge variant={pieza.activo ? 'default' : 'secondary'} className="shrink-0">
                    {pieza.activo ? 'Activo' : 'Inactivo'}
                  </Badge>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  {pieza.categoria ?? 'Sin categoria'}
                  {pieza.destacado ? ' · Destacado' : ''}
                </p>
                <div className="flex gap-2 pt-1">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Desktop: tabla */}
      {piezas.length > 0 && (
        <div className="hidden overflow-hidden rounded-xl border bg-card sm:block">
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
              {piezas.map((pieza) => (
                <TableRow key={pieza.id}>
                  <TableCell>
                    <Miniatura src={pieza.imagenUrl} label={pieza.titulo} />
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
      )}

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
              {(previewUrl || editing?.imagenUrl) && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewUrl ?? editing!.imagenUrl}
                  alt="Vista previa"
                  className="mt-2 h-28 w-28 rounded-lg border object-cover"
                />
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
