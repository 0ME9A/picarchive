import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { GetThePhoto } from "../_types/ApiFace";
import PhotoFace from "../_types/ThePhotoFace";
import api from "./api";

export default async function getPhoto(photoId: string): Promise<GetThePhoto> {
  // console.log("getPhoto called");

  try {
    const res = (await api.photos.get({ photoId })) as ApiResponse<PhotoFace>;
    if (res.status === 200 && res.response) {
      return { raw: res, error: false };
    } else {
      return { raw: res, error: true };
    }
  } catch (e) {
    return { raw: null, error: true };
  }
}
