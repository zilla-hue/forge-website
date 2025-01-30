import { useCallback } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  onIntersect: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0px',
  onIntersect
}: IntersectionObserverOptions) => {
  const observeElements = useCallback((elements: NodeListOf<Element>) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [threshold, rootMargin, onIntersect]);

  return { observeElements };
};
