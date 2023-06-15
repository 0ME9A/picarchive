"use client";
import { useEffect, useState } from "react";
import getUserCollections from "../../_api/getUserCollections";
import useInfiniteScroll from "../../_hooks/useInfiniteScroll";
import CollectionsFace from "../../_types/CollectionFace";
import Index from "../Collections";
import Loading from "../Loading";


export default function Collections({ username }: { username: string }) {
    const [collections, setCollections] = useState<CollectionsFace[]>([]);
    const [isError, setError] = useState<boolean>(false);
    const [page, setPage] = useState(1);    
    const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage });

    useEffect(() => {
        const call = async () => {
            const { raw, error } = await getUserCollections(page, username);
            if (!error) {
                const result = raw?.response?.results || [];
                setCollections((coll) => [...coll, ...result]);
            }
            else {
                setError(error);
            }
        }
        call();
    }, [page])

    return (
        <>
            <Index related_collections={collections} error={isError} />
            {loading && <Loading />}
        </>
    )
}
