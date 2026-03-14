"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Search, 
  ThumbsUp, 
  ThumbsDown, 
  Minus, 
  Send, 
  User, 
  Filter, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Brain,
  Hash,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  CheckCircle2,
  Clock,
  UserPlus,
  Lock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const conversations = [
  { id: "1", author: "Sarah Mitchell", platform: "Instagram", platformIcon: Instagram, message: "Love this post! Can you share more tips like this?", sentiment: "positive", priority: "normal", status: "unread", time: "2h ago", client: "Acme Corp", color: "text-pink-500" },
  { id: "2", author: "John Davidson", platform: "Facebook", platformIcon: Facebook, message: "Is this product still available? Interested in bulk orders.", sentiment: "neutral", priority: "high", status: "unread", time: "3h ago", client: "TechFlow", color: "text-blue-700" },
  { id: "3", author: "Mike Ross", platform: "X", platformIcon: Twitter, message: "Had a terrible experience with customer service. Very disappointed.", sentiment: "negative", priority: "urgent", status: "unread", time: "4h ago", client: "Acme Corp", color: "text-sky-400" },
  { id: "4", author: "Emma Lawrence", platform: "Instagram", platformIcon: Instagram, message: "Your content is always so inspiring! Keep it up 🔥", sentiment: "positive", priority: "normal", status: "read", time: "5h ago", client: "FoodieHub", color: "text-pink-500" },
  { id: "5", author: "Alex Knight", platform: "YouTube", platformIcon: MessageSquare, message: "Can you make a tutorial on this topic? Would be really helpful.", sentiment: "neutral", priority: "normal", status: "read", time: "6h ago", client: "Digital Spark", color: "text-red-600" },
  { id: "6", author: "Lisa Wang", platform: "LinkedIn", platformIcon: Linkedin, message: "Great insights! We should connect and discuss collaboration.", sentiment: "positive", priority: "high", status: "unread", time: "8h ago", client: "TechFlow", color: "text-blue-600" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export default function EngagementPage() {
  const [selectedId, setSelectedId] = useState<string>("1");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const selectedConv = conversations.find(c => c.id === selectedId) || conversations[0];
  const filtered = conversations.filter(c => 
    c.message.toLowerCase().includes(search.toLowerCase()) || 
    c.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] space-y-4">
      <div className="flex items-center justify-between pb-2">
         <div className="space-y-1">
            <h1 className="text-3xl font-bold font-display tracking-tight">Unified Inbox</h1>
            <p className="text-muted-foreground text-sm font-medium">Streamline community management and cross-platform interactions.</p>
         </div>
         <div className="flex items-center gap-3">
            <Badge variant="outline" className="h-7 px-3 border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-bold text-[10px] uppercase">
               All Systems Operational
            </Badge>
         </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Sidebar: Message List */}
        <div className="w-[380px] flex flex-col bg-card/40 backdrop-blur-md rounded-3xl border border-border/50 shadow-premium overflow-hidden">
           <div className="p-5 border-b border-border/50 space-y-4">
              <div className="relative group">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                 <Input 
                   placeholder="Filter messages..." 
                   value={search} 
                   onChange={(e) => setSearch(e.target.value)}
                   className="pl-10 h-10 border-none bg-secondary/40 focus-visible:ring-1 focus-visible:ring-primary/20 rounded-xl text-sm font-medium" 
                 />
              </div>
              <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none pb-1">
                 {["All", "Unread", "High Priority", "Urgent"].map((f) => (
                    <button 
                      key={f}
                      onClick={() => setFilter(f.toLowerCase())}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap",
                        filter === f.toLowerCase() ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary/40 text-muted-foreground hover:bg-secondary"
                      )}
                    >
                       {f}
                    </button>
                 ))}
              </div>
           </div>

           <ScrollArea className="flex-1">
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="p-3 space-y-2"
              >
                 {filtered.map((conv) => (
                    <motion.button 
                      key={conv.id} 
                      variants={item}
                      onClick={() => setSelectedId(conv.id)}
                      className={cn(
                        "w-full text-left p-4 rounded-2xl transition-all relative group",
                        selectedId === conv.id ? "bg-primary/5 ring-1 ring-primary/20 shadow-sm" : "hover:bg-secondary/40"
                      )}
                    >
                       <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                             <Avatar className="h-9 w-9 border-2 border-background">
                                <AvatarFallback className="bg-secondary text-[10px] font-bold uppercase">{conv.author.slice(0, 2)}</AvatarFallback>
                             </Avatar>
                             <div>
                                <h4 className="text-sm font-bold tracking-tight">{conv.author}</h4>
                                <div className="flex items-center gap-1.5">
                                   <conv.platformIcon className={cn("h-2.5 w-2.5", conv.color)} />
                                   <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">{conv.platform}</span>
                                </div>
                             </div>
                          </div>
                          <span className="text-[9px] font-bold text-muted-foreground/40 uppercase">{conv.time}</span>
                       </div>
                       <p className="text-xs text-muted-foreground font-medium line-clamp-2 leading-relaxed px-1">
                          {conv.message}
                       </p>
                       <div className="mt-3 flex items-center gap-2">
                          <Badge variant="outline" className={cn(
                            "text-[8px] h-4 uppercase tracking-tighter border-none",
                            conv.sentiment === "positive" ? "bg-emerald-500/10 text-emerald-500" : 
                            conv.sentiment === "negative" ? "bg-red-500/10 text-red-500" : "bg-muted text-muted-foreground"
                          )}>
                             {conv.sentiment}
                          </Badge>
                          {conv.priority !== "normal" && (
                            <Badge variant="outline" className={cn(
                              "text-[8px] h-4 uppercase tracking-tighter border-none",
                              conv.priority === "urgent" ? "bg-red-500/20 text-red-600 font-extrabold" : "bg-orange-500/10 text-orange-600"
                            )}>
                               {conv.priority}
                            </Badge>
                          )}
                       </div>
                       {conv.status === "unread" && (
                          <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary" />
                       )}
                    </motion.button>
                 ))}
              </motion.div>
           </ScrollArea>
        </div>

        {/* Conversation Thread */}
        <div className="flex-1 flex flex-col bg-card/40 backdrop-blur-md rounded-3xl border border-border/50 shadow-premium overflow-hidden">
           {selectedConv ? (
             <>
               <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold uppercase">{selectedConv.author.slice(0,2)}</AvatarFallback>
                     </Avatar>
                     <div>
                        <h3 className="text-lg font-bold font-display tracking-tight">{selectedConv.author}</h3>
                        <p className="text-xs text-muted-foreground font-medium">{selectedConv.platform} • Managed for {selectedConv.client}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-bold rounded-xl border-muted-foreground/20 hover:bg-secondary gap-2">
                        <UserPlus className="h-3.5 w-3.5" />
                        Assign
                     </Button>
                     <Button variant="ghost" size="icon" className="rounded-full h-9 w-9"><MoreVertical className="h-4 w-4" /></Button>
                  </div>
               </div>

               <ScrollArea className="flex-1 p-8">
                  <div className="max-w-3xl mx-auto space-y-8">
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">{selectedConv.time}</span>
                           <div className="flex-1 h-[1px] bg-border/50" />
                        </div>
                        <div className="flex items-start gap-4">
                           <Avatar className="h-8 w-8 mt-1">
                              <AvatarFallback className="bg-secondary text-[8px] font-bold">{selectedConv.author.slice(0,2)}</AvatarFallback>
                           </Avatar>
                           <div className="flex-1 space-y-2">
                              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/20 shadow-sm inline-block max-w-[85%]">
                                 <p className="text-sm font-medium leading-relaxed">{selectedConv.message}</p>
                              </div>
                              <div className="flex items-center gap-4 text-[10px] text-muted-foreground/60 font-medium ml-2">
                                 <button className="hover:text-primary transition-colors">Like</button>
                                 <button className="hover:text-primary transition-colors">Reply</button>
                                 <button className="hover:text-primary transition-colors">Share</button>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Internal Note Mockup */}
                     <div className="flex items-start gap-4 justify-end">
                        <div className="flex-1 text-right space-y-2">
                           <div className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 inline-block max-w-[70%]">
                              <div className="flex items-center justify-end gap-1.5 mb-1 opacity-60">
                                 <Lock className="h-2.5 w-2.5" />
                                 <span className="text-[8px] font-bold uppercase tracking-widest">Team Note</span>
                              </div>
                              <p className="text-[11px] font-bold text-primary italic">This client typically responds well to informational content. Let&apos;s send them the new e-book link.</p>
                           </div>
                           <p className="text-[9px] font-bold text-muted-foreground/40 pr-2">Internal · 1h ago</p>
                        </div>
                        <Avatar className="h-8 w-8 mt-1">
                           <AvatarFallback className="bg-primary/20 text-primary text-[8px] font-bold">JD</AvatarFallback>
                        </Avatar>
                     </div>
                  </div>
               </ScrollArea>

               <div className="p-6 border-t border-border/50 bg-secondary/5">
                  <div className="max-w-3xl mx-auto space-y-4">
                     <div className="relative group">
                        <Textarea 
                          placeholder={`Reply to ${selectedConv.author}...`} 
                          className="min-h-[120px] rounded-[1.5rem] bg-background border-none shadow-premium focus-visible:ring-1 focus-visible:ring-primary/20 p-5 text-sm font-medium resize-none transition-all"
                        />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                           <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-secondary"><Smile className="h-4 w-4" /></Button>
                           <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-secondary"><Paperclip className="h-4 w-4" /></Button>
                           <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-secondary text-primary"><Brain className="h-4 w-4" /></Button>
                        </div>
                        <div className="absolute bottom-4 right-4">
                           <Button className="h-10 px-6 rounded-xl bg-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform font-bold">
                              <Send className="h-4 w-4 mr-2" />
                              Send Reply
                           </Button>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-xl border border-primary/10">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <p className="text-[10px] font-bold text-primary/80 tracking-tight uppercase">AI Magic Write is available. press <kbd className="bg-primary/10 px-1 rounded mx-1">CMD + K</kbd> to activate.</p>
                     </div>
                  </div>
               </div>
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                   <MessageSquare className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <h3 className="text-xl font-bold font-display tracking-tight">Select a conversation</h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-sm">Explore interactions across all connected platforms in one unified view.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
