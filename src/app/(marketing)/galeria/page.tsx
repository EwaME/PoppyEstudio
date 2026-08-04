import type { Metadata } from 'next';
import { getGaleriaActiva } from '@/lib/db/queries/galeria';
import { GaleriaGrid } from '@/components/marketing/galeria-grid';

export const metadata: Metadata = { title: 'Galería | Poppy Crafty' };

export default async function GaleriaPage() {
  const piezas = await getGaleriaActiva();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="mb-10 space-y-2 text-center">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Galería</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Así van quedando los pedidos que armamos — piezas reales, en proceso, camino a manos de nuestros
          clientes.
        </p>
      </div>

      {piezas.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">Todavía no hay fotos publicadas.</p>
      ) : (
        <GaleriaGrid piezas={piezas} />
      )}
    </div>
  );
}
