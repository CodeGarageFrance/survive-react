import ForestIcon from "@/assets/img/icons/tree.svg";
import HouseIcon from "@/assets/img/icons/shed.svg";

const icons = {
    forest: ForestIcon,
    house: HouseIcon,

}

export function Cell({ type, people, onClick }) {
    
    return (
        <div className="relative flex justify-center items-center border-1 border-blue-200 hover:bg-blue-200" onClick={onClick}>
            { 
                people > 0 && 
                <span 
                    className="absolute flex items-center justify-center font-bold right-2 top-2 bg-white rounded-full leading-none text-sm w-6 h-6"
                >
                    {people}
                </span>
            }
            { icons[type] && <img src={icons[type]} alt={type} className="w-16 h-16" /> }
        </div>
    );
}