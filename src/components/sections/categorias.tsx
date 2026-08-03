import Link from 'next/link';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { EntityImage } from '@/components/shared/entity-image';
import { Reveal } from '@/components/shared/reveal';
import { getCategoryIcon } from '@/lib/helpers/category-icons';
import { entityImagePath } from '@/lib/helpers/entity-image';

export async function Categorias() {
  const categorias = await getCategoriasConConteo();
  if (categorias.length === 0) return null;

  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Categorías</h2>
            <p className="mt-2 text-muted-foreground">Encontrá el producto perfecto para tu ocasión.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categorias.map((categoria, index) => {
            const Icon = getCategoryIcon(categoria.slug);
            return (
              <Reveal key={categoria.id} delay={index * 0.04}>
                <Link
                  href={`/catalogo?categoria=${categoria.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border bg-background p-6 text-center transition-shadow hover:shadow-md"
                >
                  <EntityImage
                    src={entityImagePath('categorias', categoria.slug)}
                    label={categoria.nombre}
                    className="size-16 rounded-full"
                    fallback={<ImagePlaceholder icon={Icon} label={categoria.nombre} className="size-16 rounded-full" />}
                  />
                  <p className="font-heading font-semibold">{categoria.nombre}</p>
                  <p className="text-xs text-muted-foreground">
                    {categoria.totalProductos} producto{categoria.totalProductos === 1 ? '' : 's'}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
