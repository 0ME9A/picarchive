"use client";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { AiFillEye, AiOutlineCalendar } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { basicStyle } from "../../_skeleton/SKstyle";
import { dateFunc, random } from "../../_functions";
import { TfiDownload } from "react-icons/tfi";
import { FaUnsplash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import SKthePhoto from "../../_skeleton/Photos/SKthePhoto";
import BasicProfileCard from "./basicProfileCard";
import PhotoFace from "../../_types/ThePhotoFace";
import DownloadBtn from "../Btns/DownloadBtn";
import BasicLink from "../Links/BasicLink";
import ShareBtn from "../Btns/ShareBtn";
import Loading from "../Loading";
import Tag from "../Links/Tag";
import Image from "next/image";
import Btn from "../Btns/Btn";


export default function PhotoPreview({ photo }: { photo: PhotoFace | null | undefined }) {
    const router = useRouter()
    const [isScale, setScale] = useState(false);
    const [isLoadedReg, setLoadedReg] = useState(false);
    const [isLoadedLarg, setLoadedLarge] = useState(false);
    const Loader = <Loading style="h-full backdrop-blur-lg absolute" />

    if (!photo) return <SKthePhoto />

    return (
        <>
            <header className="xl:container mx-auto p-3 flex items-start justify-between sticky top-14 bg-white dark:bg-black z-10">
                <BasicProfileCard
                    name={photo.user.name}
                    user_name={photo.user.username}
                    avatar_url={photo.user.profile_image.medium}
                    style="!text-black dark:!text-white"
                />
                <div className="flex gap-2 items-start">
                    <ShareBtn style={"px-3"} />

                    <Btn props={{
                        title: "",
                        text: "",
                        style: "!p-2 !h-full ",
                        value: undefined,
                        funCall: router.back
                    }}>
                        <IoMdClose className="group-hover:scale-125" />
                    </Btn>
                </div>
            </header>
            <div
                className={`xl:container mx-auto !p-0 sm:p-3 md:p-5 h-fit py-0 sm:!py-5 overflow-hidden relative`}>
                <figure
                    title={photo.alt_description || `Photo by ${photo.user.name}`}
                    className={`w-fit mx-auto relative cursor-zoom-out group ${!isLoadedReg && basicStyle} ${!isLoadedReg && "h-[70vh] w-full"} ${isScale && "w-full"}`}>
                    {!isLoadedReg && Loader}
                    {!isLoadedLarg && isScale && Loader}
                    {isScale ?
                        <>
                            <BsArrowsAngleContract className="opacity-0 group-hover:opacity-100 scale-125 group-hover:scale-100 absolute right-5 top-5" />
                            <Image
                                src={photo.urls.full}
                                alt={photo.alt_description || `Photo by ${photo.user.name}`}
                                width={photo.width || 400}
                                height={photo.height || 600}
                                blurDataURL={photo.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                                priority={true}
                                placeholder={"blur"}
                                className={`mx-auto w-full h-auto cursor-zoom-out ${!isLoadedLarg && 'animate-pulse'}`}
                                style={{ backgroundColor: photo.color }}
                                onClick={() => setScale(false)}
                                onLoad={() => setLoadedLarge(true)}
                            />
                        </> :
                        <>
                            <BsArrowsAngleExpand className="opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-125 absolute right-5 top-5" />
                            <Image
                                src={photo.urls.regular}
                                alt={photo.alt_description || `Photo by ${photo.user.name}`}
                                width={photo.width || 400}
                                height={photo.height || 600}
                                blurDataURL={photo.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                                priority={true}
                                placeholder={"blur"}
                                className={`mx-auto w-full sm:max-h-[70vh] h-auto cursor-zoom-in ${photo.width < photo.height && "!w-auto"}`}
                                style={{ backgroundColor: photo.color }}
                                onClick={() => setScale(true)}
                                onLoad={() => setLoadedReg(true)}
                            />
                        </>
                    }
                </figure>
            </div>
            <section className="p-3 sm:p-5 xl:container mx-auto space-y-2">
                <div className="flex justify-end relative z-[5]">
                    <DownloadBtn downloadUrl={photo.links.download} originalSize={{ width: photo.width, height: photo.height }} photo={photo} />
                </div>
                <ul className="dark:text-white text-black opacity-70 font-thin text-sm space-y-1">
                    {photo.views ? <li ><AiFillEye className="inline mr-2" /> Views: {photo.views}</li> : null}
                    {photo.downloads ? <li><TfiDownload className="inline mr-2" /> Downloads: {photo.downloads}</li> : null}
                    {photo.location.name ? <li><HiOutlineLocationMarker className="inline mr-2" /> Location {photo.location.name}</li> : null}
                    {photo.created_at ? <li><AiOutlineCalendar className="inline mr-2" /> Published on {dateFunc(photo.created_at)}</li> : null}
                    <li>
                        <FaUnsplash className="inline mr-2" />
                        View on {" "}
                        <BasicLink props={{
                            href: `https://unsplash.com/photos/${photo.id}`,
                            title: "View on unsplash",
                            text: "Unsplash",
                            target: "_blank",
                            style: "!p-0"
                        }}>
                        </BasicLink>
                    </li>
                    <li>
                        <FaUnsplash className="inline mr-2" />
                        Free to use under the {" "}
                        <BasicLink props={{
                            href: "https://unsplash.com/license",
                            title: "Unsplash License",
                            text: "Unsplash License",
                            target: "_blank",
                            style: "!p-0"
                        }}>
                        </BasicLink>
                    </li>
                </ul>
                <p className="text-black dark:text-white max-w-3xl opacity-60 py-5 capitalize">
                    {photo.description || photo.alt_description}
                </p>
                <ul className="flex gap-1 flex-wrap">
                    {photo.tags ? photo.tags.map((item) => (
                        <li key={random()}>
                            <Tag tag={{
                                title: item.title
                            }}></Tag>
                        </li>
                    )) : null}
                </ul>
            </section>
        </>
    )
}