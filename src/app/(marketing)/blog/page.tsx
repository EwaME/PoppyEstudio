import type { Metadata } from 'next';
import { getBlogPostsPublicados } from '@/lib/db/queries/blog';
import { BlogCard } from '@/components/marketing/blog-card';

export const metadata: Metadata = { title: 'Blog | Poppy Crafty' };

export default async function BlogPage() {
  const posts = await getBlogPostsPublicados();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="mb-10 space-y-2 text-center">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Blog</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Ideas, tutoriales y tips de Cricut y manualidades para tu próximo proyecto.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">Todavía no hay artículos publicados.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
