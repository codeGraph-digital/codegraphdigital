"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog-data";

interface BlogPostClientProps {
  post: Post;
  relatedPosts: Post[];
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
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

        {relatedPosts.length > 0 && (
            <div className="mt-16 border-t pt-12">
                <h2 className="text-2xl font-bold text-center">Related Posts</h2>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {relatedPosts.map(relatedPost => (
                        <Card key={relatedPost.slug} className="flex h-full flex-col transition-shadow hover:shadow-lg">
                            <CardHeader>
                                <CardTitle>{relatedPost.title}</CardTitle>
                                <CardDescription>By {relatedPost.author}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/blog/${relatedPost.slug}`}>
                                    <Button variant="outline">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        )}
      </motion.div>
    </div>
  );
}