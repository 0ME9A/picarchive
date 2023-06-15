import { keywords, metadataObj, openGraph, twitter } from "@/app/src/_meta/webText";
import { Metadata, ResolvingMetadata } from "next";
import getCollectionInfo from "@/app/src/_api/getCollectionInfo";
import Collection from "@/app/src/_components/Pages/collection";

type Props = {
    params: {
        collectionId: string
    }
}

export async function generateMetadata({ params: { collectionId } }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const { raw, error } = await getCollectionInfo(collectionId);

    if (error) {
        return {
            title: "Not found",
            description: metadataObj.home.desc
        }
    } else {
        const res = raw?.response;
        const tags = res?.tags.map(item => { return item.title });

        return {
            title: res?.title || "Picarchive",
            description: res?.description || metadataObj.collections.desc,
            openGraph: openGraph({ title: res?.title, description: res?.description, url: `/collections/${res?.id}`, image: res?.cover_photo.urls.small }),
            twitter: twitter(res?.title, res?.description, res?.user.twitter_username, res?.cover_photo.urls.small),
            keywords: tags ? keywords([...tags]) : [],
            authors: [{ name: res?.user.name }],
        }
    }
}

export default async function Page({ params: { collectionId } }: { params: { collectionId: string } }) {
    const { raw, error } = await getCollectionInfo(collectionId);

    return <Collection collectionInfo={raw?.response} error={error} />
}