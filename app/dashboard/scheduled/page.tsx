"use client";

import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, AlertCircle, RefreshCw, Trash2 } from "lucide-react";

const scheduledPosts = [
  { id: "1", title: "Summer Campaign Launch", platform: "Instagram", client: "Acme Corp", scheduledAt: "Mar 15, 2026, 10:00 AM", status: "scheduled", retries: 0 },
  { id: "2", title: "Product Feature Thread", platform: "X", client: "TechFlow", scheduledAt: "Mar 16, 2026, 2:00 PM", status: "scheduled", retries: 0 },
  { id: "3", title: "Behind the Scenes Video", platform: "YouTube", client: "Digital Spark", scheduledAt: "Mar 17, 2026, 11:00 AM", status: "scheduled", retries: 0 },
  { id: "4", title: "Weekly Tips Carousel", platform: "Instagram", client: "FoodieHub", scheduledAt: "Mar 14, 2026, 9:00 AM", status: "published", retries: 0 },
  { id: "5", title: "Company Culture Post", platform: "LinkedIn", client: "Green Earth", scheduledAt: "Mar 13, 2026, 1:00 PM", status: "failed", retries: 2 },
  { id: "6", title: "Flash Sale Announcement", platform: "Facebook", client: "StyleMode", scheduledAt: "Mar 18, 2026, 6:00 PM", status: "scheduled", retries: 0 },
];

function StatusBadge({ status }: { status: string }) {
  const config = {
    scheduled: { icon: Clock, label: "Scheduled", class: "bg-primary/10 text-primary" },
    published: { icon: CheckCircle2, label: "Published", class: "bg-success/10 text-success" },
    failed: { icon: AlertCircle, label: "Failed", class: "bg-destructive/10 text-destructive" },
  }[status] || { icon: Clock, label: status, class: "bg-muted text-muted-foreground" };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.class}`}>
      <config.icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}

export default function ScheduledPostsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Scheduled Posts</h1>
        <p className="text-sm text-muted-foreground">Manage and monitor your scheduled content queue.</p>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Post</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Platform</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Scheduled</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Actions</th>
            </tr></thead>
            <tbody>
              {scheduledPosts.map((post) => (
                <tr key={post.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">{post.title}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{post.platform}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{post.client}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{post.scheduledAt}</td>
                  <td className="px-6 py-4"><StatusBadge status={post.status} /></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {post.status === "failed" && <Button variant="ghost" size="icon" className="h-8 w-8"><RefreshCw className="h-3 w-3" /></Button>}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive"><Trash2 className="h-3 w-3" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
