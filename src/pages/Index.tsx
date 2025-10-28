import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveAvailability from "@/components/LiveAvailability";
import HowItWorksEnhanced from "@/components/HowItWorksEnhanced";
import QuoteQuiz from "@/components/QuoteQuiz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TextCTA from "@/components/TextCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LiveAvailability />
      <Hero />
      <ContactForm />
      <HowItWorksEnhanced />
      <QuoteQuiz />
      <Services />
      <WhyChooseUs />
      <TextCTA />
      <BeforeAfterSlider />
      <About />
      <Testimonials />
      <FAQ />
      <ServiceArea />
      <Footer />
      <FloatingCallButton />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
