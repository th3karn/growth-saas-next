"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Building2, 
  Filter, 
  ArrowUpRight, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Clock,
  LayoutGrid,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const demoClients = [
  { 
    id: "1", 
    name: "Acme Corporation", 
    industry: "Consumer Electronics", 
    email: "ops@acme.com", 
    accounts: 8, 
    status: "Active",
    color: "from-blue-500/20 to-indigo-500/20",
    lastActive: "2m ago",
    health: 98
  },
  { 
    id: "2", 
    name: "Digital Spark Agency", 
    industry: "Marketing Services", 
    email: "growth@digispark.io", 
    accounts: 12, 
    status: "Active",
    color: "from-purple-500/20 to-pink-500/20",
    lastActive: "15m ago",
    health: 94
  },
  { 
    id: "3", 
    name: "TechFlow Solutions", 
    industry: "SaaS & Cloud", 
    email: "success@techflow.com", 
    accounts: 5, 
    status: "Onboarding",
    color: "from-emerald-500/20 to-teal-500/20",
    lastActive: "1h ago",
    health: 100
  },
  { 
    id: "4", 
    name: "EcoFriendly Co", 
    industry: "Renewable Energy", 
    email: "hi@ecofriendly.org", 
    accounts: 3, 
    status: "Active",
    color: "from-green-500/20 to-lime-500/20",
    lastActive: "5h ago",
    health: 89
  },
  { 
    id: "5", 
    name: "FoodieHub", 
    industry: "Logistics & Food", 
    email: "partners@foodiehub.com", 
    accounts: 15, 
    status: "Active",
    color: "from-orange-500/20 to-red-500/20",
    lastActive: "10m ago",
    health: 96
  },
  { 
    id: "6", 
    name: "StyleMode Fashion", 
    industry: "E-commerce", 
    email: "pr@stylemode.com", 
    accounts: 4, 
    status: "Paused",
    color: "from-slate-500/20 to-zinc-500/20",
    lastActive: "2d ago",
    health: 0
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  
  const filtered = demoClients.filter((c) => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display tracking-tight">Client Portfolio</h1>
          <p className="text-muted-foreground text-sm font-medium">Manage partnerships, access profiles, and track account health.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button className="rounded-xl h-11 px-6 bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold">
             <Plus className="mr-2 h-4 w-4" />
             Register New Client
           </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-card/30 backdrop-blur-md p-2 rounded-2xl border border-border/50 shadow-sm">
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
          <Input 
            placeholder="Search by name, industry or email..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="pl-11 h-11 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm font-medium placeholder:text-muted-foreground/40" 
          />
        </div>
        <div className="flex items-center gap-2 pr-2">
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-3 text-xs font-bold text-muted-foreground gap-2 hover:bg-secondary/80 rounded-lg">
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl p-2">
                 <DropdownMenuItem className="rounded-lg text-xs font-bold uppercase tracking-wider">All Clients</DropdownMenuItem>
                 <DropdownMenuItem className="rounded-lg text-xs font-bold uppercase tracking-wider text-emerald-500">Active Only</DropdownMenuItem>
                 <DropdownMenuItem className="rounded-lg text-xs font-bold uppercase tracking-wider text-orange-500">Onboarding</DropdownMenuItem>
                 <DropdownMenuItem className="rounded-lg text-xs font-bold uppercase tracking-wider text-red-500">Paused</DropdownMenuItem>
              </DropdownMenuContent>
           </DropdownMenu>
           <div className="h-4 w-[1px] bg-border mx-1" />
           <div className="flex items-center bg-secondary/50 rounded-lg p-1">
              <Button 
                variant={view === "grid" ? "secondary" : "ghost"} 
                size="icon" 
                onClick={() => setView("grid")}
                className="h-7 w-7 rounded-md"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </Button>
              <Button 
                variant={view === "list" ? "secondary" : "ghost"} 
                size="icon" 
                onClick={() => setView("list")}
                className="h-7 w-7 rounded-md"
              >
                <List className="h-3.5 w-3.5" />
              </Button>
           </div>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className={cn(
          "grid gap-6",
          view === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        )}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((client) => (
            <motion.div 
              key={client.id} 
              variants={item}
              layout
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium hover:shadow-elevated transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                   <div className={cn("h-1.5 w-full bg-gradient-to-r", client.color)} />
                   <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner group-hover:scale-105 transition-transform duration-300", client.color)}>
                            <Building2 className="h-6 w-6 text-foreground/80" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-primary transition-colors">{client.name}</h3>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{client.industry}</p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal className="h-4 w-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-xl">
                             <DropdownMenuItem className="rounded-lg font-medium">Edit Profile</DropdownMenuItem>
                             <DropdownMenuItem className="rounded-lg font-medium">Analytics Root</DropdownMenuItem>
                             <DropdownMenuItem className="rounded-lg font-medium text-destructive">Archive Client</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="mt-8 grid grid-cols-2 gap-4">
                         <div className="space-y-1">
                            <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">Growth Health</p>
                            <div className="flex items-center gap-2">
                               <div className="h-1.5 flex-1 bg-secondary rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${client.health}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className={cn("h-full", client.health > 90 ? "bg-emerald-500" : "bg-primary")} 
                                  />
                               </div>
                               <span className="text-[10px] font-bold font-display">{client.health}%</span>
                            </div>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">Active Accounts</p>
                            <div className="flex items-center gap-1.5">
                               <div className="flex -space-x-1.5">
                                  {[1, 2, 3].map((i) => (
                                     <div key={i} className="h-5 w-5 rounded-full border-2 border-card bg-secondary flex items-center justify-center text-[8px] font-bold">P</div>
                                  ))}
                               </div>
                               <span className="text-[11px] font-bold">+{client.accounts - 3}</span>
                            </div>
                         </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <Badge 
                              variant="secondary" 
                              className={cn(
                                "text-[9px] h-5 uppercase tracking-tighter px-2.5 rounded-lg border-none",
                                client.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : 
                                client.status === "Onboarding" ? "bg-orange-500/10 text-orange-500" : 
                                "bg-muted text-muted-foreground"
                              )}
                            >
                              {client.status}
                            </Badge>
                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                               <Clock className="h-3 w-3" />
                               {client.lastActive}
                            </div>
                         </div>
                         <Button variant="ghost" size="sm" className="h-8 px-0 text-muted-foreground hover:text-primary hover:bg-transparent group/btn">
                            <span className="text-xs font-bold mr-1">View Dashboard</span>
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                         </Button>
                      </div>
                   </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="py-20 flex flex-col items-center justify-center border-2 border-dashed rounded-3xl border-border/50 bg-card/20"
         >
            <div className="h-16 w-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
               <Building2 className="h-8 w-8 text-muted-foreground/40" />
            </div>
            <h3 className="text-xl font-bold font-display">No clients found</h3>
            <p className="text-muted-foreground text-sm mt-1">Try adjusting your search or register a new client.</p>
            <Button variant="outline" onClick={() => setSearch("")} className="mt-6 rounded-xl font-bold">Clear Search</Button>
         </motion.div>
      )}
    </div>
  );
}
