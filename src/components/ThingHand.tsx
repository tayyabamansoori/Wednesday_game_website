import { useEffect, useRef, useState } from "react";
import thingImg from "@/assets/thing.png";

const MESSAGES = [
  "You came here willingly. How disappointing.",
  "I have seen what happens next. I will not spoil it.",
  "The dead are less tedious than you.",
  "Your curiosity is noted. It will not save you.",
  "Do proceed. The monsters need exercise.",
  "You smell of borrowed time.",
  "I would warn you, but watching is more amusing.",
  "Click again. I dare you to be predictable.",
  "Your hand trembles. I approve.",
  "The screen does not look back. I do.",
  "Mediocrity is the loudest curse.",
  "Keep going. I am collecting your mistakes.",
  "You read this aloud. I heard you.",
  "There is no exit. There is only delay.",
  "Stop fidgeting. The shadows are trying to concentrate.",
  "I have buried louder things than you.",
  "Smile. Or don't. Both endings are written.",
  "The orb dislikes flatterers.",
  "You think this is a game. How quaint.",
  "Your future is overrated. Choose anyway.",
];

export function ThingHand() {
  const [msg, setMsg] = useState<string | null>(null);
  const [risen, setRisen] = useState(false);
  const cooldown = useRef(false);

  const tap = () => {
    if (cooldown.current) return;
    cooldown.current = true;
    setRisen(true);
    setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    setTimeout(() => setRisen(false), 600);
    setTimeout(() => setMsg(null), 3500);
    setTimeout(() => { cooldown.current = false; }, 5500);
  };

  return (
    <div className="fixed bottom-8 right-8 pointer-events-none" style={{ zIndex: 50 }}>
      {msg && (
        <div className="glass clip-chamfer absolute right-0 bottom-[140px] w-72 p-4 font-lore italic text-sm" style={{ color: 'var(--text-primary)' }}>
          "{msg}"
          <div className="absolute -bottom-3 right-12 w-6 h-6 rotate-45" style={{ background: 'var(--surface-glass)', borderRight: '1px solid var(--border-glow)', borderBottom: '1px solid var(--border-glow)' }} />
        </div>
      )}
      <button
        onClick={tap}
        className="pointer-events-auto thing-float relative"
        style={{ width: 110, transform: risen ? 'translateY(-18px)' : undefined, transition: 'transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)', cursor: 'none', background: 'transparent', border: 'none' }}
        aria-label="Thing"
      >
        <img src={thingImg} alt="Thing" style={{ width: '100%', filter: 'drop-shadow(0 10px 25px rgba(124,58,237,0.45)) drop-shadow(0 0 18px rgba(0,0,0,0.8))' }} />
      </button>
    </div>
  );
}
