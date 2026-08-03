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
import { productoSchema, type ProductoInput } from '@/lib/validations/productos';
import {
  createProductoAction,
  updateProductoAction,
  deactivateProductoAction,
  activateProductoAction,
} from './actions';

type Producto = {
  id: string;
  nombre: string;
  slug: string;
  descripcionCorta: string | null;
  precioDesde: number | null;
  tiempoEntrega: string | null;
  activo: boolean;
  categoriaId: string;
  categoriaNombre: string;
};

type Categoria = { id: string; nombre: string; slug: string; activo: boolean };

type Props = {
  productos: Producto[];
  categorias: Categoria[];
  permissions: string[];
};

export function ProductosClient({ productos, categorias, permissions }: Props) {
  const can = (slug: string) => permissions.includes(slug);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Producto | null>(null);

  const form = useForm<ProductoInput>({
    resolver: zodResolver(productoSchema),
    defaultValues: {
      nombre: '',
      slug: '',
      descripcionCorta: '',
      descripcion: '',
      precioDesde: undefined,
      tiempoEntrega: '',
      categoriaId: '',
    },
  });

  function openCreate() {
    setEditing(null);
    form.reset({
      nombre: '',
      slug: '',
      descripcionCorta: '',
      descripcion: '',
      precioDesde: undefined,
      tiempoEntrega: '',
      categoriaId: '',
    });
    setOpen(true);
  }

  function openEdit(producto: Producto) {
    setEditing(producto);
    form.reset({
      nombre: producto.nombre,
      slug: producto.slug,
      descripcionCorta: producto.descripcionCorta ?? '',
      precioDesde: producto.precioDesde ?? undefined,
      tiempoEntrega: producto.tiempoEntrega ?? '',
      categoriaId: producto.categoriaId,
    });
    setOpen(true);
  }

  async function onSubmit(values: ProductoInput) {
    const result = editing
      ? await updateProductoAction(editing.id, values)
      : await createProductoAction(values);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(editing ? 'Producto actualizado.' : 'Producto creado.');
    setOpen(false);
  }

  async function onToggleActivo(producto: Producto) {
    const result = producto.activo
      ? await deactivateProductoAction(producto.id)
      : await activateProductoAction(producto.id);

    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(producto.activo ? 'Producto desactivado.' : 'Producto activado.');
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Productos</h1>
        {can('productos.create') && <Button onClick={openCreate}>Nuevo producto</Button>}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Precio desde</TableHead>
              <TableHead>Entrega</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productos.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  Sin productos registrados.
                </TableCell>
              </TableRow>
            )}
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.categoriaNombre}</TableCell>
                <TableCell>{producto.precioDesde != null ? `L. ${producto.precioDesde}` : '—'}</TableCell>
                <TableCell>{producto.tiempoEntrega ?? '—'}</TableCell>
                <TableCell>
                  <Badge variant={producto.activo ? 'default' : 'secondary'}>
                    {producto.activo ? 'Activo' : 'Inactivo'}
                  </Badge>
                </TableCell>
                <TableCell className="flex justify-end gap-2 text-right">
                  {can('productos.edit') && (
                    <Button variant="outline" size="sm" onClick={() => openEdit(producto)}>
                      Editar
                    </Button>
                  )}
                  {can('productos.deactivate') && (
                    <Button variant="outline" size="sm" onClick={() => onToggleActivo(producto)}>
                      {producto.activo ? 'Desactivar' : 'Activar'}
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
            <DialogTitle>{editing ? 'Editar producto' : 'Nuevo producto'}</DialogTitle>
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
                <p className="text-sm text-destructive">
                  {form.formState.errors.categoriaId.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" {...form.register('nombre')} />
              {form.formState.errors.nombre && (
                <p className="text-sm text-destructive">{form.formState.errors.nombre.message}</p>
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
              <Label htmlFor="descripcionCorta">Descripcion corta</Label>
              <Input id="descripcionCorta" {...form.register('descripcionCorta')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripcion</Label>
              <Textarea id="descripcion" {...form.register('descripcion')} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="precioDesde">Precio desde</Label>
                <Input
                  id="precioDesde"
                  type="number"
                  step="0.01"
                  {...form.register('precioDesde', { valueAsNumber: true })}
                />
                {form.formState.errors.precioDesde && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.precioDesde.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiempoEntrega">Tiempo de entrega</Label>
                <Input
                  id="tiempoEntrega"
                  placeholder="Ej. 5-7 dias habiles"
                  {...form.register('tiempoEntrega')}
                />
              </div>
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
