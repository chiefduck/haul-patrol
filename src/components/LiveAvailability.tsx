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
    <div className="bg-red-500 text-white px-4 py-2 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="relative flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
            <div className="w-2 h-2 bg-white rounded-full relative" />
          </div>
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className="font-semibold text-xs sm:text-sm">
            🔴 LIVE: Only {availableSlots} same-day appointment{availableSlots !== 1 ? 's' : ''} left today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveAvailability;
