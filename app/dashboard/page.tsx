"use client";

import { BarChart3, TrendingUp, Users, Clock, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Followers", value: "127.4K", change: "+12.3%", icon: Users },
  { label: "Engagement Rate", value: "4.8%", change: "+0.6%", icon: TrendingUp },
  { label: "Scheduled Posts", value: "42", change: "This week", icon: Clock },
  { label: "Active Clients", value: "18", change: "+3 new", icon: BarChart3 },
];

const chartData = [
  { name: "Jan", followers: 98000, engagement: 3.2 },
  { name: "Feb", followers: 102000, engagement: 3.5 },
  { name: "Mar", followers: 105000, engagement: 3.8 },
  { name: "Apr", followers: 108000, engagement: 4.0 },
  { name: "May", followers: 115000, engagement: 4.2 },
  { name: "Jun", followers: 120000, engagement: 4.5 },
  { name: "Jul", followers: 127400, engagement: 4.8 },
];

const recentPosts = [
  { title: "Summer Campaign Launch", platform: "Instagram", status: "Published", color: "text-success" },
  { title: "Product Update Thread", platform: "X", status: "Scheduled", color: "text-primary" },
  { title: "Behind the Scenes Reel", platform: "Instagram", status: "Draft", color: "text-muted-foreground" },
  { title: "Client Testimonial Video", platform: "YouTube", status: "In Review", color: "text-warning" },
  { title: "Weekly Tips Carousel", platform: "Facebook", status: "Published", color: "text-success" },
];

const upcomingTasks = [
  { task: "Review SEO campaign post for TechFlow", due: "Today, 3:00 PM" },
  { task: "Schedule Instagram reels for Digital Spark", due: "Tomorrow, 10:00 AM" },
  { task: "Generate monthly report for Acme Corp", due: "Mar 16, 2026" },
  { task: "Review and approve carousel designs", due: "Mar 17, 2026" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your social accounts.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">{stat.value}</p>
            <div className="mt-1 flex items-center gap-1 text-xs font-medium text-success">
              <ArrowUpRight className="h-3 w-3" />
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Recent Posts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold text-foreground">Follower Growth</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(239 84% 67%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(239 84% 67%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Area type="monotone" dataKey="followers" stroke="hsl(239 84% 67%)" fill="url(#colorFollowers)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold text-foreground">Recent Posts</h3>
          <div className="mt-4 space-y-4">
            {recentPosts.map((post) => (
              <div key={post.title} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{post.title}</p>
                  <p className="text-xs text-muted-foreground">{post.platform}</p>
                </div>
                <span className={`text-xs font-medium ${post.color}`}>{post.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <h3 className="font-display text-base font-semibold text-foreground">Upcoming Tasks</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {upcomingTasks.map((t) => (
            <div key={t.task} className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4">
              <Clock className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">{t.task}</p>
                <p className="text-xs text-muted-foreground">{t.due}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
