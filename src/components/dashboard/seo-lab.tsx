"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, AlertTriangle, Info, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const analysisResults = [
  { check: "Title Tag", status: "pass", recommendation: "Length is optimal (58 characters). Well done." },
  { check: "Meta Description", status: "warn", recommendation: "Slightly short. Expanding to ~150 characters could improve click-through rates." },
  { check: "H1 Tag", status: "pass", recommendation: "Exactly one H1 tag found, which is ideal for page structure." },
  { check: "Keyword Density", status: "info", recommendation: "Primary keyword 'AI Marketing' appears 5 times. This is a healthy density." },
  { check: "Image ALT Tags", status: "fail", recommendation: "Missing ALT tags on 2 images. Adding descriptive ALT tags is crucial for accessibility and image SEO." },
  { check: "Mobile Friendliness", status: "pass", recommendation: "Page is responsive and passes Google's mobile-friendly test." },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'pass') return <CheckCircle2 className="h-5 w-5 text-green-500" />;
  if (status === 'warn') return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
  if (status === 'fail') return <AlertTriangle className="h-5 w-5 text-destructive" />;
  return <Info className="h-5 w-5 text-blue-500" />;
};

export function SeoLab() {
  const [url, setUrl] = React.useState("https://codegraphdigital.com/features");
  const [results, setResults] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAnalyze = () => {
    if (!url) return;
    setIsLoading(true);
    setResults([]);
    setTimeout(() => {
      setResults(analysisResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SEO Lab</CardTitle>
          <CardDescription>Enter a URL to get real-time on-page SEO analysis and actionable recommendations from our CodeGraph engine.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Enter a URL to analyze"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button onClick={handleAnalyze} disabled={isLoading || !url}>
              {isLoading ? "Analyzing..." : "Analyze"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
                <CardHeader>
                    <CardTitle>Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                        <p className="text-sm text-muted-foreground">Overall Score</p>
                        <p className="text-5xl font-bold text-primary">88</p>
                    </div>
                    <div className="flex-grow">
                        <div className="mt-1 flex items-start gap-2 rounded-lg border bg-muted/50 p-3 text-sm">
                            <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                            <p className="text-muted-foreground"><span className="font-semibold text-foreground">AI Recommendation:</span> The page is well-optimized, but fixing the missing image ALT tags is a high-impact, low-effort win that could boost your search visibility.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Detailed Report</CardTitle>
                <CardDescription>A check-by-check breakdown of your page's SEO health.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Status</TableHead>
                      <TableHead>Check</TableHead>
                      <TableHead>Recommendation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result) => (
                      <TableRow key={result.check}>
                        <TableCell><StatusIcon status={result.status} /></TableCell>
                        <TableCell className="font-medium">{result.check}</TableCell>
                        <TableCell>{result.recommendation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}