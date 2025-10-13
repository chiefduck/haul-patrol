import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/haul-patrol-logo.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Haul Patrol - The Good Boys of Junk Removal" 
              className="w-64 h-64 object-contain drop-shadow-2xl hover-lift"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Denver's Good Boys of <span className="text-gradient">Junk Removal</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Fast, friendly, and affordable junk hauling for homes and businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="tel:+17205550123">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (720) 555-0123
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full border-2 border-primary hover:bg-primary/5"
              onClick={scrollToForm}
            >
              <FileText className="mr-2 h-5 w-5" />
              Get a Free Estimate
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-secondary text-2xl">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary text-2xl">✓</span>
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary text-2xl">✓</span>
              <span>Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
