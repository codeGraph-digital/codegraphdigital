"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { Sidebar } from "./sidebar";
import { useAuth } from "@/context/auth-context";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

// Simple fallback for friendly auth error messages
function getFriendlyAuthErrorMessage(error: any): string {
  if (error?.code === "auth/network-request-failed") {
    return "Network error. Please check your connection.";
  }
  if (error?.code === "auth/user-not-found") {
    return "User not found.";
  }
  if (error?.code === "auth/wrong-password") {
    return "Incorrect password.";
  }
  return error?.message || "An unexpected error occurred.";
}

export function DashboardHeader() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully.");
      router.push("/");
    } catch (error: any) {
      toast.error(getFriendlyAuthErrorMessage(error));
    }
  };

  return (
    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='shrink-0 lg:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col p-0'>
          <SheetTitle className='sr-only'>Dashboard Menu</SheetTitle>
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className='w-full flex-1'>
        <form>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search campaigns, content...'
              className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' size='icon' className='rounded-full'>
            <Avatar>
              <AvatarFallback>
                {user?.displayName?.[0].toUpperCase() ||
                  user?.email?.[0].toUpperCase() ||
                  "U"}
              </AvatarFallback>
            </Avatar>
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>
            {user?.displayName || user?.email || "My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href='/dashboard/profile'>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/dashboard/settings'>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
