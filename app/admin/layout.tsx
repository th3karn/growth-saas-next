"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Users, CreditCard, Layers, FileText,
  HelpCircle, Settings, DollarSign, Shield, Globe, Megaphone,
  BarChart3, ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const adminNav = [
  { label: "Overview", icon: LayoutDashboard, href: "/admin" },
  { label: "Users", icon: Users, href: "/admin/users" },
  { label: "Plans", icon: CreditCard, href: "/admin/plans" },
  { label: "Services", icon: Layers, href: "/admin/services" },
  { label: "Content", icon: FileText, href: "/admin/content" },
  { label: "Tickets", icon: HelpCircle, href: "/admin/tickets" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
  { label: "Payments", icon: DollarSign, href: "/admin/payments" },
  { label: "Audit Logs", icon: Shield, href: "/admin/audit" },
  { label: "API Logs", icon: Globe, href: "/admin/api-logs" },
  { label: "Announcements", icon: Megaphone, href: "/admin/announcements" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="hidden md:flex w-64 flex-col border-r border-sidebar-border bg-sidebar">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive"><Shield className="h-5 w-5 text-white" /></div>
          <span className="font-display text-lg font-bold text-sidebar-foreground">Admin Panel</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {adminNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground")}>
                <item.icon className="h-4 w-4 flex-shrink-0" /><span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <Button variant="ghost" className="w-full text-sidebar-muted hover:text-sidebar-foreground justify-start" asChild>
            <Link href="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
          </Button>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h2 className="font-display text-base font-semibold">Administration</h2>
          <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-xs font-bold text-white">A</div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
