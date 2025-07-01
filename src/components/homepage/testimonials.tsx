"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "CodeGraphDigital has revolutionized our content strategy. We're creating high-quality blog posts in a fraction of the time.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
  },
  {
    quote: "The campaign automation is a game-changer. Our lead nurturing has never been more effective or easier to manage.",
    name: "Michael Chen",
    title: "Founder, Growth Gurus",
  },
  {
    quote: "As an agency, the ability to manage multiple clients and projects under one roof is invaluable. The AI tools are just the icing on the cake.",
    name: "Emily Rodriguez",
    title: "CEO, Digital Wave Agency",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Marketing Leaders
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            See how teams like yours are using CodeGraphDigital to drive results.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="mt-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}