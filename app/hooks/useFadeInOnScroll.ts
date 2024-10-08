'use client';

import { useEffect, useRef, MutableRefObject } from 'react';

const useFadeInOnScroll = (): MutableRefObject<(HTMLElement | null)[]> => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const currentElements = elementsRef.current; // Store the ref's current value in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // in view
            entry.target.classList.add('fade-visible');
          } else {
            // out of view
            entry.target.classList.remove('fade-visible');
          }
        });
      },
      { threshold: 0.4 } // Trigger at 40% visibility
    );

    // Delay observer to ensure DOM is fully rendered
    setTimeout(() => {
      currentElements.forEach((element) => {
        if (element) {
          observer.observe(element);

          // Already on screen
          if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fade-visible');
          }
        }
      });
    }, 100);

    return () => {
      currentElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return elementsRef;
};

export default useFadeInOnScroll;
