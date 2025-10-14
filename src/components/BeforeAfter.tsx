import { ImageIcon } from "lucide-react";

const BeforeAfter = () => {
  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800",
      after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      label: "Garage Cleanout"
    },
    {
      before: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800",
      after: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800",
      label: "Basement Cleanup"
    },
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      after: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800",
      label: "Estate Cleanout"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
            <ImageIcon className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Transformations</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            See the Haul Patrol Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cluttered chaos to clean spaces — real transformations from Denver homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-elevated hover:shadow-hover transition-all duration-500"
            >
              {/* Before/After Container */}
              <div className="relative h-[400px] overflow-hidden">
                {/* Before Image */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <img
                    src={item.before}
                    alt={`${item.label} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <img
                    src={item.after}
                    alt={`${item.label} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    After
                  </div>
                </div>

                {/* Hover Instruction */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Hover to see after →
                </div>
              </div>

              {/* Label */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready for your own transformation?
          </p>
          <a
            href="tel:+17205550123"
            className="inline-block bg-gradient-cta text-white px-8 py-4 rounded-full font-semibold text-lg shadow-elevated hover:shadow-hover hover:scale-105 transition-all"
          >
            📞 Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
