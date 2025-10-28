import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative group">
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gradient-cta opacity-75 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse" />
        
        {/* Button */}
        <Button
          size="lg"
          className="relative bg-gradient-cta text-white rounded-full shadow-elevated hover:shadow-hover transition-all duration-300 w-16 h-16 p-0 hover:scale-110 group-hover:rotate-12"
          asChild
        >
          <a href="tel:+17202108173" aria-label="Call Haul Patrol">
            <Phone className="w-7 h-7 animate-bounce-slow" />
          </a>
        </Button>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Call Now! 📞
        </div>
      </div>
    </div>
  );
};

export default FloatingCallButton;
