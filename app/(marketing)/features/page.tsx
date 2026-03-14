"use client";

import { motion } from "framer-motion";
import {
  Calendar, BarChart3, Users, MessageSquare, Brain, Shield,
  Globe, Zap, FileText, Clock, Lock, Layers, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allFeatures = [
  { icon: Calendar, title: "Smart Scheduling", description: "Schedule posts across Instagram, Facebook, X, YouTube, LinkedIn, and TikTok. Our AI suggests optimal posting times based on your audience's activity patterns.", category: "Publishing" },
  { icon: BarChart3, title: "Advanced Analytics", description: "Track follower growth, engagement rates, impressions, reach, and more. Beautiful charts and exportable reports to understand your performance.", category: "Analytics" },
  { icon: Users, title: "Client Management", description: "Create detailed client profiles with brand assets, social accounts, industry info, and notes. Assign team members and track deliverables per client.", category: "Management" },
  { icon: MessageSquare, title: "Engagement Inbox", description: "Monitor and respond to comments and messages across all platforms in one unified inbox. Sentiment analysis helps prioritize important conversations.", category: "Engagement" },
  { icon: Brain, title: "AI Content Assistant", description: "Generate caption ideas, hashtag suggestions, and content calendar plans. Rewrite captions in different tones and summarize analytics in plain English.", category: "AI" },
  { icon: FileText, title: "White-Label Reports", description: "Generate beautiful PDF reports with your agency branding. Include analytics charts, recommendations, and send directly to clients via email.", category: "Reporting" },
  { icon: Globe, title: "Multi-Platform Support", description: "Connect and manage Instagram, Facebook, X, YouTube, LinkedIn, and TikTok from one dashboard. More platforms coming soon.", category: "Publishing" },
  { icon: Layers, title: "Content Planner", description: "Visual calendar for planning content across clients and platforms. Drag-and-drop, content categories, approval workflows, and draft management.", category: "Planning" },
  { icon: Zap, title: "Approval Workflows", description: "Built-in content approval system with statuses: draft, in review, approved, scheduled, published. Keep your team aligned.", category: "Collaboration" },
  { icon: Clock, title: "Job Queue System", description: "Reliable post scheduling with retry logic, status logs, timezone handling, and webhook-ready architecture. Never miss a scheduled post.", category: "Publishing" },
  { icon: Shield, title: "Security First", description: "Role-based access control, encrypted token storage, secure OAuth flows, rate limiting, and server-side validation throughout the platform.", category: "Security" },
  { icon: Lock, title: "100% Compliant", description: "We never sell, automate, or facilitate fake engagement of any kind. GrowthDesk is built for agencies who care about real, sustainable growth.", category: "Trust" },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">Powerful Features for Real Growth</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">Everything you need to manage social media professionally — without the shady stuff.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-elevated hover:-translate-y-1">
                <div className="mb-2 text-xs font-medium text-primary">{feature.category}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary"><feature.icon className="h-6 w-6 text-white" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Ready to try GrowthDesk?</h2>
          <p className="mt-4 text-primary-foreground/70">Start your free 14-day trial today. No credit card required.</p>
          <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-white/90 px-8" asChild>
            <Link href="/register">Start Free Trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
