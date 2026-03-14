"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Site Settings</h1>
      <div className="max-w-2xl space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h3 className="font-display text-base font-semibold">General</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label>Site Name</Label><Input defaultValue="GrowthDesk" /></div>
            <div className="space-y-2"><Label>Support Email</Label><Input defaultValue="support@growthdesk.io" /></div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h3 className="font-display text-base font-semibold">Features</h3>
          {[
            { label: "Registration open", on: true },
            { label: "Maintenance mode", on: false },
            { label: "AI features enabled", on: true },
            { label: "Public API access", on: false },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-between"><span className="text-sm">{f.label}</span><Switch defaultChecked={f.on} /></div>
          ))}
        </div>
        <Button className="gradient-primary border-0 text-white" onClick={() => toast.success("Settings saved!")}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
      </div>
    </div>
  );
}
