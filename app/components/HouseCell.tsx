import { Cell } from "./Cell";
import HouseIcon from "@/assets/img/icons/shed.svg";

export function HouseCell(){

    function handleClick(){
        alert("Mine cell clicked")
    }

    return (
        <Cell onClick={handleClick}>
            <img src={HouseIcon} width="50"/>
        </Cell>
    )
}