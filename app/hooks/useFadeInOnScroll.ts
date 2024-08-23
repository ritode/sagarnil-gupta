'use client';

import { useEffect, useRef, MutableRefObject } from 'react';

const useFadeInOnScroll = (): MutableRefObject<(HTMLElement | null)[]> => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]); // Store refs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Observing entry:", entry); // Log each entry
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            console.log("Element is visible, adding fade-visible:", entry.target);
            entry.target.classList.add('fade-visible');
          } else {
            console.log("Element is not visible yet:", entry.target);
          }
        });
      },
      { threshold: 0.4 }
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
    }, 100);

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return elementsRef;
};

export default useFadeInOnScroll;
