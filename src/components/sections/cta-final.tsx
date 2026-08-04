import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

export function CTAFinal({ configuracion }: { configuracion: Configuracion | null }) {
  return (
    <section className="bg-brand-primary py-20">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Listo para crear algo único?</h2>
          <p className="text-foreground/80">Hablemos sobre tu próximo proyecto personalizado.</p>
          <div className="mt-2">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
              <a
                href={whatsappHref(configuracion?.whatsapp, 'Hola, quiero cotizar un producto personalizado.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Escríbenos
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
