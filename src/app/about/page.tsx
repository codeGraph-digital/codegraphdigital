"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const teamMembers = [
  { name: "Alex Johnson", role: "Founder & CEO" },
  { name: "Samantha Lee", role: "Chief Technology Officer" },
  { name: "Michael Brown", role: "Head of Product" },
  { name: "Jessica Williams", role: "Lead AI Researcher" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We constantly push the boundaries of what's possible with AI in marketing." },
  { icon: Users, title: "Customer-Centric", description: "Our users are at the heart of every decision we make." },
  { icon: Target, title: "Results-Driven", description: "We are committed to delivering tangible results and measurable success for our clients." },
];

export default function AboutPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Powering the Next Wave of Digital Marketing
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          At CodeGraphDigital, we believe in the transformative power of artificial intelligence. Our mission is to provide marketers with the most advanced, intuitive, and effective tools to achieve their goals and drive unprecedented growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <h2 className="text-center text-3xl font-bold">Our Values</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="bg-card/50">
              <CardHeader className="items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20"
      >
        <h2 className="text-center text-3xl font-bold">Meet the Team</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}