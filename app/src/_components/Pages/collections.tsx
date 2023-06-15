"use client";
import { picarchiveDescriptions } from "../../_meta/webText";
import { SKcontentPage } from "../../_skeleton/SKcommon";
import { randomSelection } from "../../_functions";
import { RootState } from "../../_rtk/Store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useInfiniteScroll from "../../_hooks/useInfiniteScroll";
import getCollectionList from "../../_api/getCollectionList";
import CollectionFace from "../../_types/CollectionFace";
import ShareBtn from "../Btns/ShareBtn";
import HeroII from "../Hero/HeroII";
import Index from "../Collections";
import Failed from "../Failed.tsx";
import Loading from "../Loading";


export default function Collections() {
    const [collections, setCollections] = useState<CollectionFace[]>([]);
    const [isError, setError] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [isMount, setMount] = useState(false);
    const [page, setPage] = useState(1);
    const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage });
    const photo = useSelector((state: RootState) => state.picarchive.pphotos);
    const desc = randomSelection(picarchiveDescriptions);

    useEffect(() => {
        const call = async () => {
            const { raw, error } = await getCollectionList(page);
            if (!error && raw && raw.response) {
                setCollections((init) => [...init, ...raw.response.results]);
                setTotal(raw.response.total);
                setError(error)
            } else {
                setError(error)
            }
        }
        call()
    }, [page])

    useEffect(() => setMount(true), [])

    if (!isMount) return <SKcontentPage />
    if (isError && collections.length === 0) return <Failed style="my-auto flex items-center flex-col !text-center mt-32" />

    return (
        <>
            <HeroII
                bgImage={photo.length > 0 ? photo[4].urls.regular : ""}
                style="h-fit flex items-center">
                <div className="flex justify-between items-center ">
                    <h1 className="text-2xl md:text-4xl xl:text-6xl capitalize font-bold text-stroke">Collections...</h1>
                    <ShareBtn />
                </div>
                <p className="max-w-[600px]">{desc}</p>
                <p className="text-lg">Total collections- <span className="font-bold">{total}</span></p>
            </HeroII>
            <Index related_collections={collections} error={isError} />
            {loading && <Loading />}
        </>
    )
}
