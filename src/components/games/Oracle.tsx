import { useRef, useState } from "react";
import { Orb } from "@/components/Orb";

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
];

export function Oracle({ back }: { back: () => void }) {
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
    setCount((c) => c + 1);
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
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, transparent 30%, var(--void) 75%)" }} />
      <div className="relative z-10 flex flex-col items-center">
        <Orb size={320} onClick={ask} intense />
        {!text && <p className="font-ui pulse-soft mt-6 text-sm" style={{ color: "var(--text-secondary)", letterSpacing: "0.3em" }}>TOUCH THE ORB</p>}
        {text && (
          <div className="glass clip-chamfer mt-10 max-w-xl p-8 font-lore italic text-center" style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}>
            "{text}{typing && <span className="opacity-60">▌</span>}"
          </div>
        )}
        <div className="mt-6 font-stat text-xs" style={{ color: "var(--text-muted)" }}>VISIONS RECEIVED: {count}</div>
      </div>
      <button onClick={back} className="gothic-btn clip-chamfer mt-12">◄ Back to Games</button>
    </div>
  );
}
