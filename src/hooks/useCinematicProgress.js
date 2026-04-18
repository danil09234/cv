import { useEffect, useState } from 'react';

// Turns window.scrollY into a 0..1 progress over a tall virtual runway.
// `runwayVh` is the runway height in viewport heights.
export default function useCinematicProgress(runwayVh = 600) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const total = (runwayVh / 100) * vh - vh;
      const raw = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      setP(raw);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [runwayVh]);
  return p;
}
