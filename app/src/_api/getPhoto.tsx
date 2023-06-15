import { GetThePhoto } from "../_types/ApiFace";
import api from "./api";


export default async function getPhoto(photoId: string): Promise<GetThePhoto> {
    try {
        const res = await api.photos.get({ photoId });
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
