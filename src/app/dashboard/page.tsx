"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentStudio } from "@/components/dashboard/content-studio";
import { CampaignBuilder } from "@/components/dashboard/campaign-builder";
import { SeoLab } from "@/components/dashboard/seo-lab";
import { InsightHub } from "@/components/dashboard/insight-hub";
import { BotConsole } from "@/components/dashboard/bot-console";
import { motion } from "framer-motion";
import { Bot, LineChart, PenSquare, Send, Search } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const toolTabs = [
  { value: "content", title: "Content Studio", icon: PenSquare, component: <ContentStudio />, description: "Generate high-quality copy and articles." },
  { value: "campaign", title: "Campaign Builder", icon: Send, component: <CampaignBuilder />, description: "Visually design automated marketing campaigns." },
  { value: "seo", title: "SEO Lab", icon: Search, component: <SeoLab />, description: "Analyze and optimize your on-page SEO." },
  { value: "insights", title: "Insight Hub", icon: LineChart, component: <InsightHub />, description: "View AI-powered analytics and insights." },
  { value: "bot", title: "Bot Console", icon: Bot, component: <BotConsole />, description: "Interact with your AI marketing assistant." },
];

export default function DashboardPage() {
  return (
    <div className="container py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to your Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Here are your AI-powered tools. Select a tool from the tabs below to get started.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <Tabs defaultValue="content" className="w-full">
          <TooltipProvider>
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {toolTabs.map((tab) => (
                <Tooltip key={tab.value} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <TabsTrigger value={tab.value} className="w-full">
                      <tab.icon className="mr-2 h-4 w-4" />
                      {tab.title}
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tab.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TabsList>
          </TooltipProvider>
          {toolTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="py-6">
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}