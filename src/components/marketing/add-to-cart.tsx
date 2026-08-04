'use client';

import { useRef, useState } from 'react';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { EntityImage } from '@/components/shared/entity-image';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { getProductoImagen } from '@/lib/helpers/entity-image';
import { useCartStore } from '@/store/cart';

export function AddToCart({
  slug,
  nombre,
  precioDesde,
}: {
  slug: string;
  nombre: string;
  precioDesde: number | null;
}) {
  const [cantidad, setCantidad] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const acumuladoRef = useRef<{ slug: string; total: number } | null>(null);

  function handleAdd() {
    addItem(slug, nombre, cantidad, precioDesde);
    const imagen = getProductoImagen(slug);

    const acumulado =
      acumuladoRef.current && acumuladoRef.current.slug === slug
        ? acumuladoRef.current.total + cantidad
        : cantidad;
    acumuladoRef.current = { slug, total: acumulado };
    const limpiarAcumulado = () => {
      acumuladoRef.current = null;
    };

    toast.custom(
      (id) => (
        <div className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-lg">
          {imagen ? (
            <EntityImage
              src={imagen}
              label={nombre}
              className="size-12 shrink-0 rounded-md"
              fallback={<ImagePlaceholder label={nombre} className="size-12 shrink-0 rounded-md" />}
            />
          ) : (
            <ImagePlaceholder label={nombre} className="size-12 shrink-0 rounded-md" />
          )}
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-primary-hover">
              <ShoppingCart className="size-4" /> Agregado al carrito
            </p>
            <p className="truncate text-sm text-muted-foreground">
              {acumulado}x {nombre}
            </p>
          </div>
          <button
            type="button"
            onClick={() => toast.dismiss(id)}
            aria-label="Cerrar notificación"
            className="shrink-0 self-start text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      ),
      { id: 'add-to-cart-toast', onAutoClose: limpiarAcumulado, onDismiss: limpiarAcumulado }
    );
    setCantidad(1);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-md border">
        <button
          type="button"
          onClick={() => setCantidad((c) => Math.max(1, c - 1))}
          aria-label="Restar cantidad"
          className="flex size-9 items-center justify-center hover:bg-muted"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-8 text-center text-sm font-medium">{cantidad}</span>
        <button
          type="button"
          onClick={() => setCantidad((c) => c + 1)}
          aria-label="Sumar cantidad"
          className="flex size-9 items-center justify-center hover:bg-muted"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <Button type="button" variant="outline" size="lg" onClick={handleAdd}>
        <ShoppingCart /> Agregar al carrito
      </Button>
    </div>
  );
}
