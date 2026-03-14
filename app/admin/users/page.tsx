"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal, Shield } from "lucide-react";
import { useState } from "react";

const users = [
  { id: "1", name: "John Doe", email: "john@growthdesk.io", role: "Admin", plan: "Pro", status: "Active", joined: "Jan 15, 2026" },
  { id: "2", name: "Sarah Chen", email: "sarah@agency.com", role: "User", plan: "Agency", status: "Active", joined: "Feb 1, 2026" },
  { id: "3", name: "Mike Johnson", email: "mike@studio.io", role: "User", plan: "Starter", status: "Active", joined: "Feb 15, 2026" },
  { id: "4", name: "Emily Rodriguez", email: "emily@creative.com", role: "User", plan: "Pro", status: "Suspended", joined: "Mar 1, 2026" },
  { id: "5", name: "Alex Kim", email: "alex@media.co", role: "Manager", plan: "Pro", status: "Active", joined: "Mar 5, 2026" },
  { id: "6", name: "Lisa Wang", email: "lisa@digital.com", role: "User", plan: "Starter", status: "Active", joined: "Mar 10, 2026" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Manage Users</h1>
        <div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" /></div>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-border bg-muted/30">
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Plan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Joined</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Actions</th>
          </tr></thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">{u.name.split(" ").map(w=>w[0]).join("")}</div><div><p className="text-sm font-medium">{u.name}</p><p className="text-xs text-muted-foreground">{u.email}</p></div></div></td>
                <td className="px-6 py-4"><div className="flex items-center gap-1">{u.role === "Admin" && <Shield className="h-3 w-3 text-primary" />}<span className="text-sm">{u.role}</span></div></td>
                <td className="px-6 py-4"><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{u.plan}</span></td>
                <td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${u.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{u.status}</span></td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{u.joined}</td>
                <td className="px-6 py-4"><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
