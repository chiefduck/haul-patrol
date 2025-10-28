import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const BeforeAfterSlider = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800",
      after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      label: "Garage Cleanout"
    },
    {
      before: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800",
      after: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800",
      label: "Basement Cleanup"
    },
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      after: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800",
      label: "Estate Cleanout"
    }
  ];

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, index: number) => {
    if (!isDragging && e.type !== 'touchmove') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full mb-4">
            <ImageIcon className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Transformations</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            See the Haul Patrol Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cluttered chaos to clean spaces — real transformations from Denver homes and businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-elevated hover:shadow-hover transition-all duration-500"
            >
              {/* Interactive Slider Container */}
              <div 
                className="relative h-[400px] overflow-hidden cursor-ew-resize select-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => handleMove(e, index)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={(e) => handleMove(e, index)}
              >
                {/* After Image (full) */}
                <div className="absolute inset-0">
                  <img
                    src={item.after}
                    alt={`${item.label} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    After ✨
                  </div>
                </div>

                {/* Before Image (clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden transition-all"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={item.before}
                    alt={`${item.label} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    Before
                  </div>
                </div>

                {/* Draggable Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary rounded-full"></div>
                      <div className="w-1 h-4 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Instruction hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm pointer-events-none">
                  ↔ Slide to compare
                </div>
              </div>

              {/* Label */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary">{item.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            Ready for your own transformation?
          </p>
          <a
            href="tel:+17202108173"
            className="inline-block bg-gradient-motion text-white px-8 py-4 rounded-full font-semibold text-lg shadow-elevated hover:shadow-hover hover:scale-105 transition-all glow-on-hover"
          >
            📞 Get Your Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
