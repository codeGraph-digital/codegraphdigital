"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartTooltipContent, ChartContainer } from "@/components/ui/chart";
import { Lightbulb } from "lucide-react";

const barData = [
  { channel: "Organic", engagement: 2400 },
  { channel: "Social", engagement: 1398 },
  { channel: "Email", engagement: 9800 },
  { channel: "Paid Ads", engagement: 3908 },
  { channel: "Referral", engagement: 4800 },
];

const lineData = [
  { date: "Jan", visitors: 4000 },
  { date: "Feb", visitors: 3000 },
  { date: "Mar", visitors: 2000 },
  { date: "Apr", visitors: 2780 },
  { date: "May", visitors: 1890 },
  { date: "Jun", visitors: 2390 },
];

const AiInsight = ({ text }: { text: string }) => (
    <div className="mt-4 flex items-start gap-2 rounded-lg border bg-muted/50 p-3 text-sm">
        <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
        <p className="text-muted-foreground"><span className="font-semibold text-foreground">AI Insight:</span> {text}</p>
    </div>
)

export function InsightHub() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Engagement by Channel</CardTitle>
          <CardDescription>A breakdown of user engagement across your marketing channels.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                <Bar dataKey="engagement" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <AiInsight text="Email marketing is your top performer by a significant margin. Consider doubling down on this channel for Q3." />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Website Visitors (6 Months)</CardTitle>
          <CardDescription>An overview of your website traffic over the last half year.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          <AiInsight text="Predictive analytics forecast a 15% increase in visitors next month based on current trends. Prepare for more traffic." />
        </CardContent>
      </Card>
    </div>
  );
}