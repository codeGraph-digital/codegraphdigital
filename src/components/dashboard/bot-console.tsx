"use client";

import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Bot, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "bot", text: "Hello! I'm the CodeGraph Assistant. How can I help you with your marketing strategy today?" },
];

const botResponses: { [key: string]: string } = {
  "email campaign": "Great question! For an email campaign, I'd recommend a 3-part sequence: a teaser, a launch announcement, and a follow-up. Would you like me to draft the first email?",
  "seo": "For SEO, focus on keyword research, on-page optimization, and quality backlinks. Our SEO Lab tool can analyze your site and give you specific recommendations.",
  "social media": "For social media, consistency is key. Identify your target audience's preferred platforms and post engaging content regularly. Our Audience Analyzer can help you find where your customers are.",
  "default": "That's an interesting topic. Could you tell me a bit more? I can help with content ideas, campaign strategies, SEO analysis, and more."
};

export function BotConsole() {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const lowerCaseInput = input.toLowerCase();
      let responseText = botResponses.default;
      if (lowerCaseInput.includes("email campaign")) {
        responseText = botResponses["email campaign"];
      } else if (lowerCaseInput.includes("seo")) {
        responseText = botResponses["seo"];
      } else if (lowerCaseInput.includes("social media")) {
        responseText = botResponses["social media"];
      }

      const newBotMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseText,
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-[500px] flex-col rounded-lg border">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <AnimatePresence>
          <div className="space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex items-start gap-3",
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.sender === "bot" && (
                  <Avatar>
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-xs rounded-lg p-3 text-sm whitespace-pre-wrap",
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <Avatar>
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                )}
              </motion.div>
            ))}
            {isLoading && (
               <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 justify-start"
              >
                <Avatar>
                  <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 text-sm">
                  <span className="animate-pulse">...</span>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </ScrollArea>
      <div className="flex items-center gap-2 border-t p-4">
        <Input
          placeholder="Ask about email campaigns, SEO, etc."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
          disabled={isLoading}
        />
        <Button onClick={handleSend} disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}