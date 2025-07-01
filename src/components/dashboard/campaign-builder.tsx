"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Mail, MousePointerClick, Send, Users, Timer } from "lucide-react";
import { motion } from "framer-motion";

const flowSteps = [
  { icon: Users, label: "Segment: New Subscribers", color: "text-blue-400" },
  { icon: Send, label: "Trigger: Welcome Email", color: "text-green-400" },
  { icon: Timer, label: "Wait: 2 Days", color: "text-yellow-400" },
  { icon: MousePointerClick, label: "Check: Clicked Link?", color: "text-purple-400" },
  { icon: Mail, label: "Path A: Send Follow-up", color: "text-pink-400" },
  { icon: CheckCircle, label: "Path B: Add to Nurture", color: "text-teal-400" },
];

const FlowNode = ({ icon: Icon, label, color, isLast = false }: { icon: React.ElementType, label: string, color: string, isLast?: boolean }) => (
  <div className="flex items-center">
    <div className="flex items-center gap-4 rounded-lg border bg-card/50 p-4 shadow-sm">
      <Icon className={`h-8 w-8 ${color}`} />
      <div className="font-medium">{label}</div>
    </div>
    {!isLast && <ArrowRight className="mx-4 h-6 w-6 text-muted-foreground shrink-0" />}
  </div>
);

export function CampaignBuilder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visual Campaign Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">
          Design and automate marketing campaigns with a simple, flow-based interface. Connect triggers, actions, and conditions to create powerful workflows.
        </p>
        <div className="overflow-x-auto pb-4">
          <motion.div 
            className="flex items-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <FlowNode
                  icon={step.icon}
                  label={step.label}
                  color={step.color}
                  isLast={index === flowSteps.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
          [ Visual representation of a campaign flow ]
        </p>
      </CardContent>
    </Card>
  );
}