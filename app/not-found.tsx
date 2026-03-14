import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary mb-6">
        <BarChart3 className="h-8 w-8 text-white" />
      </div>
      <h1 className="font-display text-6xl font-extrabold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Page not found. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
