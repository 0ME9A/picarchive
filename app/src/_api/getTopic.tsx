import { GetTopicResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getTopic(page: number, topicIdOrSlug: string): Promise<GetTopicResponse> {
    try {
        const res = await api.topics.getPhotos({ page, perPage: 30, topicIdOrSlug });
        if (res.status === 200 && res.response?.results) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}