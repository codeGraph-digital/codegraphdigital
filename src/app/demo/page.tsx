"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentStudio } from "@/components/demo/content-studio";
import { CampaignBuilder } from "@/components/demo/campaign-builder";
import { SeoLab } from "@/components/demo/seo-lab";
import { InsightHub } from "@/components/demo/insight-hub";
import { BotConsole } from "@/components/demo/bot-console";
import { motion } from "framer-motion";
import { Bot, LineChart, PenSquare, Send, Search } from "lucide-react";

const demoTabs = [
  { value: "content", title: "Content Studio", icon: PenSquare, component: <ContentStudio /> },
  { value: "campaign", title: "Campaign Builder", icon: Send, component: <CampaignBuilder /> },
  { value: "seo", title: "SEO Lab", icon: Search, component: <SeoLab /> },
  { value: "insights", title: "Insight Hub", icon: LineChart, component: <InsightHub /> },
  { value: "bot", title: "Bot Console", icon: Bot, component: <BotConsole /> },
];

export default function DemoPage() {
  return (
    <div className="container py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Experience the Power of AI
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Interact with our simulated tools to see how CodeGraphDigital can
          transform your marketing efforts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10"
      >
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {demoTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {demoTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="py-6">
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}