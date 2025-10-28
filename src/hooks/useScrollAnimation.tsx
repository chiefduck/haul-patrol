import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to trigger animations when element scrolls into view
 * Returns ref to attach to element and boolean indicating if element is visible
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

/**
 * Hook to create staggered animation effects for lists
 */
export const useStaggerAnimation = (itemCount: number, delayMs: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (isVisible && visibleItems.length === 0) {
      // Stagger the appearance of items
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, i * delayMs);
      }
    }
  }, [isVisible, itemCount, delayMs, visibleItems.length]);

  return { ref, visibleItems };
};
