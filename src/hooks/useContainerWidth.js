import { useState, useEffect, useRef } from 'react';

function useContainerWidth() {
    const ref = useRef(null);
    const [width, setWidth] = useState(1120);

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
