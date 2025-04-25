import { FarmCell } from "./FarmCell";
import { ForestCell } from "./ForestCell";
import { MineCell } from "./MineCell";
import { HouseCell } from "./HouseCell";
import { FieldCell } from "./FieldCell";
import { LumberJackCell } from "./LumberJackCell";
import { EmptyCell } from "./EmptyCell";
import { MoutainCell } from "./MountainCell";

type CellType = 'farm' | 'forest' | 'mine' | 'house' | 'field' | 'lumberjack' | 'mountain' | 'empty';

export function City(){

    let renderCell = (cellType: CellType, key: string) => {
        switch (cellType) {
            case 'farm':
                return <FarmCell key={key} />;
            case 'forest':
                return <ForestCell key={key} />;
            case 'mine':
                return <MineCell key={key} />;
            case 'house':
                return <HouseCell key={key} />;
            case 'field':
                return <FieldCell key={key} />;
            case 'lumberjack':
                return <LumberJackCell key={key} />;
            case 'mountain':
                return <MoutainCell key={key} />;
            case 'empty':
                return <EmptyCell key={key} />;
        }
    }

    let cells : CellType[][] = [
        ['forest', 'forest', 'empty', 'empty', 'empty'],
        ['forest', 'empty', 'empty', 'empty', 'empty'],
        ['empty', 'empty', 'house', 'empty', 'empty'],
        ['empty', 'empty', 'empty', 'empty', 'forest'],
        ['empty', 'empty', 'mountain', 'mountain', 'forest']
    ];
    return (
        <div className="bg-blue-100 grid grid-cols-5 grid-rows-5 min-w-90 h-90 border-collapse overflow-hidden rounded-2xl border-b-6 border-blue-300 ">
            {
                cells.map((row, rowIndex) => {
                    return row.map((cellType, cellIndex) => {
                        return renderCell(cellType, `${rowIndex}-${cellIndex}`);
                    });
                })
            }
        </div>
    );
}