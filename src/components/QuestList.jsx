import { useState } from "react";

const defaultQuests = [
    {
        id: 1,
        name: "Une bonne nuit de sommeil",
        description: "Créez deux cabanes pour loger les premiers aventuriers.",
        status: "completed",
    },
    {
        id: 2,
        name: "Quest 2",
        description: "Description for Quest 2",
        status: "in-progress",
    },
    {
        id: 3,
        name: "Quest 3",
        description: "Description for Quest 3",
        status: "not-started",
    },
];

export function QuestList() {
    const [quests, setQuests] = useState(defaultQuests);

    return (
        <ul className="bg-blue-100 flex flex-col items-center rounded-xl border-1 border-blue-200 w-72">
            {
                quests.map((quest) => (
                    <li key={quest.id} className="flex w-full p-4 border-b border-blue-200 last:border-b-0 items-center">
                        <div className={`flex items-center justify-center w-4 h-4 rounded ${quest.status === "completed" ? "bg-blue-500" : quest.status === "in-progress" ? "bg-yellow-500" : "bg-white"} mr-2`}>
                            {quest.status === "completed" && <span className="text-white font-bold leading-none">𐄂</span>}
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="font-bold leading-none text-sm">{quest.name}</p>
                            <p className="leading-none text-xs">{quest.description}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}