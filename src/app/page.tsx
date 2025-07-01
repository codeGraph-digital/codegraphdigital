"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomepageHeroAnimation } from "@/components/homepage-hero-animation";
import { FeaturesHighlight } from "@/components/homepage/features-highlight";
import { HowItWorks } from "@/components/homepage/how-it-works";
import { Testimonials } from "@/components/homepage/testimonials";
import { FinalCta } from "@/components/homepage/final-cta";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative text-center py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Smarter Marketing with{" "}
              <span className="text-primary">AI at the Core</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Automate. Analyze. Accelerate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/features">
              <Button size="lg">Explore Tools</Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <HomepageHeroAnimation />
          </motion.div>
        </section>
        <FeaturesHighlight />
      </div>
      <HowItWorks />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials />
      </div>
      <FinalCta />
    </>
  );
}