import { useEffect, useRef } from "react";
import orbImg from "@/assets/orb.png";

export function Orb({ size = 380, onClick, intense = false }: { size?: number; onClick?: () => void; intense?: boolean }) {
  const flashRef = useRef<HTMLDivElement>(null);
  const click = () => {
    if (flashRef.current) {
      flashRef.current.style.opacity = '1';
      setTimeout(() => { if (flashRef.current) flashRef.current.style.opacity = '0'; }, 200);
    }
    onClick?.();
  };
  return (
    <button
      onClick={click}
      className="relative float-orb group"
      style={{ width: size, height: size, background: 'transparent', border: 'none', cursor: 'none' }}
      aria-label="The Orb"
    >
      {/* outer atmospheric glow */}
      <div className="absolute inset-0 rounded-full pulse-soft" style={{ background: 'radial-gradient(circle, rgba(168,120,255,0.4) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)', filter: 'blur(40px)', transform: 'scale(1.4)' }} />
      <div className="absolute inset-0 rounded-full spin-slower" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(192,132,252,0.15), transparent, rgba(59,130,246,0.1), transparent)', filter: 'blur(30px)' }} />
      <img
        src={orbImg}
        alt=""
        className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        style={{ filter: `drop-shadow(0 0 60px rgba(168,120,255,${intense ? 0.9 : 0.6})) drop-shadow(0 0 120px rgba(124,58,237,${intense ? 0.7 : 0.4}))` }}
      />
      <div ref={flashRef} className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, white, transparent 60%)', opacity: 0, transition: 'opacity 200ms' }} />
    </button>
  );
}
