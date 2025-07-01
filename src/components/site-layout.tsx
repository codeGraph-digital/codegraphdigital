"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <div className={cn(!isDashboard && "flex flex-col min-h-screen")}>
      {!isDashboard && <Header />}
      <main className={cn(!isDashboard && "flex-grow")}>{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}