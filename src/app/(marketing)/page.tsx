import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Inicio | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-bold text-brand-primary">{siteConfig.name}</h1>
      <p className="max-w-xl text-muted-foreground">{siteConfig.description}</p>
    </main>
  );
}
