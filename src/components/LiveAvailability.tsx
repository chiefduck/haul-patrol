import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LiveAvailability = () => {
  const [availableSlots, setAvailableSlots] = useState(3);

  // Simulate dynamic availability (in production, this would come from your booking system)
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailableSlots(Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Dynamic styling based on availability using semantic tokens
  const getBadgeStyle = () => {
    if (availableSlots >= 3) return 'bg-secondary text-secondary-foreground border-secondary/20';
    if (availableSlots === 2) return 'bg-accent text-accent-foreground border-accent/20';
    return 'bg-destructive text-destructive-foreground border-destructive/20';
  };

  return (
    <Badge 
      variant="outline" 
      className={`${getBadgeStyle()} px-4 py-2 text-sm font-semibold shadow-soft border-2 transition-all duration-500 gap-2 flex items-center`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative flex-shrink-0">
        <div className="w-2 h-2 bg-current rounded-full animate-ping absolute" />
        <div className="w-2 h-2 bg-current rounded-full relative" />
      </div>
      <Clock className="w-4 h-4 flex-shrink-0" />
      <span>
        LIVE: Only {availableSlots} same-day slot{availableSlots !== 1 ? 's' : ''} left!
      </span>
    </Badge>
  );
};

export default LiveAvailability;
