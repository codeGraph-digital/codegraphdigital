"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Cookie } from "lucide-react";

const COOKIE_NAME = "codegraph_cookie_consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Check if the cookie exists
    if (typeof window !== "undefined") {
      const consent = document.cookie.split(';').some((item) => item.trim().startsWith(`${COOKIE_NAME}=`));
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    // Set cookie to expire in 1 year
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=true; expires=${date.toUTCString()}; path=/`;
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-md"
        >
          <Card className="shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">We use cookies</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our website uses cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button onClick={handleAccept} className="w-full sm:w-auto">Accept</Button>
                    <Link href="/privacy" passHref>
                      <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}