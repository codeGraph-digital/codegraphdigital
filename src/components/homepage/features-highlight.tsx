"use client";

import { motion } from "framer-motion";
import { PenSquare, Send, TrendingUp, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: PenSquare,
    title: "AI Content Writer",
    description: "Generate high-quality copy and articles in seconds.",
  },
  {
    icon: Send,
    title: "Campaign Generator",
    description: "Automate email and ad campaigns with intelligent workflows.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizer",
    description: "Receive real-time suggestions to improve your on-page SEO.",
  },
  {
    icon: Bot,
    title: "Chatbot Assistant",
    description: "Deploy an intelligent chatbot to handle customer queries.",
  },
];

export function FeaturesHighlight() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need to Succeed
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Our platform is packed with AI-powered tools to help you grow your business.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <Card className="h-full bg-card/50">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/features">
          <Button size="lg" variant="outline">
            Explore All Features
          </Button>
        </Link>
      </div>
    </section>
  );
}