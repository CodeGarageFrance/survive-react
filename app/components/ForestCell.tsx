import TreeIcon from "@/assets/img/icons/tree.svg";
import Tree2Icon from "@/assets/img/icons/tree2.svg";
import { Cell } from "./Cell";

export function ForestCell(){
    var random = Math.floor(Math.random() * 2) + 1;
    var ForestIcon = random === 1 ? TreeIcon : Tree2Icon;
    

    function handleClick(){
        alert("Mine cell clicked")
    }

    return (
        <Cell onClick={handleClick}>
            <img src={ForestIcon} width="50"/>
        </Cell>
    )
}