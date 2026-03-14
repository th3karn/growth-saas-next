"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Share2, 
  ArrowUpRight, 
  Download,
  Calendar,
  Sparkles,
  ArrowDownRight,
  Filter,
  MoreVertical,
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const followerData = [
  { month: "Aug", instagram: 32000, linkedin: 24000, twitter: 18000 },
  { month: "Sep", instagram: 34500, linkedin: 25200, twitter: 19100 },
  { month: "Oct", instagram: 37200, linkedin: 26800, twitter: 20500 },
  { month: "Nov", instagram: 39800, linkedin: 28300, twitter: 21800 },
  { month: "Dec", instagram: 41500, linkedin: 29500, twitter: 23200 },
  { month: "Jan", instagram: 43200, linkedin: 30800, twitter: 24600 },
  { month: "Feb", instagram: 45200, linkedin: 32100, twitter: 26100 },
];

const engagementData = [
  { day: "Mon", rate: 4.2 },
  { day: "Tue", rate: 3.8 },
  { day: "Wed", rate: 5.1 },
  { day: "Thu", rate: 4.5 },
  { day: "Fri", rate: 6.2 },
  { day: "Sat", rate: 3.5 },
  { day: "Sun", rate: 2.9 },
];

const topPosts = [
  { id: 1, title: "10 Growth Hacks for 2026", platform: "Instagram", impressions: "24.5K", engagement: "8.2%", reach: "18.3K", color: "from-pink-500/20 to-rose-500/20" },
  { id: 2, title: "Client Success Story: TechNova", platform: "LinkedIn", impressions: "18.2K", engagement: "6.8%", reach: "14.1K", color: "from-blue-500/20 to-indigo-500/20" },
  { id: 3, title: "Q1 Strategy Webinar Recap", platform: "YouTube", impressions: "15.8K", engagement: "5.4%", reach: "12.6K", color: "from-red-500/20 to-orange-500/20" },
  { id: 4, title: "Engineering Blog: Scalability", platform: "X", impressions: "12.3K", engagement: "4.9%", reach: "9.8K", color: "from-gray-500/20 to-slate-500/20" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display tracking-tight">Performance Analytics</h1>
          <p className="text-muted-foreground text-sm font-medium">Deep dive into engagement metrics and audience growth.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="rounded-xl h-11 border-muted-foreground/20 hover:bg-secondary transition-colors font-bold text-xs uppercase tracking-wider">
             <Download className="mr-2 h-4 w-4" />
             Export PDF
           </Button>
           <Button className="rounded-xl h-11 px-6 bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold">
             Custom Report
           </Button>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { label: "Impressions", value: "834.2K", change: "+15.4%", icon: Eye, trend: "up" },
          { label: "Engagement", value: "45.8K", change: "+8.7%", icon: TrendingUp, trend: "up" },
          { label: "Total Reach", value: "612.3K", change: "+12.1%", icon: BarChart3, trend: "up" },
          { label: "Content Shares", value: "3.2K", change: "-2.3%", icon: Share2, trend: "down" },
        ].map((stat, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                 <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                       <stat.icon className="h-5 w-5 text-muted-foreground" />
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-none bg-card/40 backdrop-blur-md shadow-premium overflow-hidden">
           <CardHeader className="flex flex-row items-center justify-between pb-8">
              <div className="space-y-1">
                 <CardTitle className="text-xl font-bold font-display tracking-tight">Growth Trajectory</CardTitle>
                 <CardDescription className="text-xs">Follower accumulation across primary channels.</CardDescription>
              </div>
           </CardHeader>
           <CardContent className="px-2">
              <div className="h-[350px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={followerData}>
                       <defs>
                          <linearGradient id="colorInsta" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#E1306C" stopOpacity={0.15}/>
                             <stop offset="95%" stopColor="#E1306C" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorLink" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#0077B5" stopOpacity={0.15}/>
                             <stop offset="95%" stopColor="#0077B5" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground) / 0.1)" />
                       <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} dy={10} fontWeight={600} />
                       <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} fontWeight={600} />
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
                       <Area type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2.5} fillOpacity={1} fill="url(#colorInsta)" />
                       <Area type="monotone" dataKey="linkedin" stroke="#0077B5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorLink)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-none bg-card/40 backdrop-blur-md shadow-premium">
           <CardHeader>
              <CardTitle className="text-xl font-bold font-display tracking-tight">Daily Engagement Rate</CardTitle>
              <CardDescription className="text-xs">Average engagement percentage by day of week.</CardDescription>
           </CardHeader>
           <CardContent className="px-2">
              <div className="h-[350px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={engagementData}>
                       <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} dy={10} fontWeight={600} />
                       <Tooltip 
                         cursor={{ fill: 'hsl(var(--secondary) / 0.4)', radius: 8 }}
                         contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px' }}
                       />
                       <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
                          {engagementData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.rate > 5 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)"} />
                          ))}
                       </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
         <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium">
            <CardHeader className="flex flex-row items-center justify-between">
               <div>
                  <CardTitle className="text-lg font-bold font-display">Best Posting Windows</CardTitle>
                  <CardDescription className="text-xs">Proprietary AI-identified optimal times.</CardDescription>
               </div>
               <Sparkles className="h-5 w-5 text-accent" />
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {[
                     { day: "Wednesday", time: "2:00 PM - 4:00 PM", strength: "Peak", score: 98 },
                     { day: "Friday", time: "10:00 AM - 12:00 PM", strength: "High", score: 85 },
                     { day: "Monday", time: "11:00 AM - 1:00 PM", strength: "Medium", score: 72 },
                  ].map((window, i) => (
                     <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors">
                        <div className="flex items-center gap-4">
                           <div className="h-2 w-2 rounded-full bg-primary" />
                           <div>
                              <p className="text-sm font-bold">{window.day}</p>
                              <p className="text-xs text-muted-foreground font-medium">{window.time}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <Badge variant="outline" className={cn(
                             "text-[9px] uppercase font-bold border-none",
                             window.strength === "Peak" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                           )}>
                              {window.strength}
                           </Badge>
                           <p className="text-[10px] font-bold text-muted-foreground/60 mt-1">Score: {window.score}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium">
            <CardHeader>
               <CardTitle className="text-lg font-bold font-display">Top Performing Content</CardTitle>
               <CardDescription className="text-xs">Highest engagement posts this period.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {topPosts.map((post) => (
                     <div key={post.id} className="flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-4">
                           <div className={cn("h-12 w-12 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0", post.color)}>
                              <ArrowUpRight className="h-5 w-5 text-foreground/40 group-hover:scale-110 transition-transform" />
                           </div>
                           <div className="min-w-0">
                              <p className="text-sm font-bold truncate pr-4">{post.title}</p>
                              <div className="flex items-center gap-2 mt-1">
                                 <span className="text-[10px] font-bold text-muted-foreground uppercase">{post.platform}</span>
                                 <span className="h-1 w-1 rounded-full bg-border" />
                                 <span className="text-[10px] font-bold text-primary">{post.engagement} Engagement</span>
                              </div>
                           </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                           <MoreVertical className="h-4 w-4" />
                        </Button>
                     </div>
                  ))}
               </div>
               <Button variant="link" className="w-full mt-6 text-xs text-muted-foreground font-bold hover:text-primary">
                  View Detailed Content Analysis
               </Button>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
