"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Image as ImageIcon, 
  Hash, 
  Brain, 
  Copy, 
  Send, 
  Save, 
  Clock, 
  Plus, 
  X, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  ChevronDown,
  Layout,
  Globe,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const platforms = [
  { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { id: "x", name: "X (Twitter)", icon: Twitter, color: "text-sky-400" },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-600" },
];

const tones = ["Professional", "Casual", "Witty", "Inspirational", "Punchy"];

export default function PostComposerPage() {
  const [caption, setCaption] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");
  const [previewDevice, setPreviewDevice] = useState("mobile");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAiGenerate = () => {
    setIsAiLoading(true);
    setTimeout(() => {
      const suggestions = [
        "Unlocking potential is just the beginning. 🚀 Our latest feature update is designed for agencies who demand more from their social strategy. #AgencyGrowth #GrowthDesk",
        "Data-driven decisions, agency-led success. 📊 See how we're changing the game in social media management. #SMM #Agencies",
      ];
      setCaption(suggestions[Math.floor(Math.random() * suggestions.length)]);
      setIsAiLoading(false);
      toast.success("AI Caption Enhanced!");
    }, 1200);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display tracking-tight">Post Composer</h1>
          <p className="text-muted-foreground text-sm font-medium">Craft and synchronize premium content across all channels.</p>
        </div>
        <div className="flex items-center gap-3">
           <Button variant="outline" className="rounded-xl h-11 border-muted-foreground/20 font-bold">
             <Save className="mr-2 h-4 w-4" />
             Save Draft
           </Button>
           <Button className="rounded-xl h-11 px-6 bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-bold">
             <Send className="mr-2 h-4 w-4" />
             Schedule Post
           </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Editor Side */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-none bg-card/40 backdrop-blur-md shadow-premium overflow-hidden">
             <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
             <CardContent className="p-8 space-y-8">
                {/* Platform Selection */}
                <div className="space-y-4">
                   <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Target Platforms</Label>
                   <div className="flex flex-wrap gap-3">
                      {platforms.map((p) => (
                         <button
                           key={p.id}
                           onClick={() => setSelectedPlatform(p.id)}
                           className={cn(
                             "flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 transition-all duration-200",
                             selectedPlatform === p.id 
                               ? "border-primary bg-primary/5 text-primary shadow-sm" 
                               : "border-transparent bg-secondary/50 text-muted-foreground hover:bg-secondary"
                           )}
                         >
                            <p.icon className={cn("h-4 w-4", selectedPlatform === p.id && p.color)} />
                            <span className="text-sm font-bold">{p.name}</span>
                         </button>
                      ))}
                      <button className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-dashed border-border text-muted-foreground hover:bg-secondary">
                         <Plus className="h-4 w-4" />
                      </button>
                   </div>
                </div>

                {/* Caption Area */}
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Caption & Content</Label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        disabled={isAiLoading}
                        onClick={handleAiGenerate}
                        className="text-primary font-bold gap-2 hover:bg-primary/5 rounded-lg h-8"
                      >
                         <Brain className={cn("h-4 w-4", isAiLoading && "animate-pulse")} />
                         AI Assist
                      </Button>
                   </div>
                   <div className="relative group">
                      <Textarea 
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="What are we sharing today?" 
                        className="min-h-[220px] rounded-2xl bg-secondary/30 border-none focus-visible:ring-2 focus-visible:ring-primary/20 p-5 text-base font-medium resize-none placeholder:text-muted-foreground/30 transition-all group-hover:bg-secondary/40"
                      />
                      <div className="absolute bottom-4 right-4 flex items-center gap-3">
                         <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-[10px] h-5 rounded-md border-none font-bold">
                           {caption.length} / 2200
                         </Badge>
                         <button className="text-muted-foreground hover:text-primary transition-colors">
                            <Sparkles className="h-4 w-4" />
                         </button>
                      </div>
                   </div>
                   <div className="flex flex-wrap gap-2 pt-2">
                      {tones.map((tone) => (
                         <button 
                           key={tone} 
                           className="px-3 py-1.5 rounded-lg bg-secondary/30 text-[10px] font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20"
                         >
                            {tone}
                         </button>
                      ))}
                   </div>
                </div>

                {/* Media Upload */}
                <div className="space-y-4">
                   <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Media Assets</Label>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <button className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 hover:border-primary/30 transition-all group text-muted-foreground">
                         <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                            <ImageIcon className="h-5 w-5" />
                         </div>
                         <span className="text-[10px] font-bold">Upload</span>
                      </button>
                      <button className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 hover:border-primary/30 transition-all group text-muted-foreground">
                         <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                            <Hash className="h-5 w-5" />
                         </div>
                         <span className="text-[10px] font-bold">Graphics</span>
                      </button>
                   </div>
                </div>

                {/* Settings Grid */}
                <div className="grid gap-6 sm:grid-cols-2 pt-4 border-t border-border/50">
                   <div className="space-y-3">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Schedule For</Label>
                      <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary/30 border border-transparent hover:border-border transition-all cursor-pointer">
                         <Clock className="h-4 w-4 text-primary" />
                         <span className="text-xs font-bold uppercase">Mar 14, 2026 • 10:30 PM</span>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Select Client</Label>
                      <Select defaultValue="acme">
                         <SelectTrigger className="h-10 rounded-xl bg-secondary/30 border-none px-4 focus:ring-1 focus:ring-primary/20 font-bold text-xs uppercase cursor-pointer">
                            <SelectValue />
                         </SelectTrigger>
                         <SelectContent className="rounded-xl p-1">
                            <SelectItem value="acme" className="rounded-lg text-xs font-bold uppercase">Acme Corp</SelectItem>
                            <SelectItem value="technova" className="rounded-lg text-xs font-bold uppercase">TechNova</SelectItem>
                            <SelectItem value="eco" className="rounded-lg text-xs font-bold uppercase">EcoFriendly</SelectItem>
                         </SelectContent>
                      </Select>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>

        {/* Preview Side */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold font-display uppercase tracking-widest text-muted-foreground">Live Feed Preview</h3>
              <div className="flex bg-secondary/50 rounded-lg p-1">
                 <Button variant={previewDevice === "mobile" ? "secondary" : "ghost"} size="icon" onClick={() => setPreviewDevice("mobile")} className="h-7 w-7 rounded-sm"><Smartphone className="h-3.5 w-3.5" /></Button>
                 <Button variant={previewDevice === "tablet" ? "secondary" : "ghost"} size="icon" onClick={() => setPreviewDevice("tablet")} className="h-7 w-7 rounded-sm"><Tablet className="h-3.5 w-3.5" /></Button>
                 <Button variant={previewDevice === "desktop" ? "secondary" : "ghost"} size="icon" onClick={() => setPreviewDevice("desktop")} className="h-7 w-7 rounded-sm"><Monitor className="h-3.5 w-3.5" /></Button>
              </div>
           </div>

           {/* Preview Mockup */}
           <div className={cn(
             "mx-auto transition-all duration-500 bg-black/5 dark:bg-white/5 rounded-[2.5rem] border-[8px] border-card shadow-premium relative overflow-hidden",
             previewDevice === "mobile" ? "w-[300px] h-[600px]" : previewDevice === "tablet" ? "w-full aspect-[3/4]" : "w-full aspect-video"
           )}>
              <div className="absolute top-0 w-full h-8 bg-card flex items-center justify-center">
                 <div className="w-16 h-4 bg-secondary/50 rounded-full" />
              </div>
              
              <div className="p-4 pt-12">
                 <div className="rounded-2xl bg-card shadow-sm border overflow-hidden">
                    <div className="p-3 border-b border-border/50 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                          <div>
                             <p className="text-[10px] font-bold leading-none">growth_desk</p>
                             <p className="text-[9px] text-muted-foreground font-medium">Original Audio</p>
                          </div>
                       </div>
                       <MoreVertical className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    {/* Fake post image */}
                    <div className="aspect-square bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                       <ImageIcon className="h-10 w-10 text-muted-foreground" />
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                    </div>
                    {/* Content */}
                    <div className="p-4 space-y-2">
                       <div className="flex items-center gap-4 py-2">
                          <button className="hover:scale-110 transition-transform"><Plus className="h-5 w-5" /></button>
                          <button className="hover:scale-110 transition-transform"><Copy className="h-5 w-5" /></button>
                          <button className="hover:scale-110 transition-transform"><Globe className="h-5 w-5" /></button>
                       </div>
                       <p className="text-[11px] leading-relaxed">
                          <span className="font-bold mr-1">growth_desk</span>
                          {caption || "Start typing your caption to see the live preview here..."}
                       </p>
                       <p className="text-[9px] font-bold text-muted-foreground uppercase mt-2">View 24 comments</p>
                    </div>
                 </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-muted-foreground/20 rounded-full" />
           </div>

           <Card className="border-none bg-primary/5 border border-primary/20 shadow-none">
              <CardContent className="p-4 flex items-start gap-3">
                 <Sparkles className="h-4 w-4 text-primary mt-0.5" />
                 <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">AI Tip</p>
                    <p className="text-[11px] font-medium text-primary/80 leading-relaxed">
                       Adding <span className="font-bold">2 more hashtags</span> related to 'SaaS Management' could improve discoverability by <span className="font-bold">14%</span>.
                    </p>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
