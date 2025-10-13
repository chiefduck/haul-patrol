import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="bg-gradient-cta text-white rounded-full shadow-elevated hover:shadow-hover transition-all duration-300 w-16 h-16 p-0 animate-bounce-slow"
        asChild
      >
        <a href="tel:+17205550123" aria-label="Call Haul Patrol">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCallButton;
