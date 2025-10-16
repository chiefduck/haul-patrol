import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const LiveAvailability = () => {
  const [availableSlots, setAvailableSlots] = useState(3);

  // Simulate dynamic availability (in production, this would come from your booking system)
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailableSlots(Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-500 text-white px-4 py-3 md:px-6 md:py-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full animate-ping absolute" />
            <div className="w-3 h-3 bg-white rounded-full relative" />
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-base md:text-lg">
              🔴 LIVE: Only {availableSlots} same-day appointment{availableSlots !== 1 ? 's' : ''} left today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAvailability;
