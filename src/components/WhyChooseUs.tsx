import { Check, X, Shield, Clock, Heart, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const comparisons = [
    {
      feature: "Upfront Pricing",
      haulPatrol: true,
      others: false,
      icon: DollarSign
    },
    {
      feature: "Same-Day Service",
      haulPatrol: true,
      others: false,
      icon: Clock
    },
    {
      feature: "Licensed & Insured",
      haulPatrol: true,
      others: "Sometimes",
      icon: Shield
    },
    {
      feature: "Eco-Friendly Disposal",
      haulPatrol: true,
      others: false,
      icon: Heart
    },
    {
      feature: "Donation Partnerships",
      haulPatrol: true,
      others: false,
      icon: Heart
    },
    {
      feature: "Hidden Fees",
      haulPatrol: false,
      others: true,
      icon: DollarSign
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "If you're not happy, we'll make it right or refund you. No questions asked."
    },
    {
      icon: DollarSign,
      title: "No Hidden Fees Promise",
      description: "The price we quote is the price you pay. Clear, upfront, and honest."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your schedule. We'll arrive when we say we will, every time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">The Haul Patrol Difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Why Denver Chooses Haul Patrol
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not all junk removal services are created equal. Here's what sets the Good Boys apart.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-secondary text-white p-6">
              <div className="text-lg font-semibold">Feature</div>
              <div className="text-lg font-semibold text-center">🐾 Haul Patrol</div>
              <div className="text-lg font-semibold text-center">Others</div>
            </div>

            {/* Table Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 items-center p-6 border-b border-primary/10 last:border-0 ${
                  index % 2 === 0 ? 'bg-primary/5' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-primary">{item.feature}</span>
                </div>
                <div className="flex justify-center">
                  {typeof item.haulPatrol === 'boolean' ? (
                    item.haulPatrol ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )
                  ) : (
                    <span className="text-sm font-semibold text-accent">{item.haulPatrol}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {typeof item.others === 'boolean' ? (
                    item.others ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-500" />
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Our Promises to You
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-elevated hover:shadow-hover transition-all text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {guarantee.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
