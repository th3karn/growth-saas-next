"use client";

import { Users, CreditCard, HelpCircle, BarChart3, TrendingUp, DollarSign, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Users", value: "2,847", change: "+124 this month", icon: Users },
  { label: "Active Subscriptions", value: "1,923", change: "+89 this month", icon: CreditCard },
  { label: "Monthly Revenue", value: "$152,400", change: "+18.2%", icon: DollarSign },
  { label: "Open Tickets", value: "34", change: "-12 from last week", icon: HelpCircle },
];

const revenueData = [
  { month: "Sep", revenue: 98000 }, { month: "Oct", revenue: 105000 }, { month: "Nov", revenue: 112000 },
  { month: "Dec", revenue: 125000 }, { month: "Jan", revenue: 138000 }, { month: "Feb", revenue: 145000 }, { month: "Mar", revenue: 152400 },
];

const recentUsers = [
  { name: "Alice Cooper", email: "alice@agency.com", plan: "Pro", joined: "Mar 14, 2026" },
  { name: "Bob Williams", email: "bob@studio.io", plan: "Starter", joined: "Mar 13, 2026" },
  { name: "Carol Martinez", email: "carol@media.co", plan: "Agency", joined: "Mar 12, 2026" },
  { name: "David Lee", email: "david@creative.com", plan: "Pro", joined: "Mar 11, 2026" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Admin Overview</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">{stat.label}</p><stat.icon className="h-4 w-4 text-muted-foreground" /></div>
            <p className="mt-2 font-display text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-success font-medium flex items-center gap-1"><ArrowUpRight className="h-3 w-3" />{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold">Monthly Revenue</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} />
                <Bar dataKey="revenue" fill="hsl(239 84% 67%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="font-display text-base font-semibold mb-4">Recent Signups</h3>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.email} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">{user.name.split(" ").map(w => w[0]).join("")}</div>
                  <div><p className="text-sm font-medium">{user.name}</p><p className="text-xs text-muted-foreground">{user.email}</p></div>
                </div>
                <div className="text-right"><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{user.plan}</span><p className="text-xs text-muted-foreground mt-1">{user.joined}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
