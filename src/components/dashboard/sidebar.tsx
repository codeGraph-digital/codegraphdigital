"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Code, Home, LineChart, PenSquare, Send, Search, Users, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const mainNav = [
  { href: "/dashboard", title: "Overview", icon: Home, exact: true },
  { href: "/dashboard/content", title: "Content Studio", icon: PenSquare },
  { href: "/dashboard/campaigns", title: "Campaign Builder", icon: Send },
  { href: "/dashboard/seo", title: "SEO Lab", icon: Search },
  { href: "/dashboard/insights", title: "Insight Hub", icon: LineChart },
  { href: "/dashboard/personas", title: "Persona Generator", icon: Users },
  { href: "/dashboard/bot", title: "Bot Console", icon: Bot },
];

const settingsNav = [
    { href: "/dashboard/profile", title: "Profile", icon: User },
    { href: "/dashboard/settings", title: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname();

  const isLinkActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={cn("h-full max-h-screen flex-col gap-2 bg-muted/40 lg:flex")}>
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code className="h-6 w-6 text-primary" />
          <span>CodeGraphDigital</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <p className="px-2 py-1 text-xs font-semibold text-muted-foreground">Tools</p>
        {mainNav.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Button
              variant={isLinkActive(tool.href, tool.exact) ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <tool.icon className="mr-2 h-4 w-4" />
              {tool.title}
            </Button>
          </Link>
        ))}
        <Separator className="my-4" />
        <p className="px-2 py-1 text-xs font-semibold text-muted-foreground">Account</p>
        {settingsNav.map((item) => (
            <Link key={item.href} href={item.href}>
                <Button
                variant={isLinkActive(item.href) ? "secondary" : "ghost"}
                className="w-full justify-start"
                >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
                </Button>
            </Link>
        ))}
      </nav>
    </div>
  );
}