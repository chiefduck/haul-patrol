import { useEffect, useRef, useState } from "react";
import { Home, Building2, Sofa, Leaf, Trash2, Package } from "lucide-react";

const serviceImages = {
  residential: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
  furniture: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
  yard: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600",
  construction: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600",
  estate: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
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
    <section ref={sectionRef} className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">From single items to full property cleanouts — we fetch it all!</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            return (
              <div key={service.title} className={`group floating-card hover:scale-105 cursor-pointer transition-all duration-700 overflow-hidden p-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-4 left-4"><div className="bg-white/95 p-3 rounded-xl shadow-lg"><Icon className="w-6 h-6 text-secondary" /></div></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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