import { ReactNode } from "react";

interface BtnFace {
    props: {
        title: string;
        text: string | false;
        style?: string;
        value?: string | boolean | number
        funCall: (e?: string | number | boolean) => void
    };
    children?: ReactNode;
}
export default function Btn({ props: { title, text, style, value, funCall }, children }: BtnFace) {
    return (
        <button
            title={title}
            className={`border-transparent capitalize px-4 shadow-lg shadow-neutel/20 hover:shadow-neutel/40 inline-block border-2 bg-lighter dark:bg-darker p-2 h-full rounded-lg hover:border-xlight dark:hover:border-xdark ${style}`}
            onClick={() => funCall(value)}>
            {text || text}
            {children}
        </button>
    )
}