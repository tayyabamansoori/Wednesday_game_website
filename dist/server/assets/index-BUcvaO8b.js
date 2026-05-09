import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { L as Link } from "./router-BnxhV7tT.js";
import { A as AmbientLayers, C as CustomCursor } from "./CustomCursor-CiBYZ5vj.js";
import { O as Orb } from "./Orb-DJxa7eQK.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import { m as moonscape } from "./hero-bg-Dc6R7I0D.js";
import { b as beastImg } from "./beast-Do_Hf26P.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const thingImg = "/assets/thing-BnI3BOpG.png";
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
  "Your future is overrated. Choose anyway."
];
function ThingHand() {
  const [msg, setMsg] = reactExports.useState(null);
  const [risen, setRisen] = reactExports.useState(false);
  const cooldown = reactExports.useRef(false);
  const tap = () => {
    if (cooldown.current) return;
    cooldown.current = true;
    setRisen(true);
    setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    setTimeout(() => setRisen(false), 600);
    setTimeout(() => setMsg(null), 3500);
    setTimeout(() => {
      cooldown.current = false;
    }, 5500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-8 right-8 pointer-events-none", style: { zIndex: 50 }, children: [
    msg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-chamfer absolute right-0 bottom-[140px] w-72 p-4 font-lore italic text-sm", style: { color: "var(--text-primary)" }, children: [
      '"',
      msg,
      '"',
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 right-12 w-6 h-6 rotate-45", style: { background: "var(--surface-glass)", borderRight: "1px solid var(--border-glow)", borderBottom: "1px solid var(--border-glow)" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: tap,
        className: "pointer-events-auto thing-float relative",
        style: { width: 110, transform: risen ? "translateY(-18px)" : void 0, transition: "transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)", cursor: "none", background: "transparent", border: "none" },
        "aria-label": "Thing",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: thingImg, alt: "Thing", style: { width: "100%", filter: "drop-shadow(0 10px 25px rgba(124,58,237,0.45)) drop-shadow(0 0 18px rgba(0,0,0,0.8))" } })
      }
    )
  ] });
}
function App() {
  const [scene, setScene] = reactExports.useState("landing");
  const [transitioning, setTransitioning] = reactExports.useState(false);
  const go = (next) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => setScene(next), 430);
    setTimeout(() => setTransitioning(false), 830);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", style: {
    background: "var(--void)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none", style: {
      zIndex: 0,
      backgroundImage: `url(${moonscape})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none", style: {
      zIndex: 0,
      background: "radial-gradient(ellipse at 50% 55%, rgba(124,58,237,0.25), transparent 55%), linear-gradient(to bottom, rgba(4,4,6,0.55) 0%, rgba(4,4,6,0.2) 40%, var(--void) 100%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientLayers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
      zIndex: 10
    }, children: [
      scene === "landing" && /* @__PURE__ */ jsxRuntimeExports.jsx(Landing, { onEnter: () => go("hub"), onOracle: () => go("oracle") }),
      scene === "hub" && /* @__PURE__ */ jsxRuntimeExports.jsx(Hub, { go }),
      scene === "oracle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Oracle, { back: () => go("hub") }),
      scene === "puzzle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, { back: () => go("hub") }),
      scene === "combat" && /* @__PURE__ */ jsxRuntimeExports.jsx(Combat, { back: () => go("hub") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThingHand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none", style: {
      zIndex: 9999,
      background: "var(--void)",
      opacity: transitioning ? 1 : 0,
      transition: transitioning ? "opacity 280ms ease-in" : "opacity 400ms ease-out 150ms"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full opacity-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("filter", { id: "noise", children: /* @__PURE__ */ jsxRuntimeExports.jsx("feTurbulence", { baseFrequency: "0.9" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", filter: "url(#noise)" })
    ] }) })
  ] });
}
function Landing({
  onEnter,
  onOracle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col px-8 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-center mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display title-flicker", style: {
        fontSize: "clamp(3.5rem, 11vw, 10rem)",
        color: "var(--purple-electric)",
        textShadow: "0 0 30px rgba(168,120,255,0.8), 0 0 80px rgba(124,58,237,0.6), 0 0 140px rgba(124,58,237,0.4)",
        letterSpacing: "0.06em",
        lineHeight: 1
      }, children: "WEDNESDAY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-ui mt-4 tracking-[0.45em]", style: {
        color: "var(--text-secondary)",
        fontSize: "clamp(0.7rem, 1.1vw, 1rem)"
      }, children: "BAD THINGS COME IN THREES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 -mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Orb, { size: Math.min(460, typeof window !== "undefined" ? window.innerWidth - 80 : 420), onClick: onOracle }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 md:gap-10 mt-6 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onEnter, className: "gothic-btn group", style: {
          clipPath: "polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)",
          padding: "20px 56px",
          minWidth: 280
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg tracking-[0.2em]", style: {
            color: "var(--purple-electric)"
          }, children: "ENTER NEVERMORE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-ui text-[10px] tracking-[0.45em] mt-1", style: {
            color: "var(--text-secondary)"
          }, children: "EXPLORE THE GAMES" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex flex-col items-center font-display", style: {
          color: "var(--purple-electric)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: "0.7rem",
            textShadow: "0 0 10px var(--purple-bright)"
          }, children: "◆" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "my-1 h-6 w-px", style: {
            background: "linear-gradient(to bottom, var(--purple-bright), transparent)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: "0.7rem",
            textShadow: "0 0 10px var(--purple-bright)"
          }, children: "◆" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onOracle, className: "gothic-btn group", style: {
          clipPath: "polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)",
          padding: "20px 56px",
          minWidth: 280
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg tracking-[0.2em]", style: {
            color: "var(--purple-electric)"
          }, children: "SEEK THE ORACLE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-ui text-[10px] tracking-[0.45em] mt-1", style: {
            color: "var(--text-secondary)"
          }, children: "RECEIVE YOUR FATE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex justify-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs tracking-[0.2em]", style: {
          color: "var(--text-secondary)",
          textShadow: "0 0 8px rgba(168, 85, 247, 0.3)"
        }, children: [
          "Developed by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "var(--purple-electric)"
          }, children: "Tayyaba Rehan" })
        ] }) })
      ] })
    ] })
  ] });
}
function Hub({
  go
}) {
  const cards = [{
    key: "oracle",
    title: "ORACLE",
    color: "var(--purple-bright)",
    glow: "var(--glow-purple)",
    desc: "The orb does not speak. It simply reflects what you refuse to face.",
    cta: "Receive a Vision",
    scene: "oracle",
    sigil: "☽",
    to: null
  }, {
    key: "puzzle",
    title: "THE WEB",
    color: "var(--blue-electric)",
    glow: "var(--glow-blue)",
    desc: "The web was woven before you arrived. You are merely a caught thing learning its geometry.",
    cta: "Restore the Sigil",
    scene: "puzzle",
    sigil: "✶",
    to: null
  }, {
    key: "combat",
    title: "THE HUNT",
    color: "var(--red-ember)",
    glow: "var(--glow-red)",
    desc: "The monsters are patient. They have been waiting here since long before you.",
    cta: "Begin the Unpleasantness",
    scene: "combat",
    sigil: "✟",
    to: null
  }, {
    key: "visions",
    title: "VISIONS OF NEVERMORE",
    color: "var(--purple-electric)",
    glow: "var(--glow-purple)",
    desc: "A stealth descent through the library's gaze. Slip past what watches and gather the visions.",
    cta: "Enter the Vision",
    scene: "oracle",
    sigil: "◆",
    to: "/game/visions"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-24 md:w-40", style: {
        background: "linear-gradient(to right, transparent, var(--purple-bright))",
        transform: "rotate(-2deg)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-glow-purple text-center", style: {
        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
        color: "var(--text-primary)"
      }, children: "CHOOSE YOUR FATE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-24 md:w-40", style: {
        background: "linear-gradient(to left, transparent, var(--purple-bright))",
        transform: "rotate(2deg)"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic mb-12 text-center", style: {
      color: "var(--text-secondary)"
    }, children: "Three doors. Each one a wound." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl", children: cards.map((c, i) => {
      const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display spin-slow", style: {
          fontSize: "6rem",
          color: c.color,
          textShadow: `0 0 30px ${c.color}`
        }, children: c.sigil }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4 text-center", style: {
          color: c.color,
          letterSpacing: "0.2em"
        }, children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic text-center mb-6", style: {
          color: "var(--text-secondary)"
        }, children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-0 right-0 text-center font-ui text-sm", style: {
          color: "var(--text-primary)"
        }, children: [
          c.cta,
          " →"
        ] })
      ] });
      const cls = "glass clip-card group relative text-left p-8 transition-all duration-500 block";
      const st = {
        minHeight: 420,
        borderColor: c.color,
        boxShadow: c.glow,
        animation: `log-in 600ms ${i * 150}ms both`,
        cursor: "none"
      };
      const onEnterH = (e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 0 60px ${c.color}, ${c.glow}`;
      };
      const onLeaveH = (e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = c.glow;
      };
      return c.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, className: cls, style: st, onMouseEnter: onEnterH, onMouseLeave: onLeaveH, children: inner }, c.key) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => go(c.scene), className: cls, style: st, onMouseEnter: onEnterH, onMouseLeave: onLeaveH, children: inner }, c.key);
    }) })
  ] });
}
const ORACLE_LINES = ["The path you think you chose was chosen long before you arrived.", "Something watches you read this. It has always been watching.", "You keep looking for doors. There is only the abyss, leaning back.", "The grave you fear is not yours. That is what should disturb you.", "What you mistake for memory is the house remembering you.", "Three names will save you. You already forgot the second.", "The mirror that flatters is the one that lies most softly.", "You will hear it tonight. Pretend you did not.", "Every promise you keep is a promise to something else.", "The candle goes out before the room learns it was alight.", "You will recognize the danger only by its handwriting.", "There is a room in your house you have not yet entered.", "The thing in the hall is not the thing you think.", "Your shadow has been keeping different hours than you.", "You will be loved. That is the worst of it.", "The dead keep better secrets than the living deserve.", "Do not finish the sentence. The sentence finishes itself.", "Nothing is following you. Nothing has been very busy.", "The door opens for you. It opens for everyone.", "Tomorrow is not a promise. It is a habit."];
function Oracle({
  back
}) {
  const [count, setCount] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(false);
  const fullRef = reactExports.useRef("");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center px-6 py-16 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      background: "radial-gradient(circle at center, transparent 30%, var(--void) 75%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Orb, { size: 320, onClick: ask, intense: true }),
      !text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-ui pulse-soft mt-6 text-sm", style: {
        color: "var(--text-secondary)",
        letterSpacing: "0.3em"
      }, children: "TOUCH THE ORB" }),
      text && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-chamfer mt-10 max-w-xl p-8 font-lore italic text-center", style: {
        color: "var(--text-primary)",
        fontSize: "1.15rem"
      }, children: [
        '"',
        text,
        typing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "▌" }),
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[-100px] right-[-30px] font-stat text-xs", style: {
        color: "var(--text-muted)"
      }, children: [
        "VISIONS RECEIVED: ",
        count
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "gothic-btn clip-chamfer mt-16", children: "Retreat" })
  ] });
}
function Puzzle({
  back
}) {
  const RING_COUNTS = [8, 6, 4];
  const COLORS = ["var(--purple-bright)", "var(--blue-electric)", "var(--gold-antique)", "var(--red-blood)"];
  const solution = reactExports.useMemo(() => {
    const all = [];
    RING_COUNTS.forEach((n, r) => {
      for (let i = 0; i < n; i++) all.push({
        ring: r,
        idx: i
      });
    });
    return all.sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);
  const [progress, setProgress] = reactExports.useState(0);
  const [activated, setActivated] = reactExports.useState({});
  const [error, setError] = reactExports.useState(false);
  const [won, setWon] = reactExports.useState(false);
  const click = (ring, idx) => {
    if (won) return;
    const expect = solution[progress];
    if (expect.ring === ring && expect.idx === idx) {
      const key = `${ring}-${idx}`;
      const newAct = {
        ...activated,
        [key]: COLORS[progress % COLORS.length]
      };
      setActivated(newAct);
      const np = progress + 1;
      setProgress(np);
      if (np === solution.length) {
        setTimeout(() => setWon(true), 400);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setActivated({});
        setProgress(0);
      }, 500);
    }
  };
  const cx = 250, cy = 250;
  const radii = [220, 160, 100];
  const arcPath = (ring, idx, count) => {
    const r = radii[ring];
    const r2 = ring < 2 ? radii[ring + 1] : 40;
    const seg = Math.PI * 2 / count;
    const a1 = idx * seg - Math.PI / 2 + 0.04;
    const a2 = (idx + 1) * seg - Math.PI / 2 - 0.04;
    const p = (rad, a) => `${cx + Math.cos(a) * rad} ${cy + Math.sin(a) * rad}`;
    const large = a2 - a1 > Math.PI ? 1 : 0;
    return `M ${p(r, a1)} A ${r} ${r} 0 ${large} 1 ${p(r, a2)} L ${p(r2, a2)} A ${r2} ${r2} 0 ${large} 0 ${p(r2, a1)} Z`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-screen flex flex-col items-center justify-center px-6 py-12 ${error ? "shake" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-glow-purple text-center", style: {
      fontSize: "clamp(1.8rem, 4vw, 3rem)",
      color: "var(--purple-electric)"
    }, children: "RESTORE THE SIGIL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic mt-2 mb-8 text-center", style: {
      color: "var(--text-secondary)"
    }, children: "The pattern was broken. You must remember what was forgotten." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 500 500", style: {
      width: "min(90vw, 540px)",
      height: "auto",
      filter: won ? "drop-shadow(0 0 40px var(--purple-bright))" : void 0
    }, className: won ? "spin-slow" : "", children: [
      RING_COUNTS.map((count, ring) => [...Array(count)].map((_, idx) => {
        const key = `${ring}-${idx}`;
        const color = activated[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: arcPath(ring, idx, count), fill: color || "rgba(20,15,30,0.7)", stroke: color || "var(--border-glow)", strokeWidth: 1, onClick: () => click(ring, idx), style: {
          cursor: "none",
          transition: "all 250ms",
          filter: color ? `drop-shadow(0 0 12px ${color})` : void 0
        } }, key);
      })),
      [...Array(8)].map((_, i) => {
        const a = i / 8 * Math.PI * 2 - Math.PI / 2;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: cx, y1: cy, x2: cx + Math.cos(a) * 230, y2: cy + Math.sin(a) * 230, stroke: "var(--border-sharp)", strokeWidth: 0.5 }, i);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 36, fill: "var(--shadow-deep)", stroke: "var(--purple-bright)", strokeWidth: 1, style: {
        filter: "drop-shadow(0 0 20px var(--purple-bright))"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx, y: cy + 8, textAnchor: "middle", fontSize: 28, fill: "var(--purple-electric)", fontFamily: "Cinzel Decorative", children: "⚸" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-stat text-sm", style: {
      color: "var(--text-secondary)"
    }, children: [
      "PROGRESS: ",
      progress,
      " / ",
      solution.length
    ] }),
    won && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass clip-chamfer mt-6 p-6 font-lore italic text-center max-w-md", style: {
      color: "var(--text-primary)"
    }, children: '"The web remembers. Balance is restored."' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "gothic-btn clip-chamfer mt-8", children: "Retreat" })
  ] });
}
const ENEMIES = [{
  name: "The Hollow Shade",
  hp: 60,
  dmg: [8, 14],
  status: "weakened",
  color: "var(--purple-bright)"
}, {
  name: "The Rot Witch",
  hp: 95,
  dmg: [10, 16],
  status: "cursed",
  color: "var(--red-blood)",
  regen: 4
}, {
  name: "The Stone Sentinel",
  hp: 160,
  dmg: [12, 18],
  status: "normal",
  color: "var(--gold-antique)",
  reflect: 0.2
}, {
  name: "The Fevered Specter",
  hp: 110,
  dmg: [6, 24],
  status: "stunned",
  color: "var(--blue-electric)"
}, {
  name: "The Null",
  hp: 180,
  dmg: [14, 22],
  status: "cursed",
  color: "var(--red-ember)",
  copy: true
}];
function Combat({
  back
}) {
  const [hp, setHp] = reactExports.useState(100);
  const [maxHp] = reactExports.useState(100);
  const [energy, setEnergy] = reactExports.useState(60);
  const [maxEnergy] = reactExports.useState(100);
  const [pStatus, setPStatus] = reactExports.useState("normal");
  const [eIdx, setEIdx] = reactExports.useState(0);
  const [eHp, setEHp] = reactExports.useState(ENEMIES[0].hp);
  const [eStatus, setEStatus] = reactExports.useState("normal");
  const [log, setLog] = reactExports.useState([{
    text: "The hunt begins. Something is watching.",
    type: "system"
  }]);
  const [defeated, setDefeated] = reactExports.useState(0);
  const [busy, setBusy] = reactExports.useState(false);
  const [over, setOver] = reactExports.useState(null);
  const enemy = ENEMIES[eIdx];
  const eMaxHp = enemy.hp;
  const lastAction = reactExports.useRef("STRIKE");
  const push = (e) => setLog((l) => [...l, e].slice(-50));
  const enemyTurn = (currentEHp, currentHp) => {
    setTimeout(() => {
      if (currentEHp <= 0) return;
      let dmg = enemy.dmg[0] + Math.floor(Math.random() * (enemy.dmg[1] - enemy.dmg[0]));
      if (eStatus === "stunned") {
        push({
          text: `${enemy.name} is stunned and falters.`,
          type: "status"
        });
        setEStatus("normal");
        finish();
        return;
      }
      if (pStatus === "weakened") dmg = Math.floor(dmg * 1.3);
      if (enemy.copy && lastAction.current === "DARK SURGE") dmg += 8;
      const newHp = Math.max(0, currentHp - dmg);
      setHp(newHp);
      push({
        text: `${enemy.name} strikes for ${dmg} damage.`,
        type: "enemy"
      });
      if (Math.random() < 0.25 && enemy.status !== "normal") {
        setPStatus(enemy.status);
        push({
          text: `You are ${enemy.status.toUpperCase()}.`,
          type: "status"
        });
      }
      if (enemy.regen) {
        const ne = Math.min(eMaxHp, currentEHp + enemy.regen);
        setEHp(ne);
        push({
          text: `${enemy.name} regenerates ${enemy.regen}.`,
          type: "status"
        });
      }
      if (newHp <= 0) {
        setOver("lose");
        push({
          text: "Even Wednesday falls, eventually.",
          type: "crit"
        });
      }
      finish();
    }, 900);
  };
  const finish = (_, __) => setBusy(false);
  const act = (action) => {
    if (busy || over) return;
    if (pStatus === "stunned") {
      push({
        text: "You are stunned. The turn slips away.",
        type: "status"
      });
      setPStatus("normal");
      setBusy(true);
      enemyTurn(eHp, hp);
      return;
    }
    lastAction.current = action;
    let newE = eHp;
    let newEn = energy;
    let newHp = hp;
    if (action === "STRIKE") {
      let d = 14 + Math.floor(Math.random() * 8);
      if (pStatus === "cursed") d = Math.floor(d * 0.7);
      if (enemy.reflect) {
        const r = Math.floor(d * enemy.reflect);
        newHp = Math.max(0, hp - r);
        push({
          text: `Reflected ${r} back to you.`,
          type: "status"
        });
      }
      newE = Math.max(0, eHp - d);
      push({
        text: `You strike for ${d}.`,
        type: "player"
      });
    } else if (action === "DARK SURGE") {
      if (energy < 35) {
        push({
          text: "Not enough energy.",
          type: "system"
        });
        return;
      }
      let d = 32 + Math.floor(Math.random() * 12);
      newE = Math.max(0, eHp - d);
      newEn = energy - 35;
      push({
        text: `Dark Surge tears through for ${d}.`,
        type: "crit"
      });
    } else if (action === "WITHER") {
      if (energy < 20) {
        push({
          text: "Not enough energy.",
          type: "system"
        });
        return;
      }
      newEn = energy - 20;
      setEStatus("cursed");
      push({
        text: `${enemy.name} is CURSED.`,
        type: "status"
      });
    } else {
      const heal = 15 + Math.floor(Math.random() * 11);
      newHp = Math.min(maxHp, hp + heal);
      newEn = Math.min(maxEnergy, energy + 20);
      push({
        text: `You endure. +${heal} HP, +20 energy.`,
        type: "status"
      });
    }
    setHp(newHp);
    setEHp(newE);
    setEnergy(newEn);
    setBusy(true);
    if (newE <= 0) {
      push({
        text: `${enemy.name} is undone.`,
        type: "crit"
      });
      const nd = defeated + 1;
      setDefeated(nd);
      if (nd >= ENEMIES.length) {
        setOver("win");
        setBusy(false);
        return;
      }
      setTimeout(() => {
        const ni = eIdx + 1;
        setEIdx(ni);
        setEHp(ENEMIES[ni].hp);
        setEStatus("normal");
        push({
          text: `${ENEMIES[ni].name} emerges from the dark.`,
          type: "system"
        });
        setBusy(false);
      }, 700);
      return;
    }
    enemyTurn(newE, newHp);
  };
  const reset = () => {
    setHp(100);
    setEnergy(60);
    setPStatus("normal");
    setEIdx(0);
    setEHp(ENEMIES[0].hp);
    setEStatus("normal");
    setDefeated(0);
    setOver(null);
    setLog([{
      text: "You rise again.",
      type: "system"
    }]);
  };
  const Bar = ({
    value,
    max,
    color,
    label
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-stat text-xs mb-1", style: {
      color: "var(--text-secondary)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        value,
        "/",
        max
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full", style: {
      background: "var(--shadow-deep)",
      border: "1px solid var(--border-sharp)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: `${value / max * 100}%`,
      height: "100%",
      background: color,
      boxShadow: `0 0 12px ${color}`,
      transition: "width 400ms"
    } }) })
  ] });
  const logColor = (t) => ({
    player: "var(--purple-electric)",
    enemy: "var(--red-ember)",
    status: "var(--gold-antique)",
    system: "var(--text-muted)",
    crit: "var(--blue-electric)"
  })[t];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen px-4 md:px-8 py-12 flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-glow-red mb-6 text-center", style: {
      fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
      color: "var(--red-ember)"
    }, children: "THE HUNT" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-card p-6", style: {
        borderColor: enemy.color,
        boxShadow: `0 0 30px ${enemy.color}`,
        order: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", style: {
          color: enemy.color,
          letterSpacing: "0.18em"
        }, children: enemy.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center mb-4 relative overflow-hidden", style: {
          background: `radial-gradient(circle, ${enemy.color}33, transparent 70%)`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beastImg, alt: "", style: {
          height: "100%",
          objectFit: "contain",
          filter: `hue-rotate(${eIdx * 60}deg) drop-shadow(0 0 20px ${enemy.color})`,
          mixBlendMode: "screen"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { value: eHp, max: eMaxHp, color: "var(--red-blood)", label: "VITALITY" }),
        eStatus !== "normal" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-stat text-xs px-2 py-1 inline-block mt-2", style: {
          background: "var(--shadow-deep)",
          color: "var(--gold-antique)",
          border: "1px solid var(--gold-antique)"
        }, children: eStatus.toUpperCase() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-card p-6", style: {
        borderColor: "var(--purple-bright)",
        boxShadow: "var(--glow-purple)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", style: {
          color: "var(--purple-electric)",
          letterSpacing: "0.18em"
        }, children: "WEDNESDAY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { value: hp, max: maxHp, color: "var(--purple-electric)", label: "HP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { value: energy, max: maxEnergy, color: "var(--gold-antique)", label: "ENERGY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-stat text-xs px-2 py-1 inline-block", style: {
          background: "var(--shadow-deep)",
          color: pStatus === "normal" ? "var(--purple-electric)" : "var(--red-ember)",
          border: `1px solid ${pStatus === "normal" ? "var(--purple-bright)" : "var(--red-ember)"}`
        }, children: pStatus.toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mt-4", children: [{
          k: "STRIKE",
          c: 0
        }, {
          k: "DARK SURGE",
          c: 35
        }, {
          k: "WITHER",
          c: 20
        }, {
          k: "ENDURE",
          c: 0
        }].map((b) => {
          const dis = busy || !!over || b.c > energy;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => act(b.k), disabled: dis, className: "gothic-btn clip-chamfer text-xs", style: {
            padding: "10px 8px",
            opacity: dis ? 0.4 : 1
          }, children: [
            b.k,
            " ",
            b.c > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
              color: "var(--gold-antique)"
            }, children: [
              "(",
              b.c,
              ")"
            ] })
          ] }, b.k);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-stat text-xs mt-4", style: {
          color: "var(--text-muted)"
        }, children: [
          "CREATURES VANQUISHED: ",
          defeated,
          " / ",
          ENEMIES.length
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass clip-card mt-6 w-full max-w-5xl p-4 max-h-48 overflow-y-auto", style: {
      borderColor: "var(--border-glow)"
    }, children: log.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-stat text-sm log-in", style: {
      color: logColor(e.type),
      letterSpacing: "0.04em",
      padding: "2px 0"
    }, children: [
      "› ",
      e.text
    ] }, i)) }),
    over === "win" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-chamfer mt-6 p-6 text-center max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-glow-purple", style: {
        color: "var(--purple-electric)"
      }, children: "The hunt is complete." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic mt-2", style: {
        color: "var(--text-secondary)"
      }, children: "They feared you rightly." })
    ] }),
    over === "lose" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic mb-3", style: {
        color: "var(--text-secondary)"
      }, children: '"Even Wednesday falls, eventually."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "gothic-btn clip-chamfer", children: "Rise Again" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "gothic-btn clip-chamfer mt-6", children: "Withdraw into Darkness" })
  ] });
}
export {
  App as component
};
