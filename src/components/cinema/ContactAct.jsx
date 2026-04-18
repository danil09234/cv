import { useState } from 'react';

// The contact slide: email front and centre, clickable to copy, with a small
// row of social links beneath. Visibility/pointer-events are handled by the
// parent slide wrapper in CinematicStack — this component just renders.
export default function ContactAct({ links }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:' + links.email;
    }
  };

  const items = [
    { label: 'GitHub',   href: links.githubUrl,   value: links.github },
    { label: 'LinkedIn', href: links.linkedinUrl, value: links.linkedin },
    { label: 'Telegram', href: links.telegramUrl, value: links.telegram },
  ];

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 11, color: 'var(--fg-faint)', letterSpacing: '0.22em',
          textTransform: 'uppercase', marginBottom: 32,
        }}
      >
        ∘  The end is an invitation  ∘
      </div>

      <a
        href={'mailto:' + links.email}
        onClick={onCopy}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 6vw, 76px)', fontWeight: 500,
          letterSpacing: '-0.025em', lineHeight: 1,
          borderBottom: '1px solid var(--rule-strong)',
          paddingBottom: 14, marginBottom: 28,
          transition: 'border-color .3s var(--ease-out)',
          color: 'var(--fg)',
          maxWidth: '92vw', whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--fg)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'var(--rule-strong)')}
      >
        {links.email}
      </a>

      <div
        className="mono"
        style={{
          fontSize: 11,
          color: copied ? 'var(--fg)' : 'var(--fg-faint)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          marginBottom: 56,
          transition: 'color .3s',
        }}
      >
        {copied ? '✓ copied' : 'Click to copy'}
      </div>

      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              padding: '4px 2px',
            }}
          >
            <span
              className="mono"
              style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-faint)' }}
            >
              {l.label}
            </span>
            <span className="mono" style={{ fontSize: 14, color: 'var(--fg-dim)' }}>
              {l.value} <span style={{ color: 'var(--fg-faint)' }}>↗</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
