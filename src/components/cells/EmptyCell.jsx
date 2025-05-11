import { Cell } from "./Cell";
import { useGameState } from "@/stores/GameState";
import { useState, useEffect } from "react";

export function EmptyCell({ position }) {
    const { createHouse, checkCanCreateHouse, map, wood  } = useGameState((state) => state);

    const [actions, setActions] = useState([]);  
    
    useEffect(()=>{
        setActions([
            {
                name: "Build a house",
                enabled: checkCanCreateHouse(position.y, position.x),
                cb: ()=>{
                    createHouse(position.y, position.x);
                }
            }
        ]);
    }, [map, wood]);

    return (
        <Cell position={position} menuActions={actions}>
        </Cell>
    );
}