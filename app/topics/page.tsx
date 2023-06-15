import { metadataObj } from "../src/_meta/webText";
import { Metadata } from "next";
import TopicList from "../src/_components/Pages/topicList";

export const metadata: Metadata = {
  title: metadataObj.topics.title,
  description: metadataObj.topics.desc
}

export default function Page() {
  return <TopicList />
}
