import { Sparkles, Palette, Gem, Heart, Truck, MapPinned } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const BENEFICIOS = [
  { icon: Sparkles, titulo: 'Personalización completa', descripcion: 'Cada producto se adapta a tu idea, no al revés.' },
  { icon: Palette, titulo: 'Diseños exclusivos', descripcion: 'Creamos una propuesta única para tu pedido.' },
  { icon: Gem, titulo: 'Materiales de calidad', descripcion: 'Insumos seleccionados para que dure y luzca bien.' },
  { icon: Heart, titulo: 'Atención personalizada', descripcion: 'Te acompañamos de la idea a la entrega.' },
  { icon: Truck, titulo: 'Entrega responsable', descripcion: 'Cumplimos los tiempos que te prometemos.' },
  { icon: MapPinned, titulo: 'Cobertura nacional', descripcion: 'Enviamos tu pedido a cualquier parte de Honduras.' },
];

export function Beneficios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Por qué elegir Poppy Crafty?</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFICIOS.map((beneficio, index) => (
          <Reveal key={beneficio.titulo} delay={index * 0.05}>
            <div className="flex flex-col items-start gap-3 rounded-xl border p-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-primary/30">
                <beneficio.icon className="size-5 text-brand-primary-hover" />
              </div>
              <p className="font-heading font-semibold">{beneficio.titulo}</p>
              <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
