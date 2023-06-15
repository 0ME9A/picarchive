"use client";
import { ReactNode, useEffect, useState } from "react";


interface ScrollPositionFace {
    id?: string;
    children: ReactNode;
}
export default function ScrollPosition({ children }: ScrollPositionFace) {
    const [isAtTop, setIsAtTop] = useState(false);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const element = document.getElementById("scrollMark");
            if (element) {
                const rect = element.getBoundingClientRect();
                const isElementAtTop = rect.top <= 0;
                setIsAtTop(isElementAtTop);
                setPosition(rect.top);
            }
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <>
            <div id="scrollMark" className="h-14 w-full"></div>
            <section className={`w-full bg-white dark:bg-black ${isAtTop && 'fixed top-14 z-20'}`}>
                {children}
            </section>
        </>
    )
}