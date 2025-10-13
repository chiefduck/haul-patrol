import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Denver, CO",
    rating: 5,
    text: "The Haul Patrol team was amazing! They showed up on time, worked quickly, and were so friendly. My garage has never looked better!",
  },
  {
    name: "Mike T.",
    location: "Highlands Ranch, CO",
    rating: 5,
    text: "Professional, efficient, and affordable. They hauled away years of accumulated junk from our basement. Highly recommend!",
  },
  {
    name: "Jennifer L.",
    location: "Littleton, CO",
    rating: 5,
    text: "These are truly the 'good boys' of junk removal! Great communication, fair pricing, and they even swept up afterwards. Will definitely use again.",
  },
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/5" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Don't just take our word for it — hear from happy Denver residents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={testimonial.name}
                className={`floating-card border-2 border-transparent hover:border-secondary/30 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
