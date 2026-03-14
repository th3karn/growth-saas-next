"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, Calendar, BarChart3, Users, MessageSquare,
  Shield, Zap, Globe, Brain, CheckCircle2, Star, ChevronDown,
  Clock, TrendingUp, FileText,
} from "lucide-react";

// ─── Hero ───
function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-24 lg:py-32">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Now in public beta — 100% compliant, zero fake engagement
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Manage Social Media{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Like a Pro</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70 sm:text-xl">
            Schedule posts, track analytics, manage clients, and grow your agency —
            all from one powerful, compliant dashboard. No bots. No fake engagement. Just real growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gradient-primary border-0 text-white text-base px-8" asChild>
              <Link href="/register">Start Free Trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/features"><Play className="mr-1 h-4 w-4" /> See How It Works</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/50">Free 14-day trial · No credit card required · Cancel anytime</p>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-primary-foreground/10 bg-card/5 p-1 shadow-elevated backdrop-blur-sm">
            <div className="rounded-lg bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-warning/60" />
                <div className="h-3 w-3 rounded-full bg-success/60" />
                <span className="ml-4 text-xs text-muted-foreground">dashboard.growthdesk.io</span>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Total Followers", value: "127.4K", change: "+12.3%" },
                  { label: "Engagement Rate", value: "4.8%", change: "+0.6%" },
                  { label: "Scheduled Posts", value: "42", change: "This week" },
                  { label: "Active Clients", value: "18", change: "+3 new" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold font-display text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs text-success font-medium">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ───
const features = [
  { icon: Calendar, title: "Smart Scheduling", description: "Plan and schedule posts across all platforms with AI-powered timing suggestions for maximum engagement." },
  { icon: BarChart3, title: "Deep Analytics", description: "Track follower growth, engagement rates, impressions, and top-performing content with beautiful charts." },
  { icon: Users, title: "Client Management", description: "Onboard clients, manage brands, track deliverables, and collaborate with your team seamlessly." },
  { icon: MessageSquare, title: "Engagement Inbox", description: "Monitor comments and messages across platforms in one unified inbox with sentiment analysis." },
  { icon: Brain, title: "AI Assistant", description: "Generate captions, hashtags, and content ideas with AI. Rewrite in different tones instantly." },
  { icon: Shield, title: "100% Compliant", description: "No fake followers, no bot engagement. Only legitimate social media management tools." },
  { icon: FileText, title: "White-Label Reports", description: "Generate branded PDF reports for clients with analytics, recommendations, and insights." },
  { icon: Globe, title: "Multi-Platform", description: "Connect Instagram, Facebook, X, YouTube, LinkedIn, and TikTok — all from one dashboard." },
  { icon: Zap, title: "Workflow Automation", description: "Approval workflows, content calendars, team assignments, and automatic publishing." },
];

function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Everything you need to grow</h2>
          <p className="mt-4 text-muted-foreground text-lg">Powerful features built for agencies, freelancers, and businesses who care about real growth.</p>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───
const plans = [
  {
    name: "Starter", price: 29, description: "Perfect for freelancers and solo managers.",
    features: ["3 social accounts", "1 client", "100 scheduled posts/mo", "Basic analytics", "5 AI credits/mo", "Email support"],
  },
  {
    name: "Pro", price: 79, popular: true, description: "Ideal for growing agencies and teams.",
    features: ["15 social accounts", "10 clients", "Unlimited scheduled posts", "Advanced analytics & reports", "100 AI credits/mo", "3 team members", "Priority support", "White-label reports"],
  },
  {
    name: "Agency", price: 199, description: "For large agencies managing many clients.",
    features: ["Unlimited social accounts", "Unlimited clients", "Unlimited scheduled posts", "Custom analytics & API", "Unlimited AI credits", "Unlimited team members", "Dedicated support", "White-label everything", "Custom integrations"],
  },
];

function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-muted-foreground text-lg">Start free, upgrade when you&apos;re ready. No hidden fees.</p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-xl border p-8 ${plan.popular ? "border-primary bg-card shadow-elevated scale-105" : "border-border bg-card shadow-card"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-white">Most Popular</div>}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6"><span className="font-display text-4xl font-extrabold">${plan.price}</span><span className="text-muted-foreground">/month</span></div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button className={`mt-8 w-full ${plan.popular ? "gradient-primary border-0 text-white" : ""}`} variant={plan.popular ? "default" : "outline"} asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───
const testimonials = [
  { name: "Sarah Chen", role: "CEO, Digital Spark Agency", content: "GrowthDesk transformed how we manage our clients. The unified dashboard saves us hours every week.", rating: 5 },
  { name: "Marcus Johnson", role: "Freelance Social Media Manager", content: "Finally, a platform that doesn't rely on fake engagement. My clients trust me more now than ever.", rating: 5 },
  { name: "Emily Rodriguez", role: "Marketing Director, TechFlow", content: "The analytics and reporting features are incredible. White-label reports made our agency look even more professional.", rating: 5 },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Loved by agencies worldwide</h2>
          <p className="mt-4 text-muted-foreground text-lg">See what our customers have to say about GrowthDesk.</p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-warning text-warning" />)}</div>
              <p className="mt-4 text-sm text-foreground leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-white">{t.name.split(" ").map(w => w[0]).join("")}</div>
                <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───
const faqs = [
  { q: "Does GrowthDesk use fake engagement or bots?", a: "Absolutely not. GrowthDesk is 100% compliant. We only provide legitimate social media management tools — scheduling, analytics, reporting, and client management. No fake followers, likes, or engagement of any kind." },
  { q: "Can I connect multiple social media platforms?", a: "Yes! GrowthDesk supports Instagram, Facebook, X (Twitter), YouTube, LinkedIn, and TikTok. Connect as many accounts as your plan allows." },
  { q: "Is there a free trial?", a: "Yes! Every plan comes with a free 14-day trial. No credit card required to start." },
  { q: "Can I invite my team?", a: "Absolutely. Pro and Agency plans include team collaboration features with role-based access control, activity logs, and shared workspaces." },
  { q: "How does the AI feature work?", a: "Our AI assistant helps you generate caption ideas, suggest hashtags, rewrite content in different tones, and identify the best posting times based on your analytics data. It only provides legitimate content suggestions." },
  { q: "Can I generate reports for clients?", a: "Yes! Create white-label PDF reports with your agency's branding. Include analytics, charts, recommendations, and send them directly to clients via email." },
];

function FAQSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground text-lg">Got questions? We&apos;ve got answers.</p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-border bg-card p-6 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold">
                {faq.q}
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───
function CTASection() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="container relative text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to grow your social media presence?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70 text-lg">Join thousands of agencies and freelancers using GrowthDesk to manage social media the right way.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 text-base px-8" asChild>
              <Link href="/register">Start Your Free Trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats bar ───
function StatsBar() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { icon: Users, value: "2,500+", label: "Active Agencies" },
            { icon: Globe, value: "50K+", label: "Social Accounts" },
            { icon: Calendar, value: "1M+", label: "Posts Scheduled" },
            { icon: TrendingUp, value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <stat.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ───
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
