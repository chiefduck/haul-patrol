import { Star, MapPin, Shield } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      {/* Google Reviews Badge */}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 shadow-lg hover:scale-105 transition-transform">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <div className="text-white font-semibold text-sm">
          <span className="block leading-tight">5.0 Stars</span>
        </div>
      </div>

      {/* Locally Owned Badge */}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 shadow-lg hover:scale-105 transition-transform">
        <MapPin className="w-5 h-5 text-white" />
        <span className="text-white font-semibold text-sm">Locally Owned</span>
      </div>

      {/* Licensed & Insured Badge */}
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 shadow-lg hover:scale-105 transition-transform">
        <Shield className="w-5 h-5 text-white" />
        <span className="text-white font-semibold text-sm">Licensed & Insured</span>
      </div>
    </div>
  );
};

export default TrustBadges;
