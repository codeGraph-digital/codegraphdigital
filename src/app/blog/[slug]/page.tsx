import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-data";
import { BlogPostClient } from "@/components/blog-post-client";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter(p => p.slug !== params.slug).slice(0, 2);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}