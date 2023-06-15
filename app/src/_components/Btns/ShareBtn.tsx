// "use client";
// import { FaFacebook, FaLink, FaPinterest, FaShare, FaTwitter } from "react-icons/fa";
// import { useState, useRef, useEffect } from "react";
// import { MdMail } from "react-icons/md";


export default function ShareBtn({ title = '', url = '', style }: { title?: string, url?: string, style?: string }) {
    return <></>

    // const [isOpen, setIsOpen] = useState(false);
    // const dialogRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

    // const handleOpen = () => {
    //     setIsOpen(true);
    // };

    // const handleClickOutside = (event: MouseEvent) => {
    //     if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) setIsOpen(false)
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => { document.removeEventListener("mousedown", handleClickOutside) };
    // }, []);

    // return (
    //     <div className="relative">
    //         <button
    //             onClick={handleOpen}
    //             className={`flex items-center justify-center gap-2 w-fit px-2 py-1 float-right border-2 border-transparent shadow-lg shadow-neutel/20 hover:shadow-neutel/40 bg-lighter dark:bg-darker hover:border-xlight dark:hover:border-xdark rounded-lg ${style}`}
    //             title="share on social media">
    //             <FaShare /> Share
    //         </button>

    //         {isOpen && (
    //             <div ref={dialogRef} className="dialog-overlay max-w-[400px] w-max md:w-[300px] right-0 absolute top-12 flex flex-col rounded-lg shadow-lg shadow-neutel/10">
    //                 <div className="bg-lighter dark:bg-darker w-2 rotate-45 absolute right-2 -top-1 aspect-square"></div>
    //                 <ul className="relative z-10 rounded-lg bg-lighter dark:bg-darker overflow-hidden">
    //                     <li>
    //                         <button
    //                             className="pl-4 p-3 w-full text-left flex items-center justify-start gap-2 hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70"
    //                             title="share on twitter">
    //                             <FaTwitter />
    //                             Twitter
    //                         </button>
    //                     </li>
    //                     <li>
    //                         <button
    //                             className="pl-4 p-3 w-full text-left flex items-center justify-start gap-2 hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70"
    //                             title="share on facebook">
    //                             <FaFacebook />
    //                             Facebook
    //                         </button>
    //                     </li>
    //                     <li>
    //                         <button
    //                             className="pl-4 p-3 w-full text-left flex items-center justify-start gap-2 hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70"
    //                             title="share on pintrest">
    //                             <FaPinterest />
    //                             Pinterest
    //                         </button>
    //                     </li>
    //                     <li>
    //                         <button
    //                             className="pl-4 p-3 w-full text-left flex items-center justify-start gap-2 hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70"
    //                             title="share by eamil">
    //                             <MdMail />
    //                             Email
    //                         </button>
    //                     </li>
    //                     <li>
    //                         <button
    //                             className="p-4 w-full text-left flex items-center justify-start gap-2 hover:bg-white dark:hover:bg-black text-black/70 dark:text-white/70 border-t border-neutral-500/40"
    //                             title="copy link">
    //                             <FaLink />
    //                             Copy Link
    //                         </button>
    //                     </li>
    //                 </ul>
    //             </div>
    //         )}
    //     </div>
    // );
}
