'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { whatsappHref } from '@/lib/helpers/whatsapp';

export function ContactoForm({ whatsapp }: { whatsapp: string }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const partes = [
      `Hola, soy ${nombre}.`,
      telefono ? `Mi teléfono es ${telefono}.` : null,
      mensaje,
    ].filter(Boolean);
    window.open(whatsappHref(whatsapp, partes.join(' ')), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="telefono">Teléfono (opcional)</Label>
        <Input
          id="telefono"
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ej. 9999-9999"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Contanos tu idea, el producto que te interesa y para cuándo lo necesitás..."
          required
          className="min-h-32"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-brand-primary text-foreground hover:bg-brand-primary-hover">
        <MessageCircle /> Enviar por WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground">
        Este formulario te lleva directo a WhatsApp — no guardamos nada en ningún lado.
      </p>
    </form>
  );
}
