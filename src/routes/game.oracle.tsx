import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { AmbientLayers } from "@/components/AmbientLayers";
import { CustomCursor } from "@/components/CustomCursor";
import { Oracle } from "@/components/games/Oracle";

export const Route = createFileRoute("/game/oracle")({
  head: () => ({ meta: [{ title: "Oracle — Nevermore" }] }),
  component: OraclePage,
});

function OraclePage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--void)" }}>
      <AmbientLayers />
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Oracle back={() => navigate({ to: "/game" })} />
      </div>
      <CustomCursor />
    </div>
  );
}
