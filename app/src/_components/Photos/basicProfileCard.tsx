import NextLink from "next/link";
import Image from "next/image";


interface basicProfileCardFace{
    name: string;
    user_name: string;
    avatar_url: string
    style?: string;
}
export default function BasicProfileCard({ name, user_name, avatar_url, style }: basicProfileCardFace) {
    return (
        <NextLink href={`/@${user_name}`} className="w-fit flex items-center gap-2">
            <Image src={avatar_url} alt={`${name} avatar`} width={150} height={150} className='w-10 aspect-square object-cover rounded-full' />
            <div className={`text-white ${style}`}>
                <h2 className="font-bold">
                    {name}
                </h2>
                <h3 className="text-xs font-extralight">
                    @{user_name}
                </h3>
            </div>
        </NextLink>
    )
}