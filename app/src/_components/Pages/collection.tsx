"use client";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { dateFunc, random } from "@/app/src/_functions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BasicProfileCard from "@/app/src/_components/Photos/basicProfileCard";
import CollectionInfoFace from "@/app/src/_types/CollectionInfoFace";
import useInfiniteScroll from "@/app/src/_hooks/useInfiniteScroll";
import useScrollPosition from "@/app/src/_hooks/useScrollPosition";
import BasicLink from "@/app/src/_components/Links/BasicLink";
import getCollection from "@/app/src/_api/getCollection";
import Share from "@/app/src/_components/Btns/ShareBtn";
import HeroII from "@/app/src/_components/Hero/HeroII";
import Loading from "@/app/src/_components/Loading";
import Tag from "@/app/src/_components/Links/Tag";
import Photos from "@/app/src/_components/Photos";


export default function Collection({ collectionInfo, error }: { collectionInfo: CollectionInfoFace | undefined, error: boolean }) {
    const [collection, setCollection] = useState<BasicPhotoFace[]>([]);
    const [isError, setError] = useState<boolean>(false);
    const [page, setPage] = useState(1);
    const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage })
    const path = usePathname();
    const { isAtTop, targetRef } = useScrollPosition({ id: 'pos' })

    const collectionId = path.replace("/collections/", "");

    useEffect(() => {
        const call = async () => {
            const { raw, error } = await getCollection(collectionId, page);
            if (!error && raw && raw.response) {
                setCollection((init) => [...init, ...raw.response.results]);
                setError(error);
            } else {
                setError(error);
            }
        }
        call();
    }, [page])

    return (
        <>
            {collectionInfo &&
                <HeroII
                    bgImage={collectionInfo?.preview_photos[0].urls.regular}
                    style="h-fit flex items-center">
                    <div className="flex justify-between items-center pb-10 md:py-10">
                        <BasicProfileCard
                            name={collectionInfo?.user.name}
                            user_name={collectionInfo?.user.username}
                            avatar_url={collectionInfo?.user.profile_image.large}
                            style="!text-black dark:!text-white"
                        />
                        <Share />
                    </div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl capitalize">{collectionInfo?.title}</h1>
                    <p className="opacity-80 pt-2 text-sm sm:text-base">{collectionInfo?.description}</p>
                    <p className="opacity-80 text-sm sm:text-base font-thin">Updated at {dateFunc(collectionInfo?.updated_at)}</p>
                    <p className="opacity-80 text-sm sm:text-base font-thin">Total photos {collectionInfo?.total_photos}</p>
                    <ul className="flex flex-wrap gap-1 pt-5">
                        {collectionInfo?.tags && collectionInfo.tags.map(item => (
                            <li key={random()}>
                                <Tag tag={{
                                    title: item.title
                                }} />
                            </li>
                        ))
                        }
                    </ul>
                </HeroII>
            }

            <div ref={targetRef} id="pos" className={`w-full`}></div>
            <nav className={`w-full text-black dark:text-white bg-white dark:bg-black fixed top-0 z-10 opacity-0 ${!isAtTop && "top-14 !opacity-100 "}`}>
                <section className="xl:container flex justify-between items-center px-3 pb-2 mx-auto">
                    <header
                        title={`${collectionInfo?.title} create by ${collectionInfo?.user.name}`}>
                        <h2 className="text-xl font-bold capitalize">{collectionInfo?.title}</h2>
                        <h3 className="text-xs opacity-80">Created by
                            <BasicLink props={{
                                href: `/@${collectionInfo?.user.username}`,
                                title: ``,
                                text: collectionInfo?.user.name || "N/A",
                                target: "_blank",
                                style: `font-bold !py-0 !px-1`
                            }}>
                            </BasicLink>
                        </h3>
                    </header>

                    <Share />
                </section>
            </nav>

            <Photos photos={collection} error={isError} />
            {loading && <Loading />}
        </>
    )
}