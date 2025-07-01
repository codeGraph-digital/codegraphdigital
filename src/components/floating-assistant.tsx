"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function FloatingAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary rounded-lg blur-md opacity-50"></div>
        <div className="relative flex cursor-pointer items-center gap-3 rounded-lg bg-card p-4 shadow-2xl ring-1 ring-border transition-all hover:shadow-primary/20">
          <MessageSquare className="h-6 w-6 text-primary" />
          <p className="text-sm font-medium text-muted-foreground">
            Need help launching your next campaign?
          </p>
        </div>
      </div>
    </motion.div>
  );
}