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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-soft py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Haul Patrol" 
              className="w-12 h-12 object-contain rounded-full"
            />
            <span className="font-display font-bold text-xl text-primary">
              Haul Patrol
            </span>
          </div>

          {/* Right side CTAs */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+17205550123"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(720) 555-0123</span>
            </a>
            
            <Button 
              size="lg"
              className="bg-gradient-cta text-white hover:shadow-hover transition-all duration-300 rounded-full"
              onClick={scrollToForm}
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
