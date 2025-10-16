import { MapPin } from "lucide-react";

interface NeighborhoodServiceAreaProps {
  neighborhood: string;
  mapEmbedUrl: string;
}

const neighborhoods = ["Denver", "Aurora", "Lakewood", "Arvada", "Westminster", "Centennial", "Thornton", "Highlands Ranch", "Littleton", "Parker", "Englewood", "Wheat Ridge"];

const NeighborhoodServiceArea = ({ neighborhood, mapEmbedUrl }: NeighborhoodServiceAreaProps) => {
  return (
    <section className="py-24 bg-background" id="service-area">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Service Area</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Proudly serving {neighborhood} and surrounding areas
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/20">
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title={`${neighborhood} Service Area Map`}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {neighborhoods.map((area, index) => (
                <button 
                  key={index} 
                  className={`flex items-center gap-2 text-left px-4 py-2 rounded-xl transition-all hover:shadow-soft group ${
                    area === neighborhood 
                      ? 'bg-secondary/20 text-primary font-semibold' 
                      : 'bg-secondary/5 hover:bg-secondary/10 text-muted-foreground hover:text-primary'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{area}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-2xl border-2 border-secondary/20">
              <p className="text-muted-foreground font-medium">
                <span className="text-primary font-bold">Not in our list?</span> Give us a call — we might still be nearby!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodServiceArea;
