"use client";
import { photos_routes, social_routes, web_routes } from "../../_meta/webText";
import { useState, useRef, useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import { random } from "../../_functions";
import BasicLink from "../Links/BasicLink";
import Link from "../Links/Link";


export default function Menu({ style }: { style?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div className="relative z-50">
            <button
                onClick={handleOpen}
                title="Menu"
                className={`shadow-lg shadow-neutel/20 hover:shadow-neutel/40 bg-lighter dark:bg-darker hover:border-xlight dark:hover:border-xdark h-full flex items-center justify-center gap-2 w-fit p-2 float-right border-2 border-transparent rounded-lg ${style}`}>
                <TbGridDots />
            </button>

            {isOpen && (
                <div ref={dialogRef} className="dialog-overlay max-w-[400px] w-max right-0 absolute top-12 flex flex-col shadow-lg shadow-neutel/10 rounded-lg">
                    <div className="bg-lighter dark:bg-darker w-2 rotate-45 absolute right-2 -top-1 aspect-square"></div>
                    <ul className="relative z-10 bg-lighter dark:bg-darker rounded-lg overflow-hidden min-w-[300px]">
                        {photos_routes.map((item: string) => {
                            return (
                                <li key={random()}>
                                    <BasicLink props={{
                                        href: `/${item}`,
                                        title: item,
                                        text: item,
                                        style: `p-3 pl-4 w-full !no-underline hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70`
                                    }}>
                                    </BasicLink>
                                </li>
                            )
                        })}
                        {web_routes.map((item: string) => {
                            return (
                                <li key={random()}>
                                    <BasicLink props={{
                                        href: `/${item}`,
                                        title: item,
                                        text: item,
                                        style: `p-3 pl-4 w-full !no-underline hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70`
                                    }}>
                                    </BasicLink>
                                </li>
                            )
                        })}
                        <li>
                            <ul className="flex gap-2 border-t border-gray-500/10 p-1">
                                {social_routes.map(item => (
                                    <li key={item.route.title}>
                                        <Link props={{
                                            href: item.route.url,
                                            title: item.route.title,
                                            text: false,
                                            target: "_blank",
                                            style: "!p-2 text-lg"
                                        }}>
                                            {item.route.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}