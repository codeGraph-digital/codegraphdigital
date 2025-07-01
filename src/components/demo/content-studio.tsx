"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const examplePrompts = [
  "Write a blog post intro about the future of AI in marketing.",
  "Generate three ad copy variations for a new SaaS product.",
  "Create a product description for an eco-friendly water bottle.",
];

export function ContentStudio() {
  const [prompt, setPrompt] = React.useState("");
  const [generatedContent, setGeneratedContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsLoading(true);
    setGeneratedContent("");
    setTimeout(() => {
      const content = `Based on your prompt, "${prompt}", here is a draft:\n\nAs we stand on the precipice of a new digital era, the fusion of Artificial Intelligence and marketing is no longer a futuristic concept but a present-day reality. AI is fundamentally reshaping how brands connect with their audiences, moving beyond simple automation to predictive analytics, hyper-personalization, and content creation that resonates on a deeper level. This paradigm shift is empowering marketers to craft strategies that are not only more efficient but also profoundly more effective. Welcome to the future of marketing—a future that is intelligent, adaptive, and driven by data.`;
      setGeneratedContent(content);
      setIsLoading(false);
    }, 2000);
  };

  const handlePromptClick = (p: string) => {
    setPrompt(p);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="prompt" className="text-lg font-medium">
          Content Prompt
        </Label>
        <p className="text-sm text-muted-foreground mb-2">
          Enter a topic or instruction, and let our AI generate the content for you.
        </p>
        <Textarea
          id="prompt"
          placeholder="e.g., 'Write a catchy headline for a new coffee brand'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="text-xs text-muted-foreground mt-2">
          Try an example:
          {examplePrompts.map((p, i) => (
            <button key={i} onClick={() => handlePromptClick(p)} className="underline px-2 py-1 hover:text-primary">
              "{p.substring(0, 40)}..."
            </button>
          ))}
        </div>
      </div>
      <Button onClick={handleGenerate} disabled={isLoading || !prompt}>
        {isLoading ? "Generating..." : "Generate Content"}
        <Sparkles className="ml-2 h-4 w-4" />
      </Button>
      <AnimatePresence>
        {generatedContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Generated Output</CardTitle>
                <CardDescription>Tagline: "Generated in Content AI Studio"</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm dark:prose-invert whitespace-pre-wrap font-sans">
                {generatedContent}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}