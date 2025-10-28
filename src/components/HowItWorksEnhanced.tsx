import { Phone, Search, Truck, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Get a Quote",
    description: "Call us or fill out the form. We'll give you an upfront estimate with no hidden fees.",
  },
  {
    number: 2,
    icon: Search,
    title: "We Come to You",
    description: "Schedule a time that works for you. We'll show up on time, every time.",
  },
  {
    number: 3,
    icon: Truck,
    title: "We Haul It Away",
    description: "Sit back and relax. We'll load, clean up, and dispose of your junk responsibly.",
  },
];

const HowItWorksEnhanced = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible && visibleSteps.length === 0) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [isVisible, visibleSteps.length]);

  return (
    <section 
      id="how-it-works"
      ref={ref}
      className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 text-9xl rotate-12">🐾</div>
        <div className="absolute bottom-20 left-10 text-7xl -rotate-12">🐾</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
            <Check className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three easy steps to a clutter-free space. No hassle, no stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Animated connector lines between steps (desktop only) */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-1 pointer-events-none">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-secondary to-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={visibleSteps.length >= 2 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          <div className="hidden md:block absolute top-20 left-2/3 right-0 h-1 pointer-events-none -translate-x-8">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-secondary to-accent rounded-full"
              initial={{ scaleX: 0 }}
              animate={visibleSteps.length >= 3 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {steps.map((step, index) => {
            const isStepVisible = visibleSteps.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isStepVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-elevated hover:shadow-hover transition-all duration-300 text-center group hover:-translate-y-2 h-full">
                  {/* Number Badge */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl mb-6 text-white font-bold text-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="tel:+17202108173"
            className="inline-block bg-gradient-motion text-white px-10 py-5 rounded-full font-bold text-lg shadow-elevated hover:shadow-hover hover:scale-105 transition-all glow-on-hover"
          >
            📞 Start Today - Call (720) 210-8173
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksEnhanced;
