// app/hooks/useCountUp.ts
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export function useCountUp(target: number, duration = 1200) {
  const { ref, inView } = useInView(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuart — décélère vers la fin
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(target);
    };

    requestAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, count };
}