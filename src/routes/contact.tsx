import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Summon Us — Nevermore Academy" },
      {
        name: "description",
        content:
          "Reach the residents of Nevermore through the ouija board. Mortal name, raven mail, and a dark message required.",
      },
      { property: "og:title", content: "Summon Us — Nevermore Academy" },
      {
        property: "og:description",
        content: "Send a message into the void.",
      },
    ],
  }),
  component: ContactPage,
});

const BOARD_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const BOARD_NUMBERS = "0123456789".split("");

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [jumpscare, setJumpscare] = useState(false);
  const planchetteRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);

  // Easter egg
  useEffect(() => {
    if (name.trim().toLowerCase() === "wednesday" && !jumpscare) {
      setJumpscare(true);
      const t = setTimeout(() => setJumpscare(false), 2400);
      return () => clearTimeout(t);
    }
  }, [name, jumpscare]);

  // Move planchette to last typed letter
  const lastChar = useMemo(() => {
    const s = name.trim().toUpperCase();
    return s[s.length - 1] || "";
  }, [name]);

  useEffect(() => {
    const board = boardRef.current;
    const planch = planchetteRef.current;
    if (!board || !planch) return;
    const target = board.querySelector<HTMLElement>(
      `[data-letter="${lastChar}"]`,
    );
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSmoke(true);
    setTimeout(() => {
      setSent(true);
      setSmoke(false);
    }, 900);
  };

  // Floating ravens
  const ravens = Array.from({ length: 6 });

  return (
    <div
      style={{
        background: "#0a0008",
        color: "#d4c8e2",
        minHeight: "100vh",
        fontFamily: "'Raleway', sans-serif",
        cursor: "auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Floating ravens bg */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        {ravens.map((_, i) => (
          <div
            key={i}
            className="raven-float"
            style={{
              left: `${(i * 17 + 5) % 90}%`,
              top: `${(i * 23 + 10) % 80}%`,
              animationDelay: `${i * 1.4}s`,
              animationDuration: `${12 + (i % 4) * 3}s`,
            }}
          >
            <svg viewBox="0 0 64 32" width="40" height="20" opacity="0.35">
              <path
                d="M2 18 C 12 8, 22 6, 32 14 C 40 8, 52 8, 62 16 C 52 18, 44 22, 32 22 C 22 24, 12 22, 2 18 Z"
                fill="#0a0008"
                stroke="#9d4edd"
                strokeWidth="0.6"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-8 text-center">
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.5em",
            color: "#9d8fba",
            fontSize: "0.7rem",
          }}
        >
          THE BOARD IS LISTENING
        </p>
        <h1
          className="mt-6"
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "0.08em",
            color: "#d4c8e2",
            textShadow:
              "0 0 30px rgba(157,78,221,0.7), 0 0 80px rgba(106,13,173,0.5)",
          }}
        >
          Summon Us
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl italic"
          style={{ color: "#9d8fba" }}
        >
          Speak softly. The board has been waiting for someone exactly like you.
        </p>
      </section>

      {/* Ouija board */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-12">
        <div
          ref={boardRef}
          className="relative mx-auto p-8"
          style={{
            background:
              "radial-gradient(ellipse at center, #1a0a2e, #0a0008 80%)",
            border: "1px solid #6a0dad",
            borderRadius: "180px / 60px",
            boxShadow:
              "0 0 60px rgba(106,13,173,0.4), inset 0 0 60px rgba(0,0,0,0.6)",
            minHeight: 280,
          }}
        >
          <div className="flex justify-between px-4 pb-4">
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#9d4edd",
                letterSpacing: "0.4em",
              }}
            >
              YES
            </span>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#9d4edd",
                letterSpacing: "0.4em",
              }}
            >
              NO
            </span>
          </div>
          <div className="grid grid-cols-13 gap-1 sm:gap-2" style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}>
            {BOARD_LETTERS.slice(0, 13).map((l) => (
              <Letter key={l} letter={l} active={lastChar === l} />
            ))}
            {BOARD_LETTERS.slice(13).map((l) => (
              <Letter key={l} letter={l} active={lastChar === l} />
            ))}
            {/* center pad */}
            <div className="col-span-13" />
          </div>
          <div className="mt-3 grid grid-cols-10 gap-1 sm:gap-2">
            {BOARD_NUMBERS.map((n) => (
              <Letter key={n} letter={n} active={lastChar === n} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.6em",
                color: "#6a0dad",
              }}
            >
              GOODBYE
            </span>
          </div>

          {/* Planchette */}
          <div
            ref={planchetteRef}
            className="planchette pointer-events-none absolute"
            style={{
              left: "50%",
              top: "50%",
              transition: "transform 600ms cubic-bezier(0.5, 0, 0.2, 1)",
            }}
          >
            <svg viewBox="0 0 100 80" width="80" height="64">
              <path
                d="M50 4 C 80 8, 92 36, 76 64 C 68 76, 32 76, 24 64 C 8 36, 20 8, 50 4 Z"
                fill="rgba(20,10,30,0.85)"
                stroke="#c084fc"
                strokeWidth="1.5"
              />
              <circle cx="50" cy="40" r="10" fill="none" stroke="#c084fc" strokeWidth="1" />
              <circle cx="50" cy="40" r="2" fill="#c084fc" />
            </svg>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-32">
        {sent ? (
          <ResponseCard onReset={() => { setSent(false); setName(""); setEmail(""); setMessage(""); }} />
        ) : (
          <form
            onSubmit={submit}
            className="space-y-6 p-8"
            style={{
              background: "linear-gradient(180deg, #15001fcc, #0a0008)",
              border: "1px solid rgba(157,78,221,0.3)",
              clipPath:
                "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
              boxShadow: "0 0 40px rgba(106,13,173,0.25)",
            }}
          >
            <Field label="Your Mortal Name" value={name} onChange={setName} placeholder="Enid Sinclair…" />
            <Field label="Your Raven Mail" value={email} onChange={setEmail} type="email" placeholder="raven@nevermore.edu" />
            <Field label="Your Dark Message" value={message} onChange={setMessage} as="textarea" placeholder="Whisper into the void…" />

            <button
              type="submit"
              className="summon-btn relative w-full py-4"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.4em",
                fontSize: "0.9rem",
                color: "#d4c8e2",
                background:
                  "linear-gradient(135deg, #2a0a3e, #6a0dad)",
                border: "1px solid #9d4edd",
                clipPath:
                  "polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)",
                textShadow: "0 0 12px #9d4edd",
                boxShadow: "0 0 30px rgba(157,78,221,0.5)",
              }}
            >
              SEND TO THE VOID
              {smoke && <SmokeBurst />}
            </button>
          </form>
        )}

        {/* Address card */}
        <div
          className="mt-12 grid gap-6 sm:grid-cols-[1fr_1.2fr] items-stretch"
        >
          <div
            className="p-6"
            style={{
              background: "linear-gradient(180deg, #15001f, #0a0008)",
              border: "1px solid rgba(157,78,221,0.3)",
              clipPath:
                "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.3em",
                color: "#9d4edd",
                fontSize: "0.7rem",
              }}
            >
              FIND US — IF YOU DARE
            </p>
            <h3
              className="mt-3"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.5rem",
                color: "#d4c8e2",
              }}
            >
              Nevermore Academy
            </h3>
            <p className="mt-3 italic" style={{ color: "#9d8fba" }}>
              13 Raven's Hollow Lane
              <br />
              Jericho, Vermont 05009
              <br />
              United States of the Unliving
            </p>
            <p
              className="mt-4 text-xs"
              style={{ color: "#5c4f78", letterSpacing: "0.25em" }}
            >
              — DO NOT KNOCK AFTER MIDNIGHT
            </p>
          </div>

          {/* Decorative map */}
          <div
            className="relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(106,13,173,0.4), #0a0008 70%)",
              border: "1px solid rgba(157,78,221,0.3)",
              clipPath:
                "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
              minHeight: 220,
            }}
          >
            <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full">
              {/* paths */}
              <path d="M10 180 C 60 140, 90 160, 140 110 S 240 80, 290 40" stroke="#9d4edd" strokeDasharray="4 6" fill="none" strokeWidth="1.2" />
              <path d="M20 60 C 80 90, 130 70, 200 130 S 280 200, 290 200" stroke="#6a0dad" strokeDasharray="2 5" fill="none" strokeWidth="1" />
              {/* trees */}
              {[40, 70, 110, 220, 250].map((x, i) => (
                <g key={i} transform={`translate(${x},${130 + (i % 2) * 30})`}>
                  <path d="M0 0 L -6 14 L 6 14 Z" fill="#1a0a2e" stroke="#6a0dad" />
                  <path d="M0 -6 L -8 12 L 8 12 Z" fill="#15001f" stroke="#6a0dad" />
                </g>
              ))}
              {/* school */}
              <g transform="translate(150,90)">
                <path d="M-30 20 L -30 -10 L -20 -20 L 0 -30 L 20 -20 L 30 -10 L 30 20 Z" fill="#15001f" stroke="#9d4edd" strokeWidth="1.4" />
                <path d="M-6 20 L -6 4 L 6 4 L 6 20 Z" fill="#0a0008" stroke="#9d4edd" />
                <circle cx="0" cy="-26" r="3" fill="#c084fc">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
                </circle>
              </g>
              <text
                x="150"
                y="135"
                textAnchor="middle"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.3em",
                  fontSize: 9,
                  fill: "#d4c8e2",
                }}
              >
                NEVERMORE
              </text>
              <text
                x="150"
                y="200"
                textAnchor="middle"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.5em",
                  fontSize: 8,
                  fill: "#9d8fba",
                }}
              >
                JERICHO · VT
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Jumpscare */}
      {jumpscare && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "#0a0008",
            animation: "flicker 0.18s steps(2) 12",
          }}
        >
          <div
            className="text-center"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#d4c8e2",
              animation: "zoomIn 1.2s ease-out",
            }}
          >
            <div style={{ fontSize: "10rem", lineHeight: 1 }}>👁</div>
            <p
              className="mt-4"
              style={{
                fontSize: "2rem",
                letterSpacing: "0.4em",
                textShadow: "0 0 20px #9d4edd",
              }}
            >
              SHE SEES YOU
            </p>
          </div>
        </div>
      )}

      <style>{`
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
      `}</style>
    </div>
  );
}

function Letter({ letter, active }: { letter: string; active: boolean }) {
  return (
    <div
      data-letter={letter}
      className="flex items-center justify-center select-none"
      style={{
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        fontSize: "0.95rem",
        height: 30,
        color: active ? "#fff" : "#c084fc",
        textShadow: active
          ? "0 0 16px #c084fc, 0 0 28px #9d4edd"
          : "0 0 6px rgba(157,78,221,0.4)",
        transition: "color 250ms, text-shadow 250ms",
      }}
    >
      {letter}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  as,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  as?: "textarea";
}) {
  const common = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    placeholder,
    style: {
      width: "100%",
      background: "rgba(10,0,8,0.7)",
      border: "1px solid rgba(157,78,221,0.4)",
      color: "#d4c8e2",
      padding: "12px 14px",
      fontFamily: "'Raleway', sans-serif",
      outline: "none",
      letterSpacing: "0.05em",
    } as React.CSSProperties,
  };
  return (
    <label className="block">
      <span
        className="mb-2 block"
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.3em",
          color: "#9d4edd",
          fontSize: "0.7rem",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {as === "textarea" ? (
        <textarea rows={4} {...(common as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input type={type} {...(common as React.InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </label>
  );
}

function SmokeBurst() {
  const puffs = Array.from({ length: 14 });
  return (
    <span className="pointer-events-none absolute inset-0 overflow-visible">
      {puffs.map((_, i) => {
        const angle = (i / puffs.length) * Math.PI * 2;
        const dx = Math.cos(angle) * 80;
        const dy = Math.sin(angle) * 60;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(157,78,221,0.8), transparent 70%)",
              transform: "translate(-50%,-50%)",
              animation: `puff 800ms ease-out forwards`,
              ["--dx" as string]: `${dx}px`,
              ["--dy" as string]: `${dy}px`,
            } as React.CSSProperties}
          />
        );
      })}
      <style>{`
        @keyframes puff {
          0% { opacity: 0.9; transform: translate(-50%,-50%) scale(0.4); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(2.2); }
        }
      `}</style>
    </span>
  );
}

function ResponseCard({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="p-10 text-center"
      style={{
        background: "linear-gradient(180deg, #15001fcc, #0a0008)",
        border: "1px solid rgba(157,78,221,0.4)",
        clipPath:
          "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
        boxShadow: "0 0 50px rgba(106,13,173,0.4)",
      }}
    >
      <div className="thing-wave mx-auto" style={{ fontSize: "5rem" }}>
        🖐️
      </div>
      <h3
        className="mt-4"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.6rem",
          letterSpacing: "0.15em",
          color: "#d4c8e2",
          textShadow: "0 0 16px #9d4edd",
        }}
      >
        Your message has been received by Thing
      </h3>
      <p className="mt-3 italic" style={{ color: "#9d8fba" }}>
        He'll deliver it personally. He insists.
      </p>
      <button
        onClick={onReset}
        className="mt-8 px-6 py-2"
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.3em",
          fontSize: "0.75rem",
          color: "#c084fc",
          border: "1px solid #6a0dad",
          background: "rgba(10,0,8,0.7)",
        }}
      >
        SEND ANOTHER
      </button>
      <style>{`
        .thing-wave { animation: wave 1.4s ease-in-out infinite; transform-origin: 70% 70%; }
        @keyframes wave {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(18deg); }
        }
      `}</style>
    </div>
  );
}
