import { useState } from "react";
import { Dropdown } from "./Dropdown";

type Props = {
    children?: React.ReactNode;
    onClick: () => void;
};

export function Cell({children, onClick}: Props) {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="relative flex justify-center items-center border-1 border-blue-200 hover:bg-blue-200">
        <button 
            className="flex justify-center items-center cursor-pointer w-full h-full self-stretch"
            onClick={() => {setShowMenu(true);console.log("show");onClick()}}
        >
            {children}
        </button>
        
        {showMenu && <Dropdown onClose={()=>setShowMenu(false)}/>}
        </div>
    );
}