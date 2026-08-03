import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { getCategoryIcon } from '@/lib/helpers/category-icons';
import type { ProductoResumen } from '@/lib/db/queries/productos';

export function ProductCard({ producto }: { producto: ProductoResumen }) {
  const Icon = getCategoryIcon(producto.categoriaSlug);

  return (
    <Card className="group h-full gap-0 overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <ImagePlaceholder
        icon={Icon}
        label={producto.nombre}
        className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
      />
      <CardContent className="space-y-1 pt-4">
        <p className="text-xs font-medium text-brand-primary-hover">{producto.categoriaNombre}</p>
        <p className="font-heading font-semibold">{producto.nombre}</p>
        {producto.descripcionCorta && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{producto.descripcionCorta}</p>
        )}
        <p className="pt-1 text-sm font-medium">
          {producto.precioDesde != null ? `Desde L. ${producto.precioDesde.toFixed(2)}` : 'Precio a cotizar'}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent p-4 pt-3">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/catalogo/${producto.slug}`}>
            Ver más <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
