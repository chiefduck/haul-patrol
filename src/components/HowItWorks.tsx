import { Phone, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Give us a ring or fill out our form. We'll provide a free quote on the spot.",
  },
  {
    icon: Truck,
    title: "We Haul",
    description: "Our friendly crew arrives on time, loads everything up, and handles the heavy lifting.",
  },
  {
    icon: Sparkles,
    title: "You Relax",
    description: "Enjoy your clean, clutter-free space while we responsibly dispose of your junk.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting rid of your junk is as easy as 1-2-3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative text-center space-y-4 p-8 bg-card rounded-3xl shadow-soft hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center pt-4">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-primary">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
