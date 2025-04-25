import { Cell } from "./Cell";
import FarmIcon from "@/assets/img/icons/barn.svg";

export function FarmCell(){
    function handleClick(){
        alert("Mine cell clicked")
    }
    return (
        <Cell onClick={handleClick}>
            <img src={FarmIcon} width="50"/>
        </Cell>
    )
}