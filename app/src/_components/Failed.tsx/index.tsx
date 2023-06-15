export default function Failed({ style }: { style?: string }) {
    return (
        <section className={`py-10 px-3 md:px-5 text-black dark:text-white w-full xl:container mx-auto ${style}`}>
            <h2 className="text-xl font-bold">No record found.</h2>
            <p className="max-w-[800px] opacity-80">Oops! We couldn&#39;t find any results for your search. However, our vast collection of stunning and authentic photos awaits your exploration. Browse through Picarchive and unleash your creativity with captivating visuals captured by talented photographers worldwide.</p>
            <div className="max-w-[300px] w-full aspect-video border-4 rounded-lg relative border-dashed mt-32 overflow-hidden animate-pulse">
                <div className="w-[100px] aspect-square border-4 absolute -bottom-[50px] rotate-45 rounded-lg"></div>
                <div className="w-[200px] aspect-square border-4 absolute -bottom-[100px] right-0 rounded-lg rotate-45"></div>
                <div className="w-6 aspect-square border-2 rounded-full animate-spin absolute right-4 bottom-4 border-white border-t-transparent"></div>
            </div>
        </section>
    )
}