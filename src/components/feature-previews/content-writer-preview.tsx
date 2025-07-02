"use client";

import { Sparkles } from "lucide-react";

export function ContentWriterPreview() {
  return (
    <div className="w-full p-2 text-left">
      <p className="font-mono text-xs text-primary/80">prompt &gt;</p>
      <p className="mt-1 text-xs text-muted-foreground">
        "Write a blog post intro about AI..."
      </p>
      <div className="mt-3 border-t pt-2">
        <p className="font-mono text-xs text-green-400">output &gt;</p>
        <div className="mt-1 space-y-1">
          <div className="h-1.5 w-5/6 rounded-full bg-muted"></div>
          <div className="h-1.5 w-full rounded-full bg-muted"></div>
        </div>
      </div>
    </div>
  );
}