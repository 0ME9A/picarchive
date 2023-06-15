import { metadataObj } from "../src/_meta/webText";
import { Metadata } from "next";
import Collections from "../src/_components/Pages/collections";

export const metadata: Metadata = {
    title: metadataObj.collections.title,
    description: metadataObj.collections.desc
}

export default function Page() {
    return <Collections />
}
