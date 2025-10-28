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

const Aurora = () => {
  useEffect(() => {
    document.title = "Aurora Junk Removal CO | Same-Day $150 | Haul Patrol 🐾";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast junk removal in Aurora, CO. Same-day service starting at $150. ⭐ 5.0 Rated | Licensed & Insured. Get your FREE quote - Call (720) 210-8173!');
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
                "name": "Aurora Junk Removal",
                "item": "https://haulpatrol.com/aurora"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <NeighborhoodHero neighborhood="Aurora" />
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
        neighborhood="Aurora"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.09394502427!2d-104.74481850000001!3d39.7294319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c63e3e3e3e3e3%3A0xa1a1a1a1a1a1a1a1!2sAurora%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
      />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Aurora;
