import logo from "@/assets/haul-patrol-logo.jpg";
import { Recycle, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-accent/5 to-secondary/5" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-cta rounded-3xl blur-3xl opacity-20" />
            <img src={logo} alt="Haul Patrol team" className="relative rounded-3xl shadow-2xl w-full h-auto object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">About Haul Patrol</h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>At Haul Patrol Junk Removal, we're on a mission to keep our community clean — one haul at a time! 🚛🐾</p>
              
              <p>Locally owned and family operated, we take pride in offering friendly, reliable junk removal services with a neighborly touch. Whether it's an overflowing garage, a cluttered basement, or leftover debris from a renovation, our team is always on patrol to help you reclaim your space quickly and responsibly.</p>
              
              <p>We care about more than just hauling junk — we care about our planet and our community. That's why we recycle, repurpose, or donate items whenever possible, ensuring your unwanted stuff gets a second chance instead of ending up in the landfill.</p>
              
              <p>From homes to businesses, we're your trusted clean-up crew — keeping things tidy, sustainable, and stress-free.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border-l-4 border-secondary p-6 rounded-r-2xl my-8">
              <p className="text-xl md:text-2xl font-semibold text-primary italic">"No mess is too big, no junk is too small — Haul Patrol is on the call!"</p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-soft hover:shadow-hover transition-shadow">
                <Recycle className="w-6 h-6 text-secondary" />
                <span className="font-semibold text-primary">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-soft hover:shadow-hover transition-shadow">
                <Heart className="w-6 h-6 text-secondary" />
                <span className="font-semibold text-primary">We Donate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;