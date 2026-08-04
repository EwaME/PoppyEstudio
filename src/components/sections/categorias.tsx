import Link from 'next/link';
import { getCategoriasConConteo } from '@/lib/db/queries/categorias';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { EntityImage } from '@/components/shared/entity-image';
import { Reveal } from '@/components/shared/reveal';
import { getCategoryIcon } from '@/lib/helpers/category-icons';
import { getCategoriaImagen } from '@/lib/helpers/entity-image';

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
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
          {categorias.map((categoria, index) => {
            const Icon = getCategoryIcon(categoria.slug);
            const imagen = getCategoriaImagen(categoria.slug);
            return (
              <Reveal
                key={categoria.id}
                delay={index * 0.04}
                className="w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
              >
                <Link href={`/catalogo?categoria=${categoria.slug}`} className="group flex flex-col items-center gap-3 text-center">
                  {imagen ? (
                    <EntityImage
                      src={imagen}
                      label={categoria.nombre}
                      className="size-20 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
                      fallback={
                        <ImagePlaceholder
                          icon={Icon}
                          label={categoria.nombre}
                          className="size-20 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                      }
                    />
                  ) : (
                    <ImagePlaceholder
                      icon={Icon}
                      label={categoria.nombre}
                      className="size-20 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <p className="font-heading font-semibold transition-colors group-hover:text-brand-primary-hover">
                    {categoria.nombre}
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
