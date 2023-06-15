import { GetCollectionListResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getCollectionList(page: number): Promise<GetCollectionListResponse> {
    try {
        const res = await api.collections.list({ page, perPage: 30 });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}