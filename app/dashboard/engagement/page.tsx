"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, ThumbsUp, ThumbsDown, Minus, Send, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const conversations = [
  { id: "1", author: "Sarah M.", platform: "Instagram", message: "Love this post! Can you share more tips like this?", sentiment: "positive", priority: "normal", status: "unread", time: "2h ago", client: "Acme Corp" },
  { id: "2", author: "John D.", platform: "Facebook", message: "Is this product still available? Interested in bulk orders.", sentiment: "neutral", priority: "high", status: "unread", time: "3h ago", client: "TechFlow" },
  { id: "3", author: "Mike R.", platform: "X", message: "Had a terrible experience with customer service. Very disappointed.", sentiment: "negative", priority: "urgent", status: "unread", time: "4h ago", client: "Acme Corp" },
  { id: "4", author: "Emma L.", platform: "Instagram", message: "Your content is always so inspiring! Keep it up 🔥", sentiment: "positive", priority: "normal", status: "read", time: "5h ago", client: "FoodieHub" },
  { id: "5", author: "Alex K.", platform: "YouTube", message: "Can you make a tutorial on this topic? Would be really helpful.", sentiment: "neutral", priority: "normal", status: "read", time: "6h ago", client: "Digital Spark" },
  { id: "6", author: "Lisa W.", platform: "LinkedIn", message: "Great insights! We should connect and discuss a potential collaboration.", sentiment: "positive", priority: "high", status: "unread", time: "8h ago", client: "TechFlow" },
];

function SentimentIcon({ sentiment }: { sentiment: string }) {
  if (sentiment === "positive") return <ThumbsUp className="h-3 w-3 text-success" />;
  if (sentiment === "negative") return <ThumbsDown className="h-3 w-3 text-destructive" />;
  return <Minus className="h-3 w-3 text-muted-foreground" />;
}

export default function EngagementPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const filtered = conversations.filter((c) => c.message.toLowerCase().includes(search.toLowerCase()) || c.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Engagement Inbox</h1>
        <p className="text-sm text-muted-foreground">Manage comments, messages, and mentions across all platforms.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 h-[calc(100vh-240px)]">
        {/* Conversation list */}
        <div className="lg:col-span-1 rounded-xl border border-border bg-card shadow-card overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search conversations..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" /></div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((conv) => (
              <button key={conv.id} onClick={() => setSelected(conv.id)} className={cn("w-full text-left p-4 border-b border-border hover:bg-muted/30 transition-colors", selected === conv.id && "bg-muted/50", conv.status === "unread" && "bg-primary/5")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center"><User className="h-4 w-4 text-muted-foreground" /></div>
                    <div><p className="text-sm font-semibold">{conv.author}</p><p className="text-xs text-muted-foreground">{conv.platform} · {conv.client}</p></div>
                  </div>
                  <div className="flex items-center gap-1"><SentimentIcon sentiment={conv.sentiment} /><span className="text-xs text-muted-foreground">{conv.time}</span></div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{conv.message}</p>
                {conv.priority !== "normal" && <span className={`mt-1 inline-block text-[10px] font-medium px-1.5 py-0.5 rounded-full ${conv.priority === "urgent" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>{conv.priority}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation detail */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card shadow-card overflow-hidden flex flex-col">
          {selected ? (() => {
            const conv = conversations.find(c => c.id === selected);
            if (!conv) return null;
            return (
              <>
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center"><User className="h-5 w-5 text-muted-foreground" /></div>
                    <div><p className="text-sm font-semibold">{conv.author}</p><p className="text-xs text-muted-foreground">{conv.platform} · {conv.client} · {conv.time}</p></div>
                  </div>
                  <div className="flex items-center gap-2"><SentimentIcon sentiment={conv.sentiment} /><span className="text-xs capitalize text-muted-foreground">{conv.sentiment}</span></div>
                </div>
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="rounded-lg bg-muted/30 p-4 max-w-lg"><p className="text-sm">{conv.message}</p></div>
                </div>
                <div className="p-4 border-t border-border flex gap-2">
                  <Input placeholder="Type your reply..." className="flex-1" />
                  <Button className="gradient-primary border-0 text-white"><Send className="h-4 w-4" /></Button>
                </div>
              </>
            );
          })() : (
            <div className="flex-1 flex items-center justify-center text-center">
              <div><MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/30" /><p className="mt-4 text-sm text-muted-foreground">Select a conversation to view details</p></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
