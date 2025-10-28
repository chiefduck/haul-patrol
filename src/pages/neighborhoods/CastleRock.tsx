import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import NeighborhoodHero from "@/components/neighborhoods/NeighborhoodHero";
import HowItWorksImproved from "@/components/HowItWorksImproved";
import QuoteQuiz from "@/components/QuoteQuiz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TextCTA from "@/components/TextCTA";
import BeforeAfterSliderFixed from "@/components/BeforeAfterSliderFixed";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import NeighborhoodServiceArea from "@/components/neighborhoods/NeighborhoodServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const CastleRock = () => {
  useEffect(() => {
    document.title = "Castle Rock Junk Removal CO | Same-Day $150 | Haul Patrol 🐾";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional junk removal in Castle Rock, CO. Same-day service from $150. ⭐ 5.0 Rated | Licensed & Insured. Get FREE quote - Call (720) 210-8173!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://haulpatrol.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Castle Rock Junk Removal",
                "item": "https://haulpatrol.com/castle-rock"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <NeighborhoodHero neighborhood="Castle Rock" />
      <ContactForm />
      <HowItWorksImproved />
      <QuoteQuiz />
      <Services />
      <WhyChooseUs />
      <TextCTA />
      <BeforeAfterSliderFixed />
      <About />
      <Testimonials />
      <FAQ />
      <NeighborhoodServiceArea 
        neighborhood="Castle Rock"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98140.54697251214!2d-104.85617522089843!3d39.37239420000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5d5d5d5d5d5d%3A0x9f9f9f9f9f9f9f9f!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
      />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default CastleRock;
