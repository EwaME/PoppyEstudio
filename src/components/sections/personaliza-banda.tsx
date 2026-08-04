import { Reveal } from '@/components/shared/reveal';
import { SashDesignerDialog } from '@/components/marketing/sash-designer/sash-designer-dialog';
import type { Configuracion } from '@/lib/db/queries/configuracion';

export function PersonalizaBanda({ configuracion }: { configuracion: Configuracion | null }) {
  return (
    <section className="bg-brand-secondary/40 py-20">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Personalizá una banda</h2>
          <p className="text-muted-foreground">
            Diseñá tu banda en segundos: elegí color, acabado y agregá texto, íconos o fotos en sus 3 espacios.
          </p>
          <div className="mt-2">
            <SashDesignerDialog whatsapp={configuracion?.whatsapp} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
