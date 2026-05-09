import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-BR9nMaQA.js";
function AmbientLayers() {
  const symRef = reactExports.useRef(null);
  const birdRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const symbols = ["☥", "☦", "✟", "♰", "☽", "☾", "✦", "✧", "⚸", "⚷", "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ", "♆", "⚚", "✶", "✷", "†", "‡"];
    const c = symRef.current;
    const ctx = c.getContext("2d");
    const resize = () => {
      c.width = innerWidth;
      c.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);
    const items = Array.from({ length: 30 }, () => spawn());
    function spawn() {
      return { x: Math.random() * innerWidth, y: innerHeight + Math.random() * innerHeight, size: 10 + Math.random() * 18, opacity: 0.03 + Math.random() * 0.09, speed: 0.15 + Math.random() * 0.5, ch: symbols[Math.floor(Math.random() * symbols.length)] };
    }
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      items.forEach((s, i) => {
        s.y -= s.speed;
        if (s.y < -30) items[i] = spawn();
        ctx.font = `${s.size}px 'Cinzel Decorative', serif`;
        ctx.fillStyle = `rgba(192,132,252,${s.opacity})`;
        ctx.fillText(s.ch, s.x, s.y);
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);
  reactExports.useEffect(() => {
    const c = birdRef.current;
    const ctx = c.getContext("2d");
    const resize = () => {
      c.width = innerWidth;
      c.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);
    function spawn() {
      const dir = Math.random() > 0.5 ? 1 : -1;
      return { x: dir > 0 ? -50 : innerWidth + 50, y: innerHeight * (0.05 + Math.random() * 0.7), vx: dir * (0.3 + Math.random() * 0.8), scale: 0.4 + Math.random() * 0.8, opacity: 0.06 + Math.random() * 0.12, phase: Math.random() * Math.PI * 2 };
    }
    const birds = Array.from({ length: 6 }, spawn);
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.05;
      ctx.clearRect(0, 0, c.width, c.height);
      birds.forEach((b, i) => {
        b.x += b.vx;
        if (b.x < -100 || b.x > innerWidth + 100) birds[i] = spawn();
        const wing = Math.sin(t + b.phase) * 0.4;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(b.scale * (b.vx > 0 ? 1 : -1), b.scale);
        ctx.globalAlpha = b.opacity;
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#000";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.quadraticCurveTo(-8, -8 - wing * 8, 0, 0);
        ctx.quadraticCurveTo(8, -8 - wing * 8, 15, 0);
        ctx.stroke();
        ctx.restore();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: symRef, className: "fixed inset-0 pointer-events-none", style: { zIndex: 1 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: birdRef, className: "fixed inset-0 pointer-events-none", style: { zIndex: 2 } })
  ] });
}
function CustomCursor() {
  const dotRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  const [hover, setHover] = reactExports.useState(false);
  const [pulse, setPulse] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      const t = e.target;
      const interactive = !!t.closest("button, a, [data-interactive]");
      setHover(interactive);
    };
    const onDown = () => {
      setPulse(true);
      setTimeout(() => setPulse(false), 200);
    };
    addEventListener("mousemove", onMove);
    addEventListener("mousedown", onDown);
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      removeEventListener("mousemove", onMove);
      removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dotRef, className: "fixed top-0 left-0 pointer-events-none", style: { zIndex: 9998, width: 8, height: 8, borderRadius: "50%", background: "var(--purple-electric)", boxShadow: "0 0 14px var(--purple-bright), 0 0 24px var(--purple-core)", transition: pulse ? "transform 200ms" : void 0 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ringRef, className: "fixed top-0 left-0 pointer-events-none", style: { zIndex: 9997, width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(192,132,252,0.6)", filter: "blur(0.4px)", transform: "translate(-100px, -100px)", transition: "width 250ms, height 250ms, opacity 250ms", opacity: hover ? 1 : 0.5, scale: pulse ? "1.5" : hover ? "1.4" : "1" } })
  ] });
}
export {
  AmbientLayers as A,
  CustomCursor as C
};
