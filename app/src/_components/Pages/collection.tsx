"use client";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { dateFunc, random } from "@/app/src/_functions";
import { IoReloadOutline } from "react-icons/io5";
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
import PremiumMessage from "../Messages/PremiumMessage";
import Loading from "@/app/src/_components/Loading";
import Tag from "@/app/src/_components/Links/Tag";
import Photos from "@/app/src/_components/Photos";
import Btn from "../Btns/Btn";
import BasicPremiumMessage from "../Messages/BasicPremiumMessage";

const theStatus = {
  STATUS_OK_CONTENT_LENGTH_OK_CONTENT_NO:
    process.env.NEXT_PUBLIC_STATUS_OK_CONTENT_LENGTH_OK_CONTENT_NO,
  STATUS_OK_CONTENT_LENGTH_NO_CONTENT_NO:
    process.env.NEXT_PUBLIC_STATUS_OK_CONTENT_LENGTH_OK_CONTENT_NO,
  SUCCESS: 200,
};

interface ResFace {
  results: BasicPhotoFace[];
  total: number;
}

export default function Collection({
  collectionInfo,
  error,
}: {
  collectionInfo: CollectionInfoFace | undefined;
  error: boolean;
}) {
  const [collection, setCollection] = useState<{
    response: ResFace;
    status: number;
  }>({
    response: {
      results: [],
      total: 0,
    },
    status: 200,
  });
  const [isError, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [loading] = useInfiniteScroll({
    updateVal: (prev) => prev + 1,
    updatePage: setPage,
  });
  const { isAtTop, targetRef } = useScrollPosition({ id: "pos" });
  const path = usePathname();

  const collectionId = path.replace("/collections/", "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { raw, error } = await getCollection(collectionId, page);
        if (!error && raw && raw.response) {
          if (raw.response.results.length === 0 && raw.response.total !== 0) {
            setCollection((prev) => ({
              ...prev,
              status: Number(theStatus.STATUS_OK_CONTENT_LENGTH_OK_CONTENT_NO),
            }));
            return;
          }
          setCollection((prevCollection) => ({
            ...prevCollection,
            status: raw.response.total === 0 ? 204 : raw.status,
            response: {
              results: [
                ...prevCollection.response.results,
                ...raw.response.results,
              ],
              total: raw.response.total,
            },
          }));
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }
    };

    collection.status === 200 && fetchData();
  }, [collection.status, collectionId, page]);

  return (
    <>
      {collectionInfo && (
        <HeroII
          bgImage={collectionInfo?.preview_photos[0].urls.regular}
          style="h-fit flex items-center"
        >
          <div className="flex items-center justify-between pb-10 md:py-10">
            <BasicProfileCard
              name={collectionInfo?.user.name}
              user_name={collectionInfo?.user.username}
              avatar_url={collectionInfo?.user.profile_image.large}
              style="!text-black dark:!text-white"
            />
            <div className="flex items-center justify-center gap-2">
              <BasicPremiumMessage />
              <Share />
            </div>
          </div>
          <h1 className="text-2xl font-bold capitalize md:text-3xl lg:text-5xl">
            {collectionInfo?.title}
          </h1>
          <p className="pt-2 text-sm opacity-80 sm:text-base">
            {collectionInfo?.description}
          </p>
          <p className="text-sm font-thin opacity-80 sm:text-base">
            Updated at {dateFunc(collectionInfo?.updated_at)}
          </p>
          <p className="text-sm font-thin opacity-80 sm:text-base">
            Total photos {collectionInfo?.total_photos}
          </p>
          <ul className="flex flex-wrap gap-1 pt-5">
            {collectionInfo?.tags &&
              collectionInfo.tags.map((item) => (
                <li key={random()}>
                  <Tag
                    tag={{
                      title: item.title,
                    }}
                  />
                </li>
              ))}
          </ul>
        </HeroII>
      )}
      <div ref={targetRef} id="pos" className={`w-full`}></div>
      <nav
        className={`fixed top-0 z-10 w-full bg-white text-black opacity-0 dark:bg-black dark:text-white ${
          !isAtTop && "top-14 !opacity-100 "
        }`}
      >
        <section className="mx-auto flex items-center justify-between px-3 pb-2 xl:container">
          <header
            title={`${collectionInfo?.title} create by ${collectionInfo?.user.name}`}
          >
            <h2 className="text-xl font-bold capitalize">
              {collectionInfo?.title}
            </h2>
            <h3 className="text-xs opacity-80">
              Created by
              <BasicLink
                props={{
                  href: `/@${collectionInfo?.user.username}`,
                  title: ``,
                  text: collectionInfo?.user.name || "N/A",
                  target: "_blank",
                  style: `font-bold !py-0 !px-1`,
                }}
              ></BasicLink>
            </h3>
          </header>

          <Share />
        </section>
      </nav>
      {Number(collectionInfo?.total_photos) > 0 && collection.status === 204 ? (
        <PremiumMessage
          redirectUrl={`https://unsplash.com/collections/${collectionInfo?.id}`}
        />
      ) : (
        <Photos photos={collection.response.results} error={isError} />
      )}
      {loading && !isError && collection.status === 200 && <Loading />}
      {isError && (
        <div className="w-full p-3 py-10 lg:p-5">
          <div className="mx-auto flex w-full flex-col gap-3 rounded-lg bg-white p-5 text-center text-lg xl:container dark:bg-black">
            <h3 className="text-red-500">Something went wrong!</h3>
            <Btn
              props={{
                title: "Refresh more photos",
                text: "Refresh",
                value: false,
                funCall: setError,
                style: "flex items-center justify-center gap-2",
              }}
            >
              <IoReloadOutline className="" />
            </Btn>
          </div>
        </div>
      )}
      {!error &&
        collection.status ===
          Number(theStatus.STATUS_OK_CONTENT_LENGTH_NO_CONTENT_NO) &&
        collection.response.total !== collectionInfo?.total_photos && (
          <div className="w-full p-3 py-10 lg:p-5">
            <div className="mx-auto flex w-full flex-col gap-3 rounded-lg bg-white p-5 text-center text-lg xl:container dark:bg-black">
              <h3 className="text-blue-500">All photos are loaded...</h3>{" "}
              <p>
                All non premium photos are loaded. See all premium photos here{" "}
                <BasicLink
                  props={{
                    href: `https://unsplash.com/collections/${collectionInfo?.id}`,
                    title: "unsplash.com",
                    text: "unsplash.com",
                    target: "_blank",
                    rel: "external",
                    style: "!px-0",
                  }}
                />
              </p>
            </div>
          </div>
        )}
      {!error &&
        collection.status ===
          Number(theStatus.STATUS_OK_CONTENT_LENGTH_NO_CONTENT_NO) &&
        collection.response.total === collectionInfo?.total_photos && (
          <div className="w-full p-3 py-10 lg:p-5">
            <div className="mx-auto flex w-full flex-col gap-3 rounded-lg bg-white p-5 text-center text-lg xl:container dark:bg-black">
              <h3 className="text-blue-500">All photos are loaded...</h3>{" "}
            </div>
          </div>
        )}
    </>
  );
}
