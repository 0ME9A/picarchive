import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { BasicPhotoFace } from "../_types/BasicPhotoFace";
import { GetRandomResponse } from "../_types/ApiFace";
import api from "./api";

export default async function getRandom(
  count: number = 30
): Promise<GetRandomResponse> {
  // console.log("getRandom called");

  try {
    const res = (await api.photos.getRandom({ count })) as ApiResponse<
      BasicPhotoFace | BasicPhotoFace[]
    >;
    if (res.status === 200 && res.response) {
      return { raw: res, error: false };
    } else {
      return { raw: res, error: true };
    }
  } catch (e) {
    return { raw: null, error: true };
  }
}
