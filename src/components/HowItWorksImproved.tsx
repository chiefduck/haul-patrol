import { Phone, Truck, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Get a Quote",
    description: "Call us or fill out the form. We'll give you an upfront estimate with no hidden fees.",
  },
  {
    icon: Truck,
    number: "2",
    title: "We Come to You",
    description: "Schedule a time that works for you. We'll show up on time, every time.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "We Haul It Away",
    description: "Sit back and relax. We'll load, clean up, and dispose of your junk responsibly.",
  },
];

const HowItWorksImproved = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="how-it-works"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to a clutter-free space
          </p>
        </motion.div>

        {/* Steps Container with connecting lines */}
        <div className="max-w-5xl mx-auto relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" 
            style={{ top: '120px' }} 
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center">
                  {/* Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Connecting dot on desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-16 w-8 h-8 rounded-full bg-accent/20 -translate-y-1/2" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="tel:+17202108173"
            className="inline-flex items-center gap-3 bg-gradient-motion text-white px-10 py-5 rounded-full font-bold text-lg shadow-elevated hover:shadow-hover hover:scale-105 transition-all glow-on-hover"
          >
            <Phone className="w-6 h-6" />
            <span>Start Today - (720) 210-8173</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksImproved;
