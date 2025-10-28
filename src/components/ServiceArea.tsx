import { MapPin } from "lucide-react";

const neighborhoods = ["Denver", "Aurora", "Lakewood", "Arvada", "Westminster", "Centennial", "Thornton", "Highlands Ranch", "Littleton", "Parker", "Englewood", "Wheat Ridge"];

const ServiceArea = () => {
  return (
    <section className="py-24 bg-background" id="service-area">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">Junk Removal Throughout Denver & Surrounding Communities</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Based in Denver, proudly serving the entire metro area with fast, reliable junk hauling services</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.09394502427!2d-105.07881850000001!3d39.7392364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Service Area Map" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {neighborhoods.map((neighborhood, index) => (
                <button key={index} className="flex items-center gap-2 text-left px-4 py-2 rounded-xl bg-secondary/5 hover:bg-secondary/10 text-muted-foreground hover:text-primary transition-all hover:shadow-soft group">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{neighborhood}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-2xl border-2 border-secondary/20">
              <p className="text-muted-foreground font-medium"><span className="text-primary font-bold">Not in our list?</span> Give us a call — we might still be nearby!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;