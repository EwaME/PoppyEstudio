import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBlogPostsPorSlugs } from '@/lib/db/queries/blog';
import { BlogCard } from '@/components/marketing/blog-card';
import { Reveal } from '@/components/shared/reveal';

const SLUGS_DESTACADOS = [
  'coronas-personalizadas-de-fomi',
  'como-hacer-un-portaplatos-para-fiestas',
  'guia-completa-de-cricut-materiales-tapetes-y-cuidados',
];

export async function Blog() {
  const posts = await getBlogPostsPorSlugs(SLUGS_DESTACADOS);
  if (posts.length === 0) return null;

  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Mis blogs</h2>
            <p className="mt-2 text-muted-foreground">
              Ideas, tips de Cricut y sublimación para tu próximo proyecto.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-medium text-brand-primary-hover hover:underline"
          >
            Ver más <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
