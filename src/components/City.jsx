import { FarmCell } from "./cells/FarmCell";
import { ForestCell } from "./cells/ForestCell";
import { MineCell } from "./cells/MineCell";
import { HouseCell } from "./cells/HouseCell";
import { FieldCell } from "./cells/FieldCell";
import { LumberJackCell } from "./cells/LumberJackCell";
import { EmptyCell } from "./cells/EmptyCell";
import { MoutainCell } from "./cells/MountainCell";
import { useGameState } from "@/stores/GameState";


export function City(){

    let renderCell = (cell, rowIndex, cellIndex) => {
        const position = { x: cellIndex, y: rowIndex };
        const key = `${rowIndex}-${cellIndex}`;
        switch (cell.type) {
            case 'farm':
                return <FarmCell key={key} position={position} />;
            case 'forest':
                return <ForestCell key={key} position={position} people={cell.people} />;
            case 'mine':
                return <MineCell key={key} position={position} />;
            case 'house':
                return <HouseCell key={key} position={position} />;
            case 'field':
                return <FieldCell key={key} position={position} />;
            case 'lumberjack':
                return <LumberJackCell key={key} position={position} />;
            case 'mountain':
                return <MoutainCell key={key} position={position} />;
            case 'empty':
                return <EmptyCell key={key} position={position} />;
        }
    }

    let cells = useGameState((state) => { return state.map }); 
    return (
        <div className="bg-blue-100 grid grid-cols-5 grid-rows-5 min-w-90 h-90 border-collapse border-b-6 rounded-b-lg border-blue-300 ">
            {
                cells.map((row, rowIndex) => {
                    return row.map((cellType, cellIndex) => {
                        return renderCell(cellType, rowIndex, cellIndex);
                    });
                })
            }
        </div>
    );
}