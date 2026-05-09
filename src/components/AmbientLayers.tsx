import { useEffect, useRef } from "react";

export function AmbientLayers() {
  const symRef = useRef<HTMLCanvasElement>(null);
  const birdRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const symbols = ['☥','☦','✟','♰','☽','☾','✦','✧','⚸','⚷','ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᛁ','ᛃ','ᛇ','ᛈ','ᛉ','ᛊ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛜ','ᛞ','ᛟ','♆','⚚','✶','✷','†','‡'];
    const c = symRef.current!; const ctx = c.getContext('2d')!;
    const resize = () => { c.width = innerWidth; c.height = innerHeight; };
    resize(); addEventListener('resize', resize);
    type S = { x: number; y: number; size: number; opacity: number; speed: number; ch: string; };
    const items: S[] = Array.from({ length: 30 }, () => spawn());
    function spawn(): S {
      return { x: Math.random()*innerWidth, y: innerHeight + Math.random()*innerHeight, size: 10+Math.random()*18, opacity: 0.03+Math.random()*0.09, speed: 0.15+Math.random()*0.5, ch: symbols[Math.floor(Math.random()*symbols.length)] };
    }
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0,0,c.width,c.height);
      items.forEach((s,i) => {
        s.y -= s.speed;
        if (s.y < -30) items[i] = spawn();
        ctx.font = `${s.size}px 'Cinzel Decorative', serif`;
        ctx.fillStyle = `rgba(192,132,252,${s.opacity})`;
        ctx.fillText(s.ch, s.x, s.y);
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    const c = birdRef.current!; const ctx = c.getContext('2d')!;
    const resize = () => { c.width = innerWidth; c.height = innerHeight; };
    resize(); addEventListener('resize', resize);
    type B = { x:number; y:number; vx:number; scale:number; opacity:number; phase:number; };
    function spawn(): B { const dir = Math.random() > 0.5 ? 1 : -1; return { x: dir>0 ? -50 : innerWidth+50, y: innerHeight*(0.05+Math.random()*0.7), vx: dir*(0.3+Math.random()*0.8), scale: 0.4+Math.random()*0.8, opacity: 0.06+Math.random()*0.12, phase: Math.random()*Math.PI*2 }; }
    const birds: B[] = Array.from({ length: 6 }, spawn);
    let raf = 0; let t = 0;
    const loop = () => {
      t += 0.05;
      ctx.clearRect(0,0,c.width,c.height);
      birds.forEach((b,i) => {
        b.x += b.vx;
        if (b.x < -100 || b.x > innerWidth+100) birds[i] = spawn();
        const wing = Math.sin(t + b.phase) * 0.4;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(b.scale * (b.vx > 0 ? 1 : -1), b.scale);
        ctx.globalAlpha = b.opacity;
        ctx.strokeStyle = '#000'; ctx.fillStyle = '#000';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.quadraticCurveTo(-8, -8 - wing*8, 0, 0);
        ctx.quadraticCurveTo(8, -8 - wing*8, 15, 0);
        ctx.stroke();
        ctx.restore();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <canvas ref={symRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />
      <canvas ref={birdRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />
    </>
  );
}
