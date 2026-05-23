import { useRef, useState, useEffect } from "react";

export function useDebounce(originalFn){
    // we are storing currentclock in ref becaise we dont want to rerender the app whenever the value changes
    const currentClock = useRef();
    
    const fn = () => {
        clearTimeout(currentClock.current)
        currentClock.current = setTimeout(() => {
            originalFn()
        }, 200);
    }
    return fn
}


export const useDebounce2 = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

