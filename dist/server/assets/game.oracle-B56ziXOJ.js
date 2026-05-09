import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { u as useNavigate } from "./router-BnxhV7tT.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import { A as AmbientLayers, C as CustomCursor } from "./CustomCursor-CiBYZ5vj.js";
import { O as Orb } from "./Orb-DJxa7eQK.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
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
  "The dead keep better secrets than the living deserve."
];
function Oracle({ back }) {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: { background: "radial-gradient(circle at center, transparent 30%, var(--void) 75%)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Orb, { size: 320, onClick: ask, intense: true }),
      !text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-ui pulse-soft mt-6 text-sm", style: { color: "var(--text-secondary)", letterSpacing: "0.3em" }, children: "TOUCH THE ORB" }),
      text && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass clip-chamfer mt-10 max-w-xl p-8 font-lore italic text-center", style: { color: "var(--text-primary)", fontSize: "1.15rem" }, children: [
        '"',
        text,
        typing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "▌" }),
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-stat text-xs", style: { color: "var(--text-muted)" }, children: [
        "VISIONS RECEIVED: ",
        count
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "gothic-btn clip-chamfer mt-12", children: "◄ Back to Games" })
  ] });
}
function OraclePage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", style: {
    background: "var(--void)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientLayers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
      zIndex: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Oracle, { back: () => navigate({
        to: "/game"
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {})
  ] });
}
export {
  OraclePage as component
};
