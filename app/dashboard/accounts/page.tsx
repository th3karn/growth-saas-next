"use client";

import { Button } from "@/components/ui/button";
import { Globe, Instagram, Facebook, Twitter, Youtube, Linkedin, RefreshCw, Unplug, CheckCircle2, AlertCircle } from "lucide-react";

const platforms = [
  { name: "Instagram", icon: Instagram, connected: true, account: "@growthdesk.agency", followers: "45.2K", expiry: "2026-06-15", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { name: "Facebook", icon: Facebook, connected: true, account: "GrowthDesk Agency", followers: "32.1K", expiry: "2026-05-20", color: "bg-blue-600" },
  { name: "X (Twitter)", icon: Twitter, connected: true, account: "@growthdesk", followers: "28.7K", expiry: "2026-04-10", color: "bg-gray-900" },
  { name: "YouTube", icon: Youtube, connected: false, account: null, followers: null, expiry: null, color: "bg-red-600" },
  { name: "LinkedIn", icon: Linkedin, connected: false, account: null, followers: null, expiry: null, color: "bg-blue-700" },
];

export default function ConnectedAccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Connected Accounts</h1>
          <p className="text-sm text-muted-foreground">Manage your social media account connections.</p>
        </div>
        <Button className="gradient-primary border-0 text-white"><Globe className="mr-2 h-4 w-4" /> Connect Account</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((platform) => (
          <div key={platform.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${platform.color}`}>
                <platform.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{platform.name}</h3>
                {platform.connected ? (
                  <div className="flex items-center gap-1 text-xs text-success"><CheckCircle2 className="h-3 w-3" /> Connected</div>
                ) : (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground"><AlertCircle className="h-3 w-3" /> Not connected</div>
                )}
              </div>
            </div>

            {platform.connected ? (
              <>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Account</span><span className="font-medium">{platform.account}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Followers</span><span className="font-medium">{platform.followers}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Token Expiry</span><span className="font-medium">{platform.expiry}</span></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1"><RefreshCw className="mr-1 h-3 w-3" /> Reconnect</Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive"><Unplug className="h-3 w-3" /></Button>
                </div>
              </>
            ) : (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-4">Connect your {platform.name} account to start managing content.</p>
                <Button className="w-full gradient-primary border-0 text-white" size="sm">Connect {platform.name}</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
