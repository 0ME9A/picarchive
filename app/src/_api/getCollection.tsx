import { GetPhotoListResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getCollection(collectionId: string, page: number): Promise<GetPhotoListResponse> {
    try {
        const res = await api.collections.getPhotos({ page, perPage: 30, collectionId });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}