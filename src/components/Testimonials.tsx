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
  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from happy Denver residents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-soft hover-lift animate-fade-in border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
