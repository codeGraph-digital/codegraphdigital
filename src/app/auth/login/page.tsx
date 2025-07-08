"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import { Code } from "lucide-react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { getFriendlyAuthErrorMessage } from "@/lib/auth-errors";
import Image from "next/image";
import { useTheme } from "next-themes";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role='img'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.37 1.62-4.38 1.62-3.32 0-6.03-2.75-6.03-6.12s2.7-6.12 6.03-6.12c1.87 0 3.13.77 4.02 1.62l2.59-2.59c-1.62-1.5-3.75-2.45-6.6-2.45C6.49 2.72 2 7.22 2 12.72s4.49 10 10.48 10c2.94 0 5.42-1 7.1-2.64 1.76-1.7 2.64-4.03 2.64-6.57 0-.67-.06-1.32-.18-1.97h-9.08z'
      fill='currentColor'
    />
  </svg>
);

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(getFriendlyAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in successfully with Google!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(getFriendlyAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='text-center'>
        <Link
          href='/'
          className='flex items-center justify-center space-x-2 mb-4'
        >
          {isMounted ? (
            <Image
            src={
              theme.theme === "light" ? "/logo-light.webp" : "/logo-dark.webp"
            }
            alt='CodeGraphDigital Logo'
            width={200}
            height={50}
          />
          ):(
            <>
              <Code className='h-6 w-6 text-primary' />
              <span className='font-bold'>CodeGraphDigital</span>
            </>
          )}
          
        </Link>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='your.email@example.com'
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='••••••••'
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='text-right text-sm'>
              <Link
                href='/auth/forgot-password'
                className='underline hover:text-primary'
              >
                Forgot password?
              </Link>
            </div>
            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </Form>
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant='outline'
          className='w-full'
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <GoogleIcon className='mr-2 h-4 w-4' />
          Continue with Google
        </Button>
        <div className='mt-6 text-center text-sm'>
          Don't have an account?{" "}
          <Link href='/auth/signup' className='underline hover:text-primary'>
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
