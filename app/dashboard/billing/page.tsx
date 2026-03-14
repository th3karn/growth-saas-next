"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, CreditCard, Download, ArrowUpRight } from "lucide-react";

const currentPlan = { name: "Pro", price: 79, period: "monthly", renews: "Apr 14, 2026", status: "Active" };

const plans = [
  { name: "Starter", price: 29, features: ["3 social accounts", "1 client", "100 posts/mo", "5 AI credits"] },
  { name: "Pro", price: 79, current: true, features: ["15 social accounts", "10 clients", "Unlimited posts", "100 AI credits", "3 team members", "White-label reports"] },
  { name: "Agency", price: 199, features: ["Unlimited accounts", "Unlimited clients", "Unlimited posts", "Unlimited AI", "Unlimited team", "Custom integrations"] },
];

const invoices = [
  { id: "INV-001", date: "Mar 1, 2026", amount: "$79.00", status: "Paid" },
  { id: "INV-002", date: "Feb 1, 2026", amount: "$79.00", status: "Paid" },
  { id: "INV-003", date: "Jan 1, 2026", amount: "$79.00", status: "Paid" },
  { id: "INV-004", date: "Dec 1, 2025", amount: "$79.00", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Billing</h1>
        <p className="text-sm text-muted-foreground">Manage your subscription and payment history.</p>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl border border-primary bg-card p-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold">{currentPlan.name} Plan</h2>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success/10 text-success">{currentPlan.status}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">${currentPlan.price}/month · Renews {currentPlan.renews}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Cancel Subscription</Button>
            <Button className="gradient-primary border-0 text-white">Upgrade Plan <ArrowUpRight className="ml-1 h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-xl border p-6 ${plan.current ? "border-primary bg-primary/5" : "border-border bg-card"} shadow-card`}>
            <h3 className="font-display text-lg font-bold">{plan.name}</h3>
            <p className="mt-2"><span className="text-3xl font-extrabold font-display">${plan.price}</span><span className="text-muted-foreground">/mo</span></p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />{f}</li>)}
            </ul>
            <Button className={`mt-6 w-full ${plan.current ? "" : "gradient-primary border-0 text-white"}`} variant={plan.current ? "outline" : "default"} disabled={plan.current}>
              {plan.current ? "Current Plan" : "Upgrade"}
            </Button>
          </div>
        ))}
      </div>

      {/* Payment History */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="p-6 border-b border-border"><h3 className="font-display text-base font-semibold">Payment History</h3></div>
        <table className="w-full">
          <thead><tr className="border-b border-border bg-muted/30">
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Invoice</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Action</th>
          </tr></thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-border last:border-0">
                <td className="px-6 py-3 text-sm font-medium">{inv.id}</td>
                <td className="px-6 py-3 text-sm text-muted-foreground">{inv.date}</td>
                <td className="px-6 py-3 text-sm font-medium">{inv.amount}</td>
                <td className="px-6 py-3"><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success/10 text-success">{inv.status}</span></td>
                <td className="px-6 py-3"><Button variant="ghost" size="sm"><Download className="mr-1 h-3 w-3" /> PDF</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
