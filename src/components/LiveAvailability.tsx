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

  // Dynamic color based on availability
  const getBarColor = () => {
    if (availableSlots >= 3) return 'bg-green-500';
    if (availableSlots === 2) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTextColor = () => {
    if (availableSlots >= 3) return 'text-green-50';
    if (availableSlots === 2) return 'text-yellow-50';
    return 'text-red-50';
  };

  return (
    <div className={`${getBarColor()} text-white px-4 py-2 shadow-md transition-colors duration-500`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="relative flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
            <div className="w-2 h-2 bg-white rounded-full relative" />
          </div>
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className={`font-semibold text-xs sm:text-sm ${getTextColor()} transition-colors duration-500`}>
            🔴 LIVE: Only {availableSlots} same-day appointment{availableSlots !== 1 ? 's' : ''} left today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveAvailability;
