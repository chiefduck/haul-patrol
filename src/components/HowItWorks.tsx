import { useEffect, useRef, useState } from "react";
import { Phone, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call",
    description: "Give us a ring or fill out our form. We'll provide a free, no-obligation quote in minutes.",
  },
  {
    icon: Truck,
    number: "02",
    title: "We Haul",
    description: "Our friendly crew arrives on time, loads everything, and cleans up. No heavy lifting for you!",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "You Relax",
    description: "Sit back and enjoy your clutter-free space. We'll handle eco-friendly disposal and recycling.",
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/5" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            Getting Junk-Free Is Easy With Haul Patrol
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to a clutter-free space
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={step.number}
                className={`floating-card text-center relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-lg shadow-hover">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-8 w-16 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
