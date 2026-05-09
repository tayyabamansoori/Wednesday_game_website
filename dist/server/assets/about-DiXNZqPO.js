import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BnxhV7tT.js";
const QUOTE = "I find social media to be a soul-sucking void of meaningless affirmation.";
function AboutPage() {
  const [typed, setTyped] = reactExports.useState("");
  reactExports.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(QUOTE.slice(0, i));
      if (i >= QUOTE.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);
  const residents = [{
    name: "Wednesday Addams",
    ability: "Psychic",
    desc: "Reluctant seer. Allergic to sentiment. Allergic to color.",
    hue: "#9d4edd"
  }, {
    name: "Enid Sinclair",
    ability: "Werewolf",
    desc: "Sunshine in faux-fur. Late bloomer. Sharp when it counts.",
    hue: "#ff8ad1"
  }, {
    name: "Xavier Thorpe",
    ability: "Psychic Artist",
    desc: "His drawings move. So do his nightmares.",
    hue: "#6a0dad"
  }, {
    name: "Thing",
    ability: "Disembodied Hand",
    desc: "Loyal. Lethal. Excellent at parallel parking.",
    hue: "#c084fc"
  }];
  const timeline = [{
    year: "1791",
    title: "The Founding",
    text: "Nevermore opens its doors to those the world refused."
  }, {
    year: "1922",
    title: "The Hyde Incident",
    text: "A student vanishes. The library grows one new wall overnight."
  }, {
    year: "1989",
    title: "The Raven Choir",
    text: "Sixty ravens settle on the bell tower and refuse to leave."
  }, {
    year: "Today",
    title: "A New Outcast",
    text: "The doors open again. They always open again."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#0a0008",
    color: "#d4c8e2",
    minHeight: "100vh",
    fontFamily: "'Raleway', sans-serif",
    cursor: "auto"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: {
      minHeight: "70vh"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
        background: "radial-gradient(ellipse at 50% 30%, rgba(106,13,173,0.35), transparent 60%), linear-gradient(to bottom, #0a0008, #15001f 60%, #0a0008)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "raven-wrap", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 64 32", width: "80", height: "40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 18 C 12 8, 22 6, 32 14 C 40 8, 52 8, 62 16 C 52 18, 44 22, 32 22 C 22 24, 12 22, 2 18 Z", fill: "#0a0008", stroke: "#9d4edd", strokeWidth: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "56", cy: "14", r: "1.4", fill: "#c084fc" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 pt-24 pb-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.5em",
          color: "#9d8fba",
          fontSize: "0.7rem"
        }, children: "EST. 1791 — JERICHO, VERMONT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6", style: {
          fontFamily: "'Cinzel', serif",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 7vw, 6rem)",
          letterSpacing: "0.08em",
          color: "#d4c8e2",
          textShadow: "0 0 30px rgba(157,78,221,0.7), 0 0 80px rgba(106,13,173,0.5)",
          lineHeight: 1.05
        }, children: "We Are The Outcasts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-2xl italic", style: {
          color: "#9d8fba",
          fontSize: "1.05rem"
        }, children: "A school for the strange. A sanctuary for the storm-touched. A home for the things that go bump — and bite back." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6 text-lg leading-relaxed", style: {
        color: "#bfb3d6"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Nevermore was not built. It was ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "found" }),
          " — already standing, already waiting, on a hill that maps refuse to draw the same way twice. Some say its first headmaster was a poet. Others say he was something the poet feared."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Behind these gates we teach what the rest of the world forgot how to learn: how to listen to portraits, how to read the weather of grief, how to not flinch when the floor disagrees with your steps." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "We do not promise safety. Safety is a story for shorter schools. We promise ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "#c084fc"
          }, children: "company" }),
          " — the specific, complicated company of those who've never quite belonged anywhere else."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Meet The Residents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: residents.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "resident-card group relative overflow-hidden p-6", style: {
        background: "linear-gradient(180deg, #15001fcc, #0a0008)",
        border: "1px solid rgba(157,78,221,0.25)",
        clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
        transition: "transform 350ms ease, box-shadow 350ms ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-5 flex items-center justify-center", style: {
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, rgba(157,78,221,0.4), #0a0008 70%)",
          border: `1px solid ${r.hue}`,
          boxShadow: `0 0 25px ${r.hue}55, inset 0 0 30px ${r.hue}33`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "'Cinzel', serif",
          fontSize: "2.4rem",
          color: r.hue,
          textShadow: `0 0 15px ${r.hue}`
        }, children: r.name[0] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center", style: {
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "#d4c8e2"
        }, children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 text-[0.65rem]", style: {
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: r.hue,
          border: `1px solid ${r.hue}66`,
          background: "rgba(10,0,8,0.6)"
        }, children: r.ability }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-center text-sm italic", style: {
          color: "#9d8fba"
        }, children: r.desc })
      ] }, r.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, style: {
        fontFamily: "'Cinzel', serif",
        fontSize: "5rem",
        color: "#6a0dad",
        lineHeight: 0.5
      }, children: "“" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 italic", style: {
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(1.2rem, 2.4vw, 2rem)",
        color: "#d4c8e2",
        letterSpacing: "0.04em",
        minHeight: "4em"
      }, children: [
        typed,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6", style: {
        color: "#9d8fba",
        letterSpacing: "0.4em",
        fontSize: "0.7rem"
      }, children: "— WEDNESDAY ADDAMS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Academy Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14 pl-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-0 bottom-0 w-px", style: {
          background: "linear-gradient(to bottom, transparent, #9d4edd, transparent)"
        } }),
        timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[1.35rem] top-2", style: {
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#0a0008",
            border: "2px solid #9d4edd",
            boxShadow: "0 0 14px #9d4edd"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.3em",
            color: "#9d4edd",
            fontSize: "0.8rem"
          }, children: t.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1", style: {
            fontFamily: "'Cinzel', serif",
            fontSize: "1.4rem",
            color: "#d4c8e2"
          }, children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 italic", style: {
            color: "#9d8fba"
          }, children: t.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs", style: {
            color: "#5c4f78",
            letterSpacing: "0.25em"
          }, children: [
            "— YEARBOOK ENTRY № ",
            String(i + 1).padStart(3, "0")
          ] })
        ] }, t.year))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .resident-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 35px rgba(157,78,221,0.45);
        }
        .raven-wrap {
          position: absolute;
          top: 18%;
          left: -120px;
          animation: ravenFly 14s linear infinite;
          filter: drop-shadow(0 0 10px #9d4edd);
        }
        @keyframes ravenFly {
          0% { transform: translateX(0) translateY(0) rotate(-4deg); }
          25% { transform: translateX(35vw) translateY(-30px) rotate(2deg); }
          50% { transform: translateX(70vw) translateY(20px) rotate(-3deg); }
          75% { transform: translateX(95vw) translateY(-10px) rotate(2deg); }
          100% { transform: translateX(120vw) translateY(0) rotate(-4deg); }
        }
        .caret {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          margin-left: 4px;
          background: #9d4edd;
          vertical-align: middle;
          animation: blink 0.9s steps(2) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
      ` })
  ] });
}
function SectionTitle({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16", style: {
      background: "linear-gradient(to right, transparent, #9d4edd)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
      fontFamily: "'Cinzel', serif",
      fontWeight: 700,
      letterSpacing: "0.3em",
      fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
      color: "#d4c8e2",
      textShadow: "0 0 18px rgba(157,78,221,0.5)"
    }, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16", style: {
      background: "linear-gradient(to left, transparent, #9d4edd)"
    } })
  ] });
}
export {
  AboutPage as component
};
