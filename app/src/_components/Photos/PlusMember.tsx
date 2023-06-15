import BasicLink from "../Links/BasicLink";


export default function PlusMember({ url = "" }: { url?: string }) {
    return (
        <section className="xl:container mx-auto sm:text-center p-3">
            <h2 className="text-xl font-bold">No Photos Available</h2>
            <p className="max-w-[800px] mx-auto">Oops! We couldn&apos;t find any results for your search. However, our vast collection of stunning and authentic photos awaits your exploration. Browse through Picarchive and unleash your creativity with captivating visuals captured by talented photographers worldwide.</p>

            {/* <p>Unfortunately, there are no photos available for Plus members of Unsplash. To access a wide range of premium contents, please visit
                <BasicLink props={{
                    href: `https://unsplash.com/${url}`,
                    title: "Unsplash primium content",
                    text: "Unsplash",
                    target: "_blank",
                    style: "!px-1"
                }}></BasicLink>.
            </p> */}
        </section>
    )
}