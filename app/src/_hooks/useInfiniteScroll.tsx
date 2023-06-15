import { useEffect, useState } from "react";

type useInfiniteScroll = {
  updateVal: (val: any) => void;
  updatePage: (updateVal: any) => void;
}

export default function useInfiniteScroll({ updatePage, updateVal }: useInfiniteScroll) {
  const [loading, setLoading] = useState(false);

  const handleInfiniteScroll = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    try {
      if (scrollTop + clientHeight >= scrollHeight) {
        if (!loading) {
          setLoading(true);
          updatePage(updateVal);
        }
      }
      // else{
      //   setLoading(false)
      // }
    }
     catch (error) {
      console.log("Some went wrong with scroll!!!");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [])

  return [loading];
}
