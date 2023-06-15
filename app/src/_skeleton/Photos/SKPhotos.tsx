import { random } from "../../_functions"
import Card from "./SKCard"

export default function PhotosSkeleton({ item = 12 }: { item?: number }) {
    const i = Array.from(Array(item).keys())

    return (
        <section className="xl:container w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 my-5 md:p-3 lg:px-5">
            {i.map(() => <Card key={random()} />)}
        </section>
    )
}