"use client";

import { Bot, LineChart, PenSquare, Send, Search } from "lucide-react";

export function HomepageHeroAnimation() {
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
                <div className="flex h-7 items-center gap-2 rounded bg-primary/10 p-2 text-xs text-primary"><PenSquare className="h-3 w-3" /> Content</div>
                <div className="flex h-7 items-center gap-2 rounded bg-muted p-2 text-xs"><Send className="h-3 w-3" /> Campaigns</div>
                <div className="flex h-7 items-center gap-2 rounded bg-muted p-2 text-xs"><Search className="h-3 w-3" /> SEO</div>
                <div className="flex h-7 items-center gap-2 rounded bg-muted p-2 text-xs"><LineChart className="h-3 w-3" /> Insights</div>
                <div className="flex h-7 items-center gap-2 rounded bg-muted p-2 text-xs"><Bot className="h-3 w-3" /> Assistant</div>
              </div>
              <div className="w-full rounded bg-muted/50 p-2 md:w-3/4">
                <p className="text-xs text-muted-foreground">// AI-generated blog post intro...</p>
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