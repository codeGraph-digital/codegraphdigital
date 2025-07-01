"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, PenSquare, PieChart, Send, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: PenSquare,
    title: "AI Content Writer",
    description:
      "Generate high-quality copy, blog posts, and product descriptions in seconds.",
    tag: "LLM-Powered",
  },
  {
    icon: Send,
    title: "Campaign Generator",
    description:
      "Automate email and ad campaigns with intelligent, data-driven workflows.",
    tag: "AI-Enhanced",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizer",
    description:
      "Receive real-time suggestions to improve your on-page SEO and climb rankings.",
    tag: "CodeGraph Output",
  },
  {
    icon: PieChart,
    title: "Audience Analyzer",
    description:
      "Get AI-generated insights into your audience demographics, behavior, and preferences.",
    tag: "AI-Enhanced",
  },
  {
    icon: Bot,
    title: "Chatbot Assistant",
    description:
      "Deploy an intelligent chatbot to handle customer queries and guide users.",
    tag: "LLM-Powered",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            One Platform, Infinite Possibilities
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our integrated suite of AI tools is designed to streamline every
            aspect of your digital marketing strategy, from creation to
            conversion.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className="h-full"
          >
            <Card className="flex h-full flex-col transform-gpu bg-card/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="outline">{feature.tag}</Badge>
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow items-end">
                <div className="flex h-24 w-full items-center justify-center rounded-md border border-dashed bg-background/50">
                  <p className="font-mono text-sm text-muted-foreground">
                    [Demo UI Block]
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}