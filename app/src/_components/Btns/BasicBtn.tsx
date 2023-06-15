import { ReactNode } from "react";

interface BasicFace {
    props: {
        title: string;
        text: string | false;
        style?: string;
        value?: string | boolean | number
        funCall: (e?: any) => void
    };
    children?: ReactNode;
}
export default function BasicBtn({ props: { title, text, style, value, funCall }, children }: BasicFace) {
    return (
        <button
            title={title}
            className={`p-1 px-4 capitalize text-black dark:text-white underline hover:opacity-75 inline-block ${style}`}
            onClick={() => funCall(value)}>
            {text || text}
            {children}
        </button>
    )
}