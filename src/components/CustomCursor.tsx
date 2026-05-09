import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      const t = e.target as HTMLElement;
      const interactive = !!t.closest('button, a, [data-interactive]');
      setHover(interactive);
    };
    const onDown = () => { setPulse(true); setTimeout(() => setPulse(false), 200); };
    addEventListener('mousemove', onMove);
    addEventListener('mousedown', onDown);
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { removeEventListener('mousemove', onMove); removeEventListener('mousedown', onDown); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none" style={{ zIndex: 9998, width: 8, height: 8, borderRadius: '50%', background: 'var(--purple-electric)', boxShadow: '0 0 14px var(--purple-bright), 0 0 24px var(--purple-core)', transition: pulse ? 'transform 200ms' : undefined }} />
      <div ref={ringRef} className="fixed top-0 left-0 pointer-events-none" style={{ zIndex: 9997, width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(192,132,252,0.6)', filter: 'blur(0.4px)', transform: 'translate(-100px, -100px)', transition: 'width 250ms, height 250ms, opacity 250ms', opacity: hover ? 1 : 0.5, scale: pulse ? '1.5' : (hover ? '1.4' : '1') }} />
    </>
  );
}
