"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenSquare } from "lucide-react";

export default function BlogPage() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto max-w-2xl text-center'
      >
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
          From the Blog
        </h1>
        <p className='mt-6 text-lg text-muted-foreground'>
          Insights, tutorials, and announcements from the CodeGraphDigital team.
        </p>
      </motion.div>

      <div className='mt-16 space-y-16'>
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className='grid overflow-hidden transition-shadow hover:shadow-lg md:grid-cols-2 min-h-96'>
              <div className='flex items-center justify-center bg-muted/50 p-8'>
                <PenSquare className='h-24 w-24 text-muted-foreground/50' />
              </div>
              <div className='flex flex-col'>
                <CardHeader>
                  <CardDescription>Featured Post</CardDescription>
                  <CardTitle className='text-2xl'>
                    {featuredPost.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-muted-foreground'>
                    {featuredPost.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant='link' className='p-0'>
                    Read More <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Regular Posts */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {regularPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className='h-full'
            >
              <Card className='flex h-full flex-col transition-shadow hover:shadow-lg'>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    By {post.author} on {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-muted-foreground'>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant='outline'>
                      Read More <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
