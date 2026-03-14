"use client";
import { MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const tickets = [
  { id: "TKT-001", user: "John Doe", subject: "Instagram connection issue", status: "open", priority: "high", created: "Mar 12, 2026" },
  { id: "TKT-002", user: "Sarah Chen", subject: "Billing discrepancy", status: "pending", priority: "medium", created: "Mar 10, 2026" },
  { id: "TKT-003", user: "Mike J.", subject: "TikTok scheduling request", status: "open", priority: "low", created: "Mar 8, 2026" },
  { id: "TKT-004", user: "Emily R.", subject: "Report timeout", status: "resolved", priority: "high", created: "Mar 5, 2026" },
  { id: "TKT-005", user: "Alex Kim", subject: "Team invitation", status: "closed", priority: "low", created: "Mar 1, 2026" },
];

export default function AdminTicketsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Support Tickets</h1>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full"><thead><tr className="border-b border-border bg-muted/30">
          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">ID</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">User</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Subject</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Priority</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Created</th>
        </tr></thead><tbody>
          {tickets.map((t) => (
            <tr key={t.id} className="border-b border-border last:border-0 hover:bg-muted/20 cursor-pointer">
              <td className="px-6 py-4 text-sm font-medium text-primary">{t.id}</td>
              <td className="px-6 py-4 text-sm">{t.user}</td>
              <td className="px-6 py-4 text-sm">{t.subject}</td>
              <td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.priority === "high" ? "bg-destructive/10 text-destructive" : t.priority === "medium" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"}`}>{t.priority}</span></td>
              <td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.status === "open" ? "bg-primary/10 text-primary" : t.status === "pending" ? "bg-warning/10 text-warning" : t.status === "resolved" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>{t.status}</span></td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{t.created}</td>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}
