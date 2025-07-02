"use client";

export function ChatbotPreview() {
  return (
    <div className="w-full space-y-2 p-2">
      <div className="max-w-[80%] rounded-md bg-muted p-2 text-xs">
        How can I help you?
      </div>
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-md bg-primary p-2 text-xs text-primary-foreground">
          Tell me about SEO.
        </div>
      </div>
    </div>
  );
}