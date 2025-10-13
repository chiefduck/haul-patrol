import { Home, Building2, Sofa, TreeDeciduous, Trash2, Package } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    description: "Clear out basements, garages, attics, and entire homes with ease.",
  },
  {
    icon: Building2,
    title: "Commercial Cleanouts",
    description: "Office furniture, equipment, and business debris hauled away quickly.",
  },
  {
    icon: Sofa,
    title: "Furniture Hauling",
    description: "Old couches, mattresses, appliances - we take it all.",
  },
  {
    icon: TreeDeciduous,
    title: "Yard Debris Removal",
    description: "Branches, leaves, soil, and landscaping waste disposal.",
  },
  {
    icon: Trash2,
    title: "Estate Cleanouts",
    description: "Compassionate and thorough estate and foreclosure cleanout services.",
  },
  {
    icon: Package,
    title: "Construction Debris",
    description: "Demolition waste, drywall, wood, and renovation debris removal.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No job is too big or too small for the good boys of junk removal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-6 bg-card rounded-2xl border-2 border-border hover:border-secondary transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
