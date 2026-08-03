'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Muestra la foto real de /public/imgs si existe; si el archivo no esta
 * subido todavia, cae a `fallback`. `fallback` se recibe ya renderizado
 * (no un componente/funcion) porque este es un Client Component y React
 * no permite pasar funciones desde un Server Component a traves de ese
 * limite — el ImagePlaceholder+icono se arma en el llamador (server).
 */
export function EntityImage({
  src,
  label,
  className,
  fallback,
}: {
  src: string;
  label: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
