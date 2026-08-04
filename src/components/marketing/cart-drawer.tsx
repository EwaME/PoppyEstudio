'use client';

import { Minus, Plus, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { EntityImage } from '@/components/shared/entity-image';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { getProductoImagen } from '@/lib/helpers/entity-image';
import { useCartStore } from '@/store/cart';
import { whatsappHref } from '@/lib/helpers/whatsapp';

export function CartDrawer({ whatsapp }: { whatsapp: string | null | undefined }) {
  const items = useCartStore((state) => state.items);
  const updateCantidad = useCartStore((state) => state.updateCantidad);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);

  const totalItems = items.reduce((sum, item) => sum + item.cantidad, 0);
  const totalEstimado = items.reduce(
    (sum, item) => sum + (item.precioDesde != null ? item.precioDesde * item.cantidad : 0),
    0
  );
  const hayPreciosFaltantes = items.some((item) => item.precioDesde == null);

  function handleCotizar() {
    const lineas = items.map((item) => `• ${item.cantidad}x ${item.nombre}`).join('\n');
    const mensaje = `*¡Hola! Quiero cotizar estos productos:*\n\n${lineas}`;
    window.open(whatsappHref(whatsapp, mensaje), '_blank', 'noopener,noreferrer');
    clear();
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Ver carrito">
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex size-4.5 items-center justify-center rounded-full bg-brand-primary-hover text-[10px] font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-80 flex-col gap-0 bg-background p-0 sm:w-96">
        <SheetHeader className="border-b bg-brand-secondary/40 px-6 py-5">
          <SheetTitle className="flex items-center gap-2 font-heading text-lg">
            Tu carrito
            {totalItems > 0 && (
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-primary-hover text-xs font-semibold text-white">
                {totalItems}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center text-sm text-muted-foreground">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-secondary">
              <ShoppingCart className="size-7 text-brand-primary-hover" />
            </div>
            Todavía no agregaste productos.
          </div>
        ) : (
          <>
            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
              {items.map((item) => {
                const imagen = getProductoImagen(item.slug);
                return (
                  <div key={item.slug} className="flex gap-3 rounded-xl border bg-background p-3 shadow-sm">
                    {imagen ? (
                      <EntityImage
                        src={imagen}
                        label={item.nombre}
                        className="size-16 shrink-0 rounded-lg"
                        fallback={<ImagePlaceholder label={item.nombre} className="size-16 shrink-0 rounded-lg" />}
                      />
                    ) : (
                      <ImagePlaceholder label={item.nombre} className="size-16 shrink-0 rounded-lg" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm leading-snug font-semibold">{item.nombre}</p>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug)}
                          aria-label={`Quitar ${item.nombre}`}
                          className="shrink-0 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      {item.precioDesde != null && (
                        <p className="mt-0.5 text-sm font-semibold text-brand-primary-hover">
                          Desde L. {item.precioDesde.toFixed(2)}
                        </p>
                      )}
                      <div className="mt-2 flex w-fit items-center gap-2 rounded-full border px-1 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateCantidad(item.slug, item.cantidad - 1)}
                          aria-label="Restar cantidad"
                          className="flex size-6 items-center justify-center rounded-full hover:bg-muted"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-medium">{item.cantidad}</span>
                        <button
                          type="button"
                          onClick={() => updateCantidad(item.slug, item.cantidad + 1)}
                          aria-label="Sumar cantidad"
                          className="flex size-6 items-center justify-center rounded-full hover:bg-muted"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-3 border-t bg-brand-secondary/30 p-4">
              {totalEstimado > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total aproximado</span>
                  <span className="font-heading text-lg font-semibold">
                    L. {totalEstimado.toFixed(2)}
                    {hayPreciosFaltantes && '+'}
                  </span>
                </div>
              )}
              <Button onClick={handleCotizar} size="lg" className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover">
                <MessageCircle /> Cotizar por WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                El precio final se confirma por WhatsApp. Los costos son aproximados y dependerán de la
                personalización solicitada.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
