import { GetPhotoListResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getPhotoList(page: number): Promise<GetPhotoListResponse> {
    try {
        const res = await api.photos.list({ page, perPage: 30 });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
