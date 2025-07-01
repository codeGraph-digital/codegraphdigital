"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BotConsole } from "./dashboard/bot-console";

export function FloatingAssistant() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 h-full w-full rounded-lg bg-primary blur-md opacity-50"></div>
            <div className="relative flex cursor-pointer items-center gap-3 rounded-lg bg-card p-4 shadow-2xl ring-1 ring-border transition-all hover:shadow-primary/20">
              <MessageSquare className="h-6 w-6 text-primary" />
              <p className="hidden text-sm font-medium text-muted-foreground sm:block">
                Need help?
              </p>
            </div>
          </div>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-lg">
        <SheetHeader className="p-6">
          <SheetTitle>AI Assistant</SheetTitle>
          <SheetDescription>
            Ask me anything about marketing, campaigns, or how to use our tools.
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-grow px-6 pb-6">
          <BotConsole className="h-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
}