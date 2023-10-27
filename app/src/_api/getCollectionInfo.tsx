import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { GetCollectionInfoResponse } from "../_types/ApiFace";
import CollectionInfoFace from "../_types/CollectionInfoFace";
import api from "./api";


export default async function getCollectionInfo(collectionId: string): Promise<GetCollectionInfoResponse> {
    // console.log("getCollectionInfo called");

    try {
        const res = await api.collections.get({ collectionId }) as ApiResponse<CollectionInfoFace>;
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}