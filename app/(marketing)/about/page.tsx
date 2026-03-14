"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Users, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Compliance First", description: "Every feature we build is designed to support legitimate social media management. We never facilitate fake engagement of any kind." },
  { icon: Heart, title: "Customer Success", description: "Your success is our success. We provide dedicated support, training resources, and a community of like-minded professionals." },
  { icon: Users, title: "Built for Teams", description: "From solo freelancers to large agencies, GrowthDesk scales with your business. Collaboration and delegation are at the core." },
  { icon: Target, title: "Results Driven", description: "Our analytics and insights help you make data-driven decisions that lead to real, sustainable growth for your clients." },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">About GrowthDesk</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">We&apos;re on a mission to make social media management ethical, effective, and effortless.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">GrowthDesk was born from a simple frustration: the social media management industry was dominated by tools that relied on fake engagement, bought followers, and deceptive practices. We knew there had to be a better way.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">We built GrowthDesk to be the platform we always wished existed — one that combines powerful scheduling, analytics, and client management tools with a commitment to 100% compliance. No shortcuts, no bots, no fake anything.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">Today, GrowthDesk serves thousands of agencies, freelancers, and businesses worldwide who believe in growing social media presence the right way — through great content, smart scheduling, and data-driven decisions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold">Our Values</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl gradient-primary"><value.icon className="h-7 w-7 text-white" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container text-center">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "2,500+", label: "Active Agencies" },
              { value: "50K+", label: "Social Accounts Managed" },
              { value: "1M+", label: "Posts Scheduled" },
              { value: "15+", label: "Countries" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="font-display text-3xl font-extrabold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
