'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import { devLogin } from '@/app/(auth)/login/dev-login-action';

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleGoogleSignIn() {
    setGoogleLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) {
      toast.error('No se pudo iniciar sesion con Google.');
      setGoogleLoading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    const devOk = await devLogin(email, password);
    if (devOk) {
      setLoading(false);
      router.push('/admin');
      router.refresh();
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      toast.error('Correo o contrasena incorrectos.');
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Correo</Label>
        <Input id="email" name="email" type="email" placeholder="admin@plantilla.dev" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contrasena</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">O continua con</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        disabled={googleLoading}
        onClick={handleGoogleSignIn}
      >
        <svg className="mr-2 size-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.88c2.27-2.09 3.58-5.17 3.58-8.84z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.88-3.02c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.28v3.11C3.25 21.3 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.61H1.28A11.96 11.96 0 000 12c0 1.94.46 3.77 1.28 5.39l4-3.11z"
          />
          <path
            fill="#EA4335"
            d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.28 6.61l4 3.11C6.22 6.88 8.87 4.77 12 4.77z"
          />
        </svg>
        {googleLoading ? 'Conectando...' : 'Google'}
      </Button>
    </form>
  );
}
