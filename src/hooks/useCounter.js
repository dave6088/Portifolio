import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function useCounter(ref, end, duration = 1100) {
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(end * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, end, isInView]);

  return value;
}
