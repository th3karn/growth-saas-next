"use client";
export default function AdminServicesPage() {
  const services = [
    { name: "Social Account Management", status: "Active", usage: "2,847 users" },
    { name: "Scheduled Publishing", status: "Active", usage: "1.2M posts/mo" },
    { name: "Analytics & Reporting", status: "Active", usage: "45K reports" },
    { name: "Engagement Inbox", status: "Active", usage: "320K messages" },
    { name: "AI Content Assistant", status: "Active", usage: "890K credits used" },
    { name: "Content Planner", status: "Active", usage: "12K calendars" },
  ];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold">Manage Services</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-base font-semibold">{s.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.usage}</p>
            <span className="mt-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-success/10 text-success">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
