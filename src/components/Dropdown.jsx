import { useEffect, useRef } from "react";

export function Dropdown({ onClose, actions }) {
    //const dropdownRef = useRef<HTMLDivElement>(null);
    //console.log(dropdownRef);

    useEffect(() => {
        function handleClickOutside(event) {
            if (event.target.closest("#dropdown-menu") === null) {
                // Clicked outside the dropdown menu
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    

    return (
        <div
            id="dropdown-menu"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            className="absolute w-48 top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded shadow-lg z-10 mt-1"
        >
            <ul className="flex flex-col w-full">
                {actions.map((action) => (
                    <li key={action.name}>
                        <button className="w-full py-1 px-4 text-center hover:bg-blue-50 disabled:opacity-50" disabled={!action.enabled} onClick={(e) => { e.preventDefault();action.cb?.();}}>{action.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
