import useCinematicProgress from '../../hooks/useCinematicProgress';
import { ss, window_ } from '../../lib/easing';
import CornerChrome from './CornerChrome';
import ScrollHint from './ScrollHint';
import SlideBody from './SlideBody';

// Stack mode: a sequence of full-viewport slides, each softly crossfading
// into the next as the page scrolls through a tall virtual runway.
export default function CinematicStack({ data }) {
  const p = useCinematicProgress(820);

  const slides = buildSlides(data);
  const labels = ['Hello', 'Building', 'Building', 'Building', 'Seedfast', 'Sudolabs', 'Contact'];
  const slot = 1 / slides.length;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 5, overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      <CornerChrome progress={p} />

      {slides.map((slide, i) => {
        const start = i * slot;
        const end = (i + 1) * slot;
        const crossfade = slot * 0.35;

        const inVis  = i === 0 ? 1 : ss(window_(p, start - crossfade, start));
        const outVis = i === slides.length - 1 ? 0 : ss(window_(p, end - crossfade, end));
        const vis = Math.max(0, inVis - outVis);
        const y = (1 - inVis) * 30 + outVis * -30;

        return (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 var(--pad-x)',
              opacity: vis,
              transform: `translateY(${y}px)`,
              pointerEvents: vis > 0.5 ? 'auto' : 'none',
            }}
          >
            <SlideBody slide={slide} localProgress={window_(p, start, end)} />
          </div>
        );
      })}

      <ScrollHint progress={p} labels={labels} />
    </div>
  );
}

function buildSlides(data) {
  return [
    { kind: 'name' },
    { kind: 'statement', text: 'I build AI products.' },
    { kind: 'statement', text: 'Agentic systems.' },
    { kind: 'statement', text: 'For startups. For enterprises. And for myself.' },
    {
      kind: 'brand',
      mark: 'seed',
      eyebrow: 'My startup',
      title: 'Seedfast',
      copy:
        'Synthetic data for developers — realistic, production-like datasets on demand. A new way to build, demo, and test software without touching real user data.',
      cta: 'seedfa.st',
      href: 'https://seedfa.st',
      role: 'Founder',
    },
    {
      kind: 'brand',
      mark: 'sudo',
      eyebrow: 'In partnership with',
      title: 'Sudolabs',
      copy:
        'I lead AI engineering on long-running partnerships — shipping AI products for international startups and enterprises, from first prototype to production.',
      cta: 'sudolabs.com',
      href: 'https://sudolabs.com',
      role: 'AI Engineer',
    },
    { kind: 'contact', email: data.contact.email, links: data.contact },
  ];
}
