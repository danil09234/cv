// Cubic smoothstep clamped to [0, 1]
export const ss = (t) => {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
};

// Map a global progress `p` through the [start, end] window → local 0..1
export const window_ = (p, start, end) => {
  if (end <= start) return 0;
  return Math.max(0, Math.min(1, (p - start) / (end - start)));
};

// Like window_, but returns a bell curve (0 at edges, 1 in the middle `hold` region).
export const bell = (p, start, end, hold = 0.6) => {
  const local = window_(p, start, end);
  const holdHalf = hold / 2;
  const enterEnd = 0.5 - holdHalf;
  const exitStart = 0.5 + holdHalf;
  if (local < enterEnd)  return ss(local / enterEnd);
  if (local > exitStart) return 1 - ss((local - exitStart) / (1 - exitStart));
  return 1;
};
