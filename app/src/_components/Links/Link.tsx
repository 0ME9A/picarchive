import { Url } from "next/dist/shared/lib/router/router"
import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkFace {
    props: {
        href: string | Url;
        title: string;
        text: string | false;
        target?: "_blank" | "_self";
        style?: string;
        rel?: string;
    };
    children?: ReactNode;
}
export default function Link({ props: { href, title, text, target, rel = "nofollow", style }, children }: LinkFace) {
    return (
        <NextLink
            href={href || "/"}
            target={target || '_self'}
            title={title}
            rel={rel}
            className={`border-2 px-3 shadow-lg shadow-neutel/20 hover:shadow-neutel/40 bg-lighter dark:bg-darker border-transparent hover:border-xlight dark:hover:border-xdark p-2 capitalize text-black dark:text-white rounded-lg inline-block ${style}`}>
            {text || text}
            {children}
        </NextLink>
    )
}