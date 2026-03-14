"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, Mail, Plus, Calendar } from "lucide-react";

const reports = [
  { id: "1", title: "Acme Corp - Monthly Report", client: "Acme Corp", period: "Feb 2026", createdAt: "Mar 1, 2026", status: "Ready" },
  { id: "2", title: "Digital Spark - Q1 Overview", client: "Digital Spark", period: "Q1 2026", createdAt: "Mar 5, 2026", status: "Ready" },
  { id: "3", title: "TechFlow - Campaign Analysis", client: "TechFlow", period: "Jan-Feb 2026", createdAt: "Mar 8, 2026", status: "Draft" },
  { id: "4", title: "FoodieHub - Social Audit", client: "FoodieHub", period: "Feb 2026", createdAt: "Mar 10, 2026", status: "Ready" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Reports</h1>
          <p className="text-sm text-muted-foreground">Generate and share white-label reports with your clients.</p>
        </div>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> New Report</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="space-y-1">
          <Label className="text-xs">Date From</Label>
          <Input type="date" className="w-40" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Date To</Label>
          <Input type="date" className="w-40" />
        </div>
      </div>

      {/* Reports List */}
      <div className="grid gap-4 sm:grid-cols-2">
        {reports.map((report) => (
          <div key={report.id} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold">{report.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {report.period}</span>
                  <span>{report.createdAt}</span>
                </div>
                <div className="mt-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${report.status === "Ready" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{report.status}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1"><Download className="mr-1 h-3 w-3" /> Download PDF</Button>
              <Button variant="outline" size="sm" className="flex-1"><Mail className="mr-1 h-3 w-3" /> Email Client</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
