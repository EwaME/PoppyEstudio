import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ImagePlaceholder } from '@/components/shared/image-placeholder';
import { MarkdownContent } from '@/components/marketing/markdown-content';
import { getBlogPostBySlug } from '@/lib/db/queries/blog';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle || `${post.titulo} | Poppy Crafty`,
    description: post.seoDescription || post.resumen || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const fecha = post.fechaPublicacion
    ? new Date(post.fechaPublicacion).toLocaleDateString('es-HN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-8">
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-brand-primary-hover">Inicio</Link>
        <ChevronRight className="size-3.5" />
        <Link href="/blog" className="hover:text-brand-primary-hover">Blog</Link>
        <ChevronRight className="size-3.5" />
        <span className="line-clamp-1 text-foreground">{post.titulo}</span>
      </nav>

      <div className="mb-6 space-y-3">
        <Badge variant="outline">{post.categoriaNombre}</Badge>
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">{post.titulo}</h1>
        {post.resumen && <p className="text-lg text-muted-foreground">{post.resumen}</p>}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {fecha && (
            <span className="flex items-center gap-1">
              <Calendar className="size-3.5" /> {fecha}
            </span>
          )}
          {post.tiempoLectura && (
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" /> {post.tiempoLectura} min de lectura
            </span>
          )}
        </div>
      </div>

      {post.imagenPortada ? (
        <Image
          src={post.imagenPortada}
          alt={post.titulo}
          width={960}
          height={540}
          className="mb-8 aspect-video w-full rounded-2xl object-cover"
          priority
        />
      ) : (
        <ImagePlaceholder icon={BookOpen} label={post.titulo} className="mb-8 aspect-video w-full rounded-2xl" />
      )}

      <MarkdownContent contenido={post.contenido} />
    </article>
  );
}
