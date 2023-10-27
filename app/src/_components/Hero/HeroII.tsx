import { ReactNode } from "react";
import Image from "next/image";

export default function HeroII({ children, bgImage, style }: { children: ReactNode, bgImage: string, style?: string }) {
    return (
        <header className={`w-full min-h-[400px] h-[50vh] relative ${style}`}>
            <Image src={bgImage || "/img/introW.jpg"} alt={"background avatar"} width={1000} height={400} className="w-full h-full object-cover absolute top-0 left-0" />
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-gray-100 to-gray-100/50 dark:from-darker dark:to-darker/50"> </div>
            <section className="xl:container h-full w-full mx-auto flex flex-col justify-center p-3 space-y-1 relative text-black dark:text-white">
                {children}
            </section>
        </header>
    )
}