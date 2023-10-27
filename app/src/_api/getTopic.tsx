import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { BasicPhotoFace } from "../_types/BasicPhotoFace";
import { GetTopicResponse } from "../_types/ApiFace";
import api from "./api";

interface ResFace {
  results: BasicPhotoFace[];
  total: number;
}

export default async function getTopic(
  page: number,
  topicIdOrSlug: string
): Promise<GetTopicResponse> {
  // console.log("getTopic called");

  try {
    const res = (await api.topics.getPhotos({
      page,
      perPage: 30,
      topicIdOrSlug,
    })) as ApiResponse<ResFace>;
    if (res.status === 200 && res.response?.results) {
      return { raw: res, error: false };
    } else {
      return { raw: res, error: true };
    }
  } catch (e) {
    return { raw: null, error: true };
  }
}
