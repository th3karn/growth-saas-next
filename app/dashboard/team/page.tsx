"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, MoreHorizontal, Shield, User, Settings } from "lucide-react";

const members = [
  { id: "1", name: "John Doe", email: "john@growthdesk.io", role: "Admin", status: "Active", avatar: "JD", joinedAt: "Jan 15, 2026" },
  { id: "2", name: "Sarah Chen", email: "sarah@growthdesk.io", role: "Manager", status: "Active", avatar: "SC", joinedAt: "Feb 1, 2026" },
  { id: "3", name: "Mike Johnson", email: "mike@growthdesk.io", role: "User", status: "Active", avatar: "MJ", joinedAt: "Feb 15, 2026" },
  { id: "4", name: "Emily Rodriguez", email: "emily@agency.com", role: "User", status: "Invited", avatar: "ER", joinedAt: "Mar 10, 2026" },
];

const activityLog = [
  { user: "John Doe", action: "Published a post", target: "Instagram Reel for Acme Corp", time: "2 hours ago" },
  { user: "Sarah Chen", action: "Created report", target: "Monthly Analytics for TechFlow", time: "4 hours ago" },
  { user: "Mike Johnson", action: "Scheduled post", target: "Facebook Carousel for FoodieHub", time: "Yesterday" },
  { user: "John Doe", action: "Added client", target: "StyleMode Fashion", time: "2 days ago" },
];

function RoleIcon({ role }: { role: string }) {
  if (role === "Admin") return <Shield className="h-3 w-3 text-primary" />;
  if (role === "Manager") return <Settings className="h-3 w-3 text-warning" />;
  return <User className="h-3 w-3 text-muted-foreground" />;
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Team Members</h1>
          <p className="text-sm text-muted-foreground">Manage your team and their permissions.</p>
        </div>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> Invite Member</Button>
      </div>

      {/* Members */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-border bg-muted/30">
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Member</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Joined</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-xs font-bold text-white">{m.avatar}</div>
                    <div><p className="text-sm font-medium">{m.name}</p><p className="text-xs text-muted-foreground">{m.email}</p></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1"><RoleIcon role={m.role} /><span className="text-sm">{m.role}</span></div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{m.status}</span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{m.joinedAt}</td>
                <td className="px-6 py-4"><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Activity Log */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <h3 className="font-display text-base font-semibold mb-4">Activity Log</h3>
        <div className="space-y-4">
          {activityLog.map((log, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div><p className="text-sm"><span className="font-medium">{log.user}</span> {log.action}: <span className="text-muted-foreground">{log.target}</span></p><p className="text-xs text-muted-foreground">{log.time}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
