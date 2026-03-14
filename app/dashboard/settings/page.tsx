"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building2, Bell, Key, Globe, Save } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and workspace preferences.</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="profile" className="flex items-center gap-1"><User className="h-3 w-3" /> Profile</TabsTrigger>
          <TabsTrigger value="company" className="flex items-center gap-1"><Building2 className="h-3 w-3" /> Company</TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-1"><Bell className="h-3 w-3" /> Notifications</TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-1"><Key className="h-3 w-3" /> API Keys</TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-1"><Globe className="h-3 w-3" /> Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6 max-w-2xl">
            <h3 className="font-display text-base font-semibold">Profile Settings</h3>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-xl font-bold text-white">JD</div>
              <Button variant="outline" size="sm">Change Photo</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="John Doe" /></div>
              <div className="space-y-2"><Label>Email</Label><Input defaultValue="john@growthdesk.io" type="email" /></div>
            </div>
            <div className="space-y-2"><Label>Bio</Label><Textarea defaultValue="Agency owner and social media strategist." rows={3} /></div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Select defaultValue="america/new_york">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="america/new_york">Eastern Time (ET)</SelectItem>
                  <SelectItem value="america/chicago">Central Time (CT)</SelectItem>
                  <SelectItem value="america/los_angeles">Pacific Time (PT)</SelectItem>
                  <SelectItem value="europe/london">GMT</SelectItem>
                  <SelectItem value="asia/kolkata">India (IST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="gradient-primary border-0 text-white" onClick={() => toast.success("Profile updated!")}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="company" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6 max-w-2xl">
            <h3 className="font-display text-base font-semibold">Company Settings</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Label>Company Name</Label><Input defaultValue="GrowthDesk Agency" /></div>
              <div className="space-y-2"><Label>Website</Label><Input defaultValue="https://growthdesk.io" /></div>
            </div>
            <div className="space-y-2"><Label>Company Logo</Label>
              <div className="flex items-center gap-4"><div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center"><Building2 className="h-6 w-6 text-muted-foreground" /></div><Button variant="outline" size="sm">Upload Logo</Button></div>
            </div>
            <Button className="gradient-primary border-0 text-white" onClick={() => toast.success("Company settings updated!")}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6 max-w-2xl">
            <h3 className="font-display text-base font-semibold">Notification Preferences</h3>
            {[
              { label: "Email notifications for new comments", description: "Get notified when someone comments on your posts", defaultChecked: true },
              { label: "Push notifications for scheduled posts", description: "Get reminded when a post is about to be published", defaultChecked: true },
              { label: "Weekly analytics summary", description: "Receive a weekly email with your key metrics", defaultChecked: false },
              { label: "Team activity alerts", description: "Get notified when team members make changes", defaultChecked: true },
              { label: "Marketing emails", description: "Receive tips, feature updates, and product news", defaultChecked: false },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between">
                <div><p className="text-sm font-medium">{pref.label}</p><p className="text-xs text-muted-foreground">{pref.description}</p></div>
                <Switch defaultChecked={pref.defaultChecked} />
              </div>
            ))}
            <Button className="gradient-primary border-0 text-white" onClick={() => toast.success("Preferences saved!")}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="api" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6 max-w-2xl">
            <h3 className="font-display text-base font-semibold">API Keys</h3>
            <p className="text-sm text-muted-foreground">Use API keys to integrate GrowthDesk with your existing tools and workflows.</p>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div><p className="text-sm font-medium">Production Key</p><p className="text-xs text-muted-foreground font-mono">gd_live_••••••••••••••••••••</p></div>
                <div className="flex gap-2"><Button variant="outline" size="sm">Reveal</Button><Button variant="outline" size="sm">Regenerate</Button></div>
              </div>
            </div>
            <Button variant="outline"><Key className="mr-2 h-4 w-4" /> Generate New Key</Button>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6 max-w-2xl">
            <h3 className="font-display text-base font-semibold">Connected Integrations</h3>
            {[
              { name: "Slack", description: "Get notifications in Slack", connected: false },
              { name: "Zapier", description: "Automate workflows with Zapier", connected: false },
              { name: "Google Analytics", description: "Import website analytics data", connected: false },
            ].map((int) => (
              <div key={int.name} className="flex items-center justify-between rounded-lg border border-border p-4">
                <div><p className="text-sm font-medium">{int.name}</p><p className="text-xs text-muted-foreground">{int.description}</p></div>
                <Button variant="outline" size="sm">{int.connected ? "Disconnect" : "Connect"}</Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
