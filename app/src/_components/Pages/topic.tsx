"use client";
import { BasicPhotoFace } from "unsplash-js/dist/methods/photos/types";
import { picarchiveDescriptions } from "@/app/src/_meta/webText";
import { randomSelection } from "@/app/src/_functions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useInfiniteScroll from "@/app/src/_hooks/useInfiniteScroll";
import ShareBtn from "@/app/src/_components/Btns/ShareBtn";
import HeroII from "@/app/src/_components/Hero/HeroII";
import Loading from "@/app/src/_components/Loading";
import Photos from "@/app/src/_components/Photos";
import getTopic from "@/app/src/_api/getTopic";


export default function Topic() {
  const [topic, setTopic] = useState<BasicPhotoFace[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [bgImg, setBgImg] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false); // New state variable
  const [loading] = useInfiniteScroll({ updateVal: (prev) => prev + 1, updatePage: setPage })
  const path = usePathname();
  const truePath = path.replace("/topics/", "");
  const desc = randomSelection(picarchiveDescriptions)

  useEffect(() => {
    const call = async () => {
      const { raw, error } = await getTopic(page, truePath);
      if (!error && raw && raw.response) {
        setTopic((init) => [...init, ...raw.response.results]);
        setError(error);
        setIsDataLoaded(true);
      } else {
        setError(error);
      }
    }
    call();
  }, [page])

  // Check if the data is loaded and the 'photo' state is not empty
  useEffect(() => {
    if (isDataLoaded && topic.length > 0) {
      const randomNum = Math.floor(Math.random() * topic.length);
      const selectedPhoto = topic[randomNum];
      setBgImg(selectedPhoto.urls.regular);
    }
  }, [isDataLoaded])


  return (
    <>
      <HeroII
        bgImage={bgImg}
        style="h-fit flex items-center">
        <div className="flex justify-between items-center ">
          <h1 className="text-6xl capitalize font-bold text-stroke">{truePath}</h1>
          <ShareBtn />
        </div>
        <p className="max-w-[600px]">{desc}</p>
      </HeroII>
      <Photos photos={topic} error={isError} />
      {loading && <Loading />}
    </>
  )
}
