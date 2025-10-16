import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const LoDo = () => {
  useEffect(() => {
    document.title = "LoDo Junk Removal Denver | Same-Day Service $150 | Haul Patrol";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <LiveAvailability />
      <Hero />
      <HowItWorks />
      <QuoteQuiz />
      <Services />
      <WhyChooseUs />
      <TextCTA />
      <BeforeAfter />
      <About />
      <Testimonials />
      <FAQ />
      <ServiceArea />
      <ContactForm />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default LoDo;
