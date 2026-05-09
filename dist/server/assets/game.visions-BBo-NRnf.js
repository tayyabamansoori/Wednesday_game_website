import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
import { L as Link } from "./router-BnxhV7tT.js";
import { N as Navbar } from "./Navbar-DZlirr4e.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const gameBg = "/assets/game-bg-CCNYzVfF.png";
const wednesdayImg = "/assets/wednesday-NTd3k10h.png";
const monsterImg = "/assets/monster-DHLZoCGq.png";
const orbImg = "/assets/orb-purple-BRFhsQgk.png";
const bgImage = typeof Image !== "undefined" ? Object.assign(new Image(), {
  src: gameBg
}) : null;
const wedImage = typeof Image !== "undefined" ? Object.assign(new Image(), {
  src: wednesdayImg
}) : null;
const monImage = typeof Image !== "undefined" ? Object.assign(new Image(), {
  src: monsterImg
}) : null;
const orbImage = typeof Image !== "undefined" ? Object.assign(new Image(), {
  src: orbImg
}) : null;
const W = 1280;
const H = 720;
function GamePage() {
  const canvasRef = reactExports.useRef(null);
  const [screen, setScreen] = reactExports.useState("start");
  const [hearts, setHearts] = reactExports.useState(3);
  const [vision, setVision] = reactExports.useState(0);
  const [tooltip, setTooltip] = reactExports.useState("");
  const [flash, setFlash] = reactExports.useState(0);
  const stateRef = reactExports.useRef({
    player: {
      x: 120,
      y: H / 2,
      vx: 0,
      vy: 0,
      r: 16,
      hiding: false
    },
    enemy: {
      x: W / 2,
      y: H / 2 + 20,
      angle: 0,
      // facing
      sweep: 0,
      sweepDir: 1,
      patrolTimer: 0,
      coneLength: 320,
      coneHalfAngle: Math.PI / 7
    },
    orbs: [{
      x: 260,
      y: 180,
      collected: false
    }, {
      x: 1020,
      y: 180,
      collected: false
    }, {
      x: 260,
      y: 560,
      collected: false
    }, {
      x: 1020,
      y: 560,
      collected: false
    }],
    door: {
      x: W - 90,
      y: H / 2 - 70,
      w: 70,
      h: 140,
      unlocked: false
    },
    keys: {},
    hitCooldown: 0,
    yellowTick: 0,
    nearOrb: -1,
    nearDoor: false,
    lastE: false
  });
  const reset = () => {
    const s = stateRef.current;
    s.player = {
      x: 120,
      y: H / 2,
      vx: 0,
      vy: 0,
      r: 16,
      hiding: false
    };
    s.enemy.angle = 0;
    s.enemy.sweep = 0;
    s.enemy.patrolTimer = 0;
    s.orbs.forEach((o) => o.collected = false);
    s.door.unlocked = false;
    s.hitCooldown = 0;
    setHearts(3);
    setVision(0);
    setTooltip("");
  };
  reactExports.useEffect(() => {
    const down = (e) => {
      const k = e.key.toLowerCase();
      stateRef.current.keys[k] = true;
      if (k === " " && screen === "start") {
        setScreen("playing");
      }
      if (k === "escape") {
        setScreen((s) => s === "playing" ? "paused" : s === "paused" ? "playing" : s);
      }
    };
    const up = (e) => {
      stateRef.current.keys[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [screen]);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(33, now - last) / 1e3;
      last = now;
      if (screen === "playing") update(dt);
      render(ctx);
      raf = requestAnimationFrame(loop);
    };
    const update = (dt) => {
      const s = stateRef.current;
      const p = s.player;
      const k = s.keys;
      const speed = 230;
      let dx = 0, dy = 0;
      if (k["w"] || k["arrowup"]) dy -= 1;
      if (k["s"] || k["arrowdown"]) dy += 1;
      if (k["a"] || k["arrowleft"]) dx -= 1;
      if (k["d"] || k["arrowright"]) dx += 1;
      const mag = Math.hypot(dx, dy);
      if (mag > 0) {
        dx /= mag;
        dy /= mag;
      }
      p.x += dx * speed * dt;
      p.y += dy * speed * dt;
      p.x = Math.max(40, Math.min(W - 40, p.x));
      p.y = Math.max(60, Math.min(H - 60, p.y));
      p.hiding = !!k["f"];
      const e = s.enemy;
      e.sweep += e.sweepDir * dt * 0.6;
      if (e.sweep > 0.9) e.sweepDir = -1;
      if (e.sweep < -0.9) e.sweepDir = 1;
      e.patrolTimer += dt;
      if (e.patrolTimer > 3 + Math.random() * 1.5) {
        e.patrolTimer = 0;
        e.angle = Math.random() * Math.PI * 2;
      }
      const facing = e.angle + e.sweep;
      if (s.hitCooldown > 0) s.hitCooldown -= dt;
      if (!p.hiding) {
        const ddx = p.x - e.x;
        const ddy = p.y - e.y;
        const dist = Math.hypot(ddx, ddy);
        if (dist < e.coneLength) {
          const a = Math.atan2(ddy, ddx);
          let diff = a - facing;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          if (Math.abs(diff) < e.coneHalfAngle) {
            const redZone = dist < e.coneLength * 0.55 && Math.abs(diff) < e.coneHalfAngle * 0.5;
            if (redZone && s.hitCooldown <= 0) {
              s.hitCooldown = 1.5;
              setHearts((h) => {
                const nh = h - 1;
                if (nh <= 0) setScreen("lose");
                return nh;
              });
              setFlash(1);
              p.x -= ddx / dist * 60;
              p.y -= ddy / dist * 60;
            } else {
              s.yellowTick += dt;
              if (s.yellowTick > 0.2) {
                s.yellowTick = 0;
                setVision((v) => Math.min(99, v + 1));
              }
            }
          }
        }
      }
      s.nearOrb = -1;
      s.orbs.forEach((o, i) => {
        if (o.collected) return;
        if (Math.hypot(p.x - o.x, p.y - o.y) < 50) s.nearOrb = i;
      });
      const d = s.door;
      s.nearDoor = d.unlocked && p.x > d.x - 30 && p.x < d.x + d.w + 10 && p.y > d.y - 10 && p.y < d.y + d.h + 10;
      const eDown = !!k["e"];
      if (eDown && !s.lastE) {
        if (s.nearOrb >= 0) {
          s.orbs[s.nearOrb].collected = true;
          const collectedCount = s.orbs.filter((o) => o.collected).length;
          const newVision = collectedCount * 25;
          setVision(newVision);
          if (collectedCount === 4) s.door.unlocked = true;
        } else if (s.nearDoor) {
          setScreen("win");
        }
      }
      s.lastE = eDown;
      if (s.nearOrb >= 0) setTooltip("Press E to collect vision");
      else if (s.nearDoor) setTooltip("Press E to escape");
      else if (d.unlocked) setTooltip("The door is unlocked! Reach the exit →");
      else setTooltip("");
      if (flash > 0) setFlash((f) => Math.max(0, f - dt * 1.5));
    };
    const render = (ctx2) => {
      const s = stateRef.current;
      if (bgImage && bgImage.complete && bgImage.naturalWidth > 0) {
        ctx2.drawImage(bgImage, 0, 0, W, H);
        ctx2.fillStyle = "rgba(10,6,18,0.35)";
        ctx2.fillRect(0, 0, W, H);
      } else {
        ctx2.fillStyle = "#1a0a2e";
        ctx2.fillRect(0, 0, W, H);
      }
      const d = s.door;
      if (d.unlocked) {
        const glow = 0.5 + Math.sin(performance.now() / 200) * 0.3;
        ctx2.shadowColor = "#7B2FBE";
        ctx2.shadowBlur = 30 * glow;
        ctx2.fillStyle = "#3a1a5e";
        ctx2.fillRect(d.x, d.y, d.w, d.h);
        ctx2.strokeStyle = "#c084fc";
        ctx2.lineWidth = 3;
        ctx2.strokeRect(d.x, d.y, d.w, d.h);
        ctx2.shadowBlur = 0;
      } else {
        ctx2.fillStyle = "#1a0a2e";
        ctx2.fillRect(d.x, d.y, d.w, d.h);
        ctx2.strokeStyle = "#3a1a5e";
        ctx2.lineWidth = 2;
        ctx2.strokeRect(d.x, d.y, d.w, d.h);
      }
      s.orbs.forEach((o) => {
        if (o.collected) {
          ctx2.fillStyle = "#2a1a3e";
          ctx2.fillRect(o.x - 22, o.y + 14, 44, 10);
          return;
        }
        ctx2.fillStyle = "#2a1a3e";
        ctx2.fillRect(o.x - 24, o.y + 14, 48, 12);
        const t = performance.now() / 300;
        const pulse = 1 + Math.sin(t) * 0.15;
        ctx2.shadowColor = "#a855f7";
        ctx2.shadowBlur = 25;
        const size = 56 * pulse;
        if (orbImage && orbImage.complete && orbImage.naturalWidth > 0) {
          ctx2.drawImage(orbImage, o.x - size / 2, o.y - size / 2, size, size);
        } else {
          ctx2.fillStyle = "#a855f7";
          ctx2.beginPath();
          ctx2.arc(o.x, o.y, 18 * pulse, 0, Math.PI * 2);
          ctx2.fill();
        }
        ctx2.shadowBlur = 0;
      });
      const e = s.enemy;
      const facing = e.angle + e.sweep;
      const tipX = e.x + Math.cos(facing) * e.coneLength;
      const tipY = e.y + Math.sin(facing) * e.coneLength;
      ctx2.save();
      ctx2.translate(e.x, e.y);
      ctx2.rotate(facing);
      const yg = ctx2.createLinearGradient(0, 0, e.coneLength, 0);
      yg.addColorStop(0, "rgba(200,220,80,0.35)");
      yg.addColorStop(1, "rgba(200,220,80,0.05)");
      ctx2.fillStyle = yg;
      ctx2.beginPath();
      ctx2.moveTo(0, 0);
      const a1 = e.coneHalfAngle;
      ctx2.lineTo(Math.cos(a1) * e.coneLength, Math.sin(a1) * e.coneLength);
      ctx2.lineTo(Math.cos(-a1) * e.coneLength, Math.sin(-a1) * e.coneLength);
      ctx2.closePath();
      ctx2.fill();
      const rg = ctx2.createLinearGradient(0, 0, e.coneLength * 0.55, 0);
      rg.addColorStop(0, "rgba(220,30,30,0.55)");
      rg.addColorStop(1, "rgba(180,0,0,0.05)");
      ctx2.fillStyle = rg;
      ctx2.beginPath();
      ctx2.moveTo(0, 0);
      const a2 = e.coneHalfAngle * 0.5;
      const rl = e.coneLength * 0.55;
      ctx2.lineTo(Math.cos(a2) * rl, Math.sin(a2) * rl);
      ctx2.lineTo(Math.cos(-a2) * rl, Math.sin(-a2) * rl);
      ctx2.closePath();
      ctx2.fill();
      ctx2.restore();
      const tipPulse = 1 + Math.sin(performance.now() / 200) * 0.3;
      ctx2.shadowColor = "#c084fc";
      ctx2.shadowBlur = 20;
      ctx2.fillStyle = "#c084fc";
      ctx2.beginPath();
      ctx2.arc(tipX, tipY, 6 * tipPulse, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.shadowBlur = 0;
      if (monImage && monImage.complete && monImage.naturalWidth > 0) {
        const mw = 130;
        const mh = 130;
        ctx2.shadowColor = "#ff0000";
        ctx2.shadowBlur = 25;
        ctx2.drawImage(monImage, e.x - mw / 2, e.y - mh / 2, mw, mh);
        ctx2.shadowBlur = 0;
      } else {
        ctx2.fillStyle = "#1a0a0a";
        ctx2.beginPath();
        ctx2.ellipse(e.x, e.y, 36, 28, 0, 0, Math.PI * 2);
        ctx2.fill();
      }
      const p = s.player;
      ctx2.save();
      ctx2.globalAlpha = p.hiding ? 0.5 : 1;
      ctx2.fillStyle = "rgba(0,0,0,0.6)";
      ctx2.beginPath();
      ctx2.ellipse(p.x, p.y + 38, 22, 6, 0, 0, Math.PI * 2);
      ctx2.fill();
      if (wedImage && wedImage.complete && wedImage.naturalWidth > 0) {
        const pw = 70;
        const ph = 110;
        ctx2.drawImage(wedImage, p.x - pw / 2, p.y - ph / 2 - 5, pw, ph);
      } else {
        ctx2.fillStyle = "#0a0a0a";
        ctx2.fillRect(p.x - 11, p.y - 4, 22, 26);
      }
      ctx2.restore();
      if (p.hiding) {
        ctx2.strokeStyle = "rgba(123,47,190,0.6)";
        ctx2.setLineDash([4, 4]);
        ctx2.beginPath();
        ctx2.arc(p.x, p.y, 24, 0, Math.PI * 2);
        ctx2.stroke();
        ctx2.setLineDash([]);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [screen, flash]);
  const startGame = () => {
    reset();
    setScreen("playing");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full relative overflow-hidden flex flex-col", style: {
    background: "var(--void)",
    cursor: "none"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center justify-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
        backgroundImage: `url(${gameBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(2px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
        width: "min(96vw, 1280px)",
        aspectRatio: `${W}/${H}`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, width: W, height: H, className: "w-full h-full block", style: {
          border: "2px solid #6b21a8",
          boxShadow: "0 0 60px rgba(123,47,190,0.5)",
          background: "#050508"
        } }),
        flash > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
          background: `rgba(180,0,0,${flash * 0.4})`
        } }),
        (screen === "playing" || screen === "paused") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 flex gap-2", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", style: {
            color: i < hearts ? "#ff3a3a" : "#3a1a1a",
            textShadow: i < hearts ? "0 0 10px #ff0000" : "none",
            filter: i < hearts ? "none" : "grayscale(1)"
          }, children: "♥" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 w-72", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tracking-[0.3em] mb-1 text-center", style: {
              color: "#c084fc",
              fontFamily: "monospace"
            }, children: [
              "VISION METER · ",
              vision,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full", style: {
              background: "#1a0a2e",
              border: "1px solid #6b21a8",
              clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full transition-all duration-300", style: {
              width: `${vision}%`,
              background: "linear-gradient(90deg, #6b21a8, #c084fc)",
              boxShadow: "0 0 12px #a855f7"
            } }) })
          ] }),
          tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 px-4 py-2 text-sm tracking-widest", style: {
            bottom: "12%",
            color: "#F0EEE4",
            background: "rgba(10,6,18,0.85)",
            border: "1px solid #7B2FBE",
            textShadow: "0 0 8px #a855f7",
            fontFamily: "monospace"
          }, children: tooltip }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-center", style: {
            color: "#7a6a8a",
            fontFamily: "monospace"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1", style: {
              color: "#c084fc"
            }, children: "COLLECT ALL VISIONS AND UNLOCK THE LIBRARY DOOR" }),
            "WASD/ARROWS = MOVE · E = COLLECT/INTERACT · F = HIDE · ESC = PAUSE"
          ] })
        ] }),
        screen === "start" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Overlay, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl mb-6 tracking-[0.2em]", style: {
            color: "#F0EEE4",
            textShadow: "0 0 30px #7B2FBE",
            fontFamily: "serif"
          }, children: [
            "VISIONS OF",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "NEVERMORE"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm tracking-widest", style: {
            color: "#a855f7"
          }, children: "A stealth haunting beneath the academy library" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { onClick: startGame, children: "BEGIN ◆ PRESS SPACE" })
        ] }),
        screen === "paused" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Overlay, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl mb-6 tracking-[0.3em]", style: {
            color: "#F0EEE4"
          }, children: "PAUSED" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { onClick: () => setScreen("playing"), children: "RESUME" })
        ] }),
        screen === "win" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Overlay, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl mb-4 tracking-[0.2em] relative", style: {
            color: "#c084fc",
            textShadow: "0 0 30px #a855f7"
          }, children: "YOU ESCAPED" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm tracking-widest", style: {
            color: "#F0EEE4"
          }, children: "Nevermore Library releases its grasp..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { onClick: startGame, children: "RETRY" })
        ] }),
        screen === "lose" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Overlay, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl mb-4 tracking-[0.2em]", style: {
            color: "#ff3a3a",
            textShadow: "0 0 30px #8B0000"
          }, children: "GAME OVER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-sm tracking-widest", style: {
            color: "#F0EEE4"
          }, children: "The creature found you..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Btn, { onClick: startGame, children: "TRY AGAIN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/game", className: "absolute top-4 right-4 font-ui text-xs tracking-[0.4em] px-4 py-2", style: {
          color: "#c084fc",
          border: "1px solid #6b21a8",
          background: "rgba(10,6,18,0.7)",
          clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
          textShadow: "0 0 10px #a855f7",
          fontFamily: "monospace"
        }, children: "◄ BACK TO GAMES" })
      ] })
    ] })
  ] });
}
function Overlay({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-8", style: {
    background: "rgba(5,5,8,0.85)",
    backdropFilter: "blur(4px)"
  }, children });
}
function Btn({
  children,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "px-8 py-3 text-sm tracking-[0.3em] hover:scale-105 active:scale-95 transition-transform", style: {
    color: "#F0EEE4",
    background: "linear-gradient(135deg, #1a0a2e, #6b21a8)",
    border: "1px solid #c084fc",
    clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
    textShadow: "0 0 10px #a855f7",
    boxShadow: "0 0 30px rgba(168,85,247,0.5)",
    fontFamily: "monospace"
  }, children });
}
function Sparkles() {
  const sparks = Array.from({
    length: 30
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
    sparks.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute", style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: 4,
      height: 4,
      background: "#c084fc",
      borderRadius: "50%",
      boxShadow: "0 0 10px #a855f7",
      animation: `sparkle ${1 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`
    } }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes sparkle { 0%,100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1.5); } }` })
  ] });
}
export {
  GamePage as component
};
