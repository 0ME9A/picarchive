"use client";
import { dateFunc, random } from "../../_functions";
import RelatedCollectionFace from "../../_types/CollectionFace";
import BasicLink from "../Links/BasicLink";
import Tag from "../Links/Tag";
import Image from "next/image";
import Link from "next/link";


export default function Card({ collection }: { collection: RelatedCollectionFace }) {
    const colletcion = collection.preview_photos
    const url = `/collections/${collection.id}#${collection.title.toLowerCase().replaceAll(' ', '-')}`;

    return (
        <figure className="w-full h-full rounded-lg overflow-hidden hover:brightness-110 relative shadow-xl shadow-gray-500/5 border-2 border-transparent hover:border-white dark:hover:border-black">
            <Link href={url} className="grid grid-cols-3 grid-rows-2">
                <Image
                    src={colletcion[0]?.urls.regular || ""}
                    alt={collection.title}
                    width={500}
                    height={500}
                    blurDataURL={colletcion[0]?.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                    placeholder="blur"
                    className="row-start-1 col-start-1 row-end-3 col-end-3 aspect-square object-cover"
                />
                <Image
                    src={colletcion[1]?.urls.regular || ""}
                    alt={collection.title}
                    width={500}
                    height={500}
                    blurDataURL={colletcion[1]?.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                    placeholder="blur"
                    className="aspect-square object-cover"
                />
                <Image
                    src={colletcion[2]?.urls.regular || ""}
                    alt={collection.title}
                    width={500}
                    height={500}
                    blurDataURL={colletcion[2]?.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                    placeholder="blur"
                    className="aspect-square object-cover "
                />
            </Link>

            <figcaption className="p-2 w-full row-start-3 col-start-1 col-span-full text-black dark:text-white font-light">
                <h2 className="font-bold text-lg">{collection.title}</h2>
                <p className="opacity-90">{collection.description}</p>
                <ul className="text-sm opacity-70 pt-1">
                    <li>
                        Created by <BasicLink props={{
                            href: `/@${collection.user.username}`,
                            title: collection.user.name,
                            text: false,
                            style: `!p-0`
                        }}>{collection.user.name}</BasicLink>
                    </li>
                    <li>
                        Photos {collection.total_photos}
                    </li>
                    <li>
                        Updated {dateFunc(collection.last_collected_at)}
                    </li>
                </ul>
                <ul className="flex flex-wrap gap-2 py-3">
                    {collection.tags ? collection.tags.map((item) => (
                        <li key={random()} className="">
                            <Tag tag={item} />
                        </li>
                    )) : null}
                </ul>
            </figcaption>
        </figure>
    )
}