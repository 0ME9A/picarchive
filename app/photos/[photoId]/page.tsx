import { keywords, metadataObj, openGraph, twitter } from "@/app/src/_meta/webText";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import PhotoPreview from "@/app/src/_components/Photos/Preview";
import getRelatedPhotos from "@/app/src/_api/getRelatedPhotos";
import Collections from "@/app/src/_components/Collections";
import PhotoList from "@/app/src/_components/Photos";
import getPhoto from "@/app/src/_api/getPhoto";

type Props = {
    params: {
        photoId: string;
    }
}

export async function generateMetadata({ params: { photoId } }: Props): Promise<Metadata> {
    // read route params
    const { raw, error } = await getPhoto(photoId);

    if (error) {
        return {
            title: "Not found",
            description: metadataObj.home.desc
        }
    } else {
        const res = raw?.response;
        const tags = res?.tags.map(item => { return item.title });

        const openGraphMeta = openGraph({ title: res?.alt_description, description: res?.description, url: `/@${res?.user.username}`, image: res?.urls.small });
        const twitterMeta = twitter(res?.alt_description, res?.description, res?.user.twitter_username, res?.urls.small);

        return {
            title: res?.alt_description || `Photo by ${res?.user.name}`,
            description: res?.description || res?.alt_description || metadataObj.collections.desc,
            openGraph: openGraphMeta || null,
            twitter: twitterMeta || null,
            keywords: tags ? keywords([...tags]) : [],
            authors: [{ name: res?.user.name }],
        }
    }
}

export default async function PhotoById({ params }: { params: { photoId: string } }) {
    const photoId = params.photoId;

    const { raw: photo, error: photoE } = await getPhoto(photoId);
    const { raw: related, error: relatedE } = await getRelatedPhotos(photoId);

    const relatedPhotos = !relatedE ? await related?.json() : null;

    if (photoE) notFound();

    return (
        <section className="my-16 xl:container mx-auto bg-gradient-to-t from-lighter to-white dark:from-darker dark:to-black shadow-2xl shadow-gray-500/20 rounded-md  pb-1">
            <PhotoPreview photo={photo?.response} />
            <PhotoList photos={relatedPhotos?.results} error={relatedE} />
            <Collections related_collections={photo?.response?.related_collections.results} error={photoE} />
        </section >
    )
}