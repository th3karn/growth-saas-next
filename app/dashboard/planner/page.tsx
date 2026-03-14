"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isToday } from "date-fns";
import { cn } from "@/lib/utils";

const events: Record<string, { title: string; platform: string; status: string; color: string }[]> = {
  "2026-03-15": [{ title: "Instagram Reel", platform: "Instagram", status: "Scheduled", color: "bg-primary" }],
  "2026-03-17": [{ title: "Blog Post Share", platform: "Facebook", status: "Draft", color: "bg-muted-foreground" }],
  "2026-03-18": [{ title: "Thread: Growth Tips", platform: "X", status: "Approved", color: "bg-success" }],
  "2026-03-20": [{ title: "Product Demo", platform: "YouTube", status: "Scheduled", color: "bg-primary" }, { title: "Carousel Post", platform: "Instagram", status: "In Review", color: "bg-warning" }],
  "2026-03-22": [{ title: "Client Spotlight", platform: "LinkedIn", status: "Draft", color: "bg-muted-foreground" }],
  "2026-03-25": [{ title: "Weekly Newsletter", platform: "Email", status: "Scheduled", color: "bg-primary" }],
};

export default function ContentPlannerPage() {
  const [current, setCurrent] = useState(new Date(2026, 2, 14));
  const monthStart = startOfMonth(current);
  const monthEnd = endOfMonth(monthStart);
  const calStart = startOfWeek(monthStart);
  const calEnd = endOfWeek(monthEnd);

  const days: Date[] = [];
  let day = calStart;
  while (day <= calEnd) { days.push(day); day = addDays(day, 1); }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Content Planner</h1>
          <p className="text-sm text-muted-foreground">Plan, schedule, and organize your content calendar.</p>
        </div>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> New Content</Button>
      </div>

      {/* Calendar Controls */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card">
        <Button variant="ghost" size="icon" onClick={() => setCurrent(subMonths(current, 1))}><ChevronLeft className="h-4 w-4" /></Button>
        <h2 className="font-display text-lg font-semibold flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> {format(current, "MMMM yyyy")}</h2>
        <Button variant="ghost" size="icon" onClick={() => setCurrent(addMonths(current, 1))}><ChevronRight className="h-4 w-4" /></Button>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="grid grid-cols-7 border-b border-border">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="p-3 text-center text-xs font-medium text-muted-foreground">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((d, i) => {
            const key = format(d, "yyyy-MM-dd");
            const dayEvents = events[key] || [];
            return (
              <div key={i} className={cn("min-h-[100px] border-b border-r border-border p-2", !isSameMonth(d, monthStart) && "bg-muted/20")}>
                <span className={cn("inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium", isToday(d) && "bg-primary text-white", !isSameMonth(d, monthStart) && "text-muted-foreground")}>{format(d, "d")}</span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((ev, j) => (
                    <div key={j} className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium text-white truncate", ev.color)}>{ev.title}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
