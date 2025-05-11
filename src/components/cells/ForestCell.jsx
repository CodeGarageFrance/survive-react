import TreeIcon from "@/assets/img/icons/tree.svg";
import Tree2Icon from "@/assets/img/icons/tree2.svg";
import { Cell } from "./Cell";
import { useEffect, useState } from "react";
import { useGameState } from "@/stores/GameState";

export function ForestCell({ position, people }){

    const { addPeople, checkCanAddPeople, map } = useGameState((state) => state);
    const [icon, setIcon] = useState(TreeIcon);
    const [actions, setActions] = useState([]);  
    const timer = null;

    useEffect(() => {
        var random = Math.floor(Math.random() * 2) + 1;
        setIcon(random === 1 ? TreeIcon : Tree2Icon);
    }, []);

    
    useEffect(()=>{
        setActions([
            {
                name: "Add people (+meat +wood)",
                enabled: checkCanAddPeople(position.y, position.x),
                cb: ()=>{
                    addPeople(position.y, position.x);
                }
            }
        ]);
    }, [map]);
    

    return (
        <Cell position={position} people={people} menuActions={actions}>
            <img src={icon} width="50"/>
        </Cell>
    )
}