"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">Have a question or want to learn more? We&apos;d love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more about your needs..." rows={5} required />
                </div>
                <Button type="submit" className="gradient-primary border-0 text-white" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Reach out through any of these channels.</p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@growthdesk.io" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Office", value: "San Francisco, CA, USA" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary flex-shrink-0"><item.icon className="h-5 w-5 text-white" /></div>
                    <div><p className="text-sm font-medium">{item.label}</p><p className="text-sm text-muted-foreground">{item.value}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-base font-semibold">Enterprise & Agency Plans</h3>
                <p className="mt-2 text-sm text-muted-foreground">Need a custom solution for your agency? Our sales team is here to help you find the perfect plan.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="mailto:sales@growthdesk.io">Contact Sales</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
