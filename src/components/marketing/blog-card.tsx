import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import type { BlogPostResumen } from '@/lib/db/queries/blog';

export function BlogCard({ post }: { post: BlogPostResumen }) {
  const fecha = post.fechaPublicacion
    ? new Date(post.fechaPublicacion).toLocaleDateString('es-HN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <Card className="gap-0 overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      {post.imagenPortada ? (
        <Image
          src={post.imagenPortada}
          alt={post.titulo}
          width={400}
          height={225}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <ImagePlaceholder icon={BookOpen} label={post.titulo} className="aspect-video w-full" />
      )}
      <CardContent className="space-y-2 pt-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-brand-primary-hover">{post.categoriaNombre}</span>
          {fecha && (
            <span className="flex items-center gap-1">
              <Calendar className="size-3" /> {fecha}
            </span>
          )}
          {post.tiempoLectura && (
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {post.tiempoLectura} min
            </span>
          )}
        </div>
        <Link href={`/blog/${post.slug}`} className="block font-heading font-semibold hover:text-brand-primary-hover">
          {post.titulo}
        </Link>
        {post.resumen && <p className="line-clamp-2 text-sm text-muted-foreground">{post.resumen}</p>}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block pt-1 text-sm font-medium text-brand-primary-hover hover:underline"
        >
          Leer más →
        </Link>
      </CardContent>
    </Card>
  );
}
