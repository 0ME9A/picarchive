import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { GetPhotographerResponse } from "../_types/ApiFace";
import ProfileFace from "../_types/ProfileFace";
import api from "./api";


export default async function getPhotographer(username: string): Promise<GetPhotographerResponse> {
    try {
        const res = await api.users.get({ username }) as ApiResponse<ProfileFace>;
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
