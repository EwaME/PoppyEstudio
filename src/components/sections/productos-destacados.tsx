import { getProductosDestacados } from '@/lib/db/queries/productos';
import { ProductCard } from '@/components/marketing/product-card';
import { Reveal } from '@/components/shared/reveal';

export async function ProductosDestacados() {
  const productos = await getProductosDestacados(6);
  if (productos.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Productos Destacados</h2>
          <p className="mt-2 text-muted-foreground">Lo más pedido para hacer única tu celebración.</p>
        </div>
      </Reveal>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
        {productos.map((producto, index) => (
          <Reveal key={producto.id} delay={index * 0.05}>
            <div className="w-64 shrink-0 snap-start sm:w-auto">
              <ProductCard producto={producto} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
