// Invisible scroll runway — the tall element that generates scroll distance
// so the fixed cinematic view has something to animate against.
export default function CinematicRunway({ runwayVh = 820 }) {
  return <div aria-hidden="true" style={{ height: runwayVh + 'vh' }} />;
}
