"use client";
import { BsFillClipboard2CheckFill, BsFillClipboard2Fill } from "react-icons/bs";
import { downloadMessage } from "../../_rtk/Store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../_rtk/Store";
import { clipBoard } from "../../_functions";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import BasicLink from "../Links/BasicLink";
import Image from "next/image";
import Btn from "../Btns/Btn";


export default function DownloadMessage() {
    const [clip, setClip] = useState<boolean>(false);
    const photoInfo = useSelector((state: RootState) => state.picarchive.downloadMessage);
    const dispatch = useDispatch();

    const handleClipBoard = async (text: string) => {
        const success = await clipBoard(text);
        if (success) { setClip(true) }
        else { setClip(false) }
        setTimeout(() => {
            setClip(false);
        }, 3000);
    }

    if (photoInfo) {
        const alt_desc = photoInfo.alt_description.replaceAll(" ", "-");
        const clipText: string = `Photo by <a href="https://unsplash.com/@${photoInfo.user.username}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">${photoInfo.user.name}</a> on <a href="https://unsplash.com/photos/${alt_desc}-${photoInfo.id}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;

        return (
            <div className="max-w-xl p-2 fixed left-0 right-0 bottom-2 m-auto z-20">
                <figure className="border-2 border-transparent hover:border-white dark:hover:border-black shadow-lg shadow-neutel/20 hover:shadow-neutel/40 h-[200px] rounded-lg overflow-hidden bg-lighter dark:bg-darker p-2 flex gap-2 relative">
                    <Image
                        src={photoInfo.urls.small}
                        alt={`download photo by${photoInfo.user.name}`}
                        width={200}
                        height={200}
                        style={{ background: photoInfo.color }}
                        blurDataURL={photoInfo.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                        className="h-full w-[120px] object-cover rounded-lg"
                    />

                    <figcaption className="space-y-2 overflow-auto">
                        <h3 className="text-lg font-bold pt-1">Say Thanks 🙌</h3>
                        <p>Give a shoutout to <BasicLink props={{
                            href: `/@${photoInfo.user.username}`,
                            title: photoInfo.user.name,
                            text: photoInfo.user.name,
                            rel: undefined,
                            style: `!p-0 font-light`
                        }} ></BasicLink> on social or copy the text below to attribute.</p>

                        <div className="bg-white  dark:bg-black p-1 pl-2 rounded-lg shadow-lg shadow-neutel-20 flex gap-2 items-center">
                            <p className={`font-light w-full text-sm`}>
                                Photo by
                                <BasicLink props={{
                                    href: `/@${photoInfo.user.username}`,
                                    title: photoInfo.user.name,
                                    text: photoInfo.user.name,
                                    style: `!py-0 !px-1`
                                }}></BasicLink>
                                Star on
                                <BasicLink props={{
                                    href: `https://unsplash.com/photos/${photoInfo.id}`,
                                    title: 'Unsplash',
                                    text: 'Unsplash',
                                    target: "_blank",
                                    style: `!py-0 !px-1`
                                }}></BasicLink>
                            </p>
                            <Btn props={{
                                title: clip ? "copied!" : "copy to clipboard",
                                text: false,
                                style: `!p-1 rounded-lg text-lg self-start`,
                                value: clipText,
                                funCall: handleClipBoard
                            }}>
                                {clip ? <BsFillClipboard2CheckFill className="text-green-500" /> : <BsFillClipboard2Fill />}
                            </Btn>
                        </div>

                        <Btn props={{
                            title: "Close creator credit dialog.",
                            text: false,
                            style: "absolute right-2 top-0 !p-1 !h-fit text-xl",
                            value: downloadMessage(null),
                            funCall: dispatch
                        }}>
                            <IoMdClose />
                        </Btn>
                    </figcaption>
                </figure>
            </div>
        )
    }
    else {
        return <></>
    }

}