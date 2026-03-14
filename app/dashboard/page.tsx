"use client";

import { motion } from "framer-motion";
import {
  Plus, 
  Search, 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreVertical,
  Brain,
  Sparkles,
  Filter,
  ArrowRight,
  Clock,
  Send,
  Activity,
  RefreshCcw,
  Instagram,
  Linkedin,
  Twitter,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

const stats = [
  { 
    label: "Total Clients", 
    value: "2,451", 
    change: "+12.5%", 
    trend: "up", 
    icon: Users,
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600"
  },
  { 
    label: "Scheduled Posts", 
    value: "158", 
    change: "+8.2%", 
    trend: "up", 
    icon: Send,
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  { 
    label: "Avg Engagement", 
    value: "5.8%", 
    change: "+2.4%", 
    trend: "up", 
    icon: Activity,
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
  { 
    label: "Monthly Growth", 
    value: "24.5%", 
    change: "-1.2%", 
    trend: "down", 
    icon: TrendingUp,
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600"
  },
];

const chartData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 1890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 3490 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header with Glassmorphism */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display tracking-tight lg:text-4xl">Dashboard Overview</h1>
          <p className="text-muted-foreground text-sm font-medium">Welcome back, Captain. Here&apos;s what&apos;s happening with your accounts today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-muted-foreground/20 hover:bg-secondary transition-colors font-bold">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button className="rounded-xl h-11 px-6 bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold">
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium hover:shadow-elevated transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner group-hover:scale-110 transition-transform duration-300", stat.color)}>
                    <stat.icon className={cn("h-6 w-6", stat.iconColor)} />
                  </div>
                  <Badge variant="outline" className={cn(
                    "text-[10px] font-bold border-none",
                    stat.trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-5">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-3xl font-bold font-display mt-1">{stat.value}</h3>
                </div>
                <div className="mt-4 h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                    className={cn("h-full", stat.trend === "up" ? "bg-primary" : "bg-muted")} 
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Area */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Charts Column */}
        <div className="lg:col-span-11 space-y-6">
           <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold font-display tracking-tight uppercase tracking-widest text-muted-foreground/60 text-[10px]">Performance Trajectory</CardTitle>
                  <CardDescription className="text-lg font-bold text-foreground">Active Engagement & Reach</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                   <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-muted-foreground">7D</Button>
                   <Button variant="secondary" size="sm" className="h-8 text-xs font-bold shadow-sm">30D</Button>
                   <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-muted-foreground">90D</Button>
                </div>
              </CardHeader>
              <CardContent className="px-2 pb-6">
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground) / 0.1)" />
                      <XAxis 
                        dataKey="name" 
                        stroke="hsl(var(--muted-foreground))" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                        dy={10}
                        fontWeight={600}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                        fontWeight={600}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          borderRadius: '16px', 
                          border: '1px solid hsl(var(--border))',
                          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                          fontSize: '12px',
                          padding: '12px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
           </Card>

           <div className="grid gap-6 md:grid-cols-2">
              {/* Upcoming Posts */}
              <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium">
                 <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-bold font-display">Queue Pipeline</CardTitle>
                    <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View All</button>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {[
                      { title: "Product Showcase Reel", time: "Today, 4:00 PM", platform: Instagram, color: "text-pink-500" },
                      { title: "Engagement Strategy Q1", time: "Tomorrow, 10:00 AM", platform: Linkedin, color: "text-blue-600" },
                      { title: "Weekly News Thread", time: "Mar 16, 2:00 PM", platform: Twitter, color: "text-sky-400" },
                    ].map((post, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors group">
                         <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center shadow-inner">
                            <post.platform className={cn("h-5 w-5", post.color)} />
                         </div>
                         <div className="flex-1">
                            <p className="text-sm font-bold truncate">{post.title}</p>
                            <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                               <Clock className="h-3 w-3" />
                               {post.time}
                            </p>
                         </div>
                         <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                 </CardContent>
              </Card>

              {/* AI Assistant Widget */}
              <Card className="border-none bg-gradient-to-br from-indigo-500/5 via-primary/5 to-purple-500/5 shadow-premium border border-primary/10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                 </div>
                 <CardHeader>
                    <div className="flex items-center gap-3">
                       <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Brain className="h-5 w-5 text-primary" />
                       </div>
                       <CardTitle className="text-lg font-bold font-display tracking-tight">AI Assistant</CardTitle>
                    </div>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                       Your engagement is up <strong className="text-foreground">15%</strong> this week. I recommend scheduling another <strong className="text-foreground">LinkedIn post</strong> on Wednesday between 2-4 PM for maximum impact.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       <Badge variant="outline" className="bg-background/50 border-primary/10 text-[9px] font-bold py-1">GENERATE CAPTION</Badge>
                       <Badge variant="outline" className="bg-background/50 border-primary/10 text-[9px] font-bold py-1">CONTENT IDEAS</Badge>
                    </div>
                    <Button className="w-full mt-4 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-bold h-10 group-hover:shadow-lg transition-all duration-300">
                       <Sparkles className="mr-2 h-4 w-4" />
                       Activate AI Engine
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-11 space-y-6">
           <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium">
              <CardHeader>
                 <CardTitle className="text-lg font-bold font-display">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="px-1">
                 <div className="space-y-1">
                    {[
                      { user: "Sarah M.", action: "replied to your post", time: "2m ago", icon: MessageSquare, color: "bg-blue-500/10 text-blue-600" },
                      { user: "Acme Corp", action: "approved campaign #8", time: "15m ago", icon: Sparkles, color: "bg-emerald-500/10 text-emerald-600" },
                      { user: "System", action: "monthly report generated", time: "1h ago", icon: Filter, color: "bg-purple-500/10 text-purple-600" },
                      { user: "Team", action: "added 2 new social accounts", time: "4h ago", icon: Users, color: "bg-orange-500/10 text-orange-600" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 hover:bg-secondary/30 rounded-xl transition-colors cursor-pointer group">
                         <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5", activity.color)}>
                            <activity.icon className="h-4 w-4" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold leading-tight truncate">{activity.user} <span className="text-muted-foreground font-medium">{activity.action}</span></p>
                            <p className="text-[10px] text-muted-foreground/60 mt-1 font-medium">{activity.time}</p>
                         </div>
                         <ArrowRight className="h-3 w-3 text-muted-foreground/20 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                 </div>
                 <Button variant="ghost" className="w-full mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary h-8">View Global Logs</Button>
              </CardContent>
           </Card>

           <Card className="border-none bg-gradient-to-tr from-primary/10 to-accent/10 shadow-premium overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
              <CardContent className="p-6 relative">
                 <h4 className="font-display font-bold text-lg mb-1">Growth Plans</h4>
                 <p className="text-xs text-muted-foreground font-medium mb-4 leading-relaxed">Unlock advanced AI features and team collaboration tools.</p>
                 <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background shadow-sm">
                       <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold">Pro Account Active</span>
                 </div>
                 <Button className="w-full rounded-xl bg-primary shadow-lg shadow-primary/20 font-bold hover:scale-[1.02] transition-transform">Manage Subscription</Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
