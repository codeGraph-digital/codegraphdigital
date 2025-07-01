"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Bot, Send, User } from "lucide-react";

const initialMessages = [
  { sender: "bot", text: "Hello! I'm the CodeGraph Assistant. How can I help you with your marketing strategy today?" },
  { sender: "user", text: "What's the best way to start an email campaign for a new product launch?" },
  { sender: "bot", text: "Great question! I'd recommend a 3-part email sequence: \n1. Teaser email one week before launch. \n2. Launch day announcement with a special offer. \n3. Follow-up email 3 days later to create urgency. \n\nWould you like me to draft the first email for you?" },
];

export function BotConsole() {
  return (
    <div className="flex h-[500px] flex-col">
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {initialMessages.map((msg, index) => (
            <div
              key={index}
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
                  "max-w-xs rounded-lg p-3 text-sm",
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
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center gap-2 border-t p-4">
        <Input placeholder="Ask the assistant..." disabled />
        <Button disabled>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}