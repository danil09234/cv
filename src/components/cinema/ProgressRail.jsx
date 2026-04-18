// Thin vertical rail on the right edge that fills top → bottom as the user scrolls.
export default function ProgressRail({ progress }) {
  return (
    <div
      className="progress-rail"
      style={{
        position: 'fixed', top: '12vh', bottom: '12vh', right: 24, zIndex: 20,
        width: 1, pointerEvents: 'none',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(245,243,238,0.12)' }} />

      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: `${progress * 100}%`,
          background: 'var(--fg)',
        }}
      />

      <div
        style={{
          position: 'absolute', left: -3, top: `${progress * 100}%`,
          width: 7, height: 7, borderRadius: '50%',
          background: 'var(--fg)',
          transform: 'translateY(-50%)',
          boxShadow: '0 0 0 3px rgba(245,243,238,0.10), 0 0 12px rgba(245,243,238,0.45)',
        }}
      />
    </div>
  );
}
