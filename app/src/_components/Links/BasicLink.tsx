import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import Link from "next/link";

interface LinkFace {
  props: {
    href: string | Url;
    title: string;
    text: string | false;
    target?: "_blank" | "_self";
    rel?: string;
    style?: string;
  };
  children?: ReactNode;
}
export default function BasicLink({
  props: { href, title, text, target, rel = "", style },
  children,
}: LinkFace) {
  return (
    <Link
      href={href || "/"}
      target={target || "_self"}
      title={title}
      rel={rel}
      className={`inline-block p-1 px-4 capitalize text-black underline hover:opacity-75 dark:text-white ${style}`}
    >
      {text || text}
      {children}
    </Link>
  );
}
