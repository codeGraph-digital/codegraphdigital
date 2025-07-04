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
import { ContentWriterPreview } from "@/components/feature-previews/content-writer-preview";
import { CampaignFlowPreview } from "@/components/feature-previews/campaign-flow-preview";
import { SeoCheckPreview } from "@/components/feature-previews/seo-check-preview";
import { ChatbotPreview } from "@/components/feature-previews/chatbot-preview";
import { AudienceAnalyzerPreview } from "@/components/feature-previews/audience-analyzer-preview";

const features = [
  {
    icon: PenSquare,
    title: "AI Content Writer",
    description:
      "Generate high-quality copy, blog posts, and product descriptions in seconds.",
    tag: "LLM-Powered",
    preview: <ContentWriterPreview />,
  },
  {
    icon: Send,
    title: "Campaign Generator",
    description:
      "Automate email and ad campaigns with intelligent, data-driven workflows.",
    tag: "AI-Enhanced",
    preview: <CampaignFlowPreview />,
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizer",
    description:
      "Receive real-time suggestions to improve your on-page SEO and climb rankings.",
    tag: "CodeGraph Output",
    preview: <SeoCheckPreview />,
  },
  {
    icon: PieChart,
    title: "Audience Analyzer",
    description:
      "Get AI-generated insights into your audience demographics, behavior, and preferences.",
    tag: "AI-Enhanced",
    preview: <AudienceAnalyzerPreview />,
  },
  {
    icon: Bot,
    title: "Chatbot Assistant",
    description:
      "Deploy an intelligent chatbot to handle customer queries and guide users.",
    tag: "LLM-Powered",
    preview: <ChatbotPreview />,
  },
];

export default function FeaturesPage() {
  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <div className='mx-auto max-w-2xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            One Platform, Infinite Possibilities
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Our integrated suite of AI tools is designed to streamline every
            aspect of your digital marketing strategy, from creation to
            conversion.
          </p>
        </motion.div>
      </div>

      <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className='h-full'
          >
            <Card className='flex h-full flex-col transform-gpu bg-card/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <feature.icon className='h-8 w-8 text-primary' />
                  <Badge variant='outline'>{feature.tag}</Badge>
                </div>
                <CardTitle className='mt-4'>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-grow items-end'>
                <div className='relative flex w-full min-h-24 items-center justify-center overflow-hidden rounded-md border bg-background/50'>
                  <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:1rem_1rem]'></div>
                  <div className='z-10 w-full h-full'>{feature.preview}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
