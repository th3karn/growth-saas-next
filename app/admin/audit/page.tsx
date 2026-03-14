"use client";
const logs = [
  { id: "1", user: "John Doe", action: "Updated user role", entity: "User", entityId: "user_123", ip: "192.168.1.1", time: "Mar 14, 2026, 3:45 PM" },
  { id: "2", user: "System", action: "Subscription renewed", entity: "Subscription", entityId: "sub_456", ip: "-", time: "Mar 14, 2026, 12:00 AM" },
  { id: "3", user: "Sarah Chen", action: "Created support ticket", entity: "SupportTicket", entityId: "tkt_789", ip: "10.0.0.5", time: "Mar 13, 2026, 2:30 PM" },
  { id: "4", user: "John Doe", action: "Deleted client", entity: "Client", entityId: "cli_012", ip: "192.168.1.1", time: "Mar 12, 2026, 11:15 AM" },
  { id: "5", user: "System", action: "Scheduled post published", entity: "Post", entityId: "post_345", ip: "-", time: "Mar 12, 2026, 10:00 AM" },
];

export default function AdminAuditPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Audit Logs</h1>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full"><thead><tr className="border-b border-border bg-muted/30">
          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">User</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Action</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Entity</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">IP</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Time</th>
        </tr></thead><tbody>
          {logs.map((l) => (
            <tr key={l.id} className="border-b border-border last:border-0 hover:bg-muted/20">
              <td className="px-6 py-4 text-sm font-medium">{l.user}</td><td className="px-6 py-4 text-sm">{l.action}</td><td className="px-6 py-4 text-sm text-muted-foreground">{l.entity} ({l.entityId})</td><td className="px-6 py-4 text-sm text-muted-foreground font-mono">{l.ip}</td><td className="px-6 py-4 text-sm text-muted-foreground">{l.time}</td>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}
