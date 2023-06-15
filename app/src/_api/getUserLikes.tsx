import { GetPhotoListResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getUserLikes(page: number, username: string): Promise<GetPhotoListResponse> {
    try {
        const res = await api.users.getLikes({ page, perPage: 30, username });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
