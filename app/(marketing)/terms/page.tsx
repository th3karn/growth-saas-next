import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl prose prose-gray dark:prose-invert">
          <h1 className="font-display text-3xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 14, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using GrowthDesk, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

          <h2>2. Description of Service</h2>
          <p>GrowthDesk provides legitimate social media management tools including post scheduling, analytics, client management, content planning, team collaboration, and AI-powered content suggestions. Our platform is designed for agencies, freelancers, and businesses.</p>

          <h2>3. Prohibited Activities</h2>
          <p>You agree NOT to use GrowthDesk for any of the following:</p>
          <ul>
            <li>Purchasing or selling fake followers, likes, comments, or views</li>
            <li>Using bots or automated tools to artificially inflate engagement</li>
            <li>Violating any social media platform&apos;s terms of service</li>
            <li>Engaging in spam, harassment, or deceptive practices</li>
            <li>Misrepresenting your identity or affiliation</li>
            <li>Attempting to gain unauthorized access to other users&apos; accounts</li>
          </ul>

          <h2>4. Account Registration</h2>
          <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your password and for all activities under your account.</p>

          <h2>5. Subscription & Payments</h2>
          <p>Some features of GrowthDesk require a paid subscription. Prices are listed on our pricing page and may change with notice. Subscriptions auto-renew unless cancelled. Refunds are handled on a case-by-case basis.</p>

          <h2>6. Social Media Account Access</h2>
          <p>When you connect social media accounts to GrowthDesk, you grant us permission to access and manage those accounts on your behalf for the purposes of scheduling, analytics, and content management. We only access the permissions necessary for our services.</p>

          <h2>7. Intellectual Property</h2>
          <p>You retain ownership of all content you create and publish through GrowthDesk. We do not claim any intellectual property rights over your content.</p>

          <h2>8. Limitation of Liability</h2>
          <p>GrowthDesk is provided &quot;as is&quot; without warranty of any kind. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

          <h2>9. Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use the service will cease immediately.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will provide notice of significant changes through the platform or via email.</p>

          <h2>11. Contact</h2>
          <p>For questions about these Terms, contact us at legal@growthdesk.io.</p>
        </div>
      </div>
    </section>
  );
}
