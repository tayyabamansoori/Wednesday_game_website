import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BnxhV7tT.js";
const BOARD_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const BOARD_NUMBERS = "0123456789".split("");
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const [smoke, setSmoke] = reactExports.useState(false);
  const [jumpscare, setJumpscare] = reactExports.useState(false);
  const planchetteRef = reactExports.useRef(null);
  const boardRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (name.trim().toLowerCase() === "wednesday" && !jumpscare) {
      setJumpscare(true);
      const t = setTimeout(() => setJumpscare(false), 2400);
      return () => clearTimeout(t);
    }
  }, [name, jumpscare]);
  const lastChar = reactExports.useMemo(() => {
    const s = name.trim().toUpperCase();
    return s[s.length - 1] || "";
  }, [name]);
  reactExports.useEffect(() => {
    const board = boardRef.current;
    const planch = planchetteRef.current;
    if (!board || !planch) return;
    const target = board.querySelector(`[data-letter="${lastChar}"]`);
    if (!target) {
      planch.style.transform = `translate(-50%, -50%) translate(0px, -10px)`;
      return;
    }
    const b = board.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    const x = t.left - b.left + t.width / 2 - b.width / 2;
    const y = t.top - b.top + t.height / 2 - b.height / 2;
    planch.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }, [lastChar]);
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSmoke(true);
    setTimeout(() => {
      setSent(true);
      setSmoke(false);
    }, 900);
  };
  const ravens = Array.from({
    length: 6
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#0a0008",
    color: "#d4c8e2",
    minHeight: "100vh",
    fontFamily: "'Raleway', sans-serif",
    cursor: "auto",
    position: "relative",
    overflowX: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 -z-0", children: ravens.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "raven-float", style: {
      left: `${(i * 17 + 5) % 90}%`,
      top: `${(i * 23 + 10) % 80}%`,
      animationDelay: `${i * 1.4}s`,
      animationDuration: `${12 + i % 4 * 3}s`
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 64 32", width: "40", height: "20", opacity: "0.35", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 18 C 12 8, 22 6, 32 14 C 40 8, 52 8, 62 16 C 52 18, 44 22, 32 22 C 22 24, 12 22, 2 18 Z", fill: "#0a0008", stroke: "#9d4edd", strokeWidth: "0.6" }) }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.5em",
        color: "#9d8fba",
        fontSize: "0.7rem"
      }, children: "THE BOARD IS LISTENING" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6", style: {
        fontFamily: "'Cinzel', serif",
        fontWeight: 900,
        fontSize: "clamp(2.5rem, 7vw, 6rem)",
        letterSpacing: "0.08em",
        color: "#d4c8e2",
        textShadow: "0 0 30px rgba(157,78,221,0.7), 0 0 80px rgba(106,13,173,0.5)"
      }, children: "Summon Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl italic", style: {
        color: "#9d8fba"
      }, children: "Speak softly. The board has been waiting for someone exactly like you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 mx-auto max-w-4xl px-6 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: boardRef, className: "relative mx-auto p-8", style: {
      background: "radial-gradient(ellipse at center, #1a0a2e, #0a0008 80%)",
      border: "1px solid #6a0dad",
      borderRadius: "180px / 60px",
      boxShadow: "0 0 60px rgba(106,13,173,0.4), inset 0 0 60px rgba(0,0,0,0.6)",
      minHeight: 280
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between px-4 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "'Cinzel', serif",
          color: "#9d4edd",
          letterSpacing: "0.4em"
        }, children: "YES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "'Cinzel', serif",
          color: "#9d4edd",
          letterSpacing: "0.4em"
        }, children: "NO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-13 gap-1 sm:gap-2", style: {
        gridTemplateColumns: "repeat(13, minmax(0, 1fr))"
      }, children: [
        BOARD_LETTERS.slice(0, 13).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Letter, { letter: l, active: lastChar === l }, l)),
        BOARD_LETTERS.slice(13).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Letter, { letter: l, active: lastChar === l }, l)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-10 gap-1 sm:gap-2", children: BOARD_NUMBERS.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Letter, { letter: n, active: lastChar === n }, n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.6em",
        color: "#6a0dad"
      }, children: "GOODBYE" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: planchetteRef, className: "planchette pointer-events-none absolute", style: {
        left: "50%",
        top: "50%",
        transition: "transform 600ms cubic-bezier(0.5, 0, 0.2, 1)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 80", width: "80", height: "64", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 4 C 80 8, 92 36, 76 64 C 68 76, 32 76, 24 64 C 8 36, 20 8, 50 4 Z", fill: "rgba(20,10,30,0.85)", stroke: "#c084fc", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "40", r: "10", fill: "none", stroke: "#c084fc", strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "40", r: "2", fill: "#c084fc" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-2xl px-6 pb-32", children: [
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseCard, { onReset: () => {
        setSent(false);
        setName("");
        setEmail("");
        setMessage("");
      } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-6 p-8", style: {
        background: "linear-gradient(180deg, #15001fcc, #0a0008)",
        border: "1px solid rgba(157,78,221,0.3)",
        clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
        boxShadow: "0 0 40px rgba(106,13,173,0.25)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Mortal Name", value: name, onChange: setName, placeholder: "Enid Sinclair…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Raven Mail", value: email, onChange: setEmail, type: "email", placeholder: "raven@nevermore.edu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Dark Message", value: message, onChange: setMessage, as: "textarea", placeholder: "Whisper into the void…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "summon-btn relative w-full py-4", style: {
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.4em",
          fontSize: "0.9rem",
          color: "#d4c8e2",
          background: "linear-gradient(135deg, #2a0a3e, #6a0dad)",
          border: "1px solid #9d4edd",
          clipPath: "polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)",
          textShadow: "0 0 12px #9d4edd",
          boxShadow: "0 0 30px rgba(157,78,221,0.5)"
        }, children: [
          "SEND TO THE VOID",
          smoke && /* @__PURE__ */ jsxRuntimeExports.jsx(SmokeBurst, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-6 sm:grid-cols-[1fr_1.2fr] items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", style: {
          background: "linear-gradient(180deg, #15001f, #0a0008)",
          border: "1px solid rgba(157,78,221,0.3)",
          clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.3em",
            color: "#9d4edd",
            fontSize: "0.7rem"
          }, children: "FIND US — IF YOU DARE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3", style: {
            fontFamily: "'Cinzel', serif",
            fontSize: "1.5rem",
            color: "#d4c8e2"
          }, children: "Nevermore Academy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 italic", style: {
            color: "#9d8fba"
          }, children: [
            "13 Raven's Hollow Lane",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Jericho, Vermont 05009",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "United States of the Unliving"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs", style: {
            color: "#5c4f78",
            letterSpacing: "0.25em"
          }, children: "— DO NOT KNOCK AFTER MIDNIGHT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", style: {
          background: "radial-gradient(ellipse at 30% 40%, rgba(106,13,173,0.4), #0a0008 70%)",
          border: "1px solid rgba(157,78,221,0.3)",
          clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
          minHeight: 220
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 300 220", className: "absolute inset-0 h-full w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 180 C 60 140, 90 160, 140 110 S 240 80, 290 40", stroke: "#9d4edd", strokeDasharray: "4 6", fill: "none", strokeWidth: "1.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 60 C 80 90, 130 70, 200 130 S 280 200, 290 200", stroke: "#6a0dad", strokeDasharray: "2 5", fill: "none", strokeWidth: "1" }),
          [40, 70, 110, 220, 250].map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${x},${130 + i % 2 * 30})`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0 L -6 14 L 6 14 Z", fill: "#1a0a2e", stroke: "#6a0dad" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 -6 L -8 12 L 8 12 Z", fill: "#15001f", stroke: "#6a0dad" })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(150,90)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-30 20 L -30 -10 L -20 -20 L 0 -30 L 20 -20 L 30 -10 L 30 20 Z", fill: "#15001f", stroke: "#9d4edd", strokeWidth: "1.4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-6 20 L -6 4 L 6 4 L 6 20 Z", fill: "#0a0008", stroke: "#9d4edd" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "-26", r: "3", fill: "#c084fc", children: /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "opacity", values: "0.4;1;0.4", dur: "2.4s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "150", y: "135", textAnchor: "middle", style: {
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.3em",
            fontSize: 9,
            fill: "#d4c8e2"
          }, children: "NEVERMORE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "150", y: "200", textAnchor: "middle", style: {
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.5em",
            fontSize: 8,
            fill: "#9d8fba"
          }, children: "JERICHO · VT" })
        ] }) })
      ] })
    ] }),
    jumpscare && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center", style: {
      background: "#0a0008",
      animation: "flicker 0.18s steps(2) 12"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", style: {
      fontFamily: "'Cinzel', serif",
      color: "#d4c8e2",
      animation: "zoomIn 1.2s ease-out"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: "10rem",
        lineHeight: 1
      }, children: "👁" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", style: {
        fontSize: "2rem",
        letterSpacing: "0.4em",
        textShadow: "0 0 20px #9d4edd"
      }, children: "SHE SEES YOU" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .raven-float {
          position: absolute;
          animation-name: ravenWander;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes ravenWander {
          0% { transform: translate(0,0) rotate(-3deg); }
          50% { transform: translate(40px,-30px) rotate(3deg); }
          100% { transform: translate(0,0) rotate(-3deg); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        @keyframes zoomIn {
          0% { transform: scale(0.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .summon-btn:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(157,78,221,0.8); }
      ` })
  ] });
}
function Letter({
  letter,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-letter": letter, className: "flex items-center justify-center select-none", style: {
    fontFamily: "'Cinzel', serif",
    fontWeight: 700,
    fontSize: "0.95rem",
    height: 30,
    color: active ? "#fff" : "#c084fc",
    textShadow: active ? "0 0 16px #c084fc, 0 0 28px #9d4edd" : "0 0 6px rgba(157,78,221,0.4)",
    transition: "color 250ms, text-shadow 250ms"
  }, children: letter });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  as
}) {
  const common = {
    value,
    onChange: (e) => onChange(e.target.value),
    placeholder,
    style: {
      width: "100%",
      background: "rgba(10,0,8,0.7)",
      border: "1px solid rgba(157,78,221,0.4)",
      color: "#d4c8e2",
      padding: "12px 14px",
      fontFamily: "'Raleway', sans-serif",
      outline: "none",
      letterSpacing: "0.05em"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block", style: {
      fontFamily: "'Cinzel', serif",
      letterSpacing: "0.3em",
      color: "#9d4edd",
      fontSize: "0.7rem",
      textTransform: "uppercase"
    }, children: label }),
    as === "textarea" ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, ...common }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, ...common })
  ] });
}
function SmokeBurst() {
  const puffs = Array.from({
    length: 14
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pointer-events-none absolute inset-0 overflow-visible", children: [
    puffs.map((_, i) => {
      const angle = i / puffs.length * Math.PI * 2;
      const dx = Math.cos(angle) * 80;
      const dy = Math.sin(angle) * 60;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(157,78,221,0.8), transparent 70%)",
        transform: "translate(-50%,-50%)",
        animation: `puff 800ms ease-out forwards`,
        ["--dx"]: `${dx}px`,
        ["--dy"]: `${dy}px`
      } }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes puff {
          0% { opacity: 0.9; transform: translate(-50%,-50%) scale(0.4); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(2.2); }
        }
      ` })
  ] });
}
function ResponseCard({
  onReset
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center", style: {
    background: "linear-gradient(180deg, #15001fcc, #0a0008)",
    border: "1px solid rgba(157,78,221,0.4)",
    clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
    boxShadow: "0 0 50px rgba(106,13,173,0.4)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "thing-wave mx-auto", style: {
      fontSize: "5rem"
    }, children: "🖐️" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4", style: {
      fontFamily: "'Cinzel', serif",
      fontSize: "1.6rem",
      letterSpacing: "0.15em",
      color: "#d4c8e2",
      textShadow: "0 0 16px #9d4edd"
    }, children: "Your message has been received by Thing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 italic", style: {
      color: "#9d8fba"
    }, children: "He'll deliver it personally. He insists." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onReset, className: "mt-8 px-6 py-2", style: {
      fontFamily: "'Cinzel', serif",
      letterSpacing: "0.3em",
      fontSize: "0.75rem",
      color: "#c084fc",
      border: "1px solid #6a0dad",
      background: "rgba(10,0,8,0.7)"
    }, children: "SEND ANOTHER" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .thing-wave { animation: wave 1.4s ease-in-out infinite; transform-origin: 70% 70%; }
        @keyframes wave {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(18deg); }
        }
      ` })
  ] });
}
export {
  ContactPage as component
};
