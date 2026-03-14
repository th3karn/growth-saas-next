"use client";

import { Bell, CheckCircle2, AlertCircle, Info, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const notifications = [
  { id: "1", title: "Post published successfully", message: "Your Instagram reel for Acme Corp has been published.", type: "success", time: "5 min ago", read: false },
  { id: "2", title: "New team member joined", message: "Emily Rodriguez has accepted your invitation to join the workspace.", type: "info", time: "1 hour ago", read: false },
  { id: "3", title: "Scheduled post failed", message: "Failed to publish X thread for TechFlow. Token expired. Please reconnect.", type: "error", time: "2 hours ago", read: false },
  { id: "4", title: "New support reply", message: "GrowthDesk support has replied to your ticket TKT-001.", type: "info", time: "4 hours ago", read: true },
  { id: "5", title: "Monthly report ready", message: "The February analytics report for Digital Spark is ready to download.", type: "success", time: "6 hours ago", read: true },
  { id: "6", title: "Subscription renewed", message: "Your Pro plan subscription has been renewed for $79.00.", type: "info", time: "1 day ago", read: true },
  { id: "7", title: "Client added", message: "StyleMode Fashion has been successfully added as a new client.", type: "success", time: "2 days ago", read: true },
  { id: "8", title: "Token expiring soon", message: "Your Facebook access token for Digital Spark expires in 3 days.", type: "warning", time: "2 days ago", read: true },
];

function NotifIcon({ type }: { type: string }) {
  if (type === "success") return <CheckCircle2 className="h-5 w-5 text-success" />;
  if (type === "error") return <AlertCircle className="h-5 w-5 text-destructive" />;
  if (type === "warning") return <AlertCircle className="h-5 w-5 text-warning" />;
  return <Info className="h-5 w-5 text-primary" />;
}

export default function NotificationsPage() {
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-muted-foreground">{unread} unread notifications</p>
        </div>
        <Button variant="outline"><CheckCheck className="mr-2 h-4 w-4" /> Mark All as Read</Button>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        {notifications.map((notif) => (
          <div key={notif.id} className={cn("flex items-start gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer", !notif.read && "bg-primary/5")}>
            <div className="mt-0.5 flex-shrink-0"><NotifIcon type={notif.type} /></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={cn("text-sm", !notif.read ? "font-semibold" : "font-medium")}>{notif.title}</p>
                {!notif.read && <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{notif.message}</p>
              <p className="mt-1 text-xs text-muted-foreground">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
