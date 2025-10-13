import { useEffect, useRef, useState } from "react";
import { Home, Building2, Sofa, TreePine, Trash2, Package } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    description: "Clear out garages, basements, attics, and yards. Perfect for spring cleaning or moving.",
  },
  {
    icon: Building2,
    title: "Commercial Cleanouts",
    description: "Office furniture, retail fixtures, and construction debris. We handle it all.",
  },
  {
    icon: Sofa,
    title: "Furniture Hauling",
    description: "Old couches, mattresses, tables, and more. We'll haul away any unwanted furniture.",
  },
  {
    icon: TreePine,
    title: "Yard Debris",
    description: "Branches, leaves, soil, and landscaping materials. Keep your outdoor spaces pristine.",
  },
  {
    icon: Trash2,
    title: "Appliance Removal",
    description: "Refrigerators, washers, dryers, and more. Proper disposal guaranteed.",
  },
  {
    icon: Package,
    title: "Estate Cleanouts",
    description: "Compassionate service for estate sales, downsizing, and moving transitions.",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From single items to full property cleanouts, we do it all
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={service.title}
                className={`group floating-card hover:scale-105 cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon with gradient background */}
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-secondary font-medium">Learn more →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
