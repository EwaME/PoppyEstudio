import { MessageCircle, Lightbulb, Image as ImageIcon, PenTool, Factory, PackageCheck } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';

const PASOS = [
  { icon: MessageCircle, titulo: 'Contáctanos', descripcion: 'Escribinos por WhatsApp o el formulario del sitio.' },
  { icon: Lightbulb, titulo: 'Cuéntanos tu idea', descripcion: 'Contanos qué estás celebrando y cómo lo imaginás.' },
  { icon: ImageIcon, titulo: 'Envíanos referencias', descripcion: 'Fotos, colores o ejemplos que te inspiren.' },
  { icon: PenTool, titulo: 'Diseñamos tu producto', descripcion: 'Preparamos una propuesta exclusiva para vos.' },
  { icon: Factory, titulo: 'Fabricación', descripcion: 'Producimos tu pedido con cuidado en cada detalle.' },
  { icon: PackageCheck, titulo: 'Entrega', descripcion: 'Te lo hacemos llegar donde estés en Honduras.' },
];

export function ComoPedimos() {
  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">¿Cómo realizamos tu pedido?</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {PASOS.map((paso, index) => (
            <Reveal key={paso.titulo} delay={index * 0.05}>
              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-primary font-heading text-sm font-bold text-foreground">
                  {index + 1}
                </div>
                <paso.icon className="size-5 text-brand-primary-hover" />
                <p className="font-heading text-sm font-semibold">{paso.titulo}</p>
                <p className="text-xs text-muted-foreground">{paso.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
