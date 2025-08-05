import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

function useContainerWidth(): [RefObject<HTMLDivElement>, number] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(1120);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width) {
                setWidth(entry.contentRect.width);
            }
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return [ref, width];
}

export default useContainerWidth;
