"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartTooltipContent, ChartContainer } from "@/components/ui/chart";

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

export function InsightHub() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Engagement by Channel</CardTitle>
          <CardDescription>AI-generated insights show Email marketing is your top performer.</CardDescription>
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
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Website Visitors (6 Months)</CardTitle>
          <CardDescription>Predictive analytics forecast an upward trend for next quarter.</CardDescription>
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
        </CardContent>
      </Card>
    </div>
  );
}