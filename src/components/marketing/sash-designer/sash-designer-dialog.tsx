'use client';

import { useRef, useState } from 'react';
import { Download, MessageCircle, Palette } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import { cn } from '@/lib/utils';
import { SashCanvas } from './sash-canvas';
import { SlotPanel } from './slot-panel';
import { ACABADOS, ESTILOS_BORDE, FABRIC_PRESETS, SLOT_INICIAL, type Acabado, type EstiloBorde, type Slot } from './types';

function resumenSlot(slot: Slot, index: number) {
  if (slot.tipo === 'texto' && slot.texto) return `Espacio ${index + 1}: Texto "${slot.texto}"`;
  if (slot.tipo === 'icono') return `Espacio ${index + 1}: Ícono ${slot.icono}`;
  if (slot.tipo === 'imagen' && slot.imagen) return `Espacio ${index + 1}: Imagen subida`;
  return `Espacio ${index + 1}: Vacío`;
}

export function SashDesignerDialog({ whatsapp }: { whatsapp: string | null | undefined }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSlot, setActiveSlot] = useState(0);
  const [fabricColor, setFabricColor] = useState('#F8BBD9');
  const [fabricFinish, setFabricFinish] = useState<Acabado>('satinado');
  const [borderStyle, setBorderStyle] = useState<EstiloBorde>('simple');
  const [slots, setSlots] = useState<Slot[]>([
    { ...SLOT_INICIAL },
    { ...SLOT_INICIAL },
    { ...SLOT_INICIAL },
  ]);

  function updateSlot(index: number, slot: Slot) {
    setSlots((prev) => prev.map((s, i) => (i === index ? slot : s)));
  }

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'banda-poppy-crafty.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  const fabricLabel = FABRIC_PRESETS.find((p) => p.hex === fabricColor)?.nombre ?? 'Personalizado';
  const acabadoLabel = ACABADOS.find((a) => a.value === fabricFinish)?.label ?? fabricFinish;
  const bordeLabel = ESTILOS_BORDE.find((b) => b.value === borderStyle)?.label ?? borderStyle;

  function handleEnviar() {
    const lineas = slots.map((slot, index) => resumenSlot(slot, index)).join('\n');
    const mensaje = `*¡Hola! Quiero encargar una banda personalizada:*\n\nColor de tela: ${fabricLabel}\nAcabado: ${acabadoLabel}\nBorde: ${bordeLabel}\n${lineas}\n\n¿Me pueden dar precio y tiempo de entrega? Adjunto una captura del diseño.`;
    window.open(whatsappHref(whatsapp, mensaje), '_blank', 'noopener,noreferrer');
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-brand-primary text-foreground hover:bg-brand-primary-hover">
          <Palette /> Diseñar mi banda
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Diseñá tu banda personalizada</DialogTitle>
          <DialogDescription>Elegí el color, el acabado y personalizá los 3 espacios de tu banda.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <div className="rounded-2xl bg-brand-secondary/40 p-4">
              <SashCanvas canvasRef={canvasRef} fabricColor={fabricColor} fabricFinish={fabricFinish} borderStyle={borderStyle} slots={slots} />
            </div>
            <Button type="button" variant="outline" onClick={handleDownload} className="mt-3 w-full">
              <Download /> Descargar imagen
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              También podés tomarle una captura de pantalla a tu diseño.
            </p>
          </div>

          <div className="w-full space-y-4 lg:max-w-sm">
            <div className="space-y-3 rounded-xl border bg-background p-4 shadow-sm">
              <p className="text-sm font-semibold">Configuración de la cinta</p>
              <div className="space-y-2">
                <Label>Color de fondo</Label>
                <div className="flex flex-wrap gap-2">
                  {FABRIC_PRESETS.map((p) => (
                    <button
                      key={p.hex}
                      type="button"
                      onClick={() => setFabricColor(p.hex)}
                      title={p.nombre}
                      aria-label={p.nombre}
                      className={cn(
                        'size-7 rounded-full border-2 transition-transform hover:scale-110',
                        fabricColor === p.hex ? 'scale-110 border-brand-primary-hover' : 'border-transparent'
                      )}
                      style={{ backgroundColor: p.hex }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={fabricColor}
                  onChange={(e) => setFabricColor(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-md border border-input p-1"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Acabado</Label>
                <Select value={fabricFinish} onValueChange={(v) => setFabricFinish(v as Acabado)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ACABADOS.map((a) => (
                      <SelectItem key={a.value} value={a.value}>
                        {a.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Borde decorativo</Label>
                <Select value={borderStyle} onValueChange={(v) => setBorderStyle(v as EstiloBorde)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ESTILOS_BORDE.map((b) => (
                      <SelectItem key={b.value} value={b.value}>
                        {b.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 rounded-xl border bg-background p-4 shadow-sm">
              <p className="text-sm font-semibold">Contenido de la banda</p>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlot(i)}
                    className={cn(
                      'flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
                      activeSlot === i
                        ? 'border-brand-primary-hover bg-brand-primary text-foreground'
                        : 'border-input bg-background text-muted-foreground hover:bg-muted'
                    )}
                  >
                    Espacio {i + 1}
                  </button>
                ))}
              </div>
              <SlotPanel index={activeSlot} slot={slots[activeSlot]} onChange={updateSlot} />
            </div>

            <div className="space-y-3 rounded-xl border bg-background p-4 shadow-sm">
              <p className="text-sm font-semibold">Resumen del diseño</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-muted-foreground">Color de tela</span>
                  <span className="font-medium">{fabricLabel}</span>
                </div>
                {slots.map((slot, index) => (
                  <div key={index} className="flex justify-between border-b pb-1.5 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">Espacio {index + 1}</span>
                    <span className="font-medium">
                      {slot.tipo === 'texto' && slot.texto
                        ? `Texto: ${slot.texto}`
                        : slot.tipo === 'icono'
                          ? `Ícono: ${slot.icono}`
                          : slot.tipo === 'imagen' && slot.imagen
                            ? 'Imagen subida'
                            : 'Vacío'}
                    </span>
                  </div>
                ))}
              </div>
              <Button onClick={handleEnviar} size="lg" className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover">
                <MessageCircle /> Enviar diseño por WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Adjuntá la imagen descargada o tu captura de pantalla al mensaje.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
