"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Marketing?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join the thousands of teams already using AI to get ahead.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
              <Button size="lg">Get Started for Free</Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}