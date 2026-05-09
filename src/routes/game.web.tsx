import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { AmbientLayers } from "@/components/AmbientLayers";
import { CustomCursor } from "@/components/CustomCursor";
import { Puzzle } from "@/components/games/Puzzle";

export const Route = createFileRoute("/game/web")({
  head: () => ({ meta: [{ title: "The Web — Nevermore" }] }),
  component: WebPage,
});

function WebPage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "var(--void)" }}>
      <AmbientLayers />
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Puzzle back={() => navigate({ to: "/game" })} />
      </div>
      <CustomCursor />
    </div>
  );
}
