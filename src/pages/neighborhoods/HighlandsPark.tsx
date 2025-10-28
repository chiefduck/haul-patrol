import { useEffect } from "react";
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

const HighlandsPark = () => {
  useEffect(() => {
    document.title = "Highlands / Park Hill Junk Removal Denver | Same-Day $150 | Haul Patrol 🐾";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trusted junk removal in Highlands & Park Hill, Denver. Same-day pickup from $150. ⭐ 5.0 Rated | Licensed & Insured. FREE estimates - Call (720) 210-8173!');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <NeighborhoodHero neighborhood="Highlands/Park Hill" />
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
        neighborhood="Highlands"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8894936363636!2d-105.01549832396963!3d39.76755550208193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78f9e9e9e9e9%3A0x9e9e9e9e9e9e9e9e!2sHighlands%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
      />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default HighlandsPark;
