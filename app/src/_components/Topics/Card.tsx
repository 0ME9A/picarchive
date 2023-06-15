import { dateFunc } from "../../_functions";
import TopicFace from "../../_types/TopicFace";
import BasicLink from "../Links/BasicLink";
import Image from "next/image";
import Link from "next/link";


interface CardFace {
    topicInfo: TopicFace
}

export default function Card({ topicInfo }: CardFace) {
    const { id, slug, title, description, updated_at, status, total_photos, owners: [{ username, name, profile_image: { large } }], preview_photos: [{ urls: { regular } }] } = topicInfo;

    return (
        <article className="group relative">
            <figure className="w-full h-full relative bg-lighter dark:bg-darker rounded-lg shadow-lg shadow-gray-500/10 border-2 border-transparent hover:border-white dark:hover:border-black overflow-hidden">
                <Image
                    src={regular || "/img/intro.jpg"}
                    alt={""}
                    width={400}
                    height={400}
                    className="w-full object-cover h-32 group-hover:brightness-75"
                />
                <figcaption className="py-10 px-5 md:p-8 lg:p-10 text-black dark:text-white z-10">
                    <Link href={`/topics/${slug}`} className="group absolute w-full h-full top-0 left-0 z-[1]"></Link>
                    <Image src={large} alt={"creator profile"} width={100} height={100} className="w-14 aspect-square rounded-full absolute top-24" />
                    <h2 className="text-xl font-bold">{title}</h2>
                    <h3 className="text-sm">
                        By
                        <BasicLink props={{
                            href: `/@${username}`,
                            title: `${name}`,
                            text: false,
                            style: "!px-1 relative z-[2]"
                        }}>
                            {name}
                        </BasicLink>
                    </h3>
                    <p className="max-h-24 mt-4 font-thin opacity-80 line-clamp overflow-clip">{description}</p>
                    <p className="pt-2 opacity-70">Updated {dateFunc(updated_at)}</p>
                    <p className="opacity-70">Photos {total_photos}</p>
                    {status === 'open' && <p className="absolute right-5 top-4 flex items-center gap-2 bg-green-200 py-1 px-2 text-sm capitalize rounded-md"><span className="border-4 border-green-500 aspect-square inline-block rounded-full"></span> {status}</p>}
                    {status === 'closed' && <p className="absolute right-5 top-4 flex items-center gap-2 bg-red-200 py-1 px-2 text-sm capitalize rounded-md"><span className="border-4 border-red-500 aspect-square inline-block rounded-full"></span> {status}</p>}
                </figcaption>
            </figure>
        </article>
    )
}