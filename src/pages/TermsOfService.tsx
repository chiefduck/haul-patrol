import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 28, 2025</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Haul Patrol's services, you accept and agree to be bound by these 
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
            <p className="text-muted-foreground">
              Haul Patrol provides junk removal and hauling services in the Denver metropolitan area. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Residential junk removal</li>
              <li>Commercial junk removal</li>
              <li>Furniture hauling and disposal</li>
              <li>Appliance removal</li>
              <li>Construction debris removal</li>
              <li>Estate and property cleanouts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Base service starts at $150, with final pricing based on volume and type of items</li>
              <li>All prices quoted are estimates until our team arrives on-site</li>
              <li>Payment is due upon completion of service</li>
              <li>We accept cash, credit cards, and digital payments</li>
              <li>Prices do not include special disposal fees for hazardous materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Scheduling and Cancellation</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Same-day service is subject to availability</li>
              <li>Cancellations must be made at least 2 hours before scheduled appointment</li>
              <li>Late cancellations may be subject to a $50 fee</li>
              <li>We reserve the right to reschedule in case of severe weather or emergencies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Items We Accept</h2>
            <p className="text-muted-foreground">We accept most common household and commercial items. We do NOT accept:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Hazardous materials (paint, chemicals, asbestos, oil)</li>
              <li>Biological waste or medical waste</li>
              <li>Dead animals</li>
              <li>Firearms or explosives</li>
              <li>Any illegal materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Customer Responsibilities</h2>
            <p className="text-muted-foreground">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate information about items to be removed</li>
              <li>Ensure safe and legal access to the property</li>
              <li>Disclose any hazardous materials or special circumstances</li>
              <li>Be present or designate an authorized representative during service</li>
              <li>Clear a path to items for efficient removal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Liability and Insurance</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Haul Patrol is fully licensed and insured</li>
              <li>We take reasonable care to prevent property damage during removal</li>
              <li>Customer must report any damage within 24 hours of service completion</li>
              <li>Our liability is limited to the actual damage caused by our negligence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Environmental Commitment</h2>
            <p className="text-muted-foreground">
              We prioritize eco-friendly disposal methods and recycle or donate items whenever possible. 
              However, we cannot guarantee all items will be recycled or repurposed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Dispute Resolution</h2>
            <p className="text-muted-foreground">
              Any disputes arising from our services will be resolved through good-faith negotiation. 
              If unresolved, disputes will be subject to arbitration in Denver County, Colorado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting to our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact Information</h2>
            <div className="text-muted-foreground">
              <p><strong>Haul Patrol</strong></p>
              <p>Phone: (720) 210-8173</p>
              <p>Email: info@haulpatrol.com</p>
              <p>Service Area: Denver Metro Area, Colorado</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
