"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles, Target, ThumbsDown, Quote } from "lucide-react";
import { useDashboard } from "@/context/dashboard-context";

export function PersonaGenerator() {
  const [description, setDescription] = React.useState("An all-in-one AI marketing platform for SaaS companies.");
  const [persona, setPersona] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { addActivity } = useDashboard();

  const handleGenerate = () => {
    if (!description) return;
    setIsLoading(true);
    setPersona(null);
    setTimeout(() => {
      const generatedPersona = {
        name: "Innovator Alex",
        age: 32,
        role: `Enthusiast for: "${description.substring(0, 40)}..."`,
        avatar: "IA",
        quote: "I need tools that are powerful yet simple, and show clear value quickly.",
        goals: [
          "Improve efficiency and automate repetitive tasks.",
          "Find new, creative solutions to old problems.",
          "Stay ahead of the curve in the industry.",
        ],
        frustrations: [
          "Complex tools with steep learning curves.",
          "Difficulty in proving the ROI of new software.",
          "Wasting time on manual, low-impact work.",
        ],
      };
      setPersona(generatedPersona);
      setIsLoading(false);
      addActivity({ type: "Persona", description: `Generated persona for product: "${description.substring(0, 25)}..."` });
    }, 2000);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Audience Persona Generator</CardTitle>
            <CardDescription>
              Describe your product or service, and our AI will generate a detailed target audience persona to guide your marketing strategy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="product-description" className="font-medium">
                  Product Description
                </Label>
                <Textarea
                  id="product-description"
                  placeholder="e.g., 'A mobile app for tracking personal fitness goals.'"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 min-h-[120px]"
                />
              </div>
              <Button onClick={handleGenerate} disabled={isLoading || !description} className="w-full">
                {isLoading ? "Generating Persona..." : "Generate Persona"}
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <AnimatePresence>
          {persona && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <Avatar className="mx-auto h-20 w-20">
                    <AvatarFallback className="text-3xl">{persona.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">{persona.name}</CardTitle>
                  <CardDescription>{persona.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border bg-muted/50 p-4 italic text-center">
                    <Quote className="h-5 w-5 text-muted-foreground inline-block mr-2 -mt-2" />
                    {persona.quote}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold flex items-center"><Target className="h-4 w-4 mr-2 text-primary" />Goals</h4>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        {persona.goals.map((goal: string) => <li key={goal}>{goal}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center"><ThumbsDown className="h-4 w-4 mr-2 text-primary" />Frustrations</h4>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        {persona.frustrations.map((frustration: string) => <li key={frustration}>{frustration}</li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}