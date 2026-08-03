import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getConfiguracion } from '@/lib/db/queries/configuracion';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';

// Poppins solo en el sitio publico — el panel admin sigue con Geist (layout raiz).
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const [configuracion, categorias] = await Promise.all([
    getConfiguracion(),
    getCategoriasConConteo(),
  ]);

  return (
    <div className={`${poppins.className} flex min-h-screen flex-col`}>
      <Header configuracion={configuracion} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer configuracion={configuracion} categorias={categorias} />
    </div>
  );
}
