"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

const analysisResults = [
  { check: "Title Tag", status: "pass", recommendation: "Length is optimal (58 characters)." },
  { check: "Meta Description", status: "warn", recommendation: "Slightly short. Consider expanding to ~150 characters." },
  { check: "H1 Tag", status: "pass", recommendation: "Exactly one H1 tag found." },
  { check: "Keyword Density", status: "info", recommendation: "Primary keyword 'AI Marketing' appears 5 times." },
  { check: "Image ALT Tags", status: "fail", recommendation: "Missing ALT tags on 2 images." },
  { check: "Mobile Friendliness", status: "pass", recommendation: "Page is responsive and mobile-friendly." },
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
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>SEO Analysis Report</CardTitle>
                <CardDescription>Real-time suggestions from our CodeGraph Output engine.</CardDescription>
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