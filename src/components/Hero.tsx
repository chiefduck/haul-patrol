import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Sparkles, Clock, ChevronDown } from "lucide-react";
import logo from "@/assets/haul-patrol-logo.jpg";
import TrustBadges from "@/components/TrustBadges";
import LiveAvailability from "@/components/LiveAvailability";
import { motion } from "framer-motion";

const Hero = () => {
  // Removed parallax hooks - keeping it simple for better performance
  
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Static background image with gradient overlay - no parallax for better performance */}
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
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo in white card with shadow */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-elevated">
              <img 
                src={logo} 
                alt="Haul Patrol - The Good Boys of Junk Removal" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
              />
            </div>
          </motion.div>

          {/* Headline with emoji */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Denver's Good Boys of <span className="text-accent">Junk Removal</span> 🐾
          </motion.h1>

          {/* Live Availability Badge */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <LiveAvailability />
          </motion.div>

          {/* Subheadline with pricing */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Fast, friendly, and affordable junk hauling for homes and businesses.
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold">
              Starting at <span className="text-accent text-4xl md:text-5xl">$150</span> • Same-Day Available
            </p>
          </motion.div>

          {/* Primary CTAs - Large and Prominent */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl md:text-2xl px-12 py-8 rounded-full shadow-elevated hover:shadow-hover hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto group"
              asChild
            >
              <a href="tel:+17202108173" className="flex items-center gap-3">
                <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                <span>(720) 210-8173</span>
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-gradient-motion text-white hover:shadow-hover text-xl md:text-2xl px-12 py-8 rounded-full shadow-elevated hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto group glow-on-hover"
              onClick={scrollToForm}
            >
              <Calendar className="w-7 h-7 mr-2 group-hover:rotate-12 transition-transform" />
              FREE Estimate
            </Button>
          </motion.div>

          {/* Trust Badges with fade-in animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TrustBadges />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator - Better visibility */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-full"
        aria-label="Scroll to content"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-start justify-center p-2 group-hover:border-white group-hover:bg-white/20 transition-all">
          <ChevronDown className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
        </div>
      </button>

      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
