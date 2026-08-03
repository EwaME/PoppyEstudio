import { getGaleriaDestacada } from '@/lib/db/queries/galeria';
import { Reveal } from '@/components/shared/reveal';
import { GaleriaGrid } from '@/components/marketing/galeria-grid';

export async function Galeria() {
  const piezas = await getGaleriaDestacada(6);
  if (piezas.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Galería de Trabajos</h2>
          <p className="mt-2 text-muted-foreground">Piezas reales que ya entregamos.</p>
        </div>
      </Reveal>
      <GaleriaGrid piezas={piezas} />
    </section>
  );
}
