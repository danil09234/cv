import { useEffect } from 'react';
import DATA from './data';
import CinematicStack from './components/cinema/CinematicStack';
import CinematicRunway from './components/cinema/CinematicRunway';

// Keyboard shortcuts:
//   E  → opens the user's mail client addressed to the contact email
//   ⇧↑ → smooth-scroll back to the top
function useShortcuts() {
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'e' || e.key === 'E') {
        window.location.href = 'mailto:' + DATA.contact.email;
      } else if (e.key === 'ArrowUp' && e.shiftKey) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}

export default function App() {
  useShortcuts();

  return (
    <>
      <CinematicStack data={DATA} />
      <CinematicRunway runwayVh={820} />
    </>
  );
}
