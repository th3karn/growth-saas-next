"use client";
const apiLogs = [
  { method: "POST", path: "/api/posts/schedule", status: 200, duration: "120ms", time: "Mar 14, 2026, 3:45 PM" },
  { method: "GET", path: "/api/analytics/followers", status: 200, duration: "85ms", time: "Mar 14, 2026, 3:30 PM" },
  { method: "POST", path: "/api/auth/login", status: 401, duration: "45ms", time: "Mar 14, 2026, 3:15 PM" },
  { method: "PUT", path: "/api/clients/cli_012", status: 200, duration: "90ms", time: "Mar 14, 2026, 2:50 PM" },
  { method: "POST", path: "/api/webhooks/stripe", status: 200, duration: "200ms", time: "Mar 14, 2026, 12:00 AM" },
  { method: "DELETE", path: "/api/posts/post_789", status: 404, duration: "30ms", time: "Mar 13, 2026, 11:30 PM" },
];

export default function AdminApiLogsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">API / Webhook Logs</h1>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full"><thead><tr className="border-b border-border bg-muted/30">
          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Method</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Path</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Duration</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Time</th>
        </tr></thead><tbody>
          {apiLogs.map((l, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20">
              <td className="px-6 py-4"><span className={`text-xs font-bold px-2 py-0.5 rounded ${l.method === "GET" ? "bg-primary/10 text-primary" : l.method === "POST" ? "bg-success/10 text-success" : l.method === "PUT" ? "bg-warning/10 text-warning" : "bg-destructive/10 text-destructive"}`}>{l.method}</span></td>
              <td className="px-6 py-4 text-sm font-mono">{l.path}</td>
              <td className="px-6 py-4"><span className={`text-xs font-medium ${l.status < 400 ? "text-success" : "text-destructive"}`}>{l.status}</span></td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{l.duration}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{l.time}</td>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}
