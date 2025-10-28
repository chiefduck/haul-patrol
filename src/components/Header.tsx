import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/haul-patrol-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-elevated py-3 scale-[0.98]' 
          : 'bg-transparent py-6 scale-100'
      }`}
      style={{
        boxShadow: isScrolled ? '0 10px 40px hsl(215 50% 24% / 0.12)' : 'none',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Haul Patrol" 
              className={`object-contain rounded-full transition-all duration-500 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            />
            <span className={`font-display font-bold transition-all duration-500 ${
              isScrolled ? 'text-lg text-primary' : 'text-xl text-primary'
            }`}>
              Haul Patrol
            </span>
          </div>

          {/* Right side CTAs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone Number - More Prominent */}
            <a 
              href="tel:+17202108173"
              className={`hidden md:flex items-center gap-2 font-bold text-lg hover:scale-105 transition-all px-4 py-2 rounded-full ${
                isScrolled 
                  ? 'text-primary hover:bg-accent/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>(720) 210-8173</span>
            </a>

            {/* Mobile Phone Icon Only */}
            <a 
              href="tel:+17202108173"
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                isScrolled 
                  ? 'text-primary hover:bg-accent/10' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Call Haul Patrol"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-gradient-motion text-white hover:shadow-hover transition-all duration-300 rounded-full font-bold text-sm sm:text-base px-4 sm:px-8 glow-on-hover"
              onClick={scrollToForm}
            >
              <span className="hidden sm:inline">FREE Estimate</span>
              <span className="sm:hidden">Estimate</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
