import BasicLink from "./BasicLink";

interface tagFace {
    tag: {
        title: string
    };
    style?: string;
}

export default function Tag({ tag, style }: tagFace) {
    return (
        <BasicLink props={{
            href: `/search/${tag.title.replaceAll(" ", "-")}`,
            title: tag.title,
            text: tag.title,
            style: `border border-gray-500/50 no-underline rounded-md !px-2 !py-0 opacity-50 ${style}`
        }}></BasicLink>
    )
}