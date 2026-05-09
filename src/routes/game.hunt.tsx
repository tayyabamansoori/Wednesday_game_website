import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { AmbientLayers } from "@/components/AmbientLayers";
import { CustomCursor } from "@/components/CustomCursor";
import { Combat } from "@/components/games/Combat";

export const Route = createFileRoute("/game/hunt")({
  head: () => ({ meta: [{ title: "The Hunt — Nevermore" }] }),
  component: HuntPage,
});

function HuntPage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--void)" }}>
      <AmbientLayers />
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Combat back={() => navigate({ to: "/game" })} />
      </div>
      <CustomCursor />
    </div>
  );
}
