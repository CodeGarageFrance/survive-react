import { Cell } from "./Cell";
import MineIcon from "@/assets/img/icons/mine.svg";

export function MineCell(){

    function handleClick(){
        alert("Mine cell clicked")
    }

    return (
        <Cell onClick={handleClick}>
            <img src={MineIcon} width="50"/>
        </Cell>
    )
}