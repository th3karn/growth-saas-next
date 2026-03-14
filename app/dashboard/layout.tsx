"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Send,
  Clock,
  BarChart3,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  HelpCircle,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/dashboard/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Clients", href: "/dashboard/clients" },
  { icon: Calendar, label: "Content Planner", href: "/dashboard/planner" },
  { icon: Clock, label: "Scheduled Posts", href: "/dashboard/scheduled" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
  { icon: MessageSquare, label: "Engagement Inbox", href: "/dashboard/engagement" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
  { icon: Users, label: "Team", href: "/dashboard/team" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Support", href: "/dashboard/support" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 256 }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r bg-card/30 backdrop-blur-xl transition-all duration-300 ease-in-out hidden md:flex flex-col",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              <BarChart3 className="h-5 w-5" />
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
              >
                GrowthDesk
              </motion.span>
            )}
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4 scrollbar-none">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 relative",
                    isActive
                      ? "bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(var(--primary),0.1)]"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 transition-transform duration-200 group-hover:scale-110", isActive && "text-primary")} />
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="truncate"
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {isActive && !isCollapsed && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute left-0 w-1 h-5 bg-primary rounded-full"
                    />
                  )}
                  {!isCollapsed && item.label === "Engagement Inbox" && (
                     <Badge variant="secondary" className="ml-auto bg-primary/20 text-primary border-none text-[10px] h-4 px-1.5">3</Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4 space-y-2 relative">
          {!isCollapsed && (
            <div className="mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 p-4 border border-primary/10">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Trial Plan</p>
              <p className="text-xs text-muted-foreground mb-3">12 days left in your trial.</p>
              <Button size="sm" className="w-full h-8 text-xs font-semibold bg-primary hover:bg-primary/90">
                Upgrade Now
              </Button>
            </div>
          )}
          
          <div className={cn("flex items-center gap-3 rounded-xl px-3 py-2 transition-colors", isCollapsed ? "justify-center" : "bg-secondary/40")}>
            <Avatar className="h-8 w-8 border-2 border-background shadow-sm">
              <AvatarImage src="/avatars/user.jpg" alt="User" />
              <AvatarFallback className="bg-primary/10 text-primary text-xs">SK</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 overflow-hidden font-display">
                <p className="truncate text-sm font-semibold">Sagar Karn</p>
                <p className="truncate text-[10px] text-muted-foreground">Admin Pro</p>
              </div>
            )}
            {!isCollapsed && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden h-7 w-7 items-center justify-center rounded-full border bg-background shadow-premium md:flex hover:bg-secondary absolute -right-3.5 top-0"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out min-h-screen",
        "md:pl-20 px-4 pt-16 md:pt-0",
        !isCollapsed && "md:pl-64"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/60 backdrop-blur-xl px-4 md:px-8">
           <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden lg:flex gap-2 rounded-xl text-xs border-muted-foreground/20 hover:bg-secondary">
                <Plus className="h-4 w-4" />
                <span>New Client</span>
              </Button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Universal Search..." 
                  className="h-9 w-64 rounded-xl border bg-secondary/50 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
                />
              </div>
           </div>

           <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-secondary">
               <Bell className="h-5 w-5 text-muted-foreground" />
               <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
             </Button>
             <div className="h-4 w-[1px] bg-border mx-2" />
             <ThemeToggle />
             <Button className="md:hidden" variant="ghost" size="icon">
                <LayoutDashboard className="h-6 w-6" />
             </Button>
           </div>
        </header>

        <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 animate-fade-in font-body">
          {children}
        </div>
      </main>
    </div>
  );
}
