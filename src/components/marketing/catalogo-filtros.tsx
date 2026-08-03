'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { CategoriaConConteo } from '@/lib/db/queries/categorias';

export function CatalogoFiltros({
  categorias,
  categoriaActiva,
  qActual,
}: {
  categorias: CategoriaConConteo[];
  categoriaActiva?: string;
  qActual?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(qActual ?? '');

  function buildUrl(next: { q?: string; categoria?: string }) {
    const params = new URLSearchParams();
    const finalQ = 'q' in next ? next.q : qActual;
    const finalCategoria = 'categoria' in next ? next.categoria : categoriaActiva;
    if (finalQ) params.set('q', finalQ);
    if (finalCategoria) params.set('categoria', finalCategoria);
    const query = params.toString();
    return query ? `/catalogo?${query}` : '/catalogo';
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(buildUrl({ q: q.trim() }));
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          className="w-full pl-8 sm:w-72"
        />
      </form>

      <div className="flex flex-wrap gap-2">
        <Button
          asChild
          variant={categoriaActiva ? 'outline' : 'default'}
          size="sm"
          className={cn(!categoriaActiva && 'bg-brand-primary text-foreground hover:bg-brand-primary-hover')}
        >
          <a href={buildUrl({ categoria: undefined })}>Todas</a>
        </Button>
        {categorias.map((categoria) => (
          <Button
            key={categoria.id}
            asChild
            variant={categoriaActiva === categoria.slug ? 'default' : 'outline'}
            size="sm"
            className={cn(
              categoriaActiva === categoria.slug && 'bg-brand-primary text-foreground hover:bg-brand-primary-hover'
            )}
          >
            <a href={buildUrl({ categoria: categoria.slug })}>{categoria.nombre}</a>
          </Button>
        ))}
      </div>
    </div>
  );
}
