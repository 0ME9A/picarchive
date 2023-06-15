import { GetRandomResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getRandom(count: number = 30): Promise<GetRandomResponse> {
    try {
        const res = await api.photos.getRandom({ count });
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
