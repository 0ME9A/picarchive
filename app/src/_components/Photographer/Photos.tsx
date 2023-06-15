"use client";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { useEffect, useState } from "react";
import useInfiniteScroll from "../../_hooks/useInfiniteScroll";
import getUserPhotos from "../../_api/getUserPhotos";
import Loading from "../Loading";
import Index from "../Photos";


export default function Photos({ username }: { username: string }) {
  const [photo, setPhotos] = useState<BasicPhotoFace[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage });

  useEffect(() => {
    const call = async () => {
      const { raw, error } = await getUserPhotos(page, username);
      if (!error) {
        const result = raw?.response?.results || [];
        setPhotos((foto) => [...foto, ...result]);
      } else {
        setError(error);
      }
    }
    call();
  }, [page])

  return (
    <>
      <Index photos={photo} error={isError} />
      {loading && <Loading />}
    </>
  )
}
