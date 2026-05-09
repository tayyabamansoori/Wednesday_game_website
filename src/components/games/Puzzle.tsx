import { useMemo, useState } from "react";

export function Puzzle({ back }: { back: () => void }) {
  const RING_COUNTS = [8, 6, 4];
  const COLORS = ["var(--purple-bright)", "var(--blue-electric)", "var(--gold-antique)", "var(--red-blood)"];
  const solution = useMemo(() => {
    const all: { ring: number; idx: number }[] = [];
    RING_COUNTS.forEach((n, r) => { for (let i = 0; i < n; i++) all.push({ ring: r, idx: i }); });
    return all.sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);
  const [progress, setProgress] = useState(0);
  const [activated, setActivated] = useState<Record<string, string>>({});
  const [error, setError] = useState(false);
  const [won, setWon] = useState(false);

  const click = (ring: number, idx: number) => {
    if (won) return;
    const expect = solution[progress];
    if (expect.ring === ring && expect.idx === idx) {
      const key = `${ring}-${idx}`;
      setActivated({ ...activated, [key]: COLORS[progress % COLORS.length] });
      const np = progress + 1;
      setProgress(np);
      if (np === solution.length) setTimeout(() => setWon(true), 400);
    } else {
      setError(true);
      setTimeout(() => { setError(false); setActivated({}); setProgress(0); }, 500);
    }
  };

  const cx = 250, cy = 250;
  const radii = [220, 160, 100];
  const arcPath = (ring: number, idx: number, count: number) => {
    const r = radii[ring]; const r2 = ring < 2 ? radii[ring + 1] : 40;
    const seg = (Math.PI * 2) / count;
    const a1 = idx * seg - Math.PI / 2 + 0.04;
    const a2 = (idx + 1) * seg - Math.PI / 2 - 0.04;
    const p = (rad: number, a: number) => `${cx + Math.cos(a) * rad} ${cy + Math.sin(a) * rad}`;
    const large = a2 - a1 > Math.PI ? 1 : 0;
    return `M ${p(r, a1)} A ${r} ${r} 0 ${large} 1 ${p(r, a2)} L ${p(r2, a2)} A ${r2} ${r2} 0 ${large} 0 ${p(r2, a1)} Z`;
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${error ? "shake" : ""}`}>
      <h2 className="font-display text-glow-purple text-center" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--purple-electric)" }}>RESTORE THE SIGIL</h2>
      <p className="font-lore italic mt-2 mb-8 text-center" style={{ color: "var(--text-secondary)" }}>The pattern was broken. You must remember what was forgotten.</p>
      <svg viewBox="0 0 500 500" style={{ width: "min(90vw, 540px)", height: "auto", filter: won ? "drop-shadow(0 0 40px var(--purple-bright))" : undefined }} className={won ? "spin-slow" : ""}>
        {RING_COUNTS.map((count, ring) => [...Array(count)].map((_, idx) => {
          const key = `${ring}-${idx}`;
          const color = activated[key];
          return <path key={key} d={arcPath(ring, idx, count)} fill={color || "rgba(20,15,30,0.7)"} stroke={color || "var(--border-glow)"} strokeWidth={1} onClick={() => click(ring, idx)} style={{ cursor: "none", transition: "all 250ms", filter: color ? `drop-shadow(0 0 12px ${color})` : undefined }} />;
        }))}
        <circle cx={cx} cy={cy} r={36} fill="var(--shadow-deep)" stroke="var(--purple-bright)" strokeWidth={1} style={{ filter: "drop-shadow(0 0 20px var(--purple-bright))" }} />
        <text x={cx} y={cy + 8} textAnchor="middle" fontSize={28} fill="var(--purple-electric)" fontFamily="Cinzel Decorative">⚸</text>
      </svg>
      <div className="mt-6 font-stat text-sm" style={{ color: "var(--text-secondary)" }}>PROGRESS: {progress} / {solution.length}</div>
      {won && <div className="glass clip-chamfer mt-6 p-6 font-lore italic text-center max-w-md" style={{ color: "var(--text-primary)" }}>"The web remembers. Balance is restored."</div>}
      <button onClick={back} className="gothic-btn clip-chamfer mt-8">◄ Back to Games</button>
    </div>
  );
}
