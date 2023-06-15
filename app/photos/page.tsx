import { metadataObj } from "../src/_meta/webText";
import { Metadata } from "next";
import PhotosList from "../src/_components/Pages/photos";

export const metadata: Metadata = {
    title: metadataObj.photos.title,
    description: metadataObj.photos.desc
}

export default function Page() {
    return <PhotosList />
}