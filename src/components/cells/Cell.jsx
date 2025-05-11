import { useState } from "react";
import { Dropdown } from "@/components/Dropdown.jsx";


export function Cell({children, position, menuActions, people}) {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative flex justify-center items-center border-1 border-blue-200 hover:bg-blue-200">
        <button 
            className="flex justify-center items-center cursor-pointer w-full h-full self-stretch"
            onClick={() => {setShowMenu(true); console.log("click")}}
        >
            {children}
            { people > 0 && <span className="absolute flex items-center justify-center font-bold right-2 top-2 bg-white rounded-full leading-none text-sm w-6 h-6">{people}</span>}
        </button>
        
        { showMenu && (<Dropdown actions={menuActions} onClose={()=>setShowMenu(false)}/>) }
        </div>
    );
}