import { City } from "@/components/City";
import { QuestList } from "@/components/QuestList";
import { ResourcePanel } from "@/components/ResourcePanel";
import { useEffect } from "react";
import { useGameState } from "@/stores/GameState";

export function Game() {

  const { increaseTime } = useGameState((state) => state);

  useEffect(() => {
    const timer = setInterval(() => {
      increaseTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className="flex flex-col h-full w-full items-stretch justify-center bg-blue-50 p-4">
    <div className="absolute top-0 left-0 w-full h-20 flex items-start justify-center p-4 gap-4">
      <QuestList/>
      <ResourcePanel  />
    </div>
    <div className="flex flex-1 flex-col items-center justify-center">
      <City/>
    </div>
  </div>;
}
