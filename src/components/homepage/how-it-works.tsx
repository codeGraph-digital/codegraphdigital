"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket } from "lucide-react";
import { HomepageHeroAnimation } from "../homepage-hero-animation";

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
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex h-[28rem] items-center justify-center overflow-hidden rounded-xl border bg-background/50"
          >
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
             <div className="z-10 w-full scale-[0.7] lg:scale-[0.8]">
                <HomepageHeroAnimation />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}