import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

/**
 * Hook to create parallax scrolling effect
 * Returns transform value to apply to element
 */
export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up' } = options;
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const multiplier = direction === 'up' ? -1 : 1;
      setOffsetY(scrolled * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return {
    transform: `translateY(${offsetY}px)`,
    willChange: 'transform',
  };
};
