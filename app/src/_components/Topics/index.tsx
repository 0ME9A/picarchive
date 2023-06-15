"use client";
import { useEffect, useState } from "react";
import { random } from "../../_functions";
import TopicFace from "../../_types/TopicFace";
import Loading from "../Loading";
import Card from "./Card";

interface IndexFace {
    topics: TopicFace[] | undefined;
    title?: boolean;
    error?: boolean;
}

export default function Index({ topics, title, error }: IndexFace) {
    const [isMount, setMount] = useState(false);
    useEffect(() => setMount(true), []);

    if (!isMount) return <Loading />
    if (error) return <></>

    return topics ? (
        <section className="xl:container w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-3 sm:px-5">
            {title && <h2 className="col-span-full font-bold text-lg text-black dark:text-white">Related collections</h2>}
            {topics.map(item => (
                <Card key={random()} topicInfo={item} />
            ))}
        </section>
    ) : null
}
