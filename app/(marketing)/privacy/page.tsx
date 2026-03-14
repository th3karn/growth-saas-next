import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl prose prose-gray dark:prose-invert">
          <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 14, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, connect social media accounts, use our services, or contact us for support. This includes:</p>
          <ul>
            <li>Name, email address, and password</li>
            <li>Company/agency information</li>
            <li>Social media account tokens (encrypted at rest)</li>
            <li>Content you create, schedule, or publish through our platform</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Social media tokens are encrypted using industry-standard encryption. We never store passwords in plain text.</p>

          <h2>4. Data Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share information with trusted third parties who assist us in operating our platform, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.</p>

          <h2>5. Compliance</h2>
          <p>GrowthDesk is committed to 100% compliance with social media platform terms of service. We do not facilitate, sell, or automate any form of fake engagement, including but not limited to: fake followers, fake likes, fake comments, fake views, or any deceptive engagement manipulation.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information at any time. You can do this through your account settings or by contacting us at privacy@growthdesk.io.</p>

          <h2>7. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@growthdesk.io.</p>
        </div>
      </div>
    </section>
  );
}
