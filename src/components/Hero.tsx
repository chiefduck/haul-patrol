import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Sparkles, Clock, ChevronDown } from "lucide-react";
import logo from "@/assets/haul-patrol-logo.jpg";
import TrustBadges from "@/components/TrustBadges";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Blurred background image with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85 backdrop-blur-sm" />
      
      {/* Animated paw print accents */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 text-9xl">🐾</div>
        <div className="absolute top-40 right-20 text-7xl rotate-45">🐾</div>
        <div className="absolute bottom-32 left-1/4 text-6xl -rotate-12">🐾</div>
        <div className="absolute bottom-20 right-1/3 text-8xl rotate-12">🐾</div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Logo in white card with shadow */}
          <div className="flex justify-center mb-6">
            <div className="relative bg-white rounded-3xl p-8 shadow-elevated">
              <img 
                src={logo} 
                alt="Haul Patrol - The Good Boys of Junk Removal" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
              />
            </div>
          </div>

          {/* Headline with emoji */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg max-w-5xl mx-auto">
            Denver's Good Boys of <span className="text-accent">Junk Removal</span> 🐾
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
            Fast, friendly, and affordable junk hauling for homes and businesses.
          </p>

          {/* Pricing and Availability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-75 blur-xl group-hover:opacity-100 transition-opacity rounded-full animate-pulse" />
              <Badge className="relative bg-gradient-to-r from-accent via-secondary to-accent text-white border-0 px-8 py-4 text-lg md:text-xl font-bold shadow-elevated group-hover:scale-110 transition-all">
                💰 Starting at $150
              </Badge>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-white/30 blur-md group-hover:blur-lg transition-all" />
              <Badge className="relative bg-white/95 text-primary border-2 border-white px-8 py-4 text-lg md:text-xl font-bold shadow-elevated hover:scale-110 transition-transform animate-pulse flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Same-Day Available
              </Badge>
            </div>
          </div>

          {/* Limited Time Offer Banner */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-primary px-6 py-3 rounded-full shadow-elevated font-bold text-sm md:text-base animate-bounce-slow border-2 border-yellow-500">
              <Sparkles className="w-5 h-5" />
              <span>LIMITED: Book Today & Save $20!</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 rounded-full shadow-elevated hover:shadow-hover hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto group relative overflow-hidden"
              asChild
            >
              <a href="tel:+17205550123" className="flex items-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Call (720) 555-0123</span>
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-cta text-white hover:shadow-hover text-xl px-12 py-8 rounded-full shadow-elevated hover:scale-110 transition-all duration-300 font-bold w-full sm:w-auto group relative overflow-hidden"
              onClick={scrollToForm}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Calendar className="w-7 h-7 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">FREE Estimate</span>
            </Button>
          </div>
          
          {/* Call hours subline */}
          <p className="text-white/80 text-base mb-8">
            📞 Calls answered 7AM–7PM, Mon–Sat
          </p>

          {/* Trust Badges */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <TrustBadges />
            <p className="text-white/90 text-center mt-4 font-semibold text-lg">
              ⭐ Rated #1 in Denver • 150+ Happy Customers
            </p>
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
