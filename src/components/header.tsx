"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { useAuth } from "@/context/auth-context";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/docs", label: "Docs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { user, loading } = useAuth();
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center mx-auto py-2'>
        <div className='mr-4 hidden md:flex'>
          <Link href='/' className='mr-6 flex items-center space-x-2'>
            {isMounted ? (
              <Image
                src={
                  theme.theme === "light"
                    ? "/logo-light-background.webp"
                    : "/logo-dark-background.webp"
                }
                alt='CodeGraphDigital Logo'
                width={200}
                height={50}
              />
            ) : (
              <>
                <Code className='h-6 w-6 text-primary' />
                <span className='font-bold'>CodeGraphDigital</span>
              </>
            )}
          </Link>
          <nav className='flex items-center gap-6 text-sm'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='transition-colors hover:text-foreground/80 text-foreground/60'
              >
                {link.label}
              </Link>
            ))}
            {/* {user && (
              <Link
                href='/dashboard'
                className='transition-colors hover:text-foreground/80 text-foreground/60'
              >
                Dashboard
              </Link>
            )} */}
          </nav>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left'>
                <SheetHeader>
                  <SheetTitle>
                    <Link href='/' className='flex items-center space-x-2'>
                      <Code className='h-6 w-6 text-primary' />
                      <span className='font-bold'>CodeGraphDigital</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className='mt-6 flex flex-col gap-4'>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='transition-colors hover:text-foreground/80 text-foreground/60'
                    >
                      {link.label}
                    </Link>
                  ))}
                  {user && (
                    <Link
                      href='/dashboard'
                      className='transition-colors hover:text-foreground/80 text-foreground/60'
                    >
                      Dashboard
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className='flex items-center gap-2'>
            <ThemeToggle />
            {loading ? (
              <Skeleton className='h-10 w-20' />
            ) : user ? (
              <Link href='/dashboard'>
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href='/auth/login'>
                  <Button variant='ghost'>Log In</Button>
                </Link>
                <Link href='/auth/signup'>
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
