import { metadataObj } from "../src/_meta/webText";
import { Metadata } from "next";
import About from "../src/_components/Pages/about";

export const metadata: Metadata = {
    title: metadataObj.about.title,
    description: metadataObj.about.desc
}

export default function Page() {
    return <About />
}