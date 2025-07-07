import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-data";
import { BlogPostClient } from "@/components/blog-post-client";
import styles from "./blog.module.css";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== resolvedParams.slug)
    .slice(0, 2);

  return (
    <div className={styles.warapper}>
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
