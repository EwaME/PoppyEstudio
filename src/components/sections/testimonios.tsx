import { Star } from 'lucide-react';
import { getTestimoniosDestacados } from '@/lib/db/queries/testimonios';
import { Reveal } from '@/components/shared/reveal';

export async function Testimonios() {
  const testimonios = await getTestimoniosDestacados(6);
  if (testimonios.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Lo que dicen de nosotros</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonios.map((testimonio, index) => (
          <Reveal key={testimonio.id} delay={index * 0.05}>
            <div className="flex h-full flex-col gap-3 rounded-xl border p-6">
              <div className="flex gap-0.5" aria-label={`${testimonio.estrellas} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < testimonio.estrellas
                        ? 'size-4 fill-brand-primary-hover text-brand-primary-hover'
                        : 'size-4 text-muted-foreground/30'
                    }
                  />
                ))}
              </div>
              <p className="flex-1 text-sm text-muted-foreground">&ldquo;{testimonio.texto}&rdquo;</p>
              <div>
                <p className="font-heading text-sm font-semibold">{testimonio.nombreCliente}</p>
                {testimonio.rol && <p className="text-xs text-muted-foreground">{testimonio.rol}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
