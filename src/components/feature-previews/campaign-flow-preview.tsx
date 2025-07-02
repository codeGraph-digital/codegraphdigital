"use client";

import { ArrowRight, Mail, Timer, Users } from "lucide-react";

export function CampaignFlowPreview() {
  return (
    <div className="flex items-center justify-center gap-2 p-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-400/10 text-blue-400">
        <Users className="h-4 w-4" />
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground" />
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400/10 text-yellow-400">
        <Timer className="h-4 w-4" />
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground" />
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-400/10 text-pink-400">
        <Mail className="h-4 w-4" />
      </div>
    </div>
  );
}