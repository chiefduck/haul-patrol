import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 28, 2025</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us when you request a quote, schedule a service, 
              or contact us. This may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address and location details</li>
              <li>Information about items to be removed</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our junk removal services</li>
              <li>Process and complete transactions</li>
              <li>Send you service confirmations, updates, and appointment reminders</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about promotions, upcoming services, and news</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>With service providers who assist in our operations (payment processing, scheduling)</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground">
              We take reasonable measures to help protect your personal information from loss, theft, 
              misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to individuals under 18. We do not knowingly collect 
              personal information from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p><strong>Haul Patrol</strong></p>
              <p>Phone: (720) 210-8173</p>
              <p>Email: info@haulpatrol.com</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
