import { V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { L as Link } from "./router-BnxhV7tT.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import { A as AmbientLayers, C as CustomCursor } from "./CustomCursor-CiBYZ5vj.js";
import { m as moonscape } from "./hero-bg-Dc6R7I0D.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const cards = [{
  key: "oracle",
  title: "ORACLE",
  color: "var(--purple-bright)",
  glow: "var(--glow-purple)",
  desc: "The orb does not speak. It simply reflects what you refuse to face.",
  cta: "Receive a Vision",
  sigil: "☽",
  to: "/game/oracle"
}, {
  key: "web",
  title: "THE WEB",
  color: "var(--blue-electric)",
  glow: "var(--glow-blue)",
  desc: "The web was woven before you arrived. You are merely a caught thing learning its geometry.",
  cta: "Restore the Sigil",
  sigil: "✶",
  to: "/game/web"
}, {
  key: "hunt",
  title: "THE HUNT",
  color: "var(--red-ember)",
  glow: "var(--glow-red)",
  desc: "The monsters are patient. They have been waiting here since long before you.",
  cta: "Begin the Unpleasantness",
  sigil: "✟",
  to: "/game/hunt"
}, {
  key: "visions",
  title: "VISIONS OF NEVERMORE",
  color: "var(--purple-electric)",
  glow: "var(--glow-purple)",
  desc: "A stealth descent through the library's gaze. Slip past what watches and gather the visions.",
  cta: "Enter the Vision",
  sigil: "◆",
  to: "/game/visions"
}];
function GamesHub() {
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
      background: "radial-gradient(ellipse at 50% 55%, rgba(124,58,237,0.25), transparent 55%), linear-gradient(to bottom, rgba(4,4,6,0.65) 0%, rgba(4,4,6,0.4) 40%, var(--void) 100%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientLayers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
      zIndex: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center px-6 py-16", children: [
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
        }, children: "Four doors. Each one a wound." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "glass clip-card group relative text-left p-8 transition-all duration-500 block", style: {
          minHeight: 420,
          borderColor: c.color,
          boxShadow: c.glow,
          animation: `log-in 600ms ${i * 150}ms both`,
          cursor: "none"
        }, onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = `0 0 60px ${c.color}, ${c.glow}`;
        }, onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = c.glow;
        }, children: [
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
        ] }, c.key)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {})
  ] });
}
export {
  GamesHub as component
};
