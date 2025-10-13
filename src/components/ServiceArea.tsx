import { MapPin } from "lucide-react";

const neighborhoods = [
  "Denver", "Aurora", "Lakewood", "Arvada",
  "Westminster", "Centennial", "Thornton", "Highlands Ranch",
  "Littleton", "Parker", "Englewood", "Wheat Ridge"
];

const ServiceArea = () => {
  return (
    <section className="py-24 bg-background" id="service-area">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
              Service Area
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Proudly serving Denver and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="floating-card p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.09394502427!2d-105.07881850000001!3d39.7392364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haul Patrol Service Area - Denver, CO"
                className="w-full"
              />
            </div>

            {/* Neighborhoods */}
            <div>
              <div className="floating-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    We Serve These Areas
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 p-3 bg-accent/10 rounded-xl hover:bg-secondary/10 transition-colors"
                    >
                      <span className="text-secondary">✓</span>
                      <span className="text-foreground font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    Don't see your area listed? <span className="text-secondary font-semibold">Give us a call</span> — we may still be able to help!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
