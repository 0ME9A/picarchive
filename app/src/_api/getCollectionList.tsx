import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { GetCollectionListResponse } from "../_types/ApiFace";
import CollectionFace from "../_types/CollectionFace";
import api from "./api";

interface ResFace {
    results: CollectionFace[];
    total: number;
}

export default async function getCollectionList(page: number): Promise<GetCollectionListResponse> {
    try {
        const res = await api.collections.list({ page, perPage: 30 }) as ApiResponse<ResFace>;
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}