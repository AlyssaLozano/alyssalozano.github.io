import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Also observe individual reveal-elements not inside containers
    const singleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            singleObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const allRevealEls = document.querySelectorAll('.reveal-element');
    allRevealEls.forEach((el) => singleObserver.observe(el));

    return () => {
      observer.disconnect();
      singleObserver.disconnect();
    };
  }, []);

  return containerRef;
}
