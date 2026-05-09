import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AmbientLayers } from "@/components/AmbientLayers";
import { ThingHand } from "@/components/ThingHand";
import { CustomCursor } from "@/components/CustomCursor";
import { Orb } from "@/components/Orb";
import { Navbar } from "@/components/Navbar";
import moonscape from "@/assets/hero-bg.jpg";
import beastImg from "@/assets/beast.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wednesday — Something Wicked" },
      { name: "description", content: "A gothic interactive descent into Wednesday Addams' world." },
    ],
  }),
  component: App,
});

type Scene = "landing" | "hub" | "oracle" | "puzzle" | "combat";

function App() {
  const [scene, setScene] = useState<Scene>("landing");
  const [transitioning, setTransitioning] = useState(false);

  const go = (next: Scene) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setScene(next), 430);
    setTimeout(() => setTransitioning(false), 830);
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'var(--void)' }}>
      {/* Backdrop */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, backgroundImage: `url(${moonscape})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(ellipse at 50% 55%, rgba(124,58,237,0.25), transparent 55%), linear-gradient(to bottom, rgba(4,4,6,0.55) 0%, rgba(4,4,6,0.2) 40%, var(--void) 100%)' }} />

      <AmbientLayers />

      <div className="relative" style={{ zIndex: 10 }}>
        {scene === "landing" && <Landing onEnter={() => go("hub")} onOracle={() => go("oracle")} />}
        {scene === "hub" && <Hub go={go} />}
        {scene === "oracle" && <Oracle back={() => go("hub")} />}
        {scene === "puzzle" && <Puzzle back={() => go("hub")} />}
        {scene === "combat" && <Combat back={() => go("hub")} />}
      </div>

      <ThingHand />
      <CustomCursor />

      {/* Transition overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999, background: 'var(--void)', opacity: transitioning ? 1 : 0, transition: transitioning ? 'opacity 280ms ease-in' : 'opacity 400ms ease-out 150ms' }}>
        <svg className="w-full h-full opacity-30">
          <filter id="noise"><feTurbulence baseFrequency="0.9" /></filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}

/* ============================== LANDING ============================== */
function Landing({ onEnter, onOracle }: { onEnter: () => void; onOracle: () => void }) {
  return (
    <div className="min-h-screen flex flex-col px-8 pb-16">
      <div className="-mx-8">
        <Navbar />
      </div>

      {/* HERO */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-4">
        <h1 className="font-display title-flicker" style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', color: 'var(--purple-electric)', textShadow: '0 0 30px rgba(168,120,255,0.8), 0 0 80px rgba(124,58,237,0.6), 0 0 140px rgba(124,58,237,0.4)', letterSpacing: '0.06em', lineHeight: 1 }}>
          WEDNESDAY
        </h1>
        <p className="font-ui mt-4 tracking-[0.45em]" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.7rem, 1.1vw, 1rem)' }}>
          BAD THINGS COME IN THREES
        </p>

        {/* Orb (already includes hand) */}
        <div className="mt-2 -mb-4">
          <Orb size={Math.min(460, typeof window !== 'undefined' ? window.innerWidth - 80 : 420)} onClick={onOracle} />
        </div>

        {/* CTA buttons with diamond divider */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mt-6 flex-wrap">
          <button onClick={onEnter} className="gothic-btn group" style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)', padding: '20px 56px', minWidth: 280 }}>
            <div className="font-display text-lg tracking-[0.2em]" style={{ color: 'var(--purple-electric)' }}>ENTER NEVERMORE</div>
            <div className="font-ui text-[10px] tracking-[0.45em] mt-1" style={{ color: 'var(--text-secondary)' }}>EXPLORE THE GAMES</div>
          </button>

          <div className="hidden md:flex flex-col items-center font-display" style={{ color: 'var(--purple-electric)' }}>
            <span style={{ fontSize: '0.7rem', textShadow: '0 0 10px var(--purple-bright)' }}>◆</span>
            <span className="my-1 h-6 w-px" style={{ background: 'linear-gradient(to bottom, var(--purple-bright), transparent)' }} />
            <span style={{ fontSize: '0.7rem', textShadow: '0 0 10px var(--purple-bright)' }}>◆</span>
          </div>

          <button onClick={onOracle} className="gothic-btn group" style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)', padding: '20px 56px', minWidth: 280 }}>
            <div className="font-display text-lg tracking-[0.2em]" style={{ color: 'var(--purple-electric)' }}>SEEK THE ORACLE</div>
            <div className="font-ui text-[10px] tracking-[0.45em] mt-1" style={{ color: 'var(--text-secondary)' }}>RECEIVE YOUR FATE</div>
          </button>
         
         {/* Developer credit */}
<div className="w-full flex justify-center mt-6">
  <p
    className="text-xs tracking-[0.2em]"
    style={{
      color: 'var(--text-secondary)',
      textShadow: '0 0 8px rgba(168, 85, 247, 0.3)',
    }}
  >
    Developed by{" "}
    <span style={{ color: 'var(--purple-electric)' }}>
      Tayyaba Rehan
    </span>
  </p>
</div>
        </div>
      </div>
    </div>
  );
}

/* ============================== HUB ============================== */
function Hub({ go }: { go: (s: Scene) => void }) {
  const cards = [
    { key: "oracle", title: "ORACLE", color: "var(--purple-bright)", glow: "var(--glow-purple)", desc: "The orb does not speak. It simply reflects what you refuse to face.", cta: "Receive a Vision", scene: "oracle" as Scene, sigil: "☽", to: null as string | null },
    { key: "puzzle", title: "THE WEB", color: "var(--blue-electric)", glow: "var(--glow-blue)", desc: "The web was woven before you arrived. You are merely a caught thing learning its geometry.", cta: "Restore the Sigil", scene: "puzzle" as Scene, sigil: "✶", to: null as string | null },
    { key: "combat", title: "THE HUNT", color: "var(--red-ember)", glow: "var(--glow-red)", desc: "The monsters are patient. They have been waiting here since long before you.", cta: "Begin the Unpleasantness", scene: "combat" as Scene, sigil: "✟", to: null as string | null },
    { key: "visions", title: "VISIONS OF NEVERMORE", color: "var(--purple-electric)", glow: "var(--glow-purple)", desc: "A stealth descent through the library's gaze. Slip past what watches and gather the visions.", cta: "Enter the Vision", scene: "oracle" as Scene, sigil: "◆", to: "/game/visions" as string | null },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="flex items-center gap-6 mb-3">
        <div className="h-px w-24 md:w-40" style={{ background: 'linear-gradient(to right, transparent, var(--purple-bright))', transform: 'rotate(-2deg)' }} />
        <h2 className="font-display text-glow-purple text-center" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text-primary)' }}>CHOOSE YOUR FATE</h2>
        <div className="h-px w-24 md:w-40" style={{ background: 'linear-gradient(to left, transparent, var(--purple-bright))', transform: 'rotate(2deg)' }} />
      </div>
      <p className="font-lore italic mb-12 text-center" style={{ color: 'var(--text-secondary)' }}>Three doors. Each one a wound.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {cards.map((c, i) => {
          const inner = (
            <>
              <div className="flex items-center justify-center h-32 mb-6">
                <div className="font-display spin-slow" style={{ fontSize: '6rem', color: c.color, textShadow: `0 0 30px ${c.color}` }}>{c.sigil}</div>
              </div>
              <h3 className="font-display text-2xl mb-4 text-center" style={{ color: c.color, letterSpacing: '0.2em' }}>{c.title}</h3>
              <p className="font-lore italic text-center mb-6" style={{ color: 'var(--text-secondary)' }}>{c.desc}</p>
              <div className="absolute bottom-6 left-0 right-0 text-center font-ui text-sm" style={{ color: 'var(--text-primary)' }}>{c.cta} →</div>
            </>
          );
          const cls = "glass clip-card group relative text-left p-8 transition-all duration-500 block";
          const st: React.CSSProperties = { minHeight: 420, borderColor: c.color, boxShadow: c.glow, animation: `log-in 600ms ${i * 150}ms both`, cursor: 'none' };
          const onEnterH = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 0 60px ${c.color}, ${c.glow}`; };
          const onLeaveH = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = c.glow; };
          return c.to ? (
            <Link key={c.key} to={c.to} className={cls} style={st} onMouseEnter={onEnterH} onMouseLeave={onLeaveH}>{inner}</Link>
          ) : (
            <button key={c.key} onClick={() => go(c.scene)} className={cls} style={st} onMouseEnter={onEnterH} onMouseLeave={onLeaveH}>{inner}</button>
          );
        })}
      </div>
    </div>
  );
}

/* ============================== ORACLE ============================== */
const ORACLE_LINES = [
  "The path you think you chose was chosen long before you arrived.",
  "Something watches you read this. It has always been watching.",
  "You keep looking for doors. There is only the abyss, leaning back.",
  "The grave you fear is not yours. That is what should disturb you.",
  "What you mistake for memory is the house remembering you.",
  "Three names will save you. You already forgot the second.",
  "The mirror that flatters is the one that lies most softly.",
  "You will hear it tonight. Pretend you did not.",
  "Every promise you keep is a promise to something else.",
  "The candle goes out before the room learns it was alight.",
  "You will recognize the danger only by its handwriting.",
  "There is a room in your house you have not yet entered.",
  "The thing in the hall is not the thing you think.",
  "Your shadow has been keeping different hours than you.",
  "You will be loved. That is the worst of it.",
  "The dead keep better secrets than the living deserve.",
  "Do not finish the sentence. The sentence finishes itself.",
  "Nothing is following you. Nothing has been very busy.",
  "The door opens for you. It opens for everyone.",
  "Tomorrow is not a promise. It is a habit.",
];

function Oracle({ back }: { back: () => void }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const fullRef = useRef("");

  const ask = () => {
    if (typing) return;
    const line = ORACLE_LINES[Math.floor(Math.random() * ORACLE_LINES.length)];
    fullRef.current = line;
    setText("");
    setTyping(true);
    setCount(c => c + 1);
    let i = 0;
    const tick = () => {
      i++;
      setText(line.slice(0, i));
      if (i < line.length) setTimeout(tick, 30 + Math.random() * 25);
      else setTyping(false);
    };
    tick();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 30%, var(--void) 75%)' }} />
      <div className="relative z-10 flex flex-col items-center">
        <Orb size={320} onClick={ask} intense />
        {!text && (
          <p className="font-ui pulse-soft mt-6 text-sm" style={{ color: 'var(--text-secondary)', letterSpacing: '0.3em' }}>TOUCH THE ORB</p>
        )}
        {text && (
          <div className="glass clip-chamfer mt-10 max-w-xl p-8 font-lore italic text-center" style={{ color: 'var(--text-primary)', fontSize: '1.15rem' }}>
            "{text}{typing && <span className="opacity-60">▌</span>}"
          </div>
        )}

        <div className="absolute bottom-[-100px] right-[-30px] font-stat text-xs" style={{ color: 'var(--text-muted)' }}>
          VISIONS RECEIVED: {count}
        </div>
      </div>
      <button onClick={back} className="gothic-btn clip-chamfer mt-16">Retreat</button>
    </div>
  );
}

/* ============================== PUZZLE ============================== */
function Puzzle({ back }: { back: () => void }) {
  const RING_COUNTS = [8, 6, 4];
  const COLORS = ['var(--purple-bright)', 'var(--blue-electric)', 'var(--gold-antique)', 'var(--red-blood)'];
  const solution = useMemo(() => {
    const all: { ring: number; idx: number }[] = [];
    RING_COUNTS.forEach((n, r) => { for (let i = 0; i < n; i++) all.push({ ring: r, idx: i }); });
    return all.sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);
  const [progress, setProgress] = useState<number>(0);
  const [activated, setActivated] = useState<Record<string, string>>({});
  const [error, setError] = useState(false);
  const [won, setWon] = useState(false);

  const click = (ring: number, idx: number) => {
    if (won) return;
    const expect = solution[progress];
    if (expect.ring === ring && expect.idx === idx) {
      const key = `${ring}-${idx}`;
      const newAct = { ...activated, [key]: COLORS[progress % COLORS.length] };
      setActivated(newAct);
      const np = progress + 1;
      setProgress(np);
      if (np === solution.length) {
        setTimeout(() => setWon(true), 400);
      }
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
    const large = (a2 - a1) > Math.PI ? 1 : 0;
    return `M ${p(r, a1)} A ${r} ${r} 0 ${large} 1 ${p(r, a2)} L ${p(r2, a2)} A ${r2} ${r2} 0 ${large} 0 ${p(r2, a1)} Z`;
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${error ? 'shake' : ''}`}>
      <h2 className="font-display text-glow-purple text-center" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--purple-electric)' }}>RESTORE THE SIGIL</h2>
      <p className="font-lore italic mt-2 mb-8 text-center" style={{ color: 'var(--text-secondary)' }}>The pattern was broken. You must remember what was forgotten.</p>

      <svg viewBox="0 0 500 500" style={{ width: 'min(90vw, 540px)', height: 'auto', filter: won ? 'drop-shadow(0 0 40px var(--purple-bright))' : undefined }} className={won ? 'spin-slow' : ''}>
        {RING_COUNTS.map((count, ring) => (
          [...Array(count)].map((_, idx) => {
            const key = `${ring}-${idx}`;
            const color = activated[key];
            return (
              <path
                key={key}
                d={arcPath(ring, idx, count)}
                fill={color || 'rgba(20,15,30,0.7)'}
                stroke={color || 'var(--border-glow)'}
                strokeWidth={1}
                onClick={() => click(ring, idx)}
                style={{ cursor: 'none', transition: 'all 250ms', filter: color ? `drop-shadow(0 0 12px ${color})` : undefined }}
              />
            );
          })
        ))}
        {/* radial spines */}
        {[...Array(8)].map((_, i) => {
          const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
          return <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * 230} y2={cy + Math.sin(a) * 230} stroke="var(--border-sharp)" strokeWidth={0.5} />;
        })}
        <circle cx={cx} cy={cy} r={36} fill="var(--shadow-deep)" stroke="var(--purple-bright)" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 20px var(--purple-bright))' }} />
        <text x={cx} y={cy + 8} textAnchor="middle" fontSize={28} fill="var(--purple-electric)" fontFamily="Cinzel Decorative">⚸</text>
      </svg>

      <div className="mt-6 font-stat text-sm" style={{ color: 'var(--text-secondary)' }}>
        PROGRESS: {progress} / {solution.length}
      </div>

      {won && (
        <div className="glass clip-chamfer mt-6 p-6 font-lore italic text-center max-w-md" style={{ color: 'var(--text-primary)' }}>
          "The web remembers. Balance is restored."
        </div>
      )}

      <button onClick={back} className="gothic-btn clip-chamfer mt-8">Retreat</button>
    </div>
  );
}

/* ============================== COMBAT ============================== */
type Status = "normal" | "stunned" | "weakened" | "cursed";
const ENEMIES = [
  { name: "The Hollow Shade", hp: 60, dmg: [8, 14], status: "weakened" as Status, color: "var(--purple-bright)" },
  { name: "The Rot Witch", hp: 95, dmg: [10, 16], status: "cursed" as Status, color: "var(--red-blood)", regen: 4 },
  { name: "The Stone Sentinel", hp: 160, dmg: [12, 18], status: "normal" as Status, color: "var(--gold-antique)", reflect: 0.2 },
  { name: "The Fevered Specter", hp: 110, dmg: [6, 24], status: "stunned" as Status, color: "var(--blue-electric)" },
  { name: "The Null", hp: 180, dmg: [14, 22], status: "cursed" as Status, color: "var(--red-ember)", copy: true },
];

type LogEntry = { text: string; type: "player" | "enemy" | "status" | "system" | "crit" };

function Combat({ back }: { back: () => void }) {
  const [hp, setHp] = useState(100);
  const [maxHp] = useState(100);
  const [energy, setEnergy] = useState(60);
  const [maxEnergy] = useState(100);
  const [pStatus, setPStatus] = useState<Status>("normal");
  const [eIdx, setEIdx] = useState(0);
  const [eHp, setEHp] = useState(ENEMIES[0].hp);
  const [eStatus, setEStatus] = useState<Status>("normal");
  const [log, setLog] = useState<LogEntry[]>([{ text: "The hunt begins. Something is watching.", type: "system" }]);
  const [defeated, setDefeated] = useState(0);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState<"win" | "lose" | null>(null);
  const enemy = ENEMIES[eIdx];
  const eMaxHp = enemy.hp;
  const lastAction = useRef<string>("STRIKE");

  const push = (e: LogEntry) => setLog(l => [...l, e].slice(-50));

  const enemyTurn = (currentEHp: number, currentHp: number) => {
    setTimeout(() => {
      if (currentEHp <= 0) return;
      let dmg = enemy.dmg[0] + Math.floor(Math.random() * (enemy.dmg[1] - enemy.dmg[0]));
      if (eStatus === "stunned") { push({ text: `${enemy.name} is stunned and falters.`, type: "status" }); setEStatus("normal"); finish(currentEHp, currentHp); return; }
      if (pStatus === "weakened") dmg = Math.floor(dmg * 1.3);
      if (enemy.copy && lastAction.current === "DARK SURGE") dmg += 8;
      const newHp = Math.max(0, currentHp - dmg);
      setHp(newHp);
      push({ text: `${enemy.name} strikes for ${dmg} damage.`, type: "enemy" });
      if (Math.random() < 0.25 && enemy.status !== "normal") { setPStatus(enemy.status); push({ text: `You are ${enemy.status.toUpperCase()}.`, type: "status" }); }
      if (enemy.regen) { const ne = Math.min(eMaxHp, currentEHp + enemy.regen); setEHp(ne); push({ text: `${enemy.name} regenerates ${enemy.regen}.`, type: "status" }); }
      if (newHp <= 0) { setOver("lose"); push({ text: "Even Wednesday falls, eventually.", type: "crit" }); }
      finish(currentEHp, newHp);
    }, 900);
  };

  const finish = (_: number, __: number) => setBusy(false);

  const act = (action: "STRIKE" | "DARK SURGE" | "WITHER" | "ENDURE") => {
    if (busy || over) return;
    if (pStatus === "stunned") { push({ text: "You are stunned. The turn slips away.", type: "status" }); setPStatus("normal"); setBusy(true); enemyTurn(eHp, hp); return; }
    lastAction.current = action;
    let newE = eHp; let newEn = energy; let newHp = hp;
    if (action === "STRIKE") {
      let d = 14 + Math.floor(Math.random() * 8);
      if (pStatus === "cursed") d = Math.floor(d * 0.7);
      if (enemy.reflect) { const r = Math.floor(d * enemy.reflect); newHp = Math.max(0, hp - r); push({ text: `Reflected ${r} back to you.`, type: "status" }); }
      newE = Math.max(0, eHp - d);
      push({ text: `You strike for ${d}.`, type: "player" });
    } else if (action === "DARK SURGE") {
      if (energy < 35) { push({ text: "Not enough energy.", type: "system" }); return; }
      let d = 32 + Math.floor(Math.random() * 12);
      newE = Math.max(0, eHp - d); newEn = energy - 35;
      push({ text: `Dark Surge tears through for ${d}.`, type: "crit" });
    } else if (action === "WITHER") {
      if (energy < 20) { push({ text: "Not enough energy.", type: "system" }); return; }
      newEn = energy - 20;
      setEStatus("cursed");
      push({ text: `${enemy.name} is CURSED.`, type: "status" });
    } else {
      const heal = 15 + Math.floor(Math.random() * 11);
      newHp = Math.min(maxHp, hp + heal); newEn = Math.min(maxEnergy, energy + 20);
      push({ text: `You endure. +${heal} HP, +20 energy.`, type: "status" });
    }
    setHp(newHp); setEHp(newE); setEnergy(newEn); setBusy(true);

    if (newE <= 0) {
      push({ text: `${enemy.name} is undone.`, type: "crit" });
      const nd = defeated + 1;
      setDefeated(nd);
      if (nd >= ENEMIES.length) { setOver("win"); setBusy(false); return; }
      setTimeout(() => {
        const ni = eIdx + 1;
        setEIdx(ni); setEHp(ENEMIES[ni].hp); setEStatus("normal");
        push({ text: `${ENEMIES[ni].name} emerges from the dark.`, type: "system" });
        setBusy(false);
      }, 700);
      return;
    }
    enemyTurn(newE, newHp);
  };

  const reset = () => { setHp(100); setEnergy(60); setPStatus("normal"); setEIdx(0); setEHp(ENEMIES[0].hp); setEStatus("normal"); setDefeated(0); setOver(null); setLog([{ text: "You rise again.", type: "system" }]); };

  const Bar = ({ value, max, color, label }: any) => (
    <div className="mb-2">
      <div className="flex justify-between font-stat text-xs mb-1" style={{ color: 'var(--text-secondary)' }}><span>{label}</span><span>{value}/{max}</span></div>
      <div className="h-2 w-full" style={{ background: 'var(--shadow-deep)', border: '1px solid var(--border-sharp)' }}>
        <div style={{ width: `${(value / max) * 100}%`, height: '100%', background: color, boxShadow: `0 0 12px ${color}`, transition: 'width 400ms' }} />
      </div>
    </div>
  );

  const logColor = (t: LogEntry["type"]) => ({ player: 'var(--purple-electric)', enemy: 'var(--red-ember)', status: 'var(--gold-antique)', system: 'var(--text-muted)', crit: 'var(--blue-electric)' }[t]);

  return (
    <div className="min-h-screen px-4 md:px-8 py-12 flex flex-col items-center">
      <h2 className="font-display text-glow-red mb-6 text-center" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: 'var(--red-ember)' }}>THE HUNT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Enemy panel */}
        <div className="glass clip-card p-6" style={{ borderColor: enemy.color, boxShadow: `0 0 30px ${enemy.color}`, order: 0 }}>
          <h3 className="font-display text-xl mb-3" style={{ color: enemy.color, letterSpacing: '0.18em' }}>{enemy.name}</h3>
          <div className="h-40 flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: `radial-gradient(circle, ${enemy.color}33, transparent 70%)` }}>
            <img src={beastImg} alt="" style={{ height: '100%', objectFit: 'contain', filter: `hue-rotate(${eIdx * 60}deg) drop-shadow(0 0 20px ${enemy.color})`, mixBlendMode: 'screen' }} />
          </div>
          <Bar value={eHp} max={eMaxHp} color="var(--red-blood)" label="VITALITY" />
          {eStatus !== "normal" && <span className="font-stat text-xs px-2 py-1 inline-block mt-2" style={{ background: 'var(--shadow-deep)', color: 'var(--gold-antique)', border: '1px solid var(--gold-antique)' }}>{eStatus.toUpperCase()}</span>}
        </div>

        {/* Player panel */}
        <div className="glass clip-card p-6" style={{ borderColor: 'var(--purple-bright)', boxShadow: 'var(--glow-purple)' }}>
          <h3 className="font-display text-xl mb-4" style={{ color: 'var(--purple-electric)', letterSpacing: '0.18em' }}>WEDNESDAY</h3>
          <Bar value={hp} max={maxHp} color="var(--purple-electric)" label="HP" />
          <Bar value={energy} max={maxEnergy} color="var(--gold-antique)" label="ENERGY" />
          <span className="font-stat text-xs px-2 py-1 inline-block" style={{ background: 'var(--shadow-deep)', color: pStatus === "normal" ? 'var(--purple-electric)' : 'var(--red-ember)', border: `1px solid ${pStatus === "normal" ? 'var(--purple-bright)' : 'var(--red-ember)'}` }}>{pStatus.toUpperCase()}</span>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {([
              { k: "STRIKE", c: 0 }, { k: "DARK SURGE", c: 35 }, { k: "WITHER", c: 20 }, { k: "ENDURE", c: 0 },
            ] as const).map(b => {
              const dis = busy || !!over || (b.c > energy);
              return (
                <button key={b.k} onClick={() => act(b.k as any)} disabled={dis} className="gothic-btn clip-chamfer text-xs" style={{ padding: '10px 8px', opacity: dis ? 0.4 : 1 }}>
                  {b.k} {b.c > 0 && <span style={{ color: 'var(--gold-antique)' }}>({b.c})</span>}
                </button>
              );
            })}
          </div>
          <div className="font-stat text-xs mt-4" style={{ color: 'var(--text-muted)' }}>CREATURES VANQUISHED: {defeated} / {ENEMIES.length}</div>
        </div>
      </div>

      {/* Log */}
      <div className="glass clip-card mt-6 w-full max-w-5xl p-4 max-h-48 overflow-y-auto" style={{ borderColor: 'var(--border-glow)' }}>
        {log.map((e, i) => <div key={i} className="font-stat text-sm log-in" style={{ color: logColor(e.type), letterSpacing: '0.04em', padding: '2px 0' }}>› {e.text}</div>)}
      </div>

      {over === "win" && (
        <div className="glass clip-chamfer mt-6 p-6 text-center max-w-lg">
          <p className="font-display text-xl text-glow-purple" style={{ color: 'var(--purple-electric)' }}>The hunt is complete.</p>
          <p className="font-lore italic mt-2" style={{ color: 'var(--text-secondary)' }}>They feared you rightly.</p>
        </div>
      )}
      {over === "lose" && (
        <div className="mt-6 flex flex-col items-center">
          <p className="font-lore italic mb-3" style={{ color: 'var(--text-secondary)' }}>"Even Wednesday falls, eventually."</p>
          <button onClick={reset} className="gothic-btn clip-chamfer">Rise Again</button>
        </div>
      )}

      <button onClick={back} className="gothic-btn clip-chamfer mt-6">Withdraw into Darkness</button>
    </div>
  );
}
