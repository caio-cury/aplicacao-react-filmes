import { useEffect, useRef } from "react";

export default function useOnClickOutside(handler) {
    const modalRef = useRef();

    useEffect(() => {
        const handlerCheck = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener('mousedown', handlerCheck);
        return () => {
            document.removeEventListener('mousedown', handlerCheck);
        }
    })

    return modalRef;
}