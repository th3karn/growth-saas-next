"use client";
import { DollarSign, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const payments = [
  { id: "PAY-001", user: "John Doe", amount: "$79.00", plan: "Pro", status: "Succeeded", date: "Mar 14, 2026" },
  { id: "PAY-002", user: "Sarah Chen", amount: "$199.00", plan: "Agency", status: "Succeeded", date: "Mar 13, 2026" },
  { id: "PAY-003", user: "Mike Johnson", amount: "$29.00", plan: "Starter", status: "Failed", date: "Mar 12, 2026" },
  { id: "PAY-004", user: "Emily Rodriguez", amount: "$79.00", plan: "Pro", status: "Succeeded", date: "Mar 11, 2026" },
  { id: "PAY-005", user: "Alex Kim", amount: "$79.00", plan: "Pro", status: "Refunded", date: "Mar 10, 2026" },
];

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className="font-display text-2xl font-bold">Payment History</h1><Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export CSV</Button></div>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full"><thead><tr className="border-b border-border bg-muted/30">
          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">ID</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">User</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Amount</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Plan</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
        </tr></thead><tbody>
          {payments.map((p) => (
            <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20">
              <td className="px-6 py-4 text-sm font-medium">{p.id}</td><td className="px-6 py-4 text-sm">{p.user}</td><td className="px-6 py-4 text-sm font-medium">{p.amount}</td><td className="px-6 py-4 text-sm">{p.plan}</td>
              <td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.status === "Succeeded" ? "bg-success/10 text-success" : p.status === "Failed" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>{p.status}</span></td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{p.date}</td>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}
