import Link from "next/link";
import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <p className="text-sm font-bold">CodeGraphDigital</p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Smarter Marketing with AI at the Core.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CodeGraphDigital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}