import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <About />
      <Testimonials />
      <ServiceArea />
      <ContactForm />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
