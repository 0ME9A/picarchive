import { BasicPhotoFace } from "../../_types/BasicPhotoFace";
import { TfiDownload } from "react-icons/tfi";
import BasicProfileCard from "./basicProfileCard";
import Image from "next/image";
import Link from "next/link";


export default function Card({ photo }: { photo: BasicPhotoFace }) {
    return (
        <figure className="w-full h-fit relative group">
            <Link href={`/photos/${photo.id}`}>
                <Image
                    src={photo.urls.regular || '/img/intro.jpg'}
                    alt={photo.alt_description || `Photo by ${photo.user.name}`}
                    width={photo.width || 400}
                    height={photo.height || 600}
                    style={{ background: photo.color }}
                    blurDataURL={photo.blur_hash || "L75hGcof0JRkWAofs;NGNFR*t7xa"}
                    className='w-full h-full object-cover group-hover:brightness-50'
                />
            </Link >

            <section className="relative sm:absolute bottom-0 p-2 w-full flex justify-between items-center sm:opacity-0 group-hover:opacity-100 ">
                <BasicProfileCard
                    name={photo.user.name}
                    user_name={photo.user.username}
                    avatar_url={photo.user.profile_image.medium}
                />
                <Link
                    href={`${photo.links.download}?force=true`}
                    title="Download photo"
                    rel="nofollow noopener"
                    download={true}
                    target="_blank"
                    className="p-2 border-2 aspect-square rounded-md dark:bg-darker bg-lighter border-transparent dark:hover:border-xdark hover:border-xlight group shadow-lg shadow-neutel/20 hover:shadow-neutel/">
                    <TfiDownload className="group-hover:scale-125" />
                </Link>
            </section>
        </figure >
    )
}