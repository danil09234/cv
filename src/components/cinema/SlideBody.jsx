import GiantMark from '../marks/GiantMark';
import ContactAct from './ContactAct';

// Renders the body of a single cinema slide. Each slide has a `kind` that
// selects the layout. `localProgress` is 0..1 over the slide's own window,
// used to drive entry animation for the giant brand mark.
export default function SlideBody({ slide, localProgress }) {
  if (slide.kind === 'name')      return <NameSlide />;
  if (slide.kind === 'statement') return <StatementSlide text={slide.text} />;
  if (slide.kind === 'brand')     return <BrandSlide slide={slide} localProgress={localProgress} />;
  if (slide.kind === 'contact')   return <ContactAct links={slide.links} />;
  return null;
}

function NameSlide() {
  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <div
        className="mono"
        style={{
          fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.22em',
          textTransform: 'uppercase', marginBottom: 32,
        }}
      >
        ∘  AI Engineer & Founder  ∘
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 12vw, 180px)',
          fontWeight: 500, lineHeight: 0.92,
          letterSpacing: '-0.045em',
        }}
      >
        Danylo<br />Zahorulko
      </h1>
      <div
        className="mono"
        style={{
          marginTop: 72,
          display: 'inline-flex', alignItems: 'center', gap: 14,
          fontSize: 12, color: 'var(--fg-dim)',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          opacity: 0.85,
        }}
      >
        <span style={{ width: 32, height: 1, background: 'currentColor', opacity: 0.5 }} />
        Scroll to begin
        <span style={{ width: 32, height: 1, background: 'currentColor', opacity: 0.5 }} />
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex', justifyContent: 'center',
          animation: 'scrollPulse 2.2s ease-in-out infinite',
          color: 'var(--fg-dim)',
        }}
      >
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path
            d="M9 1v22M3 16l6 7 6-7"
            stroke="currentColor" strokeWidth="1.3"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}

function StatementSlide({ text }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 7.5vw, 108px)',
        fontWeight: 500, lineHeight: 1.04, letterSpacing: '-0.035em',
        maxWidth: 'min(1100px, 92vw)', textAlign: 'center', textWrap: 'balance',
      }}
    >
      {text}
    </h2>
  );
}

function BrandSlide({ slide, localProgress }) {
  const markSize = typeof window !== 'undefined' && window.innerWidth < 720 ? 160 : 220;

  return (
    <div
      className="two-col"
      style={{
        maxWidth: 1080, width: '100%',
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)',
        gap: 'clamp(28px, 6vw, 96px)', alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GiantMark kind={slide.mark} size={markSize} progress={Math.min(1, localProgress * 1.4)} />
      </div>

      <div>
        <div
          className="mono"
          style={{
            fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.22em',
            textTransform: 'uppercase', marginBottom: 24,
          }}
        >
          ∘  {slide.eyebrow}  ∘
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 9vw, 132px)',
            fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.04em',
            marginBottom: 26,
          }}
        >
          {slide.title}
        </h2>

        <p
          style={{
            fontSize: 'clamp(16px, 1.7vw, 22px)', lineHeight: 1.5,
            color: 'var(--fg-dim)', maxWidth: 540, textWrap: 'pretty', marginBottom: 36,
          }}
        >
          {slide.copy}
        </p>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href={slide.href}
            target="_blank" rel="noreferrer"
            className="mono"
            style={{
              fontSize: 13, padding: '10px 0',
              borderBottom: '1px solid var(--rule-strong)',
            }}
          >
            {slide.cta} <span style={{ color: 'var(--fg-faint)' }}>↗</span>
          </a>
          <span
            className="mono"
            style={{
              fontSize: 10, color: 'var(--fg-dim)',
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}
          >
            {slide.role}
          </span>
        </div>
      </div>
    </div>
  );
}
