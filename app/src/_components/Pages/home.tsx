"use client";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { SKcontentPage } from "../../_skeleton/SKcommon";
import { useEffect, useState } from "react";
import useInfiniteScroll from "../../_hooks/useInfiniteScroll";
import getPhotoList from "../../_api/getPhotoList";
import Failed from "../Failed.tsx";
import Loading from "../Loading";
import Photos from "../Photos";
import Hero from "../Hero";


export default function Home() {
    const [photos, setPhotos] = useState<BasicPhotoFace[]>([]);
    const [isError, setError] = useState<boolean>(false);
    const [totalImg, setTotalImg] = useState<number>(0);
    const [isMount, setMount] = useState(false);
    const [page, setPage] = useState(1);
    const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage })

    useEffect(() => {
        const call = async () => {
            const { raw, error } = await getPhotoList(page)
            if (!error && raw && raw.response) {
                setPhotos((init) => [...init, ...raw.response.results]);
                setTotalImg(raw.response.total);
                setError(error)
            } else {
                setError(error)
            }
        }
        call()
    }, [page]);

    useEffect(() => setMount(true), []);

    if (!isMount) return <SKcontentPage />
    if (isError && photos.length === 0) return <Failed style="my-auto flex items-center flex-col !text-center mt-32" />

    return (
        <>
            <Hero />
            <Photos photos={photos} error={isError} />
            {loading && <Loading />}
        </>
    )
}

