import { useEffect, useState, useRef } from "react";

export default function useScrollPosition({ id }: { id: string }) {
  const [isAtTop, setIsAtTop] = useState(false);
  const [position, setPosition] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsAtTop(entry.isIntersecting);
      setPosition(entry.boundingClientRect.top);
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return { isAtTop, position, targetRef };
}
