'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import type { GaleriaPieza } from '@/lib/db/queries/galeria';

export function GaleriaGrid({ piezas }: { piezas: GaleriaPieza[] }) {
  const [abierta, setAbierta] = useState<GaleriaPieza | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 *:mb-4">
        {piezas.map((pieza) => (
          <button
            key={pieza.id}
            type="button"
            onClick={() => setAbierta(pieza)}
            className="group block w-full overflow-hidden rounded-xl text-left"
          >
            <ImagePlaceholder
              icon={Camera}
              label={pieza.titulo}
              className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={abierta != null} onOpenChange={(open) => !open && setAbierta(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle>{abierta?.titulo}</DialogTitle>
          <ImagePlaceholder icon={Camera} label={abierta?.titulo ?? ''} className="aspect-video w-full" />
          {abierta?.descripcion && <p className="text-sm text-muted-foreground">{abierta.descripcion}</p>}
        </DialogContent>
      </Dialog>
    </>
  );
}
