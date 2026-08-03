import type { Metadata } from 'next';
import { getProductosFiltrados } from '@/lib/db/queries/productos';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';
import { ProductCard } from '@/components/marketing/product-card';
import { CatalogoFiltros } from '@/components/marketing/catalogo-filtros';

export const metadata: Metadata = { title: 'Catálogo | Poppy Crafty' };

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categoria?: string }>;
}) {
  const { q, categoria } = await searchParams;

  const [productos, categorias] = await Promise.all([
    getProductosFiltrados({ q, categoriaSlug: categoria }),
    getCategoriasConConteo(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="mb-8 space-y-2">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Catálogo</h1>
        <p className="text-muted-foreground">
          {q ? `Resultados para "${q}"` : 'Explorá todos nuestros productos personalizables.'}
        </p>
      </div>

      <CatalogoFiltros categorias={categorias} categoriaActiva={categoria} qActual={q} />

      {productos.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No encontramos productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}
