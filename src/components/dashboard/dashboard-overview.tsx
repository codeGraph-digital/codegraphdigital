"use client";

import { useAuth } from "@/context/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart2, FileText, Rocket, Users } from "lucide-react";

const kpis = [
    { title: "Engagement Rate", value: "12.5%", change: "+2.1%", changeType: "increase" },
    { title: "New Leads", value: "320", change: "+15", changeType: "increase" },
    { title: "Site Visitors", value: "14.2k", change: "-3.2%", changeType: "decrease" },
];

const recentActivity = [
    { type: "Content", description: "Generated a blog post titled 'The Future of AI'", time: "2h ago" },
    { type: "Campaign", description: "Launched the 'Q3 Welcome Series' email campaign", time: "1d ago" },
    { type: "SEO", description: "Completed SEO analysis for /features page", time: "3d ago" },
];

const quickLinks = [
    { href: "/dashboard/content", title: "New Content", icon: FileText },
    { href: "/dashboard/campaigns", title: "New Campaign", icon: Rocket },
    { href: "/dashboard/insights", title: "View Insights", icon: BarChart2 },
    { href: "/dashboard/personas", title: "Define Persona", icon: Users },
];

export function DashboardOverview() {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold">Welcome back, {user?.displayName || user?.email}!</h1>
                <p className="text-muted-foreground">Here's a snapshot of your marketing performance.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
                {kpis.map(kpi => (
                    <Card key={kpi.title}>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{kpi.value}</div>
                            <p className={`text-xs ${kpi.changeType === 'increase' ? 'text-green-500' : 'text-destructive'}`}>
                                {kpi.change} from last week
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>A log of your latest actions in the platform.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <li key={i} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{activity.type}</p>
                                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                        <CardDescription>Jump right into your most common tasks.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        {quickLinks.map(link => (
                            <Link href={link.href} key={link.href}>
                                <Button variant="outline" className="w-full h-full flex-col py-4">
                                    <link.icon className="h-6 w-6 mb-2 text-primary" />
                                    <span>{link.title}</span>
                                </Button>
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}