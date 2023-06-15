import { GetCollectionInfoResponse } from "../_types/ApiFace";
import api from "./api";


export default async function getCollectionInfo(collectionId: string): Promise<GetCollectionInfoResponse> {
    try {
        const res = await api.collections.get({ collectionId });
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}