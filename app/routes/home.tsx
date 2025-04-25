import type { Route } from "./+types/home";
import { City } from "@/components/City";
import { useState } from "react";
import { QuestList } from "~/components/QuestList";
import { ResourcePanel } from "~/components/ResourcePanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Survive React" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const [wood, setWood] = useState(10);
  const [stone, setStone] = useState(0);
  const [food, setFood] = useState(20);
  const [people, setPeople] = useState(0);

  return <div className="flex flex-col h-full w-full items-stretch justify-center bg-blue-50 p-4">
    <div className="absolute top-0 left-0 w-full h-20 flex items-start justify-center p-4 gap-4">
      <QuestList/>
      <ResourcePanel wood={wood} stone={stone} food={food} people={people}  />
    </div>
    <div className="flex flex-1 flex-col items-center justify-center">
      <City/>
    </div>
  </div>;
}
