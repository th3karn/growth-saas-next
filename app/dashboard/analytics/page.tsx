"use client";

import { BarChart3, TrendingUp, Eye, Share2, ArrowUpRight, Download } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const followerData = [
  { month: "Aug", instagram: 32000, facebook: 24000, twitter: 18000, youtube: 12000 },
  { month: "Sep", instagram: 34500, facebook: 25200, twitter: 19100, youtube: 13200 },
  { month: "Oct", instagram: 37200, facebook: 26800, twitter: 20500, youtube: 14800 },
  { month: "Nov", instagram: 39800, facebook: 28300, twitter: 21800, youtube: 16100 },
  { month: "Dec", instagram: 41500, facebook: 29500, twitter: 23200, youtube: 17500 },
  { month: "Jan", instagram: 43200, facebook: 30800, twitter: 24600, youtube: 18900 },
  { month: "Feb", instagram: 45200, facebook: 32100, twitter: 26100, youtube: 20300 },
];

const engagementData = [
  { day: "Mon", likes: 1200, comments: 340, shares: 180 },
  { day: "Tue", likes: 980, comments: 290, shares: 150 },
  { day: "Wed", likes: 1450, comments: 410, shares: 220 },
  { day: "Thu", likes: 1100, comments: 320, shares: 170 },
  { day: "Fri", likes: 1680, comments: 490, shares: 280 },
  { day: "Sat", likes: 890, comments: 250, shares: 130 },
  { day: "Sun", likes: 760, comments: 210, shares: 110 },
];

const topPosts = [
  { title: "10 Growth Hacks for 2026", platform: "Instagram", impressions: "24.5K", engagement: "8.2%", reach: "18.3K" },
  { title: "Client Success Story", platform: "LinkedIn", impressions: "18.2K", engagement: "6.8%", reach: "14.1K" },
  { title: "Behind the Scenes", platform: "YouTube", impressions: "15.8K", engagement: "5.4%", reach: "12.6K" },
  { title: "Weekly Tips Thread", platform: "X", impressions: "12.3K", engagement: "4.9%", reach: "9.8K" },
];

const bestTimes = [
  { day: "Monday", time: "10:00 AM", engagement: "High" },
  { day: "Wednesday", time: "2:00 PM", engagement: "Very High" },
  { day: "Friday", time: "11:00 AM", engagement: "High" },
  { day: "Saturday", time: "9:00 AM", engagement: "Medium" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Analytics</h1>
          <p className="text-sm text-muted-foreground">Track your social media performance across all platforms.</p>
        </div>
        <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export Report</Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Impressions", value: "834.2K", change: "+15.4%", icon: Eye },
          { label: "Total Engagement", value: "45.8K", change: "+8.7%", icon: TrendingUp },
          { label: "Total Reach", value: "612.3K", change: "+12.1%", icon: BarChart3 },
          { label: "Total Shares", value: "3.2K", change: "+22.3%", icon: Share2 },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">{stat.label}</p><stat.icon className="h-4 w-4 text-muted-foreground" /></div>
            <p className="mt-2 font-display text-2xl font-bold">{stat.value}</p>
            <div className="mt-1 flex items-center gap-1 text-xs font-medium text-success"><ArrowUpRight className="h-3 w-3" />{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold">Follower Growth</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={followerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Area type="monotone" dataKey="instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.3} />
                <Area type="monotone" dataKey="facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.3} />
                <Area type="monotone" dataKey="twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold">Weekly Engagement</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Bar dataKey="likes" fill="hsl(239 84% 67%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="comments" fill="hsl(263 70% 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="shares" fill="hsl(160 84% 39%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Posts & Best Times */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold mb-4">Top Performing Content</h3>
          <div className="space-y-3">
            {topPosts.map((post) => (
              <div key={post.title} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div><p className="text-sm font-medium">{post.title}</p><p className="text-xs text-muted-foreground">{post.platform}</p></div>
                <div className="text-right"><p className="text-sm font-semibold text-primary">{post.engagement}</p><p className="text-xs text-muted-foreground">{post.impressions} impressions</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold mb-4">Best Posting Times</h3>
          <div className="space-y-3">
            {bestTimes.map((t) => (
              <div key={t.day} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div><p className="text-sm font-medium">{t.day}</p><p className="text-xs text-muted-foreground">{t.time}</p></div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.engagement === "Very High" ? "bg-success/10 text-success" : t.engagement === "High" ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"}`}>{t.engagement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
