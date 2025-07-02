import { Sidebar } from "@/components/dashboard/sidebar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Code, Menu } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <SheetTitle className="sr-only">Dashboard Menu</SheetTitle>
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Code className="h-6 w-6 text-primary" />
              <span>CodeGraphDigital</span>
            </Link>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}