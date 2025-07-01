"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Code, LineChart, PenSquare, Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tools = [
  { href: "/dashboard/content", title: "Content Studio", icon: PenSquare },
  { href: "/dashboard/campaigns", title: "Campaign Builder", icon: Send },
  { href: "/dashboard/seo", title: "SEO Lab", icon: Search },
  { href: "/dashboard/insights", title: "Insight Hub", icon: LineChart },
  { href: "/dashboard/bot", title: "Bot Console", icon: Bot },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className={cn("h-full max-h-screen flex-col gap-2 bg-muted/40 lg:flex")}>
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code className="h-6 w-6 text-primary" />
          <span>CodeGraphDigital</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Button
              variant={pathname.startsWith(tool.href) ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <tool.icon className="mr-2 h-4 w-4" />
              {tool.title}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}