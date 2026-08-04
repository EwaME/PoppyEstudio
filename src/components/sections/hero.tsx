'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { EntityImage } from '@/components/shared/entity-image';
import { whatsappHref } from '@/lib/helpers/whatsapp';
import type { Configuracion } from '@/lib/db/queries/configuracion';

// Subir la foto real a public/imgs/hero.jpg y poner la ruta aca cuando este lista.
const HERO_IMAGEN: string | null = null;

export function Hero({ configuracion }: { configuracion: Configuracion | null }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    // -mt-16 cancela el pt-16 del <main> del layout: el Hero debe llegar
    // hasta el borde superior real de la ventana, detras del header
    // transparente (ver src/components/layout/header.tsx).
    <section className="relative -mt-16 flex min-h-[90vh] items-center overflow-hidden pt-16">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {HERO_IMAGEN ? (
          <EntityImage
            src={HERO_IMAGEN}
            label="Productos personalizados de Poppy Crafty"
            className="h-full w-full"
            fallback={
              <ImagePlaceholder label="Productos personalizados de Poppy Crafty" className="h-full w-full" />
            }
          />
        ) : (
          <ImagePlaceholder label="Productos personalizados de Poppy Crafty" className="h-full w-full" />
        )}
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl space-y-5"
        >
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Bienvenido a Poppy, donde cada detalle se crea pensando en ti.
          </h1>
          <p className="text-lg text-foreground/80">
            Personalizamos camisas, tazas, toppers, coronas, cajas, stickers y mucho más para hacer única cada
            celebración.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-primary text-foreground hover:bg-brand-primary-hover">
              <a
                href={whatsappHref(configuracion?.whatsapp, 'Hola, quiero solicitar un pedido personalizado.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Solicitar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalogo">
                Explorar Catálogo <ArrowRight />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ChevronDown className="size-6 text-foreground/50" />
      </motion.div>
    </section>
  );
}
