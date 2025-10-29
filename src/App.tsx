import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Layout + Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import QuoteQuiz from "@/components/QuoteQuiz";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import FloatingCallButton from "@/components/FloatingCallButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import LiveAvailability from "@/components/LiveAvailability";
import ServiceArea from "@/components/ServiceArea";

// Optional: other pages (for SEO neighborhood clones)
import About from "@/components/About";

// 🧭 Smooth scroll helper — scrolls to top on every route change
const ScrollToTop = () => {
  const location = window.location;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Header + Main Content */}
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Home / Root */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ContactForm variant="minimal" />
                  <LiveAvailability />
                  <WhyChooseUs />
                  <HowItWorks />
                  <Services />
                  <QuoteQuiz />
                  <Testimonials />
                  <ServiceArea />
                  <ContactForm variant="full" /> 
                </>
              }
            />

            {/* Example additional route for About page or neighborhood */}
            <Route path="/about" element={<About />} />
            {/* Future: clone for each service area /neighborhood */}
          </Routes>
        </main>

        <Footer />

        {/* Fixed UI elements */}
       {/* <FloatingCallButton /> */}
        <StickyBottomCTA />
        <ExitIntentPopup />
      </div>
    </BrowserRouter>
  );
};

export default App;
