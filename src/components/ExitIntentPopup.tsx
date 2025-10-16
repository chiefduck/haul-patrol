import { useState, useEffect } from "react";
import { X, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Only track on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [hasShown]);

  const handleBookNow = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+17202108173';
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-4 border-accent">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 bg-white/80 hover:bg-white transition-colors z-50"
        >
          <X className="h-5 w-5 text-primary" />
        </button>

        {/* Content */}
        <div className="bg-gradient-to-br from-red-500 via-accent to-secondary p-8 md:p-12 text-white text-center">
          <div className="mb-6">
            <Gift className="w-20 h-20 mx-auto mb-4 animate-bounce-slow" />
          </div>

          <DialogHeader className="mb-6">
            <DialogTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wait! Don't Miss Out! 🎁
            </DialogTitle>
          </DialogHeader>

          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-8 border-2 border-white/30">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              SAVE $20 TODAY ONLY!
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Book your junk removal in the next 10 minutes
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-white/90">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">This offer expires when you close this window</span>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={handleBookNow}
              className="w-full bg-white text-primary hover:bg-white/90 text-xl py-7 font-bold rounded-full shadow-elevated hover:scale-105 transition-all"
            >
              🎯 Claim My $20 Discount
            </Button>

            <Button
              size="lg"
              onClick={handleCallNow}
              variant="outline"
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg py-6 font-semibold rounded-full"
            >
              📞 Or Call (720) 210-8173
            </Button>
          </div>

          <p className="text-white/70 text-sm mt-6">
            ✓ Same-day service available<br />
            ✓ No hidden fees<br />
            ✓ 100% satisfaction guarantee
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
