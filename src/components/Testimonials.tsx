import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Denver, CO", rating: 5, text: "The Haul Patrol team was amazing! They showed up on time, worked quickly, and were so friendly. My garage has never looked better!" },
  { name: "Mike T.", location: "Highlands Ranch, CO", rating: 5, text: "Professional, efficient, and affordable. They hauled away years of accumulated junk from our basement. Highly recommend!" },
  { name: "Jennifer L.", location: "Littleton, CO", rating: 5, text: "These are truly the 'good boys' of junk removal! Great communication, fair pricing, and they even swept up afterwards. Will definitely use again." }
];

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, index) => { setTimeout(() => { setVisibleCards((prev) => [...prev, index]); }, index * 200); });
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => { setCurrentIndex((prev) => (prev + 1) % testimonials.length); }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/5" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">See Why Denver Calls Us the Good Boys of Junk Removal 🐾</h2>
          <p className="text-lg md:text-xl text-muted-foreground">Real reviews from real customers</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => {
              const isVisible = visibleCards.includes(index);
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`floating-card max-w-3xl mx-auto scroll-fade-in ${isVisible ? 'visible' : ''}`}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0"><div className="w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center text-white text-xl font-bold shadow-lg">{testimonial.name.split(' ').map(n => n[0]).join('')}</div></div>
                      <div className="flex-grow">
                        <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-secondary text-secondary" />))}</div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                        <div><p className="font-semibold text-primary text-lg">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.location}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2 mt-8">{testimonials.map((_, index) => (<button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-secondary w-8' : 'bg-secondary/30'}`} aria-label={`Go to testimonial ${index + 1}`} />))}</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;