import logo from "@/assets/haul-patrol-logo.jpg";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cta blur-3xl opacity-20 rounded-full" />
              <img
                src={logo}
                alt="Haul Patrol Team"
                className="relative w-full h-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>

            {/* Content side */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-primary">
                About Us
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">Haul Patrol</span> is a locally owned and operated junk removal service proudly serving the Denver metro area.
                </p>
                
                <p>
                  We're not just another hauling company — we're your friendly neighborhood "good boys" who take pride in keeping Denver clean, one haul at a time.
                </p>
                
                <p>
                  Our team is licensed, insured, and committed to eco-friendly disposal practices. We donate what we can and recycle the rest, ensuring your junk doesn't end up harming our beautiful Colorado environment.
                </p>
              </div>

              {/* Quote callout */}
              <div className="bg-card border-l-4 border-secondary rounded-r-2xl p-6 shadow-soft my-8">
                <p className="text-xl italic text-primary font-medium">
                  "We're the good boys who clean up Denver, one haul at a time."
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-secondary/10 rounded-2xl">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Serving</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-2xl">
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-2xl">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
