import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { BasicPhotoFace } from "../_types/BasicPhotoFace";
import { GetPhotoListResponse } from "../_types/ApiFace";
import api from "./api";

interface ResFace {
    results: BasicPhotoFace[];
    total: number;
}

export default async function getCollection(collectionId: string, page: number): Promise<GetPhotoListResponse> {
    try {
        const res = await api.collections.getPhotos({ page, perPage: 30, collectionId }) as ApiResponse<ResFace>;
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}