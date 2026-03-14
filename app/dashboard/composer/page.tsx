"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image, Hash, Brain, Copy, Send, Save, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const platforms = ["Instagram", "Facebook", "X (Twitter)", "YouTube", "LinkedIn", "TikTok"];
const tones = ["Professional", "Casual", "Witty", "Inspirational", "Educational"];

export default function PostComposerPage() {
  const [caption, setCaption] = useState("");
  const [platform, setPlatform] = useState("");

  function handleAiGenerate() {
    const captions = [
      "🚀 Ready to take your social media game to the next level? Our latest strategies are helping agencies grow 3x faster with data-driven content planning. #SocialMedia #GrowthTips #AgencyLife",
      "📊 The key to social media success isn't posting more — it's posting smarter. Here's how top agencies are using analytics to maximize every post's impact. #DataDriven #SocialStrategy",
      "💡 Behind every great brand is a content strategy that hits the right notes. Discover how to create content that resonates, engages, and converts. #ContentMarketing #BrandGrowth",
    ];
    setCaption(captions[Math.floor(Math.random() * captions.length)]);
    toast.success("AI caption generated!");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Post Composer</h1>
        <p className="text-sm text-muted-foreground">Create and schedule your next social media post.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Composer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-5">
            <div className="space-y-2">
              <Label>Platform</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger><SelectValue placeholder="Select platform" /></SelectTrigger>
                <SelectContent>{platforms.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Caption</Label>
                <Button variant="outline" size="sm" onClick={handleAiGenerate}><Brain className="mr-1 h-3 w-3" /> AI Generate</Button>
              </div>
              <Textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Write your caption here..." rows={6} className="resize-none" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{caption.length} characters</span>
                <span>{platform === "X (Twitter)" ? `${280 - caption.length} remaining` : ""}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Hashtags</Label>
              <div className="flex items-center gap-2">
                <Input placeholder="#growthdesk #socialmedia" className="flex-1" />
                <Button variant="outline" size="sm"><Hash className="mr-1 h-3 w-3" /> Suggest</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Media</Label>
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border p-8 text-center">
                <div><Image className="mx-auto h-8 w-8 text-muted-foreground" /><p className="mt-2 text-sm text-muted-foreground">Drag and drop or click to upload</p><p className="text-xs text-muted-foreground">PNG, JPG, GIF, MP4 up to 10MB</p></div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Client</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select client" /></SelectTrigger>
                  <SelectContent><SelectItem value="acme">Acme Corp</SelectItem><SelectItem value="digispark">Digital Spark</SelectItem><SelectItem value="techflow">TechFlow</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Schedule Date & Time</Label>
                <Input type="datetime-local" />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="gradient-primary border-0 text-white"><Send className="mr-2 h-4 w-4" /> Publish Now</Button>
            <Button variant="outline"><Clock className="mr-2 h-4 w-4" /> Schedule</Button>
            <Button variant="outline"><Save className="mr-2 h-4 w-4" /> Save Draft</Button>
            <Button variant="outline"><Copy className="mr-2 h-4 w-4" /> Duplicate</Button>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <h3 className="font-display text-base font-semibold">Preview</h3>
          <div className="rounded-xl border border-border bg-card p-4 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full gradient-primary" />
              <div><p className="text-sm font-semibold">GrowthDesk</p><p className="text-xs text-muted-foreground">Just now</p></div>
            </div>
            <p className="text-sm whitespace-pre-wrap">{caption || "Your caption will appear here..."}</p>
            <div className="mt-3 aspect-video rounded-lg bg-muted flex items-center justify-center"><Image className="h-8 w-8 text-muted-foreground" /></div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-card">
            <h4 className="text-sm font-semibold mb-2">AI Tone Rewrite</h4>
            <div className="flex flex-wrap gap-2">
              {tones.map((tone) => (
                <Button key={tone} variant="outline" size="sm" className="text-xs" onClick={() => toast.info(`Rewriting in ${tone} tone...`)}>{tone}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
