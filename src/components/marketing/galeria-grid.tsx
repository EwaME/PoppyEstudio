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
      className="group block w-full text-left perspective-[1000px]"
      aria-label={`Ver detalle de ${pieza.titulo}`}
    >
      <div
        className={cn(
          'relative aspect-4/5 w-full transition-transform duration-500 transform-3d',
          flipped && 'transform-[rotateY(180deg)]'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 flex flex-col gap-2 rounded-sm bg-white p-3 pb-6 shadow-md transition-transform duration-300 backface-hidden group-hover:scale-[1.02]',
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

        <div className="absolute inset-0 flex flex-col justify-center gap-2 rounded-sm bg-brand-secondary p-4 shadow-md backface-hidden transform-[rotateY(180deg)]">
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
