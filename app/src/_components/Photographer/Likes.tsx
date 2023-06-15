"use client";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { useEffect, useState } from "react";
import useInfiniteScroll from "../../_hooks/useInfiniteScroll";
import getUserLikes from "../../_api/getUserLikes";
import Loading from "../Loading";
import Index from "../Photos";


export default function Likes({ username }: { username: string }) {
    const [photo, setPhotos] = useState<BasicPhotoFace[]>([])
    const [page, setPage] = useState(1)
    const [isError, setError] = useState<boolean>(false);

    const getPhotosList = () => {
        const call = async () => {
            const { raw, error } = await getUserLikes(page, username)
            if (!error) {
                const result = raw?.response?.results || [];
                setPhotos((foto) => [...foto, ...result]);
            } else {
                setError(error);
            }
        }

        call();
    }

    const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage })

    useEffect(() => getPhotosList(), [page])

    return (
        <>
            <Index photos={photo} error={isError} />
            {loading && <Loading />}
        </>
    )
}
