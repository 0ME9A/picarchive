import SKPhotos from "./Photos/SKPhotos"
import { basicStyle } from "./SKstyle"

export const SKbasicUserInfo = () => {
    return (
        <div className={`flex gap-2`}>
            <div className={`${basicStyle} w-10 rounded-full aspect-square`}></div>
            <div className="grid items-center gap-1">
                <div className={`w-52 h-4 rounded-md ${basicStyle}`}></div>
                <div className={`w-32 h-4 rounded-md ${basicStyle}`}></div>
            </div>
        </div>
    )
}

export const SKcontentPage = () => {
    return (
        <>
            <div className="w-full min-h-[400px] h-[50vh] bg-xlight dark:bg-xdark px-3">
                <div className={`xl:container mx-auto flex items-center justify-between h-full`}>
                    <div className={` space-y-3 w-full`}>
                        <div className={`h-16 max-w-[500px] w-[30%] rounded-lg ${basicStyle}`}></div>
                        <div className={`h-6 max-w-[700px] w-[80%] rounded-lg ${basicStyle}`}></div>
                        <div className={`h-6 max-w-[700px] w-[80%] rounded-lg ${basicStyle}`}></div>
                        <div className={`h-6 max-w-[700px] w-[70%] rounded-lg ${basicStyle}`}></div>
                    </div>
                    <div className={`w-32 h-10 rounded-lg ${basicStyle}`}>
                    </div>
                </div>
            </div>
            <SKPhotos />
        </>
    )
}

export const SKphotographer = () => {
    return (
        <div className="min-h-[400px] bg-xlight dark:bg-xdark px-3 py-10 w-full mt-12 relative">
            <div className="xl:container h-full w-full gap-5 mx-auto md:flex justify-center items-start">
                <div className={`max-w-[300px] min-w-[100px] w-[20%] md:w-[30%] aspect-square rounded-full ${basicStyle}`}></div>
                <div className="md:w-full max-w-3xl col-span-2 h-full pt-6 lg:pt-28 space-y-2">
                    <div className={`w-1/2 h-12 rounded-lg ${basicStyle}`}></div>
                    <div className={`min-w-[200px] w-fit h-6 rounded-lg ${basicStyle}`}></div>
                    <div className={`min-w-[200px] md:w-2/3 h-6 rounded-lg ${basicStyle}`}></div>
                    <div className={`min-w-[200px] md:w-2/3 h-6 rounded-lg ${basicStyle}`}></div>
                    <div className={`min-w-[150px] w-[40%] md:w-fit h-6 rounded-lg ${basicStyle}`}></div>
                    <div className={`min-w-[150px] w-fit h-6 rounded-lg ${basicStyle}`}></div>
                    <div className={`w-full h-10 rounded-lg bg-white dark:bg-black animate-pulse`}></div>
                    <div className="h-3"></div>
                    <div className={`min-w-[200px] w-fit h-6 rounded-lg ${basicStyle}`}></div>
                    <div className="flex flex-wrap gap-2">
                        <div className={`w-[120px] h-6 rounded-lg ${basicStyle}`}></div>
                        <div className={`w-[120px] h-6 rounded-lg ${basicStyle}`}></div>
                        <div className={`w-[120px] h-6 rounded-lg ${basicStyle}`}></div>
                        <div className={`w-[120px] h-6 rounded-lg ${basicStyle}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}