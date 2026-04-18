import { useEffect, useRef, useState } from 'react';

// Ease a raw 0..1 value toward `target` with a spring-like latency.
// Used for progress rails/arcs that would otherwise micro-stutter with scroll frames.
export default function useSmoothed(target, stiffness = 0.18) {
  const [v, setV] = useState(target);
  const vRef = useRef(target);
  const targetRef = useRef(target);
  targetRef.current = target;

  useEffect(() => {
    let raf = 0;
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      const diff = targetRef.current - vRef.current;
      if (Math.abs(diff) < 0.0005) {
        vRef.current = targetRef.current;
      } else {
        vRef.current += diff * stiffness;
      }
      setV(vRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
    };
  }, [stiffness]);

  return v;
}
