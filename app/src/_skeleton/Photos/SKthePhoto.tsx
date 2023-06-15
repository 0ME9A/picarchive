import { SKbasicUserInfo } from "../SKcommon";
import { basicStyle } from "../SKstyle";
import PhotosSkeleton from "./SKPhotos";

const SKthePhoto = ({ related }: { related?: boolean }) => {
    return (
        <section className="my-16 xl:container mx-auto bg-gradient-to-tr space-y-5 from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 shadow-2xl shadow-gray-500/20 rounded-md pb-1">
            <div className="xl:container mx-auto p-3 flex items-start justify-between sticky top-14 z-10 bg-white dark:bg-gray-950">
                <SKbasicUserInfo />
                <div className={`w-10 aspect-square rounded-md ${basicStyle}`}></div>
            </div>
            <div className={`${basicStyle} w-full min-h-[500px] h-[60vh] md:w-[80%] md:aspect-video mx-auto`}></div>
            <div className="p-3 flex justify-between">
                <div className="space-y-1">
                    <div className={`${basicStyle} w-52 h-4 rounded-md`}></div>
                    <div className={`${basicStyle} w-32 h-4 rounded-md`}></div>
                    <div className={`${basicStyle} w-72 h-4 rounded-md`}></div>
                    <div className={`${basicStyle} w-56 h-4 rounded-md`}></div>
                    <div className={`${basicStyle} w-52 h-4 rounded-md`}></div>
                </div>
                <div className={`${basicStyle} w-28 h-8 rounded-md`}></div>

            </div>
            {related && <PhotosSkeleton />}
        </section>
    )
}

export default SKthePhoto;