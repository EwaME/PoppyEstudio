import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Sparkles, Gem, Clock, Target, Eye } from 'lucide-react';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { Reveal } from '@/components/shared/reveal';
import { CTAFinal } from '@/components/sections/cta-final';

export const metadata: Metadata = { title: 'Nosotros | Poppy Crafty' };

const VALORES = [
  { icon: Heart, titulo: 'Cercanía', descripcion: 'Hablamos con vos en cada paso, no solo tomamos el pedido.' },
  { icon: Sparkles, titulo: 'Creatividad', descripcion: 'Cada diseño se piensa para tu ocasión, no se repite en serie.' },
  { icon: Gem, titulo: 'Calidad', descripcion: 'Elegimos materiales que aguantan el uso real, no solo la foto.' },
  { icon: Clock, titulo: 'Compromiso', descripcion: 'Cumplimos los tiempos que prometemos, porque tu evento no espera.' },
];

export default async function NosotrosPage() {
  const configuracion = await getConfiguracion();

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Detrás de cada detalle, hay una historia</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Somos Poppy Crafty, un taller de personalización nacido en Choluteca que convierte ideas simples en
            regalos que se recuerdan.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/imgs/PoppyNosotros.jpg"
                alt="El taller de Poppy Crafty en Choluteca"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold">Nuestra historia</h2>
              <p className="text-muted-foreground">
                Poppy Crafty nació de una pasión simple: la sublimación y el corte artesanal como forma de crear
                regalos que de verdad signifiquen algo. Empezamos personalizando piezas para amigos y familia en
                Choluteca, y poco a poco ese hobby se convirtió en un taller dedicado a acompañar a mamás,
                emprendedores y organizadores de eventos en cada celebración.
              </p>
              <p className="text-muted-foreground">
                Hoy seguimos trabajando pedido por pedido, sin producción en masa, porque creemos que lo
                personalizado no se apura.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-3 rounded-xl border bg-background p-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-primary/30">
                <Target className="size-5 text-brand-primary-hover" />
              </div>
              <p className="font-heading text-lg font-semibold">Misión</p>
              <p className="text-sm text-muted-foreground">
                Ayudarte a convertir una idea en un producto único, cuidando cada detalle desde el primer mensaje
                hasta la entrega.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-3 rounded-xl border bg-background p-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-primary/30">
                <Eye className="size-5 text-brand-primary-hover" />
              </div>
              <p className="font-heading text-lg font-semibold">Visión</p>
              <p className="text-sm text-muted-foreground">
                Ser el taller de personalización de referencia en el sur de Honduras, conocido por la calidad, la
                creatividad y la cercanía con cada cliente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Lo que nos guía</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALORES.map((valor, index) => (
            <Reveal key={valor.titulo} delay={index * 0.05}>
              <div className="flex flex-col items-start gap-3 rounded-xl border p-6">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-primary/30">
                  <valor.icon className="size-5 text-brand-primary-hover" />
                </div>
                <p className="font-heading font-semibold">{valor.titulo}</p>
                <p className="text-sm text-muted-foreground">{valor.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAFinal configuracion={configuracion} />
    </>
  );
}
