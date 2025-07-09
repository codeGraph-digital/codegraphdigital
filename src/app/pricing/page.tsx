"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
    features: [
      "10 Projects",
      "Advanced AI Tools",
      "Campaign Automation",
      "Priority Support",
    ],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Agency",
    id: "tier-agency",
    price: { monthly: "$199", yearly: "$1990" },
    description: "For agencies managing multiple clients.",
    features: [
      "Unlimited Projects",
      "Full AI Suite",
      "Client Management",
      "Dedicated Support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const comparisonFeatures = [
  { feature: "Projects", free: "1", pro: "10", agency: "Unlimited" },
  { feature: "AI Content Writer", free: true, pro: true, agency: true },
  { feature: "Campaign Generator", free: false, pro: true, agency: true },
  { feature: "SEO Optimizer", free: false, pro: true, agency: true },
  {
    feature: "Audience Analyzer",
    free: "Basic",
    pro: "Advanced",
    agency: "Full",
  },
  { feature: "Chatbot Assistant", free: false, pro: false, agency: true },
  { feature: "Priority Support", free: false, pro: true, agency: true },
  {
    feature: "Dedicated Account Manager",
    free: false,
    pro: false,
    agency: true,
  },
];

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Our Free plan is free forever and includes access to our basic AI tools for one project. It's a great way to experience the core functionalities of CodeGraphDigital before committing to a paid plan.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated and applied to your next billing cycle.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee on all our paid plans. If you're not satisfied with our service within the first 14 days, just contact our support team for a full refund.",
  },
  {
    question: "How does the 'Yearly' billing work?",
    answer:
      "When you choose a yearly plan, you pay for the entire year upfront at a discounted rate (you save 15% compared to paying monthly). Your subscription will automatically renew every year unless you cancel.",
  },
];

const Checkmark = () => <Check className='h-5 w-5 text-primary' />;
const Cross = () => <X className='h-5 w-5 text-muted-foreground' />;

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);
  const route = useRouter();

  return (
    <div className='container py-12 sm:py-16 lg:py-20 mx-auto'>
      <div className='mx-auto max-w-2xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Pricing Plans for Every Team
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Choose the perfect plan to unlock the power of AI and accelerate
            your marketing efforts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-10 flex items-center justify-center space-x-4'
        >
          <Label htmlFor='billing-cycle'>Monthly</Label>
          <Switch
            id='billing-cycle'
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor='billing-cycle'>Yearly (Save 15%)</Label>
        </motion.div>
      </div>

      <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className='h-full'
          >
            <Card
              className={cn(
                "flex h-full flex-col",
                tier.featured && "border-primary shadow-2xl shadow-primary/20"
              )}
            >
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-grow flex-col'>
                <div className='mb-6'>
                  <span className='text-4xl font-bold'>
                    {isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className='text-muted-foreground'>
                    {tier.name !== "Free" && (isYearly ? "/year" : "/month")}
                  </span>
                </div>
                <ul className='space-y-3 text-sm py-4'>
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex items-center'>
                      <Check className='mr-2 h-4 w-4 text-primary' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className='mt-auto w-full'
                  variant={tier.featured ? "default" : "outline"}
                  onClick={() => {
                    if (tier.name === "Free") {
                      route.push("/auth/signup");
                    } else {
                      route.push(`/contact?plan=${tier.id}`);
                    }
                  }}
                >
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
        className='mt-20'
      >
        <h2 className='text-center text-3xl font-bold'>Feature Comparison</h2>
        <Card className='mt-8'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[250px] py-6'>
                  <div className='flex justify-center items-center min-h-[32px]'>
                    Feature
                  </div>
                </TableHead>
                <TableHead className='text-center'>
                  <div className='flex justify-center items-center min-h-[32px]'>
                    Free
                  </div>
                </TableHead>
                <TableHead className='text-center'>
                  <div className='flex justify-center items-center min-h-[32px]'>
                    Pro
                  </div>
                </TableHead>
                <TableHead className='text-center'>
                  <div className='flex justify-center items-center min-h-[32px]'>
                    Agency
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((item) => (
                <TableRow key={item.feature} className='py-4 align-middle'>
                  <TableCell className='font-medium py-3 pl-4'>
                    {item.feature}
                  </TableCell>
                  <TableCell className='text-center py-3'>
                    <div className='flex justify-center items-center min-h-[32px]'>
                      {typeof item.free === "boolean" ? (
                        item.free ? (
                          <Checkmark />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span>{item.free}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className='text-center bg-muted/50 mx-auto py-3'>
                    <div className='flex justify-center items-center min-h-[32px]'>
                      {typeof item.pro === "boolean" ? (
                        item.pro ? (
                          <Checkmark />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span>{item.pro}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className='text-center py-3'>
                    <div className='flex justify-center items-center min-h-[32px]'>
                      {typeof item.agency === "boolean" ? (
                        item.agency ? (
                          <Checkmark />
                        ) : (
                          <Cross />
                        )
                      ) : (
                        <span>{item.agency}</span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='mt-20'
      >
        <h2 className='text-center text-3xl font-bold'>
          Frequently Asked Questions
        </h2>
        <Accordion
          type='single'
          collapsible
          className='w-full max-w-4xl mx-auto mt-8'
        >
          {faqs.map((faq, i) => (
            <AccordionItem value={`item-${i}`} key={i} className='py-3'>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
