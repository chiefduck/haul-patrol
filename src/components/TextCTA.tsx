import { MessageSquare, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TextCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent via-secondary to-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">💬</div>
        <div className="absolute bottom-10 right-10 text-6xl">📱</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-elevated">
              <Smartphone className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Prefer to Text? We've Got You! 📱
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Get a quick quote without picking up the phone
          </p>

          {/* Text Instructions */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-primary text-lg font-semibold mb-2">
                  Text the word
                </p>
                <div className="inline-block bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-2xl font-bold text-2xl md:text-3xl shadow-lg">
                  JUNK
                </div>
              </div>
              
              <div className="text-4xl text-muted-foreground hidden md:block">→</div>
              <div className="text-4xl text-muted-foreground md:hidden">↓</div>
              
              <div className="text-center md:text-left">
                <p className="text-primary text-lg font-semibold mb-2">
                  To this number
                </p>
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 text-2xl md:text-3xl px-8 py-6 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all"
                  asChild
                >
                  <a href="sms:+17202108173?body=JUNK">
                    (720) 210-8173
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <MessageSquare className="w-4 h-4" />
              <span>We'll text you back within 5 minutes during business hours</span>
            </div>
          </div>

          {/* Additional CTA */}
          <p className="text-white/80 text-base">
            Available 7AM–7PM, Mon–Sat
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextCTA;
