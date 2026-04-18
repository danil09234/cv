// Small mono indicator at the bottom of the viewport — ticks through the
// labels of each act as the user scrolls. Fades out at the very end.
export default function ScrollHint({ progress, labels }) {
  const idx = Math.min(labels.length - 1, Math.floor(progress * labels.length));
  return (
    <div
      style={{
        position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 14,
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: 'var(--fg-faint)', textTransform: 'uppercase', letterSpacing: '0.18em',
        zIndex: 20, pointerEvents: 'none',
        opacity: progress > 0.97 ? 0 : 1,
        transition: 'opacity .6s var(--ease-out)',
      }}
    >
      <span style={{ display: 'inline-flex', gap: 4 }}>
        {labels.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === idx ? 18 : 6,
              height: 1,
              background: i === idx ? 'var(--fg)' : 'var(--rule-strong)',
              transition: 'all .4s var(--ease-out)',
            }}
          />
        ))}
      </span>
      <span style={{ color: 'var(--fg-dim)' }}>{labels[idx]}</span>
    </div>
  );
}
