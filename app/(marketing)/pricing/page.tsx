"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter", monthlyPrice: 29, yearlyPrice: 24, description: "Perfect for freelancers and solo social media managers.",
    features: ["3 social accounts", "1 client", "100 scheduled posts/mo", "Basic analytics dashboard", "5 AI credits/mo", "Email support", "1 team member"],
    cta: "Start Free Trial",
  },
  {
    name: "Pro", monthlyPrice: 79, yearlyPrice: 66, popular: true, description: "Ideal for growing agencies and marketing teams.",
    features: ["15 social accounts", "10 clients", "Unlimited scheduled posts", "Advanced analytics & custom reports", "100 AI credits/mo", "3 team members", "Priority support", "White-label reports", "Content approval workflows", "Engagement inbox"],
    cta: "Start Free Trial",
  },
  {
    name: "Agency", monthlyPrice: 199, yearlyPrice: 166, description: "For large agencies managing many clients at scale.",
    features: ["Unlimited social accounts", "Unlimited clients", "Unlimited scheduled posts", "Custom analytics & API access", "Unlimited AI credits", "Unlimited team members", "Dedicated account manager", "White-label everything", "Custom integrations", "Audit logs & compliance", "SSO & advanced security"],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">Simple, Transparent Pricing</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">Start free for 14 days. Upgrade, downgrade, or cancel anytime. No hidden fees.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={cn("text-sm font-medium", !yearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={cn("relative h-6 w-12 rounded-full transition-colors", yearly ? "bg-primary" : "bg-muted")}>
              <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform", yearly ? "translate-x-6" : "translate-x-0.5")} />
            </button>
            <span className={cn("text-sm font-medium", yearly ? "text-foreground" : "text-muted-foreground")}>Yearly <span className="text-success text-xs font-semibold">Save 17%</span></span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={cn("relative rounded-xl border p-8", plan.popular ? "border-primary bg-card shadow-elevated scale-105" : "border-border bg-card shadow-card")}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-white">Most Popular</div>}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="font-display text-4xl font-extrabold">${yearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {yearly && <p className="mt-1 text-xs text-muted-foreground">billed annually</p>}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button className={cn("mt-8 w-full", plan.popular && "gradient-primary border-0 text-white")} variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href={plan.name === "Agency" ? "/contact" : "/register"}>{plan.cta} {plan.name !== "Agency" && <ArrowRight className="ml-1 h-4 w-4" />}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
