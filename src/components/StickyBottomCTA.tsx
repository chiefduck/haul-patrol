import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
    // Keeps the bar flush to bottom even when Safari hides its toolbar
    paddingBottom: "calc(env(safe-area-inset-bottom, 0px))",
    WebkitTransform: "translateZ(0)", // prevents flicker
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
