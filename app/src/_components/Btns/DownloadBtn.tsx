"use client";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { random } from "../../_functions";
import NextLink from "next/link";
import Btn from "./Btn";

interface DownloadBtnFace {
    downloadUrl: string,
    originalSize: {
        width: number;
        height: number;
    }
}

const photoSize = [
    { size: ["small", 640] },
    { size: ["medium", 1920] },
    { size: ["large", 2400] },
]

export default function DownloadBtn({ downloadUrl, originalSize }: DownloadBtnFace) {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type
    const [isMount, setMount] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) setIsOpen(false);
    };

    useEffect(() => {
        setMount(true);
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isMount) return <></>

    return (
        <div className="relative w-full sm:w-fit mb-5 sm:mb-0">
            <div className="flex shadow-lg shadow-neutel/20 hover:shadow-neutel/40 rounded-lg">
                <NextLink
                    href={`${downloadUrl}&force=true`}
                    target="_blank"
                    title={`download free`}
                    rel="nofollow noopener"
                    download={true}
                    data-test="non-sponsored-photo-download-button"
                    className={`px-4 flex items-center justify-center rounded-l-lg border-2 border-transparent hover:border-xlight dark:hover:border-xdark bg-lighter dark:bg-darker `}>
                    Download Free
                </NextLink>
                <Btn
                    props={{
                        title: "Download Quality",
                        text: false,
                        style: "rounded-l-none aspect-square !p-3 text-lg shadow-none !bg-light dark:!bg-dark",
                        value: undefined,
                        funCall: handleOpen,
                    }}>
                    <FiChevronDown />
                </Btn>
            </div>

            <div
                ref={dialogRef}
                className={`dialog-overlay max-w-[400px] w-max right-0 absolute bottom-14 flex flex-col shadow-lg shadow-neutel/10 rounded-lg origin-bottom-right scale-0 opacity-0 ${isOpen && "!scale-100 !opacity-100"
                    }`}>
                <div className="bg-lighter dark:bg-darker w-2 rotate-45 absolute right-2 -bottom-1 aspect-square"></div>
                <ul className="relative z-10 bg-lighter dark:bg-darker rounded-md overflow-hidden min-w-[300px]">
                    {photoSize.map((item) => {
                        const photoAspectRatio = `${item.size[1]} x ${Math.ceil((item.size[1] as number * originalSize.height) / originalSize.width)}`;
                        return (
                            <li key={random()}>
                                <NextLink
                                    href={`${downloadUrl}&force=true&w=${item.size[1]}`}
                                    // title={item.size[0] || "loading..."}
                                    title={`download photo, ratio ${photoAspectRatio}`}
                                    target="_blank"
                                    rel="nofollow noopener"
                                    download={true}
                                    data-test="non-sponsored-photo-download-button"
                                    className={`pr-4 p-3 inline-block capitalize w-full !no-underline hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70`}>
                                    {item.size[0]}{" "}
                                    <span className="opacity-80 pl-1 text-sm font-normal lowercase">
                                        {photoAspectRatio}
                                    </span>
                                </NextLink>
                            </li>
                        )
                    })}

                    <li key={random()}>
                        <NextLink
                            href={`${downloadUrl}&force=true`}
                            target="_blank"
                            rel="nofollow noopener"
                            title={`download original photo`}
                            download={true}
                            data-test="non-sponsored-photo-download-button"
                            className={`pr-4 pl-3 py-4 border-t border-neutral-500/40 inline-block font-bold capitalize w-full !no-underline hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70`}>
                            {"Original"}
                            <span className="opacity-80 pl-1 text-sm font-normal lowercase">
                                ({originalSize.width} x {originalSize.height})
                            </span>
                        </NextLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}