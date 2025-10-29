import { useEffect, useRef, useState } from "react";
import { Home, Building2, Sofa, Leaf, Trash2, Package } from "lucide-react";
import { useLocationContext } from "@/hooks/useLocationContext";
import resiJunk from "@/assets/resi_junk.jpeg";
import commercial from "@/assets/commercial_junk.jpeg";
import furniture from "@/assets/resi_junk.jpeg";
import yard from "@/assets/resi_junk.jpeg";
import construction from "@/assets/construction_junk.jpeg";
import estate from "@/assets/estate_junk.jpeg";

const serviceImages = {
  residential: resiJunk,
  commercial: commercial,
  furniture: "https://images.unsplash.com/photo-1668955254766-1bb2de25cf16?w=600",
  yard: "https://images.unsplash.com/photo-1760802236081-0d30bd7c9f66?w=600",
  construction: construction,
  estate: estate,
};

const services = [
  { icon: Home, title: "Residential Junk Removal", description: "Clear out your home with ease. From garages to basements, we handle it all.", image: serviceImages.residential },
  { icon: Building2, title: "Commercial Cleanouts", description: "Keep your business space clean and professional with our commercial services.", image: serviceImages.commercial },
  { icon: Sofa, title: "Furniture Hauling", description: "Old couch? Broken bed frame? We'll take care of your unwanted furniture.", image: serviceImages.furniture },
  { icon: Leaf, title: "Yard Debris Removal", description: "Branches, leaves, and yard waste? We'll haul it away for you.", image: serviceImages.yard },
  { icon: Trash2, title: "Construction Debris", description: "Renovation mess? We specialize in construction and demolition cleanup.", image: serviceImages.construction },
  { icon: Package, title: "Estate Cleanouts", description: "Compassionate and thorough estate cleanout services for any situation.", image: serviceImages.estate }
];

const Services = () => {
  const { neighborhood } = useLocationContext();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => { setVisibleCards((prev) => [...prev, index]); }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-accent/5 to-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
            <Trash2 className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">What We Haul</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Haul Patrol provides comprehensive junk removal services throughout {neighborhood}. From single items to full property cleanouts — we fetch it all!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div 
                key={service.title} 
                className={`group bg-white rounded-3xl overflow-hidden shadow-elevated hover:shadow-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/95 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
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