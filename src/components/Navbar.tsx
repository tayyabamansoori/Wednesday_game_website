import { Link } from "@tanstack/react-router";

const items = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Games", to: "/game" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        background: "linear-gradient(to bottom, #0a0008f2, #0a0008cc)",
        borderBottom: "1px solid rgba(157, 78, 221, 0.25)",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group" style={{ cursor: "none" }}>
          <div
            className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              width: 48,
              height: 54,
              clipPath:
                "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
              background:
                "linear-gradient(135deg, rgba(106,13,173,0.4), rgba(10,0,8,0.95))",
              border: "1px solid #9d4edd",
              boxShadow: "0 0 18px rgba(157,78,221,0.55)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 900,
                fontSize: "1.4rem",
                color: "#d4c8e2",
                textShadow: "0 0 10px #9d4edd",
              }}
            >
              N
            </span>
          </div>
          <div className="leading-tight">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                letterSpacing: "0.28em",
                color: "#d4c8e2",
                fontSize: "1rem",
                textShadow: "0 0 12px rgba(157,78,221,0.6)",
              }}
            >
              NEVERMORE
            </div>
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.35em",
                fontSize: "0.6rem",
                color: "#9d8fba",
              }}
            >
              ACADEMY OF OUTCASTS
            </div>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {items.map((it) => (
            <li key={it.to}>
              <Link
                to={it.to}
                activeOptions={{ exact: it.to === "/" }}
                className="nv-link relative px-4 py-2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#d4c8e2",
                  cursor: "none",
                }}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .nv-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 4px;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, transparent, #9d4edd, transparent);
          box-shadow: 0 0 10px #9d4edd, 0 0 18px #6a0dad;
          transition: width 320ms ease, left 320ms ease;
        }
        .nv-link:hover { color: #c084fc !important; text-shadow: 0 0 12px #9d4edd; }
        .nv-link:hover::after { width: 80%; left: 10%; }
        .nv-link[data-status="active"] { color: #c084fc !important; text-shadow: 0 0 14px #9d4edd; }
        .nv-link[data-status="active"]::after { width: 80%; left: 10%; }
      `}</style>
    </nav>
  );
}
