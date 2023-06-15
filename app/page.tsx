import { metadataObj } from "./src/_meta/webText";
import { Metadata } from "next";
import Home from "./src/_components/Pages/home";

export const metadata: Metadata = {
  title: metadataObj.home.title,
  description: metadataObj.home.desc,
}

export default function Page() {
  return <Home />
}