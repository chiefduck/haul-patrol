import { Heart, Leaf, Shield } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About Haul Patrol
            </h2>
            <p className="text-xl text-muted-foreground">
              Locally owned in Denver, we're the good boys that keep your city clean
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              At Haul Patrol, we're more than just a junk removal service - we're your neighbors, 
              dedicated to keeping Denver beautiful one pickup at a time. Founded by local residents 
              who care about our community, we combine professional service with the friendly, 
              reliable approach you'd expect from the "good boys" of the industry.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  We're proud Denver locals serving our neighbors with care
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary">Eco-Conscious</h3>
                <p className="text-sm text-muted-foreground">
                  We donate, recycle, and dispose responsibly whenever possible
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Full coverage for your peace of mind on every job
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
