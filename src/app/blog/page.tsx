"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          From the Blog
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Insights, tutorials, and announcements from the CodeGraphDigital team.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className="h-full"
          >
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  By {post.author} on {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}