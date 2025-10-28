import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LiveAvailability = () => {
  const [slots, setSlots] = useState(3);

  useEffect(() => {
    // --- Daily reset at midnight ---
    const now = new Date();
    const msUntilMidnight =
      24 * 60 * 60 * 1000 -
      (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) * 1000;

    const resetTimer = setTimeout(() => setSlots(3), msUntilMidnight);

    // --- Decrease every ~3 hours to mimic real bookings ---
    const interval = setInterval(() => {
      setSlots((prev) => (prev > 1 ? prev - 1 : prev));
    }, 3 * 60 * 60 * 1000);

    return () => {
      clearTimeout(resetTimer);
      clearInterval(interval);
    };
  }, []);

  // Styling by slot count
  const getBadgeStyle = () => {
    if (slots >= 3)
      return "bg-green-100 text-green-800 border-green-300";
    if (slots === 2)
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-red-100 text-red-800 border-red-300";
  };

  const message =
    slots >= 3
      ? "Same-day pickups open!"
      : slots === 2
      ? "Limited slots left today"
      : "Almost full — call now!";

  return (
    <Badge
      variant="outline"
      className={`${getBadgeStyle()} px-4 py-2 text-sm font-semibold shadow-soft border-2 transition-all duration-500 flex items-center gap-2`}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex-shrink-0">
        <div className="absolute w-2 h-2 rounded-full bg-current animate-ping" />
        <div className="relative w-2 h-2 rounded-full bg-current" />
      </div>
      <Clock className="w-4 h-4 flex-shrink-0" />
      <span>{message}</span>
    </Badge>
  );
};

export default LiveAvailability;
