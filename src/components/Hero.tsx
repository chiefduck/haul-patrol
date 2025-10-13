import { Phone, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/haul-patrol-logo.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-secondary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Logo with modern styling */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cta blur-2xl opacity-30 rounded-full" />
              <img 
                src={logo} 
                alt="Haul Patrol - The Good Boys of Junk Removal" 
                className="relative w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Headline with emoji */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
            Denver's Good Boys of <br />
            <span className="text-gradient">Junk Removal</span> 🐾
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">
            Fast, friendly, and affordable junk hauling for homes and businesses.
          </p>

          {/* CTAs with modern gradient styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-cta text-white text-lg px-10 py-7 rounded-full shadow-elevated hover:shadow-hover hover:scale-105 transition-all duration-300 font-semibold"
              asChild
            >
              <a href="tel:+17205550123">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary hover:scale-105 transition-all duration-300 font-semibold"
              onClick={scrollToForm}
            >
              Get Free Estimate
            </Button>
          </div>

          {/* Trust badges with modern design */}
          <div className="flex flex-wrap justify-center gap-8 pt-16">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-soft">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">Rated 5 Stars on Google</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-soft">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-sm font-semibold text-primary">Locally Owned</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-soft">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-sm font-semibold text-primary">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer group"
        aria-label="Scroll to content"
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 group-hover:border-primary transition-colors">
          <ChevronDown className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
        </div>
      </button>

      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
