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
