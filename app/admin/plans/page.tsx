"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Edit, Plus } from "lucide-react";

const plans = [
  { name: "Starter", price: "$29/mo", users: 847, status: "Active", features: "3 accounts, 1 client, 100 posts, 5 AI credits" },
  { name: "Pro", price: "$79/mo", users: 823, status: "Active", features: "15 accounts, 10 clients, unlimited posts, 100 AI credits" },
  { name: "Agency", price: "$199/mo", users: 253, status: "Active", features: "Unlimited everything, custom integrations" },
];

export default function AdminPlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Manage Plans</h1>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> Add Plan</Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between"><h3 className="font-display text-lg font-bold">{plan.name}</h3><Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button></div>
            <p className="text-2xl font-extrabold font-display mt-2">{plan.price}</p>
            <p className="text-sm text-muted-foreground mt-2">{plan.features}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{plan.users} subscribers</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success/10 text-success">{plan.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
