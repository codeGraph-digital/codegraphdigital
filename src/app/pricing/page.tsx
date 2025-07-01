"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    price: { monthly: "$0", yearly: "$0" },
    description: "For individuals and small teams getting started.",
    features: ["1 Project", "Basic AI Tools", "Community Support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$49", yearly: "$490" },
    description: "For growing businesses that need more power and support.",
    features: ["10 Projects", "Advanced AI Tools", "Campaign Automation", "Priority Support"],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Agency",
    id: "tier-agency",
    price: { monthly: "$199", yearly: "$1990" },
    description: "For agencies managing multiple clients.",
    features: ["Unlimited Projects", "Full AI Suite", "Client Management", "Dedicated Support"],
    cta: "Contact Sales",
    featured: false,
  },
];

const comparisonFeatures = [
  { feature: "Projects", free: "1", pro: "10", agency: "Unlimited" },
  { feature: "AI Content Writer", free: true, pro: true, agency: true },
  { feature: "Campaign Generator", free: false, pro: true, agency: true },
  { feature: "SEO Optimizer", free: false, pro: true, agency: true },
  { feature: "Audience Analyzer", free: "Basic", pro: "Advanced", agency: "Full" },
  { feature: "Chatbot Assistant", free: false, pro: false, agency: true },
  { feature: "Priority Support", free: false, pro: true, agency: true },
  { feature: "Dedicated Account Manager", free: false, pro: false, agency: true },
];

const Checkmark = () => <Check className="h-5 w-5 text-primary" />;
const Cross = () => <X className="h-5 w-5 text-muted-foreground" />;

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Pricing Plans for Every Team
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose the perfect plan to unlock the power of AI and accelerate your marketing efforts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex items-center justify-center space-x-4"
        >
          <Label htmlFor="billing-cycle">Monthly</Label>
          <Switch
            id="billing-cycle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-cycle">Yearly (Save 15%)</Label>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="h-full"
          >
            <Card className={cn("flex h-full flex-col", tier.featured && "border-primary shadow-2xl shadow-primary/20")}>
              <CardHeader>
                <div className="relative mb-4 flex h-20 w-full items-center justify-center overflow-hidden rounded-md border bg-background/50">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                  <p className="font-mono text-sm text-muted-foreground z-10">[Tier Icon/Graphic]</p>
                </div>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    {tier.name !== "Free" && (isYearly ? "/year" : "/month")}
                  </span>
                </div>
                <ul className="space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-auto w-full" variant={tier.featured ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-center text-3xl font-bold">Feature Comparison</h2>
        <Card className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center">Pro</TableHead>
                <TableHead className="text-center">Agency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  {[item.free, item.pro, item.agency].map((value, i) => (
                    <TableCell key={i} className="text-center">
                      {typeof value === 'boolean' ? (
                        value ? <Checkmark /> : <Cross />
                      ) : (
                        <span>{value}</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </motion.div>
    </div>
  );
}