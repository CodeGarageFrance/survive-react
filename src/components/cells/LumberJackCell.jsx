import { useEffect, useState } from "react";
import { Cell } from "./Cell";
import LumberJackIcon from "@/assets/img/icons/cabin.svg";
import WoodIcon from "@/assets/img/icons/wood.svg";

export function LumberJackCell(){

    let interval = null;
    let [count, setCount] = useState(0);

    function handleClick(){
        if(count > 0){
            setCount(0);
        }
    }

    useEffect(() => {
        interval = setInterval(() => {
            setCount(prev => {
                console.log(prev + 1);
                return prev + 1;
            });
            console.log(count)
        }, 5000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, []);

    return (
        <Cell onClick={handleClick}>
            <img src={LumberJackIcon} style={{opacity: count > 0 ? 0.5 : 1}} width="50"/>
            {
                count > 0 && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white font-bold text-lg">
                        <span className="absolute ">{count}</span>
                        <img src={WoodIcon} width="50"/>
                    </div>
                )
        }
        </Cell>
    )
}