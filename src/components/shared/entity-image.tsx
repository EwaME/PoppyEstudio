'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImagePlaceholder } from './image-placeholder';

/** Muestra la foto real de /public/imgs si existe; si el archivo no esta subido todavia, cae al placeholder de gradiente+icono. */
export function EntityImage({
  src,
  label,
  icon,
  className,
}: {
  src: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ImagePlaceholder icon={icon} label={label} className={className} />;
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
