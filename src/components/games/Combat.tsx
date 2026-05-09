import { useRef, useState } from "react";
import beastImg from "@/assets/beast.png";

type Status = "normal" | "stunned" | "weakened" | "cursed";
const ENEMIES = [
  { name: "The Hollow Shade", hp: 60, dmg: [8, 14], status: "weakened" as Status, color: "var(--purple-bright)" },
  { name: "The Rot Witch", hp: 95, dmg: [10, 16], status: "cursed" as Status, color: "var(--red-blood)", regen: 4 },
  { name: "The Stone Sentinel", hp: 160, dmg: [12, 18], status: "normal" as Status, color: "var(--gold-antique)", reflect: 0.2 },
  { name: "The Fevered Specter", hp: 110, dmg: [6, 24], status: "stunned" as Status, color: "var(--blue-electric)" },
  { name: "The Null", hp: 180, dmg: [14, 22], status: "cursed" as Status, color: "var(--red-ember)", copy: true },
];
type LogEntry = { text: string; type: "player" | "enemy" | "status" | "system" | "crit" };

export function Combat({ back }: { back: () => void }) {
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

  const push = (e: LogEntry) => setLog((l) => [...l, e].slice(-50));

  const enemyTurn = (currentEHp: number, currentHp: number) => {
    setTimeout(() => {
      if (currentEHp <= 0) return;
      let dmg = enemy.dmg[0] + Math.floor(Math.random() * (enemy.dmg[1] - enemy.dmg[0]));
      if (eStatus === "stunned") { push({ text: `${enemy.name} is stunned and falters.`, type: "status" }); setEStatus("normal"); setBusy(false); return; }
      if (pStatus === "weakened") dmg = Math.floor(dmg * 1.3);
      if (enemy.copy && lastAction.current === "DARK SURGE") dmg += 8;
      const newHp = Math.max(0, currentHp - dmg);
      setHp(newHp);
      push({ text: `${enemy.name} strikes for ${dmg} damage.`, type: "enemy" });
      if (Math.random() < 0.25 && enemy.status !== "normal") { setPStatus(enemy.status); push({ text: `You are ${enemy.status.toUpperCase()}.`, type: "status" }); }
      if (enemy.regen) { const ne = Math.min(eMaxHp, currentEHp + enemy.regen); setEHp(ne); push({ text: `${enemy.name} regenerates ${enemy.regen}.`, type: "status" }); }
      if (newHp <= 0) { setOver("lose"); push({ text: "Even Wednesday falls, eventually.", type: "crit" }); }
      setBusy(false);
    }, 900);
  };

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
      const d = 32 + Math.floor(Math.random() * 12);
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

  const Bar = ({ value, max, color, label }: any) => (
    <div className="mb-2">
      <div className="flex justify-between font-stat text-xs mb-1" style={{ color: "var(--text-secondary)" }}><span>{label}</span><span>{value}/{max}</span></div>
      <div className="h-2 w-full" style={{ background: "var(--shadow-deep)", border: "1px solid var(--border-sharp)" }}>
        <div style={{ width: `${(value / max) * 100}%`, height: "100%", background: color, boxShadow: `0 0 12px ${color}`, transition: "width 400ms" }} />
      </div>
    </div>
  );

  const logColor = (t: LogEntry["type"]) => ({ player: "var(--purple-electric)", enemy: "var(--red-ember)", status: "var(--gold-antique)", system: "var(--text-muted)", crit: "var(--blue-electric)" }[t]);

  return (
    <div className="min-h-screen px-4 md:px-8 py-12 flex flex-col items-center">
      <h2 className="font-display text-glow-red mb-6 text-center" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "var(--red-ember)" }}>THE HUNT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="glass clip-card p-6" style={{ borderColor: enemy.color, boxShadow: `0 0 30px ${enemy.color}` }}>
          <h3 className="font-display text-xl mb-3" style={{ color: enemy.color, letterSpacing: "0.18em" }}>{enemy.name}</h3>
          <div className="h-40 flex items-center justify-center mb-4 relative overflow-hidden" style={{ background: `radial-gradient(circle, ${enemy.color}33, transparent 70%)` }}>
            <img src={beastImg} alt="" style={{ height: "100%", objectFit: "contain", filter: `hue-rotate(${eIdx * 60}deg) drop-shadow(0 0 20px ${enemy.color})`, mixBlendMode: "screen" }} />
          </div>
          <Bar value={eHp} max={eMaxHp} color="var(--red-blood)" label="VITALITY" />
          {eStatus !== "normal" && <span className="font-stat text-xs px-2 py-1 inline-block mt-2" style={{ background: "var(--shadow-deep)", color: "var(--gold-antique)", border: "1px solid var(--gold-antique)" }}>{eStatus.toUpperCase()}</span>}
        </div>
        <div className="glass clip-card p-6" style={{ borderColor: "var(--purple-bright)", boxShadow: "var(--glow-purple)" }}>
          <h3 className="font-display text-xl mb-4" style={{ color: "var(--purple-electric)", letterSpacing: "0.18em" }}>WEDNESDAY</h3>
          <Bar value={hp} max={maxHp} color="var(--purple-electric)" label="HP" />
          <Bar value={energy} max={maxEnergy} color="var(--gold-antique)" label="ENERGY" />
          <span className="font-stat text-xs px-2 py-1 inline-block" style={{ background: "var(--shadow-deep)", color: pStatus === "normal" ? "var(--purple-electric)" : "var(--red-ember)", border: `1px solid ${pStatus === "normal" ? "var(--purple-bright)" : "var(--red-ember)"}` }}>{pStatus.toUpperCase()}</span>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {([{ k: "STRIKE", c: 0 }, { k: "DARK SURGE", c: 35 }, { k: "WITHER", c: 20 }, { k: "ENDURE", c: 0 }] as const).map((b) => {
              const dis = busy || !!over || b.c > energy;
              return <button key={b.k} onClick={() => act(b.k as any)} disabled={dis} className="gothic-btn clip-chamfer text-xs" style={{ padding: "10px 8px", opacity: dis ? 0.4 : 1 }}>{b.k} {b.c > 0 && <span style={{ color: "var(--gold-antique)" }}>({b.c})</span>}</button>;
            })}
          </div>
          <div className="font-stat text-xs mt-4" style={{ color: "var(--text-muted)" }}>CREATURES VANQUISHED: {defeated} / {ENEMIES.length}</div>
        </div>
      </div>
      <div className="glass clip-card mt-6 w-full max-w-5xl p-4 max-h-48 overflow-y-auto" style={{ borderColor: "var(--border-glow)" }}>
        {log.map((e, i) => <div key={i} className="font-stat text-sm log-in" style={{ color: logColor(e.type), letterSpacing: "0.04em", padding: "2px 0" }}>› {e.text}</div>)}
      </div>
      <button onClick={back} className="gothic-btn clip-chamfer mt-6">◄ Back to Games</button>
    </div>
  );
}
