'use client';

import { useEffect, useRef, MutableRefObject } from 'react';

const useFadeInOnScroll = (): MutableRefObject<(HTMLElement | null)[]> => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]); // Store refs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Observing entry:", entry);

          if (entry.isIntersecting) {
            // Add the fade-visible class when the element is in view
            console.log("Element is visible, adding fade-visible:", entry.target);
            entry.target.classList.add('fade-visible');
          } else {
            // Remove the fade-visible class when the element is out of view
            console.log("Element is not visible, removing fade-visible:", entry.target);
            entry.target.classList.remove('fade-visible');
          }
        });
      },
      { threshold: 0.4 } // Trigger at 40% visibility
    );

    // Delay observer attachment slightly to ensure DOM is fully rendered
    setTimeout(() => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.observe(element);
          console.log("Observer added for element:", element);

          // If the element is already on screen when the page is loaded
          if (element.getBoundingClientRect().top < window.innerHeight) {
            console.log("Element already visible, adding fade-visible:", element);
            element.classList.add('fade-visible');
          }
        }
      });
    }, 100); // Delay for 100ms to ensure DOM is fully rendered

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return elementsRef;
};

export default useFadeInOnScroll;
