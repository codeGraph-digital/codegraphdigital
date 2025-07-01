"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const openPositions = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote" },
  { title: "AI/ML Research Scientist", department: "Research & Development", location: "San Francisco, CA" },
  { title: "Product Marketing Manager", department: "Marketing", location: "New York, NY" },
  { title: "Customer Success Advocate", department: "Support", location: "Remote" },
];

export default function CareersPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build the Future With Us
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We're looking for passionate, innovative thinkers to join our mission. If you're excited about the intersection of AI and marketing, you're in the right place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <h2 className="text-center text-3xl font-bold">Open Positions</h2>
        <div className="mt-10 space-y-6">
          {openPositions.map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <Card className="bg-card/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{position.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {position.department} &middot; {position.location}
                      </p>
                    </div>
                    <Button variant="outline">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <p className="text-muted-foreground">Don't see a role that fits? <a href="mailto:careers@codegraph.com" className="text-primary underline">Send us your resume.</a></p>
        </div>
      </motion.div>
    </div>
  );
}