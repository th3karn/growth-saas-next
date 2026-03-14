"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tickets = [
  { id: "TKT-001", subject: "Unable to connect Instagram account", status: "open", priority: "high", created: "Mar 12, 2026", lastReply: "Mar 13, 2026", replies: 3 },
  { id: "TKT-002", subject: "Billing charge discrepancy", status: "pending", priority: "medium", created: "Mar 10, 2026", lastReply: "Mar 11, 2026", replies: 2 },
  { id: "TKT-003", subject: "Feature request: TikTok scheduling", status: "open", priority: "low", created: "Mar 8, 2026", lastReply: "Mar 9, 2026", replies: 1 },
  { id: "TKT-004", subject: "Report generation timeout", status: "resolved", priority: "high", created: "Mar 5, 2026", lastReply: "Mar 7, 2026", replies: 5 },
  { id: "TKT-005", subject: "How to invite team members?", status: "closed", priority: "low", created: "Mar 1, 2026", lastReply: "Mar 2, 2026", replies: 2 },
];

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { icon: typeof Clock; label: string; class: string }> = {
    open: { icon: AlertCircle, label: "Open", class: "bg-primary/10 text-primary" },
    pending: { icon: Clock, label: "Pending", class: "bg-warning/10 text-warning" },
    resolved: { icon: CheckCircle2, label: "Resolved", class: "bg-success/10 text-success" },
    closed: { icon: CheckCircle2, label: "Closed", class: "bg-muted text-muted-foreground" },
  };
  const c = config[status] || config.open;
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.class}`}><c.icon className="h-3 w-3" />{c.label}</span>;
}

export default function SupportPage() {
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Support</h1>
          <p className="text-sm text-muted-foreground">Create and manage support tickets.</p>
        </div>
        <Button className="gradient-primary border-0 text-white" onClick={() => setShowNew(!showNew)}><Plus className="mr-2 h-4 w-4" /> New Ticket</Button>
      </div>

      {showNew && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h3 className="font-display text-base font-semibold">Create Support Ticket</h3>
          <div className="space-y-2"><Label>Subject</Label><Input placeholder="Briefly describe your issue" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label>Priority</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select priority" /></SelectTrigger>
                <SelectContent><SelectItem value="low">Low</SelectItem><SelectItem value="medium">Medium</SelectItem><SelectItem value="high">High</SelectItem><SelectItem value="urgent">Urgent</SelectItem></SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2"><Label>Message</Label><Textarea placeholder="Describe your issue in detail..." rows={4} /></div>
          <div className="flex gap-2"><Button className="gradient-primary border-0 text-white">Submit Ticket</Button><Button variant="outline" onClick={() => setShowNew(false)}>Cancel</Button></div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-border bg-muted/30">
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Ticket</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Subject</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Replies</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Created</th>
          </tr></thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer">
                <td className="px-6 py-4 text-sm font-medium text-primary">{t.id}</td>
                <td className="px-6 py-4 text-sm">{t.subject}</td>
                <td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.priority === "high" || t.priority === "urgent" ? "bg-destructive/10 text-destructive" : t.priority === "medium" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"}`}>{t.priority}</span></td>
                <td className="px-6 py-4"><StatusBadge status={t.status} /></td>
                <td className="px-6 py-4 text-sm text-muted-foreground"><MessageSquare className="inline h-3 w-3 mr-1" />{t.replies}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{t.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
