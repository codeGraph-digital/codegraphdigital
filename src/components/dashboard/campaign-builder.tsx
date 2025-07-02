"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Mail, MousePointerClick, Send, Users, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Step {
  id: number;
  icon: React.ElementType;
  type: string;
  label: string;
  color: string;
  details: string;
}

const initialFlowSteps: Step[] = [
  { id: 1, icon: Users, type: "Segment", label: "New Subscribers", color: "text-blue-400", details: "This flow starts when a new user subscribes to the newsletter list." },
  { id: 2, icon: Send, type: "Action", label: "Send Welcome Email", color: "text-green-400", details: "Sends the 'Welcome Series - Email 1' template." },
  { id: 3, icon: Timer, type: "Condition", label: "Wait 2 Days", color: "text-yellow-400", details: "Pauses the campaign for 2 days before proceeding." },
  { id: 4, icon: MousePointerClick, type: "Check", label: "Clicked Link?", color: "text-purple-400", details: "Checks if the user clicked the primary CTA link in the previous email." },
  { id: 5, icon: Mail, type: "Path A", label: "Send Follow-up", color: "text-pink-400", details: "If the link was clicked, send the 'Engaged User Follow-up' email." },
  { id: 6, icon: CheckCircle, type: "Path B", label: "Add to Nurture", color: "text-teal-400", details: "If the link was not clicked, add the user to the 'Long-term Nurture' segment." },
];

const FlowNode = ({ icon: Icon, label, color, isLast = false, onClick }: { icon: React.ElementType, label: string, color: string, isLast?: boolean, onClick: () => void }) => (
  <div className="flex items-center">
    <button 
      onClick={onClick}
      className="flex w-48 items-center gap-4 rounded-lg border bg-card/50 p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <Icon className={`h-8 w-8 ${color} shrink-0`} />
      <div className="font-medium text-left">{label}</div>
    </button>
    {!isLast && <ArrowRight className="mx-4 h-6 w-6 text-muted-foreground shrink-0" />}
  </div>
);

export function CampaignBuilder() {
  const [steps, setSteps] = React.useState<Step[]>(initialFlowSteps);
  const [selectedStep, setSelectedStep] = React.useState<Step | null>(null);
  const [formData, setFormData] = React.useState<Step | null>(null);

  React.useEffect(() => {
    setFormData(selectedStep);
  }, [selectedStep]);

  const handleNodeClick = (step: Step) => {
    setSelectedStep(step);
  };

  const handleUpdateStep = () => {
    if (!formData) return;
    setSteps(steps.map(s => s.id === formData.id ? formData : s));
    setSelectedStep(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formData) return;
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Visual Campaign Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Design and automate marketing campaigns with a simple, flow-based interface. Click on a step to edit its details.
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
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <FlowNode
                    icon={step.icon}
                    label={step.label}
                    color={step.color}
                    isLast={index === steps.length - 1}
                    onClick={() => handleNodeClick(step)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
            [ An interactive, visual representation of a campaign flow ]
          </p>
        </CardContent>
      </Card>

      <Sheet open={!!selectedStep} onOpenChange={(isOpen) => !isOpen && setSelectedStep(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Step: {selectedStep?.type}</SheetTitle>
            <SheetDescription>
              Modify the details of this campaign step.
            </SheetDescription>
          </SheetHeader>
          {formData && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="label">Label</Label>
                <Input id="label" value={formData.label} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Details</Label>
                <Textarea id="details" value={formData.details} onChange={handleInputChange} className="min-h-[120px]" />
              </div>
            </div>
          )}
          <SheetFooter>
            <Button onClick={() => setSelectedStep(null)} variant="outline">Cancel</Button>
            <Button onClick={handleUpdateStep}>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}