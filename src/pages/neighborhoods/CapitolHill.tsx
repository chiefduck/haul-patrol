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

const CapitolHill = () => {
  useEffect(() => {
    document.title = "Capitol Hill Junk Removal Denver | Same-Day $150 | Haul Patrol 🐾";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast junk removal in Capitol Hill, Denver. Same-day service starting at $150. ⭐ 5.0 Rated | Licensed & Insured. Call (720) 210-8173 for a FREE quote!');
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
                "name": "Capitol Hill Junk Removal",
                "item": "https://haulpatrol.com/denver/capitol-hill"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <NeighborhoodHero neighborhood="Capitol Hill" />
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
        neighborhood="Capitol Hill"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.4986469736845!2d-104.98361842397042!3d39.73916310208649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d43b0d9f6b%3A0x9b6f3e6d3f8e8e8e!2sCapitol%20Hill%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
      />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default CapitolHill;
