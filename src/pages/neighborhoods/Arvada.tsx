import { useEffect } from "react";
import Header from "@/components/Header";
import NeighborhoodHero from "@/components/neighborhoods/NeighborhoodHero";
import LiveAvailability from "@/components/LiveAvailability";
import HowItWorks from "@/components/HowItWorks";
import QuoteQuiz from "@/components/QuoteQuiz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TextCTA from "@/components/TextCTA";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import NeighborhoodServiceArea from "@/components/neighborhoods/NeighborhoodServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Arvada = () => {
  useEffect(() => {
    document.title = "Arvada Junk Removal | Same-Day Service $150 | Haul Patrol";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <LiveAvailability />
      <NeighborhoodHero neighborhood="Arvada" />
      <ContactForm />
      <HowItWorks />
      <QuoteQuiz />
      <Services />
      <WhyChooseUs />
      <TextCTA />
      <BeforeAfter />
      <About />
      <Testimonials />
      <FAQ />
      <NeighborhoodServiceArea 
        neighborhood="Arvada"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.09394502427!2d-105.13481850000001!3d39.8027644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b89b89b89b89b%3A0xc3c3c3c3c3c3c3c3!2sArvada%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
      />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Arvada;
