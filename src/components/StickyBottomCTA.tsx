import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Look for the first <section> element, typically the hero section
      const heroSection = document.querySelector("section");
      
      if (heroSection) {
        // Check if the bottom of the hero section has scrolled past the top of the viewport
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      } else {
        // Fallback: If no section is found, assume we should show it after some initial scroll
        // This can be adjusted based on preference
        setIsVisible(window.scrollY > 100); 
      }
    };
    
    // Attach listener and run once on mount
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-[60] md:hidden
        bg-gradient-to-r from-[#0A2742] to-[#3EA7F2]
        text-white shadow-lg border-t border-white/10
        animate-slide-up
      "
      style={{
        // CRITICAL FIX: Uses CSS environment variables to ensure the bar 
        // does not get hidden behind or leave a gap near the iOS home indicator/notches.
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px))",
        
        // CRITICAL FIX: Uses translateZ(0) to force hardware acceleration, 
        // which helps prevent flickering on fixed elements during scroll.
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Button
            size="lg"
            asChild
            className="flex-1 bg-white text-primary font-bold text-base rounded-full h-12 hover:bg-white/90 transition-all"
          >
            <a
              href="tel:+17202108173"
              aria-label="Call Haul Patrol"
              className="flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </Button>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="flex-1 bg-accent text-white font-bold text-base rounded-full h-12 hover:bg-accent/90 transition-all"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>Estimate</span>
          </Button>
        </div>

        <p className="text-center text-xs font-semibold mt-2">
          ⭐ 5.0 Rating • Same-Day Service • Starting at $150
        </p>
      </div>
    </div>
  );
};

export default StickyBottomCTA;