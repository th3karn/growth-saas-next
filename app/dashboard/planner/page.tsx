"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

const demoScheduled = [
  { id: 1, title: "Product Launch Reel", platform: Instagram, time: "10:30 AM", status: "Scheduled", day: "Mon", color: "text-pink-500" },
  { id: 2, title: "Industry Insights Thread", platform: Twitter, time: "02:15 PM", status: "In Review", day: "Wed", color: "text-sky-400" },
  { id: 3, title: "Client Success Story", platform: Linkedin, time: "09:00 AM", status: "Scheduled", day: "Fri", color: "text-blue-600" },
  { id: 4, title: "Weekly Tips Carousel", platform: Facebook, status: "Published", day: "Tue", color: "text-blue-700" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export default function PlannerPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display tracking-tight">Content Planner</h1>
          <p className="text-muted-foreground text-sm font-medium">Orchestrate and visualize your cross-platform content strategy.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex bg-secondary/50 rounded-xl p-1 border">
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-xs font-bold">Week</Button>
              <Button variant="secondary" size="sm" className="h-8 rounded-lg text-xs font-bold shadow-sm">Month</Button>
           </div>
           <Button className="rounded-xl h-11 px-6 bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold">
             <Plus className="mr-2 h-4 w-4" />
             Create Post
           </Button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-card/30 backdrop-blur-md p-4 rounded-2xl border border-border/50">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted-foreground/20">
                  <ChevronLeft className="h-4 w-4" />
               </Button>
               <h2 className="text-lg font-bold font-display min-w-[140px] text-center">March 2026</h2>
               <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-muted-foreground/20">
                  <ChevronRight className="h-4 w-4" />
               </Button>
            </div>
            <Button variant="ghost" className="text-xs font-bold text-primary hover:bg-primary/5 uppercase tracking-wider">Today</Button>
         </div>
         <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-9 rounded-xl gap-2 font-bold text-xs border-muted-foreground/20">
               <Filter className="h-3.5 w-3.5" />
               All Platforms
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
         {days.map((day) => (
            <div key={day} className="text-center py-2">
               <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{day}</p>
            </div>
         ))}
         
         {/* Calendar Grid Representation */}
         {Array.from({ length: 35 }).map((_, i) => {
            const dayNum = (i % 31) + 1;
            const isToday = dayNum === 14;
            const hasPost = dayNum === 14 || dayNum === 16 || dayNum === 18;
            
            return (
               <div key={i} className={cn(
                  "min-h-[140px] rounded-2xl border bg-card/20 p-3 transition-all group hover:bg-card/40 hover:border-primary/20 cursor-pointer",
                  isToday ? "border-primary/40 ring-1 ring-primary/20 bg-primary/5" : "border-border/40"
               )}>
                  <div className="flex items-center justify-between mb-3">
                     <span className={cn(
                        "text-xs font-bold",
                        isToday ? "h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center -ml-1 -mt-1" : "text-muted-foreground/60"
                     )}>{dayNum}</span>
                     {isToday && <span className="text-[8px] font-extrabold text-primary uppercase tracking-tighter">Today</span>}
                  </div>
                  
                  {hasPost && (
                     <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/10 group-hover:shadow-sm transition-all overflow-hidden">
                           <p className="text-[9px] font-bold text-pink-600 truncate">SMM Campaign #1</p>
                           <div className="flex items-center justify-between mt-1">
                              <Instagram className="h-2.5 w-2.5 text-pink-500" />
                              <span className="text-[8px] font-bold text-pink-500/60">10am</span>
                           </div>
                        </div>
                        {dayNum === 18 && (
                           <div className="p-2 rounded-lg bg-sky-400/10 border border-sky-400/10 overflow-hidden">
                              <p className="text-[9px] font-bold text-sky-600 truncate">Weekly Thread</p>
                           </div>
                        )}
                     </div>
                  )}
               </div>
            );
         })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
         <Card className="lg:col-span-2 border-none bg-card/40 backdrop-blur-md shadow-premium">
            <CardHeader className="flex flex-row items-center justify-between">
               <CardTitle className="text-lg font-bold font-display tracking-tight">Upcoming Queue</CardTitle>
               <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-bold">12 Total</Badge>
            </CardHeader>
            <CardContent>
               <motion.div 
                 variants={container}
                 initial="hidden"
                 animate="show"
                 className="space-y-4"
               >
                  {demoScheduled.map((post) => (
                     <motion.div 
                       key={post.id} 
                       variants={item}
                       className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all group"
                     >
                        <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                           <post.platform className={cn("h-5 w-5", post.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-bold truncate">{post.title}</p>
                              <Badge variant="outline" className={cn(
                                "text-[8px] h-4 uppercase font-bold border-none",
                                post.status === "Published" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                              )}>
                                 {post.status}
                              </Badge>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground">
                                 <CalendarIcon className="h-3 w-3" />
                                 {post.day}, March {post.id + 13}
                              </span>
                              <span className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground">
                                 <Clock className="h-3 w-3" />
                                 {post.time}
                              </span>
                           </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full">
                           <MoreVertical className="h-4 w-4" />
                        </Button>
                     </motion.div>
                  ))}
               </motion.div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-none bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 shadow-lg relative overflow-hidden group">
               <CardHeader>
                  <CardTitle className="text-lg font-bold font-display flex items-center gap-2">
                     <AlertCircle className="h-5 w-5 text-primary" />
                     Strategy Health
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                     Your content mix for next week is <span className="text-primary font-bold">85% complete</span>. We suggest adding more <span className="font-bold">Video content</span> to balance your feed.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                     <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-primary" />
                     </div>
                     <span className="text-xs font-bold font-display">85%</span>
                  </div>
               </CardContent>
            </Card>

            <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium">
               <CardHeader>
                  <CardTitle className="text-lg font-bold font-display">Approval Workflow</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="space-y-4">
                     {[
                        { title: "March Social Report", client: "Acme Corp", due: "2h left", priority: "High" },
                        { title: "Logo Animation", client: "TechNova", due: "Tomorrow", priority: "Medium" },
                     ].map((task, i) => (
                        <div key={i} className="flex items-start justify-between p-3 rounded-xl border border-border/50 bg-secondary/10">
                           <div className="flex items-start gap-3">
                              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                                 <CheckCircle2 className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                 <p className="text-xs font-bold leading-none">{task.title}</p>
                                 <p className="text-[10px] text-muted-foreground mt-1">{task.client} • {task.due}</p>
                              </div>
                           </div>
                           <Badge variant="outline" className="text-[8px] h-4 border-muted-foreground/20">{task.priority}</Badge>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
