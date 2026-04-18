import useSmoothed from '../../hooks/useSmoothed';
import ProgressRail from './ProgressRail';

// Persistent UI at the edges of the viewport: name top-left, location top-right,
// and a progress rail on the right edge.
export default function CornerChrome({ progress }) {
  const smooth = useSmoothed(progress, 0.22);

  return (
    <>
      <div
        className="chrome-name"
        style={{
          position: 'fixed', top: 24, left: 32, zIndex: 20,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--fg-dim)', textTransform: 'uppercase', letterSpacing: '0.16em',
          pointerEvents: 'none',
        }}
      >
        <span className="chrome-name-full">Danylo Zahorulko</span>
        <span className="chrome-name-short" style={{ display: 'none' }}>DZ</span>
      </div>

      <div
        className="chrome-anchor"
        style={{
          position: 'fixed', top: 24, right: 32, zIndex: 20,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.18em',
          pointerEvents: 'none',
          display: 'flex', alignItems: 'center', gap: 10,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fg)', opacity: 0.65 }} />
        <span className="chrome-anchor-full">2026 · Bratislava, SK</span>
        <span className="chrome-anchor-short" style={{ display: 'none' }}>2026</span>
      </div>

      <ProgressRail progress={smooth} />
    </>
  );
}
