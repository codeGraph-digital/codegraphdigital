"use client";

import { Badge } from "@/components/ui/badge";

export function SeoCheckPreview() {
  return (
    <div className="w-full p-2 text-left">
      <p className="font-mono text-xs text-muted-foreground">
        codegraphdigital.com
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs">SEO Score</span>
        <Badge variant="outline" className="border-green-500/50 text-green-500">
          92
        </Badge>
      </div>
      <div className="mt-2 h-1 w-full rounded-full bg-muted">
        <div className="h-1 w-[92%] rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}