import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { u as useNavigate } from "./router-BnxhV7tT.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import { A as AmbientLayers, C as CustomCursor } from "./CustomCursor-CiBYZ5vj.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Puzzle({ back }) {
  const RING_COUNTS = [8, 6, 4];
  const COLORS = ["var(--purple-bright)", "var(--blue-electric)", "var(--gold-antique)", "var(--red-blood)"];
  const solution = reactExports.useMemo(() => {
    const all = [];
    RING_COUNTS.forEach((n, r) => {
      for (let i = 0; i < n; i++) all.push({ ring: r, idx: i });
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
      setActivated({ ...activated, [key]: COLORS[progress % COLORS.length] });
      const np = progress + 1;
      setProgress(np);
      if (np === solution.length) setTimeout(() => setWon(true), 400);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-glow-purple text-center", style: { fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--purple-electric)" }, children: "RESTORE THE SIGIL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-lore italic mt-2 mb-8 text-center", style: { color: "var(--text-secondary)" }, children: "The pattern was broken. You must remember what was forgotten." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 500 500", style: { width: "min(90vw, 540px)", height: "auto", filter: won ? "drop-shadow(0 0 40px var(--purple-bright))" : void 0 }, className: won ? "spin-slow" : "", children: [
      RING_COUNTS.map((count, ring) => [...Array(count)].map((_, idx) => {
        const key = `${ring}-${idx}`;
        const color = activated[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: arcPath(ring, idx, count), fill: color || "rgba(20,15,30,0.7)", stroke: color || "var(--border-glow)", strokeWidth: 1, onClick: () => click(ring, idx), style: { cursor: "none", transition: "all 250ms", filter: color ? `drop-shadow(0 0 12px ${color})` : void 0 } }, key);
      })),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 36, fill: "var(--shadow-deep)", stroke: "var(--purple-bright)", strokeWidth: 1, style: { filter: "drop-shadow(0 0 20px var(--purple-bright))" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx, y: cy + 8, textAnchor: "middle", fontSize: 28, fill: "var(--purple-electric)", fontFamily: "Cinzel Decorative", children: "⚸" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-stat text-sm", style: { color: "var(--text-secondary)" }, children: [
      "PROGRESS: ",
      progress,
      " / ",
      solution.length
    ] }),
    won && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass clip-chamfer mt-6 p-6 font-lore italic text-center max-w-md", style: { color: "var(--text-primary)" }, children: '"The web remembers. Balance is restored."' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "gothic-btn clip-chamfer mt-8", children: "◄ Back to Games" })
  ] });
}
function WebPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", style: {
    background: "var(--void)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientLayers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
      zIndex: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Puzzle, { back: () => navigate({
        to: "/game"
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {})
  ] });
}
export {
  WebPage as component
};
