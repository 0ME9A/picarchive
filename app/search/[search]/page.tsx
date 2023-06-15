import SearchPhotoList from "@/app/src/_components/Pages/search";
import { keywords, metadataObj } from "@/app/src/_meta/webText";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    search: string
  }
}

export async function generateMetadata({ params: { search } }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  const decodePath = decodeURIComponent(search);
  const tags = decodePath.split(" ")

  return {
    title: `${decodePath} | Picarchive`,
    description: metadataObj.home.desc,
    keywords: tags ? keywords([...tags]) : [],
  }

}
export default function Page() {
  return <SearchPhotoList />
}