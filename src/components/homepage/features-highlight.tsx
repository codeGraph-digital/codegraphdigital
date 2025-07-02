"use client";

import { motion } from "framer-motion";
import { PenSquare, Send, TrendingUp, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContentWriterPreview } from "../feature-previews/content-writer-preview";
import { CampaignFlowPreview } from "../feature-previews/campaign-flow-preview";
import { SeoCheckPreview } from "../feature-previews/seo-check-preview";
import { ChatbotPreview } from "../feature-previews/chatbot-preview";

const features = [
  {
    icon: PenSquare,
    title: "AI Content Writer",
    description: "Generate high-quality copy and articles in seconds.",
    preview: <ContentWriterPreview />,
  },
  {
    icon: Send,
    title: "Campaign Generator",
    description: "Automate email and ad campaigns with intelligent workflows.",
    preview: <CampaignFlowPreview />,
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizer",
    description: "Receive real-time suggestions to improve your on-page SEO.",
    preview: <SeoCheckPreview />,
  },
  {
    icon: Bot,
    title: "Chatbot Assistant",
    description: "Deploy an intelligent chatbot to handle customer queries.",
    preview: <ChatbotPreview />,
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
            className="h-full"
          >
            <Card className="h-full flex flex-col bg-card/50">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end mt-4">
                 <div className="relative flex w-full min-h-24 items-center justify-center overflow-hidden rounded-md border bg-background/50">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                  <div className="z-10 w-full">
                    {feature.preview}
                  </div>
                </div>
              </CardContent>
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