import { Cell } from "./Cell";
import FieldIcon from "@/assets/img/icons/wheat.svg";

export function FieldCell(){

    function handleClick(){
        alert("Mine cell clicked")
    }

    return (
        <Cell onClick={handleClick}>
            <img src={FieldIcon} width="50"/>
        </Cell>
    )
}