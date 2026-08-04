import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { ContactoForm } from '@/components/marketing/contacto-form';
import { whatsappHref } from '@/lib/helpers/whatsapp';

export const metadata: Metadata = { title: 'Contacto | Poppy Crafty' };

// Fallback si `configuracion.whatsapp` todavia no se actualizo en la DB real.
const WHATSAPP_FALLBACK = '+504 8819-9499';

export default async function ContactoPage() {
  const configuracion = await getConfiguracion();
  const whatsapp = configuracion?.whatsapp || WHATSAPP_FALLBACK;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <div className="mb-10 space-y-2 text-center">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Hablemos de tu proyecto</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Contanos tu idea y te respondemos por WhatsApp. Todavía no procesamos pedidos desde acá — este formulario
          solo te conecta directo con nosotros.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <ContactoForm whatsapp={whatsapp} />

        <div className="space-y-4 text-sm text-muted-foreground">
          <p className="font-heading text-base font-semibold text-foreground">Otros datos de contacto</p>
          {configuracion?.direccion && (
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" /> {configuracion.direccion}
            </p>
          )}
          <p className="flex items-center gap-2">
            <MessageCircle className="size-4 shrink-0" /> {whatsapp}
          </p>
          {configuracion?.telefono && (
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> {configuracion.telefono}
            </p>
          )}
          {configuracion?.email && (
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> {configuracion.email}
            </p>
          )}
          {configuracion?.horario && (
            <p className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" /> {configuracion.horario}
            </p>
          )}
          {(configuracion?.instagram || configuracion?.tiktok || configuracion?.whatsapp) && (
            <div className="flex gap-3 pt-2">
              {configuracion?.instagram && (
                <a
                  href={configuracion.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <Image src="/redes/instagram.png" alt="Instagram" width={24} height={24} className="size-6" />
                </a>
              )}
              {configuracion?.tiktok && (
                <a
                  href={configuracion.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <Image src="/redes/titkok.png" alt="TikTok" width={24} height={24} className="size-6" />
                </a>
              )}
              {configuracion?.whatsapp && (
                <a
                  href={whatsappHref(whatsapp, 'Hola, quiero cotizar un producto personalizado.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <Image src="/redes/whatsapp.png" alt="WhatsApp" width={24} height={24} className="size-6" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
