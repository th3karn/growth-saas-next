import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GrowthDesk — Social Media Management for Agencies",
    template: "%s | GrowthDesk",
  },
  description:
    "Schedule posts, track analytics, manage clients, and grow your agency — all from one powerful, compliant dashboard. No bots. No fake engagement. Just real growth.",
  keywords: [
    "social media management",
    "SMM panel",
    "social media scheduler",
    "social media analytics",
    "agency dashboard",
    "content planner",
  ],
  openGraph: {
    title: "GrowthDesk — Social Media Management for Agencies",
    description:
      "Schedule posts, track analytics, manage clients, and grow your agency — all from one powerful, compliant dashboard.",
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
