"use client";
import { random, splitArrayByCount } from "../../_functions";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { useEffect, useState } from "react";
import PhotosSkeleton from "../../_skeleton/Photos/SKPhotos";
import Card from "./Card";

interface PhotoListFace {
    photos: BasicPhotoFace[] | null | undefined;
    total?: number;
    error: boolean;
}

export default function PhotoList({ photos, total = 0, error }: PhotoListFace) {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0, });
    const [isGlitch, setGlitch] = useState<number>(0)
    const [isMount, setMount] = useState(false);

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setGlitch(isGlitch + 1)
        };

        window.addEventListener('resize', handleResize);
        setMount(true);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fixGlitch = () => {
            setTimeout(() => setGlitch(0), 1000);
        }
        return fixGlitch
    }, [isGlitch])

    if (!isMount) return <PhotosSkeleton />
    // if (!isMount || isGlitch) return <PhotosSkeleton />

    if (photos && photos.length > 0) {
        if (windowSize.width >= 1024) {
            const photosList = splitArrayByCount(photos, 3);
            return (
                <section className="xl:container w-full mx-auto grid lg:grid-cols-3 gap-5 my-5 px-5">
                    <section className="grid gap-5 h-fit">
                        {photosList[0].map(item => <Card key={random()} photo={item} />)}
                    </section>
                    <section className="grid gap-5 h-fit">
                        {photosList[1].map(item => <Card key={random()} photo={item} />)}
                    </section>
                    <section className="grid gap-5 h-fit">
                        {photosList[2].map(item => <Card key={random()} photo={item} />)}
                    </section>
                </section>
            )
        }
        else if (windowSize.width >= 640 && windowSize.width < 1024) {
            const photosList = splitArrayByCount(photos, 2);
            return (
                <section className="xl:container w-full mx-auto grid grid-cols-2 gap-3 my-3 px-3">
                    <section className="grid gap-5 h-fit">
                        {photosList[0].map(item => <Card key={random()} photo={item} />)}
                    </section>
                    <section className="grid gap-5 h-fit">
                        {photosList[1].map(item => <Card key={random()} photo={item} />)}
                    </section>
                </section>
            )
        }
        else {
            return (
                <section className="w-full mx-auto grid gap-5 my-5">
                    <section className="grid gap-5 h-fit">
                        {photos.map(item => <Card key={random()} photo={item} />)}
                    </section>
                </section>
            )
        }
    } else {
        return <PhotosSkeleton />
    }
}