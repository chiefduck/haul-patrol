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
            <h2 className="text-4xl md:text-5xl font-bold text-primary">About Haul Patrol</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">We're Denver's friendliest junk removal team. Whether it's a single item or a complete property cleanout, we handle it with care and professionalism.</p>
            <p className="text-lg text-muted-foreground leading-relaxed">Serving the Denver metro area, we're committed to making your space clean and clutter-free. Our team is licensed, insured, and always ready to help.</p>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border-l-4 border-secondary p-6 rounded-r-2xl my-8">
              <p className="text-xl font-semibold text-primary italic">"We're the good boys who clean up Denver, one haul at a time."</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">We believe in doing good for our community and the environment. That's why we recycle and donate whenever possible, keeping usable items out of landfills.</p>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-soft"><Recycle className="w-6 h-6 text-secondary" /><span className="font-semibold text-primary">Eco-Friendly</span></div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-soft"><Heart className="w-6 h-6 text-secondary" /><span className="font-semibold text-primary">We Donate</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;