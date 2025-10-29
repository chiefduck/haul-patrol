import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Sofa,
  Trash2,
  Home,
  Building2,
  Leaf,
  Package,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ServiceType = {
  id: string;
  name: string;
  icon: any;
  basePrice: number;
};

const services: ServiceType[] = [
  { id: "furniture", name: "Furniture", icon: Sofa, basePrice: 150 },
  { id: "appliances", name: "Appliances", icon: Trash2, basePrice: 175 },
  { id: "residential", name: "Residential Cleanout", icon: Home, basePrice: 400 },
  { id: "commercial", name: "Commercial Cleanout", icon: Building2, basePrice: 600 },
  { id: "yard", name: "Yard Debris", icon: Leaf, basePrice: 200 },
  { id: "estate", name: "Estate Cleanout", icon: Package, basePrice: 800 },
];

const volumes = [
  { id: "single", name: "Single Item", multiplier: 1, emoji: "📦" },
  { id: "few", name: "A Few Items (2-5)", multiplier: 1.5, emoji: "🛋️" },
  { id: "room", name: "One Room", multiplier: 2, emoji: "🏠" },
  { id: "multiple", name: "Multiple Rooms", multiplier: 3, emoji: "🏘️" },
  { id: "full", name: "Full Property", multiplier: 4, emoji: "🏢" },
];

const QuoteQuiz = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<typeof volumes[0] | null>(null);
  const { toast } = useToast();

  const quizRef = useRef<HTMLDivElement | null>(null);



  // Detect mobile screen width
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const calculateEstimate = () => {
    if (!selectedService || !selectedVolume) return 0;
    return Math.round(selectedService.basePrice * selectedVolume.multiplier);
  };

  const handleGetExactQuote = () => {
    const estimate = calculateEstimate();
    toast({
      title: "Great! Let's finalize your quote 🎉",
      description: `Your estimated range: $${estimate - 50} - $${estimate + 50}. Scroll down to get your exact quote!`,
    });
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const resetQuiz = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedVolume(null);
  
    // 🧭 Smooth scroll to top of quiz section (with offset for sticky header)
    if (quizRef.current) {
      const quizTop = quizRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 80; // adjust this value if your header height differs
      window.scrollTo({
        top: quizTop - offset,
        behavior: "smooth",
      });
    }
  };
  

  // Auto-advance only on mobile
  const handleServiceClick = (service: ServiceType) => {
    setSelectedService(service);
    if (isMobile) {
      setTimeout(() => setStep(2), 250);
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-background via-accent/5 to-background"
      id="quote-quiz"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
              <span className="text-2xl">🎯</span>
              <span className="text-accent font-semibold">Quick Price Estimator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Do You Need Hauled?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get an instant estimate in 2 simple steps
            </p>
          </div>

          {/* Quiz Card */}
          <Card
            ref={quizRef}
            className="p-8 md:p-12 shadow-elevated relative overflow-hidden"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-primary">
                  Step {step} of 2
                </span>
                <span className="text-sm text-muted-foreground">
                  {step === 1 ? "50%" : "100%"}
                </span>
              </div>
              <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-300"
                  style={{ width: `${step * 50}%` }}
                />
              </div>
            </div>

            {/* Steps Container */}
            <div className="relative">
              {/* Step 1 */}
              <div
                className={`transition-opacity duration-300 ease-in-out absolute inset-0 ${
                  step === 1
                    ? "opacity-100 pointer-events-auto relative"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary text-center mb-6">
                    What type of service do you need?
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service)}
                          className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.03] ${
                            selectedService?.id === service.id
                              ? "border-accent bg-accent/10 shadow-lg scale-[1.02]"
                              : "border-primary/20 hover:border-accent/50"
                          }`}
                        >
                          <Icon
                            className={`w-12 h-12 mx-auto mb-3 ${
                              selectedService?.id === service.id
                                ? "text-accent"
                                : "text-secondary"
                            }`}
                          />
                          <p className="font-semibold text-primary">{service.name}</p>
                          {selectedService?.id === service.id && (
                            <Check className="w-6 h-6 text-accent mx-auto mt-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Desktop-only next step */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-cta text-white text-lg py-6 mt-6"
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                  >
                    Next Step <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`transition-opacity duration-300 ease-in-out absolute inset-0 ${
                  step === 2
                    ? "opacity-100 pointer-events-auto relative"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-6">
                  <Button
                    variant="ghost"
                    onClick={() => setStep(1)}
                    className="mb-4"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>

                  <h3 className="text-2xl font-bold text-primary text-center mb-6">
                    How much needs to be removed?
                  </h3>

                  <div className="grid gap-4">
                    {volumes.map((volume) => (
                      <button
                        key={volume.id}
                        onClick={() => setSelectedVolume(volume)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.03] flex items-center gap-4 ${
                          selectedVolume?.id === volume.id
                            ? "border-accent bg-accent/10 shadow-lg scale-[1.02]"
                            : "border-primary/20 hover:border-accent/50"
                        }`}
                      >
                        <span className="text-4xl">{volume.emoji}</span>
                        <div className="flex-1 text-left">
                          <p className="font-bold text-lg text-primary">{volume.name}</p>
                        </div>
                        {selectedVolume?.id === volume.id && (
                          <Check className="w-6 h-6 text-accent" />
                        )}
                      </button>
                    ))}
                  </div>

                  {selectedVolume && (
                    <div className="bg-gradient-to-r from-accent to-secondary p-8 rounded-2xl text-white flex flex-col items-center justify-center text-center gap-4 mt-10 transition-opacity duration-300 ease-in-out">
                    <p className="text-lg mb-2">Your Estimated Price Range</p>
                      <p className="text-5xl font-bold mb-4">
                        ${calculateEstimate() - 50} - ${calculateEstimate() + 50}
                      </p>
                      <p className="text-white/80 text-sm mb-6">
                        *Final price based on actual volume and location
                      </p>
                      <Button
                          size="lg"
                          onClick={handleGetExactQuote}
                          className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-lg py-6 px-8 font-bold flex items-center justify-center mx-auto"
                        >
                          Get Exact Quote Now 🎯
                        </Button>

                      <button
                        onClick={resetQuiz}
                        className="text-white/80 hover:text-white text-sm underline mt-4 block mx-auto"
                      >
                        Start over
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteQuiz;
