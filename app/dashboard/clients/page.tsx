"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, Users, Building2 } from "lucide-react";
import { useState } from "react";

const demoClients = [
  { id: "1", name: "Acme Corporation", industry: "Technology", email: "contact@acme.com", accounts: 4, logo: null, status: "Active" },
  { id: "2", name: "Digital Spark Agency", industry: "Marketing", email: "hello@digispark.io", accounts: 6, logo: null, status: "Active" },
  { id: "3", name: "TechFlow Solutions", industry: "SaaS", email: "team@techflow.com", accounts: 3, logo: null, status: "Active" },
  { id: "4", name: "Green Earth Co", industry: "Environment", email: "info@greenearth.org", accounts: 2, logo: null, status: "Onboarding" },
  { id: "5", name: "FoodieHub", industry: "Food & Beverage", email: "hello@foodiehub.com", accounts: 5, logo: null, status: "Active" },
  { id: "6", name: "StyleMode Fashion", industry: "Fashion", email: "pr@stylemode.com", accounts: 3, logo: null, status: "Paused" },
];

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const filtered = demoClients.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Clients</h1>
          <p className="text-sm text-muted-foreground">{demoClients.length} clients managed</p>
        </div>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> Add Client</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search clients..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((client) => (
          <div key={client.id} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Email</span><span className="font-medium text-xs">{client.email}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Social Accounts</span><span className="font-medium">{client.accounts}</span></div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${client.status === "Active" ? "bg-success/10 text-success" : client.status === "Onboarding" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"}`}>{client.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
