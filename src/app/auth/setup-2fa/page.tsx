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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
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

const formSchema = z.object({
  code: z.string().min(6, { message: "Your one-time password must be 6 characters." }),
});

export default function Setup2FAPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Two-Factor Authentication Enabled!", {
      description: "Your account is now more secure.",
    });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">CodeGraphDigital</span>
        </Link>
        <CardTitle>Set Up Two-Factor Authentication</CardTitle>
        <CardDescription>Scan the QR code with your authenticator app, then enter the code below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center w-full aspect-square bg-muted rounded-lg mb-6">
            <p className="text-muted-foreground font-mono">[QR Code Placeholder]</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="w-full">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Verify & Enable
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}