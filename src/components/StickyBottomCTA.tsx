import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-primary via-secondary to-accent shadow-elevated border-t-4 border-white/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Call Button */}
            <Button
              size="lg"
              className="flex-1 bg-white text-primary hover:bg-white/90 font-bold text-base shadow-lg hover:shadow-xl transition-all rounded-full h-12"
              asChild
            >
              <a href="tel:+17202108173" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </Button>

            {/* Free Estimate Button */}
            <Button
              size="lg"
              className="flex-1 bg-accent text-white hover:bg-accent/90 font-bold text-base shadow-lg hover:shadow-xl transition-all rounded-full h-12"
              onClick={scrollToForm}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="hidden xs:inline">Free Estimate</span>
              <span className="xs:hidden">Estimate</span>
            </Button>
          </div>
          
          {/* Trust Badge */}
          <div className="text-center mt-2">
            <p className="text-white text-xs font-semibold">
              ⭐ 5.0 Rating • Same-Day Service • Starting at $150
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
