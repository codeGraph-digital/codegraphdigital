"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeSettings() {
  const { setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme</CardTitle>
        <CardDescription>Select your preferred interface theme.</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Button variant="outline" onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> Light
        </Button>
        <Button variant="outline" onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" /> Dark
        </Button>
        <Button variant="outline" onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" /> System
        </Button>
      </CardContent>
    </Card>
  );
}