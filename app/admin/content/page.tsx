"use client";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Edit } from "lucide-react";

const articles = [
  { title: "Getting Started with GrowthDesk", type: "Help", status: "Published", views: "2,340" },
  { title: "How to Connect Social Accounts", type: "Help", status: "Published", views: "1,890" },
  { title: "Understanding Analytics", type: "Blog", status: "Published", views: "1,234" },
  { title: "Top 10 Social Media Tips for 2026", type: "Blog", status: "Draft", views: "-" },
];

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Manage Content</h1>
        <Button className="gradient-primary border-0 text-white"><Plus className="mr-2 h-4 w-4" /> New Article</Button>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full"><thead><tr className="border-b border-border bg-muted/30">
          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Title</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Type</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Views</th><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Actions</th>
        </tr></thead><tbody>
          {articles.map((a) => (
            <tr key={a.title} className="border-b border-border last:border-0 hover:bg-muted/20"><td className="px-6 py-4 text-sm font-medium">{a.title}</td><td className="px-6 py-4 text-sm text-muted-foreground">{a.type}</td><td className="px-6 py-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.status === "Published" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{a.status}</span></td><td className="px-6 py-4 text-sm text-muted-foreground">{a.views}</td><td className="px-6 py-4"><Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button></td></tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}
