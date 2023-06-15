import { useEffect, useState } from "react";

export default function useGlitch() {
    const [isMount, setMount] = useState(false);
    const [isGlitch, setGlitch] = useState<number>(0)
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setGlitch(isGlitch + 1)
        };
        window.addEventListener('resize', handleResize);
        setMount(true);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fixGlitch = () => {
            setTimeout(() => {
                setGlitch(0)
            }, 1000);
        }
        return fixGlitch
    }, [isGlitch])

    return {windowSize, isGlitch, isMount}
}