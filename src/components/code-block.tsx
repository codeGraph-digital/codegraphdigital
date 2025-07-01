"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(code);
      setHasCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  return (
    <div className="relative mt-4">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className={`language-${language} font-mono text-sm`}>
          {code}
        </code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}