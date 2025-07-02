"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, LineChart, PenSquare, Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  { name: "Content", icon: PenSquare, content: "// AI-generated blog post intro..." },
  { name: "Campaigns", icon: Send, content: "// Visual campaign flow..." },
  { name: "SEO", icon: Search, content: "// On-page SEO analysis..." },
  { name: "Insights", icon: LineChart, content: "// Engagement by channel..." },
  { name: "Assistant", icon: Bot, content: "// Your AI marketing assistant..." },
];

export function HomepageHeroAnimation() {
  const [activeToolIndex, setActiveToolIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveToolIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-25 blur-3xl"></div>
      <div className="relative rounded-lg bg-card/50 p-2 shadow-2xl ring-1 ring-white/10 md:p-4">
        <div className="aspect-video rounded-md bg-background/50 p-2 md:p-4">
          <div className="flex h-full w-full flex-col gap-2">
            <div className="flex h-6 shrink-0 items-center gap-1.5 rounded-t-md border-b bg-card px-2 md:h-8 md:gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500 md:h-2.5 md:w-2.5"></span>
              <span className="h-2 w-2 rounded-full bg-yellow-500 md:h-2.5 md:w-2.5"></span>
              <span className="h-2 w-2 rounded-full bg-green-500 md:h-2.5 md:w-2.5"></span>
            </div>
            <div className="flex flex-grow gap-2 overflow-hidden">
              <div className="hidden w-1/4 flex-col gap-2 md:flex">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={cn(
                      "flex h-7 items-center gap-2 rounded p-2 text-xs transition-colors",
                      activeToolIndex === index
                        ? "bg-primary/10 text-primary"
                        : "bg-muted"
                    )}
                  >
                    <tool.icon className="h-3 w-3" /> {tool.name}
                  </div>
                ))}
              </div>
              <div className="w-full rounded bg-muted/50 p-2 md:w-3/4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeToolIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs text-muted-foreground">
                      {tools[activeToolIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-2 h-2 w-5/6 rounded-full bg-muted animate-pulse"></div>
                <div className="mt-2 h-2 w-full rounded-full bg-muted animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="mt-2 h-2 w-4/6 rounded-full bg-muted animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-muted animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="mt-2 h-2 w-full rounded-full bg-muted animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}