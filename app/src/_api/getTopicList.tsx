import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { GetTopicListResponse } from "../_types/ApiFace";
import TopicFace from "../_types/TopicFace";
import api from "./api";

interface ResFace {
    results: TopicFace[];
    total: number;
}

export default async function getTopicList(page: number): Promise<GetTopicListResponse> {
    try {
        const res = await api.topics.list({ page, perPage: 30 }) as ApiResponse<ResFace>;
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
