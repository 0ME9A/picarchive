import { GetCollectionListResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getUserCollections(page: number, username: string): Promise<GetCollectionListResponse> {
    try {
        const res = await api.users.getCollections({ page, perPage: 30, username });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}