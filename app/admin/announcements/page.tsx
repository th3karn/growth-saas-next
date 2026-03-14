"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Megaphone, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const announcements = [
  { id: "1", title: "New Feature: TikTok Scheduling", message: "We've added TikTok scheduling support for Pro and Agency plans.", status: "Active", date: "Mar 12, 2026" },
  { id: "2", title: "Scheduled Maintenance", message: "System maintenance on March 20th from 2-4 AM UTC.", status: "Active", date: "Mar 10, 2026" },
  { id: "3", title: "AI Credits Update", message: "AI credits have been increased for all plans.", status: "Expired", date: "Feb 28, 2026" },
];

export default function AdminAnnouncementsPage() {
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className="font-display text-2xl font-bold">Announcements</h1><Button className="gradient-primary border-0 text-white" onClick={() => setShowNew(!showNew)}><Plus className="mr-2 h-4 w-4" /> New Announcement</Button></div>
      {showNew && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4 max-w-2xl">
          <div className="space-y-2"><Label>Title</Label><Input placeholder="Announcement title" /></div>
          <div className="space-y-2"><Label>Message</Label><Textarea placeholder="Announcement message..." rows={3} /></div>
          <div className="flex gap-2"><Button className="gradient-primary border-0 text-white">Publish</Button><Button variant="outline" onClick={() => setShowNew(false)}>Cancel</Button></div>
        </div>
      )}
      <div className="space-y-4">
        {announcements.map((a) => (
          <div key={a.id} className="rounded-xl border border-border bg-card p-6 shadow-card flex items-start justify-between">
            <div className="flex items-start gap-3"><Megaphone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><div><h3 className="text-sm font-semibold">{a.title}</h3><p className="text-sm text-muted-foreground mt-1">{a.message}</p><div className="flex items-center gap-2 mt-2"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>{a.status}</span><span className="text-xs text-muted-foreground">{a.date}</span></div></div></div>
            <div className="flex gap-1"><Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button><Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
