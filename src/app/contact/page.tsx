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
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        company: values.company,
        message: values.message,
        access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY,
        subject: "Contact Form Submission",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error("Failed to send message", {
        description: errorData.message || "An unexpected error occurred.",
      });
      console.error("Error submitting form:", errorData);
      console.log("Form values:", process.env.NEXT_WEB_3_FORMS_API_KEY);
      return;
    }

    // If successful, reset the form and show success message
    form.reset();
    // Log the values to console for debugging
    // You can remove this in production
    console.log("Form submitted successfully:", values);
    // Optionally, you can log the response from the API
    const responseData = await response.json();
    console.log("Response from Web3Forms:", responseData);

    // Show success toast
    toast.success("Message sent!", {
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
  }

  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mx-auto max-w-2xl text-center'
      >
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
          Get in Touch
        </h1>
        <p className='mt-4 text-lg text-muted-foreground'>
          Have a question, a project idea, or just want to talk about the future
          of AI? We'd love to hear from you.
        </p>
      </motion.div>

      <div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form and our team will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Your Name' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Tell us how we can help...'
                            className='min-h-[120px]'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type='submit' className='w-full'>
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='space-y-8'
        >
          <div className='relative flex h-80 items-center justify-center rounded-xl border bg-muted/50 overflow-hidden'>
            {/* <p className='font-mono text-muted-foreground'> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6241306871807!2d-122.42492342369567!3d37.77541061212266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809f2520704b%3A0xa57a409db1a58a99!2s150%20Oak%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2slk!4v1751883823125!5m2!1sen!2slk'
              loading='lazy'
              className='w-full h-full'
            ></iframe>
            {/* </p> */}
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
            <div className='flex items-start gap-4'>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
                <Mail />
              </div>
              <div>
                <h3 className='font-semibold'>Email</h3>
                <Link href='mailto:hello@codegraphdigital.com'>
                  <p className='text-muted-foreground'>
                    hello@codegraphdigital.com
                  </p>
                </Link>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary'>
                <Phone />
              </div>
              <div>
                <h3 className='font-semibold'>Phone</h3>
                <Link href='tel:+14095469721'>
                  <p className='text-muted-foreground'>+1 (409) 546-9721</p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
