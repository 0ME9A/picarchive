import { SKphotographer } from "../../_skeleton/SKcommon";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { random } from "../../_functions";
import ProfileFace from "../../_types/ProfileFace";
import BasicLink from "../Links/BasicLink";
import ShareBtn from "../Btns/ShareBtn";
import Tag from "../Links/Tag";
import Image from "next/image";


export default function Profile({ userData, error }: { userData: ProfileFace | null, error: boolean }) {
    if (!userData || error) return <SKphotographer />

    return (
        <section className="py-10 px-3 w-full mt-12 relative">
            {userData.photos.length > 0 && <Image src={userData.photos[0].urls.regular} alt={`Background picture`} width={1000} height={500} className="w-full h-full object-cover absolute top-0 left-0" />}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-lighter to-light/70 dark:from-darker dark:to-dark/70"></div>

            <figure className="md:flex items-start justify-center gap-3 lg:gap-10 relative">
                <Image
                    src={userData.profile_image.large || "/img/introT.jpg"}
                    alt={`${userData.name}'s profile picture`}
                    width={500}
                    height={500}
                    className={`rounded-full aspect-square object-cover max-w-[200px] w-[100px] md:w-full shadow-lg shadow-gray-500/50 border-4 border-transparent ${userData.badge && userData.badge.slug === "verified" && 'border-yellow-500'}`}
                />
                <figcaption className="py-5 text-black dark:text-white max-w-3xl w-full space-y-1 md:relative md:mt-10">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl capitalize flex gap-1">{userData.name} {userData.badge && userData.badge.slug === "verified" && <MdVerified className="!text-lg text-yellow-500" />}</h1>
                    <h2 className="opacity-50">@{userData.username}</h2>
                    <p className="opacity-75">{userData.bio || `Download free, beautiful high-quality photos curated by ${userData.name}.`} </p>
                    <div className="absolute top-0 right-0">
                        <ShareBtn />
                    </div>

                    <span className="h-3 block"></span>
                    <ul className="text-sm items-center">
                        {userData.location && <li className="grid grid-flow-col items-center w-fit gap-3"><HiOutlineLocationMarker /> {userData.location}</li>}
                        {userData.instagram_username &&
                            <li className="w-fit">
                                <BasicLink props={{
                                    href: `https://instagram.com/${userData.instagram_username}`,
                                    title: `follow ${userData.name} on instagram.`,
                                    text: false,
                                    target: "_blank",
                                    style: "grid grid-flow-col items-center gap-3 !px-0"
                                }}>
                                    <FaInstagram />
                                    instagram
                                </BasicLink>
                            </li>
                        }
                        {userData.twitter_username &&
                            <li className="grid grid-flow-col items-center w-fit">
                                <BasicLink props={{
                                    href: `https://twitter.com/@${userData.twitter_username}`,
                                    title: `follow ${userData.name} on twitter.`,
                                    text: false,
                                    target: "_blank",
                                    style: "grid grid-flow-col items-center gap-3 !px-0"
                                }}>
                                    <FaTwitter />
                                    twitter
                                </BasicLink>
                            </li>
                        }
                        {userData.portfolio_url &&
                            <li className="grid grid-flow-col items-center w-fit">
                                <BasicLink props={{
                                    href: userData.portfolio_url,
                                    title: `${userData.name}'s portfolio`,
                                    text: false,
                                    target: "_blank",
                                    style: "grid grid-flow-col items-center gap-3 !px-0"
                                }}>
                                    <TbWorldWww />
                                    Portfolio
                                </BasicLink>
                            </li>
                        }
                        <ul className="p-2 py-3 mt-5 flex flex-col sm:flex-row gap-2 sm:gap-5 capitalize bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg shadow-gray-500/10">
                            <li>
                                <span className="font-semibold px-2">
                                    {userData.following_count}
                                </span>
                                <span className="capitalize opacity-50">
                                    Following
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold px-2">
                                    {userData.followers_count}
                                </span>
                                <span className="opacity-50">
                                    Followers
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold px-2">
                                    {userData.downloads}
                                </span>
                                <span className="opacity-50">
                                    Downloads
                                </span>
                            </li>
                        </ul>
                    </ul>
                    {!!userData.tags.custom.length &&
                        <>
                            <h3 className="pt-5">Intrests</h3>
                            <ul className="flex flex-wrap gap-1">
                                {userData.tags.custom.map((item) => (
                                    <li key={random()}>
                                        <Tag tag={{
                                            title: item.title
                                        }}></Tag>
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                </figcaption>
            </figure>
        </section>
    )
}