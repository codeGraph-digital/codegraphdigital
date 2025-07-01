"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "1. Define Your Goal",
    description: "Tell our AI what you want to achieve, from generating leads to writing blog posts.",
  },
  {
    icon: Lightbulb,
    title: "2. Get AI-Powered Suggestions",
    description: "Our platform analyzes your goal and provides content, strategies, and campaign ideas.",
  },
  {
    icon: Rocket,
    title: "3. Launch & Accelerate",
    description: "Deploy your campaigns, publish content, and watch your marketing efforts take off.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Launch in Minutes, Not Months
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get from idea to execution faster than ever with our streamlined AI workflow.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}