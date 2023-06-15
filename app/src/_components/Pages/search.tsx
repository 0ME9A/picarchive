"use client";
import { picarchiveDescriptions } from "@/app/src/_meta/webText";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { randomSelection } from "@/app/src/_functions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useInfiniteScroll from "@/app/src/_hooks/useInfiniteScroll";
import getSearchPhotoList from "@/app/src/_api/getSearchPhotoList";
import ShareBtn from "@/app/src/_components/Btns/ShareBtn";
import HeroII from "@/app/src/_components/Hero/HeroII";
import Failed from "@/app/src/_components/Failed.tsx";
import Loading from "@/app/src/_components/Loading";
import Photos from "@/app/src/_components/Photos";


export default function SearchPhotoList() {
  const [photo, setPhotos] = useState<BasicPhotoFace[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [totalImg, setTotalImg] = useState<number>(0);
  const [isMount, setMount] = useState(false);
  const [bgImg, setBgImg] = useState("");
  const [page, setPage] = useState(1);
  const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage })
  const path = usePathname();
  const desc = randomSelection(picarchiveDescriptions)
  const truePath = path.replace("/search/", "");
  const decodePath = decodeURIComponent(truePath);

  useEffect(() => {
    const call = async () => {
      const { raw, error } = await getSearchPhotoList(page, decodePath)
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

  useEffect(() => {
    if (totalImg > 0 && photo.length > 0) {
      const randomNum = Math.floor(Math.random() * photo.length);
      const selectedPhoto = photo[randomNum];
      setBgImg(selectedPhoto.urls.regular);
    }
  }, [totalImg])

  useEffect(() => setMount(true), []);

  if (!isMount) return <Loading />
  if (isError && photo.length === 0) return <Failed style="my-auto flex items-center flex-col !text-center mt-32" />

  return (
    <>
      <HeroII
        bgImage={photo.length > 0 ? photo[4].urls.regular : ""}
        style="h-fit flex items-center">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl md:text-4xl xl:text-6xl capitalize font-bold text-stroke">{decodePath}</h1>
          <ShareBtn />
        </div>
        <p className="max-w-[600px]">{desc}</p>
        <p className="text-lg">Total photos- <span className="font-bold">{totalImg}</span></p>
      </HeroII>

      <Photos photos={photo} error={isError} />
      {loading && <Loading />}
    </>
  )
}