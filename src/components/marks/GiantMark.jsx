import { ss, window_ } from '../../lib/easing';

// A large animated brand mark used in each brand act. Supports two kinds:
//   kind="seed" — Seedfast's three-leaf mark, each leaf outline-then-fill.
//   kind="sudo" — Sudolabs' three-path mark, outlines stroke in then fill.
// Both share the same orbit frame and entry curve for consistency.
export default function GiantMark({ kind, size, progress }) {
  const p = Math.min(1, Math.max(0, progress));
  const entry = Math.min(1, p * 1.4);

  if (kind === 'seed') return <SeedMark size={size} p={p} entry={entry} />;
  return <SudoMark size={size} p={p} entry={entry} />;
}

function OrbitFrame({ size, p }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ position: 'absolute', inset: 0, transform: `rotate(${p * 60}deg)` }}
    >
      <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(245,243,238,0.10)" strokeWidth="1" />
      <circle
        cx="100" cy="100" r="96" fill="none"
        stroke="var(--fg)" strokeWidth="1.4"
        strokeDasharray="603"
        strokeDashoffset={603 - 603 * p}
        strokeOpacity={0.45}
        transform="rotate(-90 100 100)"
      />
    </svg>
  );
}

function SeedMark({ size, p, entry }) {
  // Each leaf gets its own staggered stroke → fill window.
  const leafA_s = ss(window_(p, 0.00, 0.35));
  const leafA_f = ss(window_(p, 0.50, 0.88));
  const leafB_s = ss(window_(p, 0.12, 0.47));
  const leafB_f = ss(window_(p, 0.60, 0.92));
  const leafC_s = ss(window_(p, 0.22, 0.58));
  const leafC_f = ss(window_(p, 0.68, 0.95));
  const fillIn  = ss(window_(p, 0.4, 0.9));

  return (
    <div
      style={{
        position: 'relative', width: size, height: size,
        transform: `scale(${0.75 + entry * 0.25})`,
        opacity: entry,
      }}
    >
      <div
        style={{
          position: 'absolute', inset: -size * 0.25, borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(100, 180, 170, 0.3) 0%, rgba(100, 180, 170, 0.06) 45%, transparent 70%)',
          opacity: 0.3 + fillIn * 0.7,
          filter: 'blur(8px)',
        }}
      />
      <OrbitFrame size={size} p={p} />

      <svg
        width={size}
        height={size}
        viewBox="150 200 700 600"
        style={{ position: 'absolute', inset: '10%', width: '80%', height: '80%' }}
      >
        <Leaf
          d="M529.618 277.79C520.584 286.34 505.413 307.788 495.526 326.236C480.355 354.434 471.321 382.632 466.377 417.729C463.65 436.928 465.014 485.674 468.764 503.672C475.071 533.52 487.173 563.217 503.197 587.515C518.368 610.913 523.823 612.863 534.221 599.214C577.006 543.419 602.064 468.575 598.655 407.83C596.268 364.633 581.609 322.787 557.744 290.989C543.766 272.241 538.141 269.691 529.618 277.79Z"
          stroke={leafA_s}
          fill={leafA_f}
          dashLen={1100}
        />
        <Leaf
          d="M726.33 382.032C703.318 391.781 676.555 413.379 659.85 435.728C644.338 456.276 626.781 492.723 619.621 518.671C615.36 534.42 615.36 539.819 619.792 541.919C624.394 544.019 634.281 539.369 657.634 523.92C690.533 502.172 713.545 478.774 728.887 451.926C738.603 434.678 741.671 426.728 745.081 409.33C748.831 389.831 748.49 382.182 743.887 379.332C738.944 376.332 740.137 376.182 726.33 382.032Z"
          stroke={leafB_s}
          fill={leafB_f}
          dashLen={900}
        />
        <Leaf
          d="M256.331 403.78C252.24 406.63 252.24 407.08 252.41 431.978C252.581 475.924 262.638 515.521 284.968 559.168C316.333 620.513 372.074 678.408 430.542 710.205C446.565 719.055 453.725 720.705 457.645 716.655C460.884 713.205 460.543 656.21 457.134 636.111C444.69 563.517 403.098 490.323 349.062 445.927C328.606 429.128 287.355 406.63 270.991 403.33C268.263 402.73 264.683 401.98 263.149 401.53C261.615 401.23 258.547 402.13 256.331 403.78Z"
          stroke={leafC_s}
          fill={leafC_f}
          dashLen={1400}
        />
      </svg>
    </div>
  );
}

function Leaf({ d, stroke, fill, dashLen }) {
  return (
    <path
      d={d}
      fill="white" fillOpacity={fill}
      stroke="white" strokeWidth="3"
      strokeOpacity={Math.max(0, 1 - fill * 1.3)}
      strokeDasharray={dashLen}
      strokeDashoffset={dashLen - dashLen * stroke}
    />
  );
}

function SudoMark({ size, p, entry }) {
  const fillIn = ss(window_(p, 0.4, 0.9));

  // Each of the three paths gets its own stroke-in / fill-in curve.
  const aStroke = ss(window_(p, 0.00, 0.35));
  const aFill   = fillIn;
  const bStroke = ss(window_(p, 0.12, 0.47));
  const bFill   = ss(window_(p, 0.50, 0.90));
  const cStroke = ss(window_(p, 0.25, 0.62));
  const cFill   = ss(window_(p, 0.60, 0.95));

  const maskSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>`
    + `<rect width='180' height='180' fill='white'/>`
    + `<svg x='52' y='52' width='76' height='76' viewBox='45 45 90 155' preserveAspectRatio='xMidYMid meet'>`
    + `<path d='M118.695 172.552C123.609 164.07 125.932 154.781 125.932 145.625C109.809 154.915 89.3446 155.588 72.0778 145.625L45.1172 192.276C70.8661 207.12 103.818 198.301 118.695 172.552Z' fill='black'/>`
    + `<path d='M52.3538 72.0477C47.4396 80.5634 45.1172 89.8195 45.1172 98.9746C61.2397 89.6849 81.7041 89.0117 98.971 98.9746L125.898 52.3238C100.149 37.4804 67.1973 46.2989 52.3538 72.0477Z' fill='black'/>`
    + `<path d='M125.898 145.625C109.775 154.915 89.311 155.588 72.0441 145.625C54.7772 135.662 45.1172 117.588 45.1172 98.9744C61.2397 89.6846 81.7041 89.0115 98.971 98.9744C116.238 108.937 125.898 127.046 125.898 145.625Z' fill='black'/>`
    + `</svg></svg>`,
  );
  const maskUrl = `url("data:image/svg+xml;utf8,${maskSvg}")`;

  return (
    <div
      style={{
        position: 'relative', width: size, height: size,
        transform: `scale(${0.75 + entry * 0.25})`,
        opacity: entry,
      }}
    >
      <div
        style={{
          position: 'absolute', inset: -size * 0.4, borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(220, 50, 40, 0.28) 0%, rgba(200, 40, 30, 0.12) 30%, rgba(160, 25, 18, 0.04) 50%, transparent 72%)',
          opacity: 0.35 + fillIn * 0.5,
          filter: 'blur(12px)',
          WebkitMaskImage: maskUrl,
          maskImage: maskUrl,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      <OrbitFrame size={size} p={p} />

      <svg
        width={size}
        height={size}
        viewBox="45 45 90 155"
        style={{ position: 'absolute', inset: '18%', width: '64%', height: '64%' }}
      >
        <defs>
          <linearGradient id="suLinA" x1="45" y1="192" x2="99" y2="99" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="suLinB" x1="72" y1="146" x2="126" y2="53" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M118.695 172.552C123.609 164.07 125.932 154.781 125.932 145.625C109.809 154.915 89.3446 155.588 72.0778 145.625L45.1172 192.276C70.8661 207.12 103.818 198.301 118.695 172.552Z"
          fill="url(#suLinA)" fillOpacity={aFill}
          stroke="white" strokeWidth="1.4"
          strokeOpacity={aStroke > 0.02 ? Math.max(0, 1 - aFill * 1.3) : 0}
          strokeDasharray="290"
          strokeDashoffset={290 - 290 * aStroke}
        />
        <path
          d="M52.3538 72.0477C47.4396 80.5634 45.1172 89.8195 45.1172 98.9746C61.2397 89.6849 81.7041 89.0117 98.971 98.9746L125.898 52.3238C100.149 37.4804 67.1973 46.2989 52.3538 72.0477Z"
          fill="url(#suLinB)" fillOpacity={bFill}
          stroke="white" strokeWidth="1.4"
          strokeOpacity={Math.max(0, 1 - bFill * 1.3)}
          strokeDasharray="290"
          strokeDashoffset={290 - 290 * bStroke}
        />
        <path
          d="M125.898 145.625C109.775 154.915 89.311 155.588 72.0441 145.625C54.7772 135.662 45.1172 117.588 45.1172 98.9744C61.2397 89.6846 81.7041 89.0115 98.971 98.9744C116.238 108.937 125.898 127.046 125.898 145.625Z"
          fill="white" fillOpacity={cFill}
          stroke="white" strokeWidth="1.4"
          strokeOpacity={Math.max(0, 1 - cFill * 1.3)}
          strokeDasharray="310"
          strokeDashoffset={310 - 310 * cStroke}
        />
      </svg>
    </div>
  );
}
