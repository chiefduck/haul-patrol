import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-20 bg-muted/30" id="service-area">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Service Area
            </h2>
            <p className="text-lg text-muted-foreground">
              Proudly serving Denver and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Service area list */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-2">
                    Denver Metro Area
                  </h3>
                  <p className="text-muted-foreground">
                    Including Downtown, Capitol Hill, Highlands, Park Hill, and all surrounding neighborhoods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-2">
                    Surrounding Communities
                  </h3>
                  <p className="text-muted-foreground">
                    Aurora, Lakewood, Englewood, Littleton, Highlands Ranch, Westminster, Thornton, and more
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border-l-4 border-secondary">
                <p className="text-foreground">
                  <strong>Not sure if we serve your area?</strong> Give us a call at{" "}
                  <a href="tel:+17205550123" className="text-secondary hover:underline font-semibold">
                    (720) 555-0123
                  </a>{" "}
                  and we'll let you know!
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-[400px]">
              <iframe
                title="Haul Patrol Service Area - Denver, CO"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.04303961257!2d-105.1082214!3d39.7643389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
