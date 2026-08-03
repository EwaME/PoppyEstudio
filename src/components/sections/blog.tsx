import { getBlogPostsRecientes } from '@/lib/db/queries/blog';
import { BlogCard } from '@/components/marketing/blog-card';
import { Reveal } from '@/components/shared/reveal';

export async function Blog() {
  const posts = await getBlogPostsRecientes(3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-brand-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Del Blog</h2>
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
      </div>
    </section>
  );
}
