import type { Metadata } from 'next';
import { requirePagePermission } from '@/lib/rbac/require-page-permission';
import { getBlogPostsTodos, getBlogCategorias } from '@/lib/db/queries/blog';
import { BlogAdminClient } from './blog-client';

export const metadata: Metadata = { title: 'Blog' };

export default async function BlogAdminPage() {
  const { permissions } = await requirePagePermission('blog.view');

  const [posts, categorias] = await Promise.all([getBlogPostsTodos(), getBlogCategorias()]);

  return <BlogAdminClient posts={posts} categorias={categorias} permissions={[...permissions]} />;
}
