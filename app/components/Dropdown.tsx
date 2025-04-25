import { useEffect, useRef } from "react";

export function Dropdown({ onClose }: { onClose: () => void }) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={dropdownRef}
            className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded shadow-lg z-10"
        >
            <ul className="dropdown-menu">
                <li>
                    <button onClick={(e) => e.preventDefault()}>test</button>
                </li>
            </ul>
        </div>
    );
}
