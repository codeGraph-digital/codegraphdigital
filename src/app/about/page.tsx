"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Target,
  Lightbulb,
  BrainCircuit,
  Zap,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible with AI in marketing.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Our users are at the heart of every decision we make.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We are committed to delivering tangible results and measurable success for our clients.",
  },
];

const whyChooseUsPoints = [
  {
    icon: BrainCircuit,
    title: "Cutting-Edge AI",
    description:
      "Our proprietary CodeGraph engine provides insights you won't find anywhere else.",
  },
  {
    icon: Zap,
    title: "Intuitive Workflow",
    description:
      "We design our tools to be powerful yet simple, enabling you to launch campaigns in minutes.",
  },
  {
    icon: Rocket,
    title: "Focus on Growth",
    description:
      "Every feature is built with one goal in mind: to help you accelerate your growth.",
  },
];

export default function AboutPage() {
  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto max-w-3xl text-center'
      >
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
          We're Building the Future of Marketing
        </h1>
        <p className='mt-6 text-lg text-muted-foreground'>
          Our mission is to empower businesses of all sizes with intelligent
          tools that drive real, measurable growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='mt-20 grid items-center gap-12 md:grid-cols-2'
      >
        <div>
          <h2 className='text-3xl font-bold'>Who We Are</h2>
          <p className='mt-4 text-muted-foreground'>
            CodeGraphDigital was founded by a team of marketers, engineers, and
            AI researchers who saw a gap in the market. We were tired of
            juggling dozens of disconnected tools that were complex and
            inefficient. We envisioned a single, unified platform where
            strategy, creation, and analysis could happen seamlessly, all
            powered by a core of intelligent automation. That vision became
            CodeGraphDigital.
          </p>
        </div>
        <div className='relative flex h-80 items-center justify-center rounded-xl border bg-muted/50 p-8'>
          <p className='font-mono text-muted-foreground'>
            [Image of the team working collaboratively]
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mt-20'
      >
        <h2 className='text-center text-3xl font-bold'>Our Values</h2>
        <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {values.map((value) => (
            <Card key={value.title} className='bg-card/50'>
              <CardHeader className='items-center text-center'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                  <value.icon className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='mt-4'>{value.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-center text-muted-foreground'>
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-20 grid items-center gap-12 md:grid-cols-2'
      >
        <div className='relative flex h-96 items-center justify-center rounded-xl border bg-muted/50 p-8 md:order-last'>
          <p className='font-mono text-muted-foreground'>
            [Image of the platform dashboard]
          </p>
        </div>
        <div className='space-y-6'>
          <h2 className='text-3xl font-bold'>Why Choose Us?</h2>
          {whyChooseUsPoints.map((point) => (
            <div key={point.title} className='flex items-start gap-4'>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
                <point.icon className='h-5 w-5' />
              </div>
              <div>
                <h3 className='font-semibold'>{point.title}</h3>
                <p className='text-muted-foreground'>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
