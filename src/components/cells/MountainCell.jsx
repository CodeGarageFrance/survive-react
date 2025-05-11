import { Cell } from "./Cell";
import MoutainIcon from "@/assets/img/icons/mountain.svg";

export function MoutainCell(){

    function handleClick(){
        alert("Mountain cell clicked")
    }

    return (
        <Cell onClick={handleClick}>
            <img src={MoutainIcon} width="50"/>
        </Cell>
    )
}