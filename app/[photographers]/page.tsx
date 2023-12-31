import { keywords, metadataObj, openGraph, twitter } from "../src/_meta/webText";
import { redirect } from "next/navigation";
import { Metadata } from 'next';
import Contributions from "../src/_components/Photographer/Contributions";
import Profile from "../src/_components/Photographer/Profile";
import getPhotographer from "../src/_api/getPhotographer";
import ProfileFace from '../src/_types/ProfileFace';

type Props = {
    params: {
        photographers: string
    }
}

export async function generateMetadata({ params: { photographers } }: Props): Promise<Metadata> {
    // read route params
    const user = decodeURIComponent(photographers);
    // const isUserTrue = user.startsWith("@");

    const { raw, error } = await getPhotographer(user.replace("@", ""));

    if (error) {
        return {
            title: "Not found",
            description: metadataObj.home.desc
        }
    } else {
        const res: ProfileFace = raw?.response as ProfileFace;
        const tags = res.tags.custom.map(item => { return item.title });

        const openGraphMeta = openGraph({ title: res?.name, description: res?.bio, url: `/@${res?.username}`, image: res.profile_image.large });
        const twitterMeta = twitter(res?.name, res?.bio, res.twitter_username, res?.profile_image.large);

        return {
            title: res?.name || "Picarchive",
            description: res?.bio || metadataObj.collections.desc,
            openGraph: openGraphMeta || null,
            twitter: twitterMeta || null,
            keywords: tags ? keywords([...tags]) : [],
            authors: [{ name: res.name }],
        }
    }
}

export default async function Page({ params: { photographers } }: { params: { photographers: string } }) {
    const user = decodeURIComponent(photographers);
    const isUserTrue = user.startsWith("@");

    !isUserTrue && redirect("/")

    const { raw, error } = await getPhotographer(user.replace("@", ""))

    return (
        <>
            <Profile userData={raw?.response} error={error} />
            <Contributions contributions={raw?.response} />
        </>
    )
}