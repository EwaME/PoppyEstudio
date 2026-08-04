import type { Metadata } from 'next';
import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = { title: 'Iniciar sesion' };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-brand-primary p-12 lg:flex">
        <Image
          src="/logomaleante.png"
          alt="Poppy Crafty"
          width={320}
          height={176}
          className="w-64 max-w-full"
          priority
        />
        <p className="mt-6 text-center text-lg font-medium text-foreground/80">Panel administrativo</p>
      </div>

      <div className="flex w-full flex-1 items-center justify-center p-4 lg:w-1/2">
        <div className="w-full max-w-sm space-y-6">
          <Image
            src="/logomaleante.png"
            alt="Poppy Crafty"
            width={160}
            height={88}
            className="mx-auto w-32 lg:hidden"
            priority
          />
          <h1 className="text-center text-2xl font-semibold">Iniciar sesion</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
