"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {post.author.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">
                  {post.authorRole} &middot; {post.date}
                </p>
              </div>
            </div>
          </header>
          <div
            className="prose prose-lg dark:prose-invert mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </motion.div>
    </div>
  );
}