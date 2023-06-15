"use client";
import { picarchiveDescriptions, popular_routes, social_routes, wallpaper_routes, web_source_routes } from "../../_meta/webText";
import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { random, randomSelection } from "../../_functions";
import { IoIosImages } from "react-icons/io";
import { RootState } from "../../_rtk/Store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasicLink from "../Links/BasicLink";
import Loading from "../Loading";
import Link from "../Links/Link";
import Image from "next/image";


export default function About() {
    const [isMount, setMount] = useState(false);
    const photos = useSelector((state: RootState) => state.picarchive.pphotos);
    const desc = randomSelection(picarchiveDescriptions);

    useEffect(() => setMount(true), []);
    
    if (!isMount) return <Loading />

    return (
        <>
            <section className="xl:container mx-auto p-3 mt-20 md:flex gap-5 lg:gap-10 items-center justify-center min-h-screen">
                <article>
                    <h1 className="text-3xl md:text-5xl font-bold">Photos for everyone</h1>
                    <p className="max-w-[600px] font-normal py-2 pb-5 text-lg opacity-70">{desc}</p>
                    <Link props={{
                        href: "/photos/",
                        title: "start browsing high quality photos",
                        text: false,
                        style: `flex gap-2 w-fit items-center px-3`,
                    }}>
                        <IoIosImages />
                        start browsing
                    </Link>
                </article>
                <figure className="grid grid-cols-2 gap-4 mt-10 md:max-w-[500px] md:w-[40%] relative">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t dark:via-transparent via-transparent dark:from-darker dark:to-darker from-lighter to-lighter"></div>
                    <div className="grid gap-4 h-fit">
                        {photos && photos.slice(24, 26).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                    <div className="mt-[25%] grid gap-4 h-fit">
                        {photos && photos.slice(26, 28).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                </figure>
            </section>
            <section className="xl:container mx-auto p-3 mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 justify-center items-center ">
                <h2 className="col-span-full text-3xl text-center font-bold"> Unlock the World of Stunning Free Images</h2>
                <figure className="shadow-lg shadow-neutel/10 rounded-lg overflow-hidden">
                    <Image
                        src={"/img/photos2.jpg"}
                        alt={"photos for picarchive"}
                        width={500}
                        height={500}
                        className="aspect-video object-cover"
                    />
                    <figcaption className="p-2">
                        <h3 className="text-lg font-bold">Explore 3M+ Curated Photos on PicArchive</h3>
                        <p className="py-3 opacity-70 font-normal">
                            Immerse yourself in the captivating world of PicArchive, where remarkable images await your discovery.
                        </p>
                    </figcaption>
                </figure>
                <figure className="shadow-lg shadow-neutel/10 rounded-lg overflow-hidden">
                    <Image src={"/img/team.jpg"}
                        alt={"photos for picarchive"}
                        width={500}
                        height={500}
                        className="aspect-video object-cover"
                    />
                    <figcaption className="p-2 font-bold">
                        <h3 className="text-lg">A community of 293,995 photographers</h3>
                        <p className="py-3 opacity-70 font-normal">
                            Immerse yourself in a supportive community of 293,995 photographers at PicArchive, where knowledge sharing and encouragement prevail.
                        </p>
                    </figcaption>
                </figure>
                <figure className="shadow-lg shadow-neutel/10 rounded-lg overflow-hidden">
                    <Image
                        src={"/img/company.jpg"}
                        alt={"photos for picarchive"}
                        width={500}
                        height={500}
                        className="aspect-video object-cover"
                    />
                    <figcaption className="p-2 font-bold">
                        <h3 className="text-lg">Powering Your Creative Content</h3>
                        <p className="py-3 opacity-70 font-normal">
                            With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unsplash library is more widely accessible than ever.
                        </p>
                    </figcaption>
                </figure>
            </section>
            <section className="xl:container mx-auto p-3 mt-20 md:flex gap-5 lg:gap-10 items-center justify-center min-h-screen">
                <article>
                    <h2 className="text-3xl font-bold">Make something awesome</h2>
                    <p className="max-w-[800px] font-normal py-2 pb-5 text-lg opacity-70">
                        PicArchive was founded on the shared frustration of finding high-quality, usable images. Just like Unsplash, we understand the needs of creators everywhere.
                        With over 4 billion downloads and a global community of millions, PicArchive fuels the creation of presentations, artwork, mockups, and so much more.
                        Join us and discover the endless possibilities for your creative projects.
                    </p>
                    <Link props={{
                        href: "/photos/",
                        title: "Explore something awsome",
                        text: false,
                        style: `flex gap-2 w-fit items-center px-3`,
                    }}>
                        <IoIosImages />
                        Explore something awsome
                    </Link>
                </article>
                <figure className="grid grid-cols-3 gap-4 mt-10 md:max-w-[500px] md:w-[40%] relative">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t dark:via-transparent via-transparent dark:from-darker dark:to-darker from-lighter to-lighter"></div>
                    <div className="grid gap-4 h-fit">
                        {photos && photos.slice(14, 16).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                    <div className="mt-[25%] grid gap-4 h-fit">
                        {photos && photos.slice(22, 24).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                    <div className="grid gap-4 h-fit">
                        {photos && photos.slice(1, 3).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                </figure>
            </section>
            <section className="xl:container bg-xlight dark:bg-xdark mx-auto mt-20 grid md:grid-cols-2 p-2 md:p-0 gap-5 lg:gap-10 items-center justify-between md:rounded-lg overflow-hidden">
                <figure className="grid relative w-full order-2 md:-order-1 rounded-lg md:rounded-none overflow-hidden">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t dark:via-transparent via-transparent dark:from-darker from-lighter "></div>
                    <Image
                        src={photos && photos[0]?.urls.regular || "/img/introT.jpg"}
                        alt={"photos for picarchive"}
                        width={500}
                        height={500}
                        className="rounded-lg aspect-square object-cover w-full"
                    />
                </figure>
                <article className="p-2 py-10 md:py-2">
                    <h2 className="text-3xl font-bold">Is PicArchive truly free? Absolutely.</h2>
                    <p className="font-normal py-2 pb-5 text-lg opacity-70">
                        PicArchive, just like Unsplash, is built on the generosity of a vibrant community of photographers who contribute their incredible images to ignite creativity worldwide.
                        Whether you choose to sign up for free or not, you gain unrestricted access to our extensive collection of over 3 million photos, all licensed under PicArchive&apos;s free-to-use license.
                        Feel empowered to do whatever you want with these images, and let your creativity soar.
                    </p>
                    <Link props={{
                        href: "/photos/",
                        title: "Unleash your curiosity",
                        text: false,
                        style: `flex gap-2 w-fit items-center px-3`,
                    }}>
                        <IoIosImages />
                        Unleash your curiosity
                    </Link>
                </article>
            </section>
            <section className="mx-auto mt-20 p-2 py-32 md:p-0 relative h-fit min-h-screen">
                <figure className="grid gap-4 relative w-full order-2 md:-order-1 rounded-lg md:rounded-none overflow-hidden ">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t dark:from-darker dark:via-darker/70 dark:to-darker from-lighter via-lighter/70 to-lighter"></div>

                    <div className="w-[100%] gap-4 grid grid-cols-6 grid-flow-col h-fit items-center">
                        {photos && photos.slice(0, 6).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                    <div className="gap-4 w-full h-fit grid grid-cols-8 grid-flow-col items-center">
                        {photos && photos.slice(6, 14).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>
                    <div className="gap-4 w-full h-fit grid grid-cols-6 grid-flow-col items-center">
                        {photos && photos.slice(14, 20).map((item: BasicPhotoFace) => (
                            <Image
                                src={item.urls.small || "/img/introT.jpg"}
                                alt={item.description || "photos for picarchive"}
                                width={500}
                                height={500}
                                className="rounded-lg"
                                key={random()}
                            />
                        ))}
                    </div>

                </figure>
                <article className="absolute top-0 left-0 right-0 h-full mx-auto flex items-center justify-center flex-col text-center px-5 py-52">
                    <h2 className="text-3xl font-bold">Anyone can join the PicArchive  community</h2>
                    <p className="font-normal py-2 pb-5 text-lg opacity-70 max-w-[800px]">
                        At Picarchive, we believe that everyone has the ability to contribute their unique perspective to the world of photography.
                        Our platform serves as a meeting point for creators and their audience, fostering a vibrant community where individuals of all backgrounds can become a source of creativity.
                        Whether you&apos;re an amateur enthusiast or a seasoned professional, Picarchive welcomes your images with open arms.
                        Join us on Picarchive and unleash your creative potential as we embark on a visual journey through an expansive collection of authentic,
                        top-tier photographs created by talented photographers from around the globe.
                    </p>
                    <Link props={{
                        href: "https://unsplash.com/login",
                        title: "Join the community",
                        text: false,
                        style: `flex gap-2 w-fit items-center px-3`,
                    }}>
                        <IoIosImages />
                        Join the community
                    </Link>
                </article>
            </section>

            <footer className="py-20 px-3 md:px-5 grid md:grid-cols-5 space-y-5 bg-white dark:bg-black">
                <article className="w-[96%] md:col-span-2 border-b pb-5 border-neutral-500/20 md:border-none flex flex-col items-start justify-start h-fit">
                    <h2 className="text-2xl font-bold">
                        Picarchive
                    </h2>
                    <p className="opacity-70 pr-14">{picarchiveDescriptions[4]}</p>
                    <Link props={{
                        href: "/",
                        title: "Find amazing wonders",
                        text: false,
                        style: `flex gap-2 w-fit items-center px-3 mt-3`,
                    }}>
                        <IoIosImages />
                        Find amazing wonders
                    </Link>
                    <ul className="flex gap-2 py-10">
                        {social_routes.map(item => (
                            <li key={item.route.title}>
                                <Link props={{
                                    href: item.route.url,
                                    title: item.route.title,
                                    text: false,
                                    target: "_blank",
                                    style: "!p-2 text-lg"
                                }}>
                                    {item.route.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    <h3 className="font-bold px-4 text-lg">Web sources</h3>
                    <ul className="opacity-70 pt-1">
                        {web_source_routes.map(item => (
                            <li key={item.route.title}>
                                <BasicLink props={{
                                    href: item.route.url,
                                    title: item.route.title,
                                    text: item.route.title,
                                    target: "_blank",
                                }}></BasicLink>
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    <h3 className="font-bold px-4 text-lg">Popular</h3>
                    <ul className="opacity-70 pt-1">
                        {popular_routes.map(item => (
                            <li key={item}>
                                <BasicLink props={{
                                    href: `/search/${item}`,
                                    title: item,
                                    text: item,
                                }}></BasicLink>
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    <h3 className="font-bold px-4 text-lg">Wallpapers</h3>
                    <ul className="opacity-70">
                        {wallpaper_routes.map(item => (
                            <li key={item}>
                                <BasicLink props={{
                                    href: `/search/${item}`,
                                    title: item,
                                    text: item,
                                }}></BasicLink>
                            </li>
                        ))}
                    </ul>
                </article>
            </footer>
        </>

    )
}