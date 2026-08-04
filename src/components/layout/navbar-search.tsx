'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { EntityImage } from '@/components/shared/entity-image';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { getProductoImagen } from '@/lib/helpers/entity-image';
import { cn } from '@/lib/utils';

type Sugerencia = { slug: string; nombre: string; categoriaNombre: string };

export function NavbarSearch({
  containerClassName,
  inputClassName,
  iconClassName,
  onNavigate,
}: {
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [sugerencias, setSugerencias] = useState<Sugerencia[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  function handleQueryChange(value: string) {
    setQuery(value);
    setLoading(value.trim().length >= 2);
  }

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      fetch(`/api/buscar?q=${encodeURIComponent(trimmed)}`, { signal: controller.signal })
        .then((res) => (res.ok ? res.json() : []))
        .then((data: Sugerencia[]) => {
          setSugerencias(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof Error && err.name !== 'AbortError') setLoading(false);
        });
    }, 250);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    const trimmed = query.trim();
    router.push(trimmed ? `/catalogo?q=${encodeURIComponent(trimmed)}` : '/catalogo');
    onNavigate?.();
  }

  function handleSelect() {
    setOpen(false);
    setQuery('');
    onNavigate?.();
  }

  const hayQueryValida = query.trim().length >= 2;
  const mostrarDropdown = open && hayQueryValida && (loading || sugerencias.length > 0);

  return (
    <div ref={rootRef} className={cn('relative', containerClassName)}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className={cn('absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground', iconClassName ?? 'left-2.5')} />
        <Input
          type="search"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          className={cn('pl-8', inputClassName)}
        />
      </form>
      {mostrarDropdown && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full overflow-hidden rounded-md border bg-background shadow-md">
          {loading ? (
            <div className="flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Buscando...
            </div>
          ) : (
            sugerencias.map((sugerencia) => {
              const imagen = getProductoImagen(sugerencia.slug);
              return (
                <Link
                  key={sugerencia.slug}
                  href={`/catalogo/${sugerencia.slug}`}
                  onClick={handleSelect}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted"
                >
                  {imagen ? (
                    <EntityImage
                      src={imagen}
                      label={sugerencia.nombre}
                      className="size-10 shrink-0 rounded-md"
                      fallback={<ImagePlaceholder label={sugerencia.nombre} className="size-10 shrink-0 rounded-md" />}
                    />
                  ) : (
                    <ImagePlaceholder label={sugerencia.nombre} className="size-10 shrink-0 rounded-md" />
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-medium">{sugerencia.nombre}</p>
                    <p className="truncate text-xs text-muted-foreground">{sugerencia.categoriaNombre}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
