import { Game } from "@/components/Game";
import { Menu } from "@/components/Menu";
import { useState } from "react";
export function App() {

  const version = "0.0.1";
  const [status, setStatus] = useState("menu");

  function handlePlay() {
    setStatus("playing");
  }

  return (
    <div className="h-screen w-screen">
      { status === 'menu' && <Menu onPlay={handlePlay} version={version} /> }
      { status === 'playing' && <Game /> }

    </div>
  );
}