'use client';

import { useRef } from 'react';
import { Upload } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ICONOS, type Slot, type SlotTipo } from './types';

function cargarImagen(file: File, onLoad: (img: HTMLImageElement) => void) {
  if (!file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => onLoad(img);
    img.src = ev.target?.result as string;
  };
  reader.readAsDataURL(file);
}

export function SlotPanel({
  index,
  slot,
  onChange,
}: {
  index: number;
  slot: Slot;
  onChange: (index: number, slot: Slot) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined) {
    if (!file) return;
    cargarImagen(file, (imagen) => onChange(index, { ...slot, imagen }));
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['texto', 'icono', 'imagen'] as SlotTipo[]).map((tipo) => (
          <button
            key={tipo}
            type="button"
            onClick={() => onChange(index, { ...slot, tipo })}
            className={cn(
              'flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
              slot.tipo === tipo
                ? 'border-brand-primary-hover bg-brand-primary text-foreground'
                : 'border-input bg-background text-muted-foreground hover:bg-muted'
            )}
          >
            {tipo === 'texto' ? 'Texto' : tipo === 'icono' ? 'Ícono' : 'Imagen'}
          </button>
        ))}
      </div>

      {slot.tipo === 'texto' && (
        <>
          <div className="space-y-1.5">
            <Label htmlFor={`texto-${index}`}>Texto</Label>
            <Input
              id={`texto-${index}`}
              value={slot.texto}
              onChange={(e) => onChange(index, { ...slot, texto: e.target.value })}
              placeholder="Escribí acá..."
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1 space-y-1.5">
              <Label htmlFor={`color-${index}`}>Color</Label>
              <input
                id={`color-${index}`}
                type="color"
                value={slot.color}
                onChange={(e) => onChange(index, { ...slot, color: e.target.value })}
                className="h-9 w-full cursor-pointer rounded-md border border-input p-1"
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <Label htmlFor={`tamano-${index}`}>Tamaño</Label>
              <input
                id={`tamano-${index}`}
                type="range"
                min={20}
                max={80}
                value={slot.tamano}
                onChange={(e) => onChange(index, { ...slot, tamano: Number(e.target.value) })}
                className="mt-2.5 w-full accent-brand-primary-hover"
              />
            </div>
          </div>
        </>
      )}

      {slot.tipo === 'icono' && (
        <>
          <div className="space-y-2">
            <Label>Elegí un ícono</Label>
            <div className="grid grid-cols-6 gap-2">
              {ICONOS.map((icono) => (
                <button
                  key={icono}
                  type="button"
                  onClick={() => onChange(index, { ...slot, icono })}
                  className={cn(
                    'flex aspect-square items-center justify-center rounded-lg border text-xl transition-colors',
                    slot.icono === icono ? 'border-brand-primary-hover bg-brand-secondary' : 'border-input bg-background hover:bg-muted'
                  )}
                >
                  {icono}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`tamano-icono-${index}`}>Tamaño</Label>
            <input
              id={`tamano-icono-${index}`}
              type="range"
              min={30}
              max={100}
              value={slot.tamano}
              onChange={(e) => onChange(index, { ...slot, tamano: Number(e.target.value) })}
              className="w-full accent-brand-primary-hover"
            />
          </div>
        </>
      )}

      {slot.tipo === 'imagen' && (
        <>
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0]);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={cn(
              'cursor-pointer rounded-lg border-2 border-dashed p-4 text-center text-sm transition-colors',
              slot.imagen
                ? 'border-brand-primary-hover bg-brand-secondary/40'
                : 'border-input bg-background text-muted-foreground hover:bg-muted'
            )}
          >
            {slot.imagen ? (
              <div className="flex flex-col items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- data URL de imagen subida por el cliente, no un host configurado en next/image */}
                <img src={slot.imagen.src} alt="Vista previa" className="max-h-16 rounded" />
                <span className="text-xs">Imagen cargada ✓</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                <Upload className="size-4" />
                Arrastrá una imagen o hacé clic para subir
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files?.[0])}
              className="hidden"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`tamano-imagen-${index}`}>Tamaño</Label>
            <input
              id={`tamano-imagen-${index}`}
              type="range"
              min={40}
              max={120}
              value={slot.tamano}
              onChange={(e) => onChange(index, { ...slot, tamano: Number(e.target.value) })}
              className="w-full accent-brand-primary-hover"
            />
          </div>
        </>
      )}
    </div>
  );
}
